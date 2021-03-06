import React, { Component } from "react";
import "d3-transition";
// Import the D3 libraries we'll be using for the stacked area chart.
import {
  scaleLinear as d3ScaleLinear,
  scaleTime as d3ScaleTime
} from "d3-scale";
import {
  area as d3area,
  stack as d3stack,
  stackOrderNone as d3StackOrderNone,
  stackOffsetNone as d3StackOffsetNone
} from "d3-shape";
// Import the D3 libraries we'll use for the axes.
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from "d3-axis";
import { select as d3Select } from "d3-selection";
import styles from "./time-line-view.module.css";
import { getFieldColor, translateLanguage } from "../../util/utility";
import SVGWithMargin from "./SVGWithMargin";
import HoverPopover from "../HoverPopover/HoverPopover";

export default class TimeLineView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSplitYears: {
        areaChartData: [
          {
            year: 2019,
            1: 0,
            2: 0,
            3: 0,
            4: 0
          }
        ],
        areaChartKeys: [1, 2, 3, 4],
        years: [2019]
      },
      height: props.height,
      width: props.width - 15,
      margin: props.margin,
      firstUpdate: true,
      project: {},
      title: "",
      year: "",
      counter: 0,
      index: 0,
      timeframe: [1979, 2019]
    };
    this.handleAreaClick = this.handleAreaClick.bind(this);
    this.renderHoverField = this.renderHoverField.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleAreaMouseEnter = this.handleAreaMouseEnter.bind(this);
  }

  updateTimeGraph(data, height, width, margin, language) {
    if (!this.state.firstUpdate) {
      // workaround for first time scaling
      this.setState({
        height: height,
        width: width - 15,
        margin: margin
      });
    }

    this.setState({
      dataSplitYears: data.dataSplitFbYear,
      timeframe: data.timeframe,
      firstUpdate: false
    });
  }

  handleAreaClick(year, key) {
    this.props.showYearDetails(year + "|" + key);
  }

  renderHoverField() {
    return (
      this.state.hoveredArea &&
      this.state.mouseLocation && (
        <HoverPopover
          width={"15em"}
          height="20px"
          locationX={this.state.mouseLocation[0]}
          locationY={this.state.mouseLocation[1]}
        >
          <p
            className={styles.popFixer}
            style={{
              position: "absolute",
              backgroundColor: "#1c1d1f",
              margin: "0",
              fontSize: "10px",
              color: "#afca0b",
              fontWeight: "500",
              letterSpacing: "1px",
              overflow: "hidden",
              padding: "5px 10px"
            }}
          >
            <label>
              {this.state.hoveredArea.forschungsbereich
                ? `${this.state.hoveredArea.year}: ${
                    this.state.hoveredArea.count
                  } active projects in ${translateLanguage(
                    this.state.hoveredArea.forschungsbereich
                  )}`
                : ""}
            </label>
          </p>
        </HoverPopover>
      )
    );
  }

  handleAreaMouseEnter(year, count, fb, evt) {
    this.setState({
      hoveredArea: {
        year: year,
        forschungsbereich: fb,
        count: count
      },
      mouseLocation: [evt.nativeEvent.clientX, evt.nativeEvent.clientY]
    });
  }

  handleMouseLeave() {
    this.setState({ hoveredArea: undefined });
  }

  render() {
    if (this.state.dataSplitYears.length === 0) {
      return <div />;
    }
    const stackedAreaHeight = this.state.height * 0.7;

    // turns the preprocessed data into a d3 stack
    const stack = d3stack()
      .keys(this.state.dataSplitYears.areaChartKeys)
      .order(d3StackOrderNone)
      .offset(d3StackOffsetNone);
    const stackedData = stack(this.state.dataSplitYears.areaChartData);
    const color = d => {
      return getFieldColor(d.key);
    };
    const toYear = int => {
      return new Date(int.toString()).setHours(0, 0, 0, 0);
    };
    const maxCategories = Math.max(
      ...this.state.dataSplitYears.areaChartData.map(year =>
        Object.values(year)
          .filter(x => typeof x === "number")
          .reduce((a, b) => a + b, 0)
      )
    );

    const x = d3ScaleTime()
      .range([0, this.state.width])
      .domain([
        toYear(this.state.timeframe[0]),
        toYear(this.state.timeframe[1])
      ]);

    const y = d3ScaleLinear()
      .range([20, stackedAreaHeight])
      .domain([maxCategories, 0]);

    // Add an axis for our x scale which has half as many ticks as there are rows in the data set.
    const xAxis = d3AxisBottom()
      .scale(x)
      .ticks(this.state.dataSplitYears.years.length / 4);

    // Add an axis for our y scale that has 4 ticks
    const yAxis = d3AxisLeft()
      .scale(y)
      .ticks(4);

    const area = d3area()
      .x(d => x(toYear(d.data.year)))
      .y0(d => y(d[0]))
      .y1(d => y(d[1]));

    return (
      <div
        data-intro="In the view <b>ZEIT</b> a different, integrative perspective on the chronological development of funded research projects with current information from the <b style='color: #afca0b;'>GEPRIS- data set</b> grouped by main subject areas is shown. Hereby trends can be recognized and help in the planning of new funding."
        data-step="1"
        style={{ height: "auto", marginLeft: this.state.margin }}
      >
        <div>
          <SVGWithMargin
            className={styles.timelineContainer}
            contentContainerBackgroundRectClassName={
              styles.timelineContentContainerBackgroundRect
            }
            contentContainerGroupClassName={styles.timelineContentContainer}
            height={stackedAreaHeight}
            margin={this.state.margin}
            width={this.state.width}
          >
            <text fill="#717071" x={this.state.margin} y="5px" fontSize="130%">
              Number of Research Projects Per Subject Area Per Year
            </text>

            {/* a transform style prop to our xAxis to translate it to the bottom of the SVG's content. */}
            <g
              className={styles.xAxis}
              ref={node => d3Select(node).call(xAxis)}
              style={{
                transform: `translateY(${stackedAreaHeight}px)`
              }}
            />
            <g
              className={styles.yAxis}
              ref={node => d3Select(node).call(yAxis)}
              style={{
                transform: `translateX(${this.state.margin * 2}px)`
              }}
            />

            {stackedData &&
              stackedData.map((d, i) => {
                return (
                  <g key={d.key}>
                    <path
                      style={{ fill: color(d), transition: "d 1s" }}
                      d={area(d)}
                    />
                    {d.map(datum => {
                      return (
                        y(datum[1]) && (
                          <line
                            onClick={event =>
                              this.handleAreaClick(datum.data.year, d.key)
                            }
                            onMouseOver={event =>
                              this.handleAreaMouseEnter(
                                datum.data.year,
                                datum[1] - datum[0],
                                d.key,
                                event
                              )
                            }
                            onMouseLeave={() => this.handleMouseLeave()}
                            key={datum.data.year + " " + d.key}
                            className={styles.stackedAreaHover}
                            x1={x(toYear(datum.data.year))}
                            y1={y(datum[0])}
                            x2={x(toYear(datum.data.year))}
                            y2={y(datum[1])}
                          />
                        )
                      );
                    })}
                  </g>
                );
              })}
          </SVGWithMargin>
          {this.renderHoverField()}
        </div>
      </div>
    );
  }
}
