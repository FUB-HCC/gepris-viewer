import connect from "react-redux/es/connect/connect";
import InstDetailsPanelView from "./inst-details-panel-view";
import { unClicked, categoryClicked } from "../../store/actions/actions";

const mapStateToProps = state => {
  const { isClicked, geoData, isDataProcessed } = state.main;
  if (isDataProcessed) {
    if (isClicked.inst.includes("|c")) {
      let region = isClicked.inst.split("|")[0];
      return {
        title: region,
        description:
          "Forschungsprojekte mit kooperierenden Institutionen auf diesem Kontinent:",
        projects: geoData.projects.filter(p =>
          p.institutions.flat().includes(region)
        ),
        continents: [region]
      };
    } else if (isClicked.inst.includes("|f")) {
      let continent = isClicked.inst.split("|")[0];
      return {
        title: "Institutionen in " + continent,
        description:
          geoData.institutions.filter(inst => inst.continent === continent)
            .length + " Institutionen auf diesem Kontinent:",
        institutions: geoData.institutions
          .filter(inst => inst.continent === continent)
          .map(inst => inst.name)
      };
    } else {
      const [continent1, continent2] = isClicked.inst.split("|");
      return {
        title: "Kooperation mit " + continent1 + " und " + continent2,
        description:
          "Forschungsprojekte mit Kooperationen auf diesen Kontinenten:",
        projects: geoData.projects.filter(
          project =>
            project.institutions.flat().includes(continent1) &&
            project.institutions.flat().includes(continent2)
        ),
        continents: [continent1, continent2]
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
