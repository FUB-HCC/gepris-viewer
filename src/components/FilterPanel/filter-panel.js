import React from "react";
import FilterTimeline from "../FilterTimeline/filter-timeline";
import FilterSelection from "../FilterSelection/filter-selection";
const FilterPanel = props => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      height: window.location.pathname.includes("touch") ? "82%" : "100%"
    }}
  >
    <FilterTimeline />
    <FilterSelection />
  </div>
);
//
export default FilterPanel;
