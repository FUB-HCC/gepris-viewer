import connect from "react-redux/es/connect/connect";
import YearDetailsPanelView from "./year-details-panel-view";
import { unClicked, categoryClicked } from "../../store/actions/actions";
const mapStateToProps = state => {
  const { isClicked, categories, isDataProcessed } = state.main;
  if (isDataProcessed && categories) {
    const [year, title] = isClicked.year.split("|");
    return {
      year: year,
      title: isNaN(title) ? title : parseInt(title),
      categories: categories.filter(
        p =>
          p.forschungsbereich === parseInt(title) &&
          p.timeframe[0] <= year &&
          year <= p.timeframe[1]
      )
    };
  }
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
)(YearDetailsPanelView);
