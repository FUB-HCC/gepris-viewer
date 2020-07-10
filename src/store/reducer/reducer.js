import * as actionTypes from "../actions/actionTypes";
import React from "react";
import { hauptthemaToField } from "../../util/utility";
import { processCategoriesData, processGeoData } from "./data-transforms";
import FilterPanel from "../../components/FilterPanel/filter-panel";
import CategoryDetailsPanel from "../../components/CategoryDetailsPanel/category-details-panel";
import YearDetailsPanel from "../../components/YearDetailsPanel/year-details-panel";
import InstDetailsPanel from "../../components/InstDetailsPanel/inst-details-panel";

import topicData from "../../assets/dump.json";
import timeData from "../../assets/year_dist.json";
import geoData from "../../assets/geo_project_data_continents.json";

export const initialState = {
  filters: {
    forschungsgebiet: {
      name: "Forschungsgebiet",
      filterKey: "forschungsbereich",
      type: "fb",
      uniqueVals: [1, 2, 3, 4],
      value: [1, 2, 3, 4]
    },
    hauptthema: {
      name: "Hauptthema",
      filterKey: "hauptthema",
      type: "ht",
      uniqueVals: [],
      value: null
    },
    time: {
      name: "Zeitraum",
      filterKey: "timeframe",
      type: "timeframe",
      uniqueVals: [],
      value: null
    }
  },
  graph: "0",
  categories: processCategoriesData(topicData.project_data, timeData),
  timeData: timeData,
  geoData: processGeoData(geoData),
  isHovered: {
    category: null,
    year: null
  },
  isClicked: {
    category: null,
    year: null
  },
  categoriesMaxSizing: [
    Math.max(...topicData.project_data.map(p => p.mappoint[0])),
    Math.max(...topicData.project_data.map(p => p.mappoint[1]))
  ],
  contoursSize: topicData.topography_height,
  legendHovered: "none",
  uncertaintyOn: false,
  uncertaintyHighlighted: false,
  clusterData: topicData.cluster_data,
  clusterTopography: topicData.cluster_topography,
  isDataProcessed: false,
  sideBarComponent: <FilterPanel />
};

// Keep the reducer switch lean by outsourcing the actual code below
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_GRAPH:
      return {
        ...state,
        graph: action.value
      };

    case actionTypes.CHECKBOX_FILTER_CHANGE:
      return changeCheckboxFilter(state, action);

    case actionTypes.TIMERANGE_FILTER_CHANGE:
      return changeTimeRangeFilter(state, action);

    case actionTypes.PROCESS_DATA_IF_READY:
      return processAllData(state);

    case actionTypes.PROJECT_HOVERED:
      return categoryHovered(state, action);

    case actionTypes.LABEL_HOVERED:
      return labelHovered(state, action);

    case actionTypes.YEAR_HOVERED:
      return yearHovered(state, action);

    case actionTypes.UNHOVERED:
      return unHovered(state);

    case actionTypes.PROJECT_CLICKED:
      return categoryClicked(state, action);

    case actionTypes.LABEL_CLICKED:
      return labelClicked(state, action);

    case actionTypes.YEAR_CLICKED:
      return yearClicked(state, action);

    case actionTypes.INST_CLICKED:
      return instClicked(state, action);

    case actionTypes.UNCLICKED:
      return unClicked(state);

    case actionTypes.SHOW_UNCERTAINTY:
      return showUncertainty(state, action);

    case actionTypes.HIGHLIGHT_UNCERTAINTY:
      return highlightUncertainty(state, action);

    case actionTypes.LEGEND_HOVERED:
      return legendHovered(state, action);

    case actionTypes.PAGE_RESET:
      return resetPage(state);

    default:
      return state;
  }
};

const changeCheckboxFilter = (state, action) => {
  const newFilter = state.filters;
  if (state.filters[action.id].value.some(e => e === action.value)) {
    newFilter[action.id].value = state.filters[action.id].value.filter(
      key => key !== action.value
    );
  } else {
    newFilter[action.id].value.push(action.value);
  }
  if (action.id === "forschungsgebiet") {
    newFilter.hauptthema.value = toggleAllFiltersOfField(
      newFilter,
      action.value
    );
  } else if (action.id === "labelToggle") {
    newFilter.labels.value = newFilter.labelToggle.value.includes(6)
      ? []
      : state.labels.map(l => l.id);
    newFilter.labelToggle.value = newFilter.labelToggle.value.includes(6)
      ? []
      : [6];
  }
  return {
    ...state,
    filters: newFilter
  };
};

