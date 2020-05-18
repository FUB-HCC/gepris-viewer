import CategoryDetailsPanel from "../components/CategoryDetailsPanel/category-details-panel";
import YearDetailsPanel from "../components/YearDetailsPanel/year-details-panel";
import FilterPanel from "../components/FilterPanel/filter-panel";
import { history } from "../index";
import { initialState } from "../store/reducer/reducer";
import React from "react";
import { topicStringToInt, topicIntToString } from "./utility";

const getTupleFromIsClicked = isClicked => {
  if (isClicked.category) {
    return [1, topicStringToInt(isClicked.category)];
  }
  if (isClicked.year) {
    return [2, isClicked.year];
  }
  return [0, null];
};

const getIsClickedFromTuple = tuple => {
  const [key, value] = tuple;
  if (key === 1) {
    return {
      category: topicIntToString(value),
      year: null
    };
  }
  if (key === 2) {
    return {
      category: null,
      year: value
    };
  }
  return {
    category: null,
    year: null
  };
};

const getSideBarComponentFromTuple = tuple => {
  const [key] = tuple;
  if (key === 1) {
    return <CategoryDetailsPanel />;
  }
  if (key === 2) {
    return <YearDetailsPanel />;
  }
  return <FilterPanel />;
};

/*turns state of filters, visualization and sidebar into minified url*/
export const pushStateToUrl = newState => {
  if (!newState.isDataProcessed || !newState.isDataLoaded) {
    return;
  }
  let newUrlData = {
    g: newState.graph,
    f: newState.filters.forschungsgebiet.value,
    t: newState.filters.hauptthema.value,
    ti: newState.filters.time.value,
    cl: getTupleFromIsClicked(newState.isClicked),
    un: newState.uncertaintyOn ? 1 : 0
  };

  let minifiedUrlData = {
    ...newUrlData,
    t: newUrlData.t.map(f => topicStringToInt(f)),
    f: newUrlData.f
  };

  var newQueryString = "?";
  if (newState.user) {
    newQueryString = newQueryString.concat("uid=" + newState.user + "&");
  }
  newQueryString = newQueryString.concat(
    "state=" + btoa(JSON.stringify(minifiedUrlData))
  );
  if (newQueryString !== window.location.search) {
    history.push(newQueryString);
  }
};

/*turns minified url back into readable state*/
export const parseStateFromUrl = urlParams => {
  const stateString = urlParams.state;
  const userId = urlParams.uid;
  if (stateString == null) {
    console.log("No URL params");
    console.log("User ID found = " + urlParams.uid);
    return {
      main: {
        ...initialState,
        user: userId
      }
    };
  }
  const urlState = JSON.parse(atob(stateString));
  const deminifiedUrlState = {
    ...urlState,
    t: urlState.t.map(f => topicIntToString(f)),
    f: urlState.f
  };
  return {
    main: {
      ...initialState,
      graph: deminifiedUrlState.g,
      filters: {
        ...initialState.filters,
        forschungsgebiet: {
          ...initialState.filters.forschungsgebiet,
          value: deminifiedUrlState.f
        },
        hauptthema: {
          ...initialState.filters.hauptthema,
          value: deminifiedUrlState.t
        },
        time: {
          ...initialState.filters.time,
          value: deminifiedUrlState.ti
        }
      },
      uncertaintyOn: deminifiedUrlState.un === 1 ? true : false,
      isClicked: getIsClickedFromTuple(deminifiedUrlState.cl),
      sideBarComponent: getSideBarComponentFromTuple(deminifiedUrlState.cl),
      user: userId
    }
  };
};
