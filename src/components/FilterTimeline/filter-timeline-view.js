import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import style from "./filter-timeline.module.css";
import { RangeSlider } from "@blueprintjs/core";

class FilterTimelineView extends React.Component {
  render() {
    const {
      maxRange,
      currentSelectedRange,
      changeTimeRangeFilter
    } = this.props;
    return (
      <div className={style.filterTimelineWrapper}>
        <div className={style.filterTimelineTitle}>
          <span className={style.titleText}>Timeframe</span>
        </div>
        <div className={style.filterTimelineSlider}>
          <RangeSlider
            className={style.RangeSliderStyle}
            min={maxRange[0]}
            max={maxRange[1]}
            labelStepSize={4}
            value={currentSelectedRange}
            onChange={changeTimeRangeFilter}
            onContextMenu={event => event.preventDefault()}
          />
        </div>
      </div>
    );
  }
}

export default FilterTimelineView;