const changeTimeRangeFilter = (state, action) => {
  return {
    ...state,
    filters: {
      ...state.filters,
      time: {
        ...state.filters.time,
        value: action.value
      }
    }
  };
};

const toggleAllFiltersOfField = (filters, fieldValue) => {
  const subjectsOfField = filters.hauptthema.uniqueVals.filter(
    val => hauptthemaToField(val) === fieldValue
  );
  let newValue = filters.hauptthema.value.filter(
    val => !subjectsOfField.includes(val)
  );
  if (filters.forschungsgebiet.value.includes(fieldValue)) {
    newValue = newValue.concat(subjectsOfField);
  }
  return newValue;
};

/* The received data is transformed in the beginning (e.g. sorted, some attributes slightly changed), the filters get their initial filling too */
const processAllData = state => {
  const newState = {
    clusterTopography: state.clusterTopography,
    categories: state.categories
  };
  const uniqueFields = [];
  const uniqueHauptthemas = [];
  const maxDateRange = [1979, 2019];

  Object.values(newState.categories).forEach(category => {
    const value = category["hauptthema"];
    if (!uniqueHauptthemas.some(e => e === value))
      uniqueHauptthemas.push(value);
  });

  const newFilters = {
    ...state.filters,
    forschungsgebiet: {
      ...state.filters.forschungsgebiet,
      uniqueVals: uniqueFields,
      value: state.filters.forschungsgebiet.value
        ? state.filters.forschungsgebiet.value
        : uniqueFields
    },
    hauptthema: {
      ...state.filters.hauptthema,
      uniqueVals: uniqueHauptthemas,
      value: state.filters.hauptthema.value
        ? state.filters.hauptthema.value
        : uniqueHauptthemas
    },
    time: {
      ...state.filters.time,
      uniqueVals: maxDateRange,
      value: state.filters.time.value ? state.filters.time.value : maxDateRange
    }
  };

  return {
    ...state,
    ...newState,
    filters: newFilters,
    isDataProcessed: true
  };
};

const categoryHovered = (state, action) => ({
  ...state,
  isHovered: {
    category: action.value,
    infra: null,
    label: null,
    kta: null,
    year: null
  }
});

const labelHovered = (state, action) => ({
  ...state,
  isHovered: {
    category: null,
    infra: null,
    label: action.value,
    kta: null,
    year: null
  }
});

const yearHovered = (state, action) => ({
  ...state,
  isHovered: {
    category: null,
    infra: null,
    label: null,
    kta: null,
    year: action.value
  }
});

const unHovered = state => ({
  ...state,
  isHovered: {
    category: null,
    infra: null,
    label: null,
    kta: null,
    year: null
  }
});

const categoryClicked = (state, action) => ({
  ...state,
  isClicked: {
    category: action.value,
    infra: null,
    label: null,
    kta: null,
    year: null,
    inst: null,
    samples: null
  },
  sideBarComponent: <CategoryDetailsPanel />
});

const labelClicked = (state, action) => ({
  ...state,
  isClicked: {
    category: null,
    infra: null,
    label: action.value,
    kta: null,
    year: null,
    inst: null,
    samples: null
  },
  sideBarComponent: <FilterPanel />
});

const yearClicked = (state, action) => ({
  ...state,
  isClicked: {
    category: null,
    infra: null,
    label: null,
    kta: null,
    year: action.value,
    inst: null,
    samples: null
  },
  sideBarComponent: <YearDetailsPanel />
});

const instClicked = (state, action) => ({
  ...state,
  isClicked: {
    category: null,
    infra: null,
    label: null,
    kta: null,
    year: null,
    inst: action.value,
    samples: null
  },
  sideBarComponent: <InstDetailsPanel />
});

const unClicked = state => ({
  ...state,
  isClicked: {
    category: null,
    infra: null,
    label: null,
    kta: null,
    year: null,
    samples: null
  },
  sideBarComponent: <FilterPanel />
});

const legendHovered = (state, action) => ({
  ...state,
  legendHovered: action.value
});

const showUncertainty = (state, action) => ({
  ...state,
  uncertaintyOn: action.value
});

const highlightUncertainty = (state, action) => ({
  ...state,
  uncertaintyHighlighted: action.value
});

const resetPage = state => {
  if (state.user) {
    window.open(window.location.pathname + "?uid=" + state.user, "_self");
  } else {
    window.open(window.location.pathname, "_self");
  }
};

export default reducer;
