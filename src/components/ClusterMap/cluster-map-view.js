import React from "react";

import Cluster from "./cluster";
import style from "./cluster-map-view.module.css";
import UncertaintyExplanation from "./uncertainty-explanation";
import CircleExplanation from "./circle-explanation";
import GeprisExplanation from "./gepris-explanation";
import HoverPopover from "../HoverPopover/HoverPopover";
import ClusterContoursMap from "./cluster-contours-map";

const arcMarginSides = (width, scale) => Math.min(0.2 * width, 0.2 * scale);
const arcMarginTop = (height, scale) => Math.min(0.02 * height, 0.02 * scale);
const clusterSize = scale => 0.8 * scale;
const clusterPosX = (width, scale) => 0.5 * width - clusterSize(scale) / 2;
const clusterPosY = (height, scale) => 0.5 * height - clusterSize(scale) / 2;

export default class ClusterMapView extends React.Component {
  constructor(props) {
    super();
    this.renderHover = this.renderHover.bind(this);
  }

  // translate mappoint of categories to current screen size
  getPointLocation = (pt, width, height) => {
    const [x, y] = pt;
    const normalizedX = x / this.props.categoriesMaxSizing[0];
    const normalizedY = -y / this.props.categoriesMaxSizing[1] + 1;
    return [
      normalizedX * clusterSize(this.scale) + clusterPosX(width, this.scale),
      normalizedY * clusterSize(this.scale) + clusterPosY(height, this.scale)
    ];
  };

  renderHover(title) {
    let mouseLocation = [0, 0];
    if (title && this.props.filteredCategories.find(c => c.title === title)) {
      let category = this.props.filteredCategories.find(c => c.title === title);
      mouseLocation = this.getPointLocation(
        category.mappoint,
        this.props.width,
        this.props.height
      );

      return (
        <HoverPopover
          width={"15em"}
          height="10px"
          locationX={mouseLocation[0]}
          locationY={mouseLocation[1] - 30}
        >
          <p
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
              {category.title_lang} <br />
              {category.doc_count} research projects
            </label>
          </p>
        </HoverPopover>
      );
    }
  }

  render() {
    const {
      width,
      height,
      onUnClicked,
      highlightedCategories,
      clusterData,
      isAnyClicked,
      uncertaintyOn,
      uncertaintyHighlighted,
      isCategoryHovered,
      filteredCategories,
      topography,
      contoursSize,
      onCategoryClicked
    } = this.props;
    this.scale = Math.min(height, width);
    const scale = this.scale;
    if (!contoursSize || !clusterData || !width || !height || scale <= 0) {
      return <div />;
    }
    const radius = (clusterSize(scale) - arcMarginSides(width, scale)) * 0.3;

    return (
      <div
        className={style.clusterMapWrapper}
        style={{
          width: width,
          height: height,
          marginTop: arcMarginTop(height, scale)
        }}
      >
        <UncertaintyExplanation
          posX={width - 190}
          posY={20}
          uncertaintyOn={uncertaintyOn}
        />
        <CircleExplanation posX={width - 190} posY={height - 160} />
        <GeprisExplanation posX={20} posY={height - 120} />
        <svg
          className="viz-3"
          viewBox={"0 0 " + width + " " + height}
          width={width}
          height={height}
          onClick={isAnyClicked ? onUnClicked : null}
        >
          {uncertaintyOn && (
            <ClusterContoursMap
              width={width}
              height={height}
              topography={topography}
              contoursSize={contoursSize}
              clusterSize={clusterSize}
              clusterX={clusterPosX}
              clusterY={clusterPosY}
              uncertaintyHighlighted={uncertaintyHighlighted}
            />
          )}
          <g
            data-step="1"
            id="clusterViewIntro"
            data-intro="The heart of the <b>WISSEN</b> view is the cluster visualization of research areas based on algorithmic comparison of project abstracts. Research topics are colored according to their main <b>subject area</b> to support an interdisciplinary perspective. Hereby similarities of research topics can be interactively explored. The size of a circle reflects the total amount of research projects that have been funded in this research area."
          >
            {clusterData.map(cluster => {
              return (
                <Cluster
                  key={cluster.id + "cluster"}
                  cluster={cluster}
                  getLocation={p => this.getPointLocation(p, width, height)}
                  radius={radius}
                  highlightedCategories={highlightedCategories}
                  filteredCategories={filteredCategories}
                />
              );
            })}
            {filteredCategories
              .filter(c => c.doc_count > 10000)
              .map(category => (
                <text
                  fill="#fff"
                  fontWeight="800"
                  x={this.getPointLocation(category.mappoint, width, height)[0]}
                  y={this.getPointLocation(category.mappoint, width, height)[1]}
                  key={category.doc_count}
                  fontSize="90%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ cursor: "pointer" }}
                  onClick={() => onCategoryClicked(category.title)}
                >
                  {category.title_lang}
                </text>
              ))}
          </g>
        </svg>
        {this.renderHover(isCategoryHovered)}
      </div>
    );
  }
}
