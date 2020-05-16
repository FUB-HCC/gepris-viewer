import React from "react";
import { connect } from "react-redux";
import { isTouchMode, applyFilters } from "../../util/utility";
import TimeLineView from "./time-line-view";
import { yearClicked } from "../../store/actions/actions";

class TimeLine extends React.Component {
  componentDidMount() {
    this.Graph.updateTimeGraph(
      {
        dataSplitFbYear: this.props.dataSplitFbYear,
        subcategories: this.props.subcategories
      },
      this.props.width,
      this.props.height,
      20
    );
  }

  componentDidUpdate() {
    this.Graph.updateTimeGraph(
      {
        dataSplitFbYear: this.props.dataSplitFbYear,
        subcategories: this.props.subcategories
      },
      this.props.height,
      this.props.width,
      20
    );
  }

  render() {
    return (
      <TimeLineView
        ref={node => {
          this.Graph = node;
        }}
        showYearDetails={this.props.showYearDetails}
        onProjectClick={this.props.onProjectClick}
        width={this.props.width}
        height={this.props.height}
        margin={20}
        isTouchMode={this.props.isTouchMode}
      />
    );
  }
}

const graphColors = {
  system: {
    active: "#f0faf0",
    inactive: "#989aa1",
    background: "#434058"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showYearDetails: year => {
      dispatch(yearClicked(year));
    }
  };
};

const mapStateToProps = state => {
  let categoriesForView = applyFilters(
    state.main.categories,
    state.main.filters
  );
  const processedData = processData(categoriesForView, state.main.timeData);
  return {
    dataSplitFbYear: processedData,
    categories: categoriesForView,
    colors: graphColors,
    isTouchMode: isTouchMode(state)
  };
};

const processData = (filteredCategories, timeData) => {
  /*
   Private
   Transforms the timeData in to a format which can be easily used for the visualization.
   published and unpublished research categories are binned into years
 */
  if (!timeData || timeData === []) return [];
  let filtered = Object.entries(timeData).map(entry => ({
    ...entry[1].research_area,
    year: entry[0]
  }));

  let keys = Object.entries(timeData).map(entry => entry[1].research_area)[0];
  if (!keys) return [];
  let result = {
    areaChartData: filtered,
    areaChartKeys: Object.keys(keys),
    years: Object.keys(timeData)
  };
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
