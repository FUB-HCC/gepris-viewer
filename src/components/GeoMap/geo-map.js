import { connect } from "react-redux";
import GeoMapView from "./geo-map-view";
import { instClicked, unClicked } from "../../store/actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    showInstDetails: inst => {
      dispatch(instClicked(inst));
    },
    unClicked: () => {
      dispatch(unClicked());
    }
  };
};

const mapStateToProps = state => {
  const { geoData, isDataProcessed, isClicked } = state.main;
  let continentConnections = {};
  let continentsForView = [];
  let institutions = [];

  if (isDataProcessed) {
    continentConnections = geoData.connections;
    continentsForView = geoData.continents;
    institutions = geoData.institutions;
  }

  return {
    institutions: institutions,
    continents: continentsForView,
    continentConnections: continentConnections,
    isInstClicked: isClicked.inst
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeoMapView);
