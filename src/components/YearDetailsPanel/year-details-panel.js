import connect from "react-redux/es/connect/connect";
import YearDetailsPanelView from "./year-details-panel-view";
import { unClicked, categoryClicked } from "../../store/actions/actions";
import { topicToField, fieldsIntToString } from "../../util/utility";
const mapStateToProps = state => {
  const { isClicked, timeData, isDataProcessed } = state.main;
  if (isDataProcessed && timeData) {
    const [year, title] = isClicked.year.split("|").map(s => parseInt(s));
    return {
      year: year,
      title: title,
      count: timeData[year].research_area[fieldsIntToString(title)],
      categories: Object.entries(timeData[year].subject_area)
        .filter(entry => topicToField(entry[0]) === title && entry[1] > 0)
        .sort((a, b) => (a[1] < b[1] ? 1 : -1))
    };
  }
};
const mapDispatchToProps = dispatch => ({
  returnToFilterView: () => {
    dispatch(unClicked());
  },
  showCategoryDetails: category => {
    dispatch(categoryClicked(category));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YearDetailsPanelView);
