import connect from "react-redux/es/connect/connect";
import CategoryDetailsPanelView from "./category-details-panel-view";
import { unClicked } from "../../store/actions/actions";

const mapStateToProps = state => {
  const { isDataProcessed, isClicked, categories } = state.main;
  if (isDataProcessed) {
    return {
      categoryData: categories.find(p => p.title === isClicked.category)
    };
  } else {
    return {};
  }
};

const mapDispatchToProps = dispatch => ({
  returnToFilterView: () => {
    dispatch(unClicked());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetailsPanelView);
