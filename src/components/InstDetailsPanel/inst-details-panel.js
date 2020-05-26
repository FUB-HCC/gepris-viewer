import connect from "react-redux/es/connect/connect";
import InstDetailsPanelView from "./inst-details-panel-view";
import { unClicked, categoryClicked } from "../../store/actions/actions";

const mapStateToProps = state => {
  const { isClicked, geoData, isDataProcessed } = state.main;
  if (isDataProcessed) {
    if (isClicked.inst.includes("|f")) {
      let region = isClicked.inst.split("|")[0];
      return {
        title: "Institute in " + region,
        description: "Kooperierende Institutionen auf diesem Kontinent:",
        institutions: geoData.institutions
          .filter(inst => inst.continent === region)
          .map(inst => inst.name)
      };
    } else if (isClicked.inst.includes("|c")) {
      let continent = isClicked.inst.split("|")[0];
      return {
        title: continent,
        description: "Institutionen auf diesem Kontinent:",
        institutions: geoData.institutions
          .filter(inst => inst.continent === continent)
          .map(inst => inst.name)
      };
    } else {
      const [continent1, continent2] = isClicked.inst.split("|");
      return {
        title: "Kooperation mit " + continent1 + " und " + continent2,
        description: "Institutionen mit Kooperationen auf diesen Kontinenten:",
        institutions: [
          ...new Set(
            geoData.projects
              .filter(
                project =>
                  project.continents.includes(continent1) &&
                  project.continents.includes(continent2)
              )
              .map(p => p.names)
              .flat()
          )
        ]
      };
    }
  }
  return {};
};

const mapDispatchToProps = dispatch => ({
  returnToFilterView: () => {
    dispatch(unClicked());
  },
  showProjectDetails: category => {
    dispatch(categoryClicked(category));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstDetailsPanelView);
