import { connect } from "react-redux";
import ClusterMapView from "./cluster-map-view";
import {
  unClicked,
  labelClicked,
  unHovered,
  labelHovered
} from "../../store/actions/actions";
import { getFieldColor, isTouchMode, applyFilters } from "../../util/utility";

/* project list is divided into clusters */
const computeClusters = projects => {
  if (!projects || projects.length === 0) return [];

  const clusterIds = [...new Set(projects.map(p => p.cluster))];
  return clusterIds.map(id => ({
    id: id,
    projects: projects
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
    projects: [],
    labels: []
  };
  highlighted = addExtractedHighlighted(state.isHovered, highlighted, state);
  highlighted = addExtractedHighlighted(state.isClicked, highlighted, state);
  return highlighted;
};

const addExtractedHighlighted = (selectedState, highlighted, state) => {
  if (selectedState.project) {
    highlighted = addExtractedHighlightedFromProject(
      selectedState.project,
      highlighted,
      state
    );
  }
  return highlighted;
};

const addExtractedHighlightedFromProject = (
  projectTitle,
  highlighted,
  state
) => {
  const project = getProjectByTitle(projectTitle, state);
  return {
    ...highlighted,
    projects: highlighted.projects.concat([project.title])
  };
};

const getProjectByTitle = (title, state) =>
  state.projects.find(project => project.title === title);

const mapStateToProps = state => {
  const {
    clusterTopography,
    projects,
    filters,
    isDataProcessed,
    isClicked,
    isHovered,
    projectsMaxSizing,
    contoursSize
  } = state.main;

  let clusterDataForView = [];
  let topography = [];
  let highlightedProjects = [];
  let projectsForView = [];
  if (isDataProcessed) {
    // filters are applied to all lists and data is prepared for the vis
    projectsForView = applyFilters(projects, filters).map(p => p.title);
    clusterDataForView = computeClusters(projects);
    topography = clusterTopography;
    const highlighted = extractHighlightedFromState(state.main);
    highlightedProjects = highlighted.projects;
  }

  return {
    clusterData: clusterDataForView,
    topography: topography,
    isAnyClicked: !Object.values(isClicked).every(clickState => !clickState),
    highlightedProjects: highlightedProjects,
    uncertaintyOn: state.main.uncertaintyOn,
    uncertaintyHighlighted: state.main.uncertaintyHighlighted,
    isTouch: isTouchMode(state),
    isProjectHovered: isHovered.project,
    projectsMaxSizing: projectsMaxSizing,
    filteredProjects: projectsForView,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClusterMapView);
