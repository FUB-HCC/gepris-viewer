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
          "Research projects with cooperating institutions on this continent: ",
        projects: geoData.projects.filter(p =>
          p.institutions.flat().includes(region)
        ),
        continents: [region]
      };
    } else if (isClicked.inst.includes("|f")) {
      let continent = isClicked.inst.split("|")[0];
      return {
        title: "Institutions in " + continent,
        description:
          geoData.institutions.filter(inst => inst.continent === continent)
            .length + " Institutionen on this continent:",
        institutions: geoData.institutions
          .filter(inst => inst.continent === continent)
          .map(inst => inst.name)
      };
    } else {
      const [continent1, continent2] = isClicked.inst.split("|");
      return {
        title: "Cooperation with " + continent1 + " and " + continent2,
        description:
          "Research projects with cooperations between these continents:",
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
