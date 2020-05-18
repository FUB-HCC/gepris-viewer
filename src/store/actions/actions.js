import * as actionTypes from "./actionTypes";

/* value can be 0=WISSEN, 1=ZEIT, 2=RAUM. switches to the page accordingly (only if not touch version)*/
export const changeGraph = value => {
  return {
    type: actionTypes.CHANGE_GRAPH,
    value: value
  };
};

/* triggered when checkbox in filter panel was clicked. filterId is e.g. "forschungsgebiet" value is e.g. 1 for "Naturwissenschaften" (ordering can be found in utility) */
export const checkboxFilterChange = (filterId, value) => {
  return {
    type: actionTypes.CHECKBOX_FILTER_CHANGE,
    id: filterId,
    value: value
  };
};

/* triggered when time range slider was changed, value is start and end year, e.g. [2008,2019] */
export const timerangeFilterChange = value => {
  return {
    type: actionTypes.TIMERANGE_FILTER_CHANGE,
    value: value
  };
};

/* hovering events for different elements (help to highlight on hover) In touch version hover event is triggered on one tap, value is id of the hovered element. changes the isHovered state to that id */
export const categoryHovered = categoryId => {
  return {
    type: actionTypes.PROJECT_HOVERED,
    value: categoryId
  };
};

export const labelHovered = labelId => {
  return {
    type: actionTypes.LABEL_HOVERED,
    value: labelId
  };
};

export const yearHovered = data => {
  return {
    type: actionTypes.YEAR_HOVERED,
    value: data
  };
};

export const unHovered = () => {
  return {
    type: actionTypes.UNHOVERED
  };
};

/* click events for different elements (the sidebar component will be changed according to the clicked element) In touch version click event is triggered on double tap, value is id of the clicked element. changes the "isClicked" state to that id */
export const categoryClicked = categoryId => {
  return {
    type: actionTypes.PROJECT_CLICKED,
    value: categoryId
  };
};

export const labelClicked = labelId => {
  return {
    type: actionTypes.LABEL_CLICKED,
    value: labelId
  };
};

export const yearClicked = data => {
  return {
    type: actionTypes.YEAR_CLICKED,
    value: data
  };
};

/*data can be "continent1|continent2" when arc or
"continent|c" when continent or
"continent|f" when "Forschungsregion"-circle of continent is clicked */
export const instClicked = data => {
  return {
    type: actionTypes.INST_CLICKED,
    value: data
  };
};

export const unClicked = () => {
  return {
    type: actionTypes.UNCLICKED
  };
};

/* when data=true the uncertainty landscape will be shown and the links are only visible on hover. otherwise only the links are shown.*/
export const showUncertainty = data => {
  return {
    type: actionTypes.SHOW_UNCERTAINTY,
    value: data
  };
};

/* draws a IKON-green circle around the uncertainty landscape to highlight it, when data=true */
export const highlightUncertainty = data => {
  return {
    type: actionTypes.HIGHLIGHT_UNCERTAINTY,
    value: data
  };
};

/* highlights all labels that fit to one point in the legend. e.g. legendKey="ktas" highlights all kta-labels*/
export const legendHovered = legendKey => ({
  type: actionTypes.LEGEND_HOVERED,
  value: legendKey
});

/* fills the states with just fetched and unprocessed data from api/graph first */
export const updateData = data => {
  return {
    type: actionTypes.UPDATE_DATA,
    value: data
  };
};

export const updateTimeData = data => {
  return {
    type: actionTypes.UPDATE_TIME_DATA,
    value: data
  };
};

/* when all initial data has been loaded into the state, processing starts*/
export const processDataIfReady = () => {
  return {
    type: actionTypes.PROCESS_DATA_IF_READY
  };
};

/* is triggered when the introduction intro.js tour is started (by clicking the ikon-logo)*/
export const tourStarted = () => {
  return {
    type: actionTypes.TOUR_STARTED
  };
};

/* is triggered when "Tutorial" button is clicked */
export const tutorialStarted = () => {
  return {
    type: actionTypes.TUTORIAL_STARTED
  };
};

/* triggered when "Teilen" button is clicked (in browser version only), opens share Dialog that lets you send the current url to the backend after specifying a name */
export const shareDialogOpened = () => {
  return {
    type: actionTypes.SHARE_DIALOG_OPENED
  };
};

/* triggered when "Zurücksetzen" button is clicked loads window.location.pathname */
export const pageReset = () => {
  return {
    type: actionTypes.PAGE_RESET
  };
};
