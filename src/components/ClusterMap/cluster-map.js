import { connect } from "react-redux";
import ClusterMapView from "./cluster-map-view";
import {
  unClicked,
  labelClicked,
  unHovered,
  labelHovered
} from "../../store/actions/actions";
import { getFieldColor, isTouchMode, applyFilters } from "../../util/utility";

/* category list is divided into clusters */
const computeClusters = categories => {
  if (!categories || categories.length === 0) return [];

  const clusterIds = [...new Set(categories.map(p => p.cluster))];
  return clusterIds.map(id => ({
    id: id,
    categories: categories
      .filter(p => p.cluster === id)
      .map(p => ({
        ...p,
        color: getFieldColor(p.forschungsbereich)
      }))
  }));
};
/* helper functions to determine whcih elements in the visualization should b highlighted in the IKON green */
const extractHighlightedFromState = state => {
  let highlighted = {
    categories: [],
    labels: []
  };
  highlighted = addExtractedHighlighted(state.isHovered, highlighted, state);
  highlighted = addExtractedHighlighted(state.isClicked, highlighted, state);
  return highlighted;
};

const addExtractedHighlighted = (selectedState, highlighted, state) => {
  if (selectedState.category) {
    highlighted = addExtractedHighlightedFromCategory(
      selectedState.category,
      highlighted,
      state
    );
  }
  return highlighted;
};

const addExtractedHighlightedFromCategory = (
  categoryTitle,
  highlighted,
  state
) => {
  const category = getCategoryByTitle(categoryTitle, state);
  return {
    ...highlighted,
    categories: highlighted.categories.concat([category.title])
  };
};

const getCategoryByTitle = (title, state) =>
  state.categories.find(category => category.title === title);

const mapStateToProps = state => {
  const {
    clusterTopography,
    categories,
    filters,
    isDataProcessed,
    isClicked,
    isHovered,
    categoriesMaxSizing,
    contoursSize
  } = state.main;

  let clusterDataForView = [];
  let topography = [];
  let highlightedCategories = [];
  let categoriesForView = [];
  if (isDataProcessed) {
    // filters are applied to all lists and data is prepared for the vis
    categoriesForView = applyFilters(categories, filters);
    clusterDataForView = computeClusters(categories);
    topography = clusterTopography;
    const highlighted = extractHighlightedFromState(state.main);
    highlightedCategories = highlighted.categories;
  }

  return {
    clusterData: clusterDataForView,
    topography: topography,
    isAnyClicked: !Object.values(isClicked).every(clickState => !clickState),
    highlightedCategories: highlightedCategories,
    uncertaintyOn: state.main.uncertaintyOn,
    uncertaintyHighlighted: state.main.uncertaintyHighlighted,
    isTouch: isTouchMode(state),
    isCategoryHovered: isHovered.category,
    categoriesMaxSizing: categoriesMaxSizing,
    filteredCategories: categoriesForView,
    contoursSize: contoursSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUnClicked: () => {
      dispatch(unClicked());
    },
    onLabelClicked: label => {
      dispatch(labelClicked(label));
    },
    onUnHovered: () => {
      dispatch(unHovered());
    },
    onLabelHovered: label => {
      dispatch(labelHovered(label));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClusterMapView);
