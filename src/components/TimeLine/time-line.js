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
  if (
    !timeData ||
    timeData === [] ||
    !filteredCategories ||
    filteredCategories === []
  )
    return [];
  let keys = [1, 2, 3, 4];
  let map = [];
  let years = Object.keys(timeData);
  for (let year = 1979; year < 2020; year++) {
    let submap = {};
    submap.year = year;
    submap.categories = filteredCategories
      .filter(p => p.timeframe.includes(year))
      .map(p => p.title);
    keys.map(key => (submap[key] = 0));
    map.push(submap);
    years.push(year);
  }

  filteredCategories.forEach(category => {
    let fb = category.forschungsbereich;
    category.timeframe.forEach(year => {
      if (timeData[year].subject_area[category.title]) {
        map[`${year - 1979}`][`${fb}`] +=
          timeData[year].subject_area[category.title];
      }
    });
  });

  let result = {
    areaChartData: map,
    areaChartKeys: keys,
    years: years
  };
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
