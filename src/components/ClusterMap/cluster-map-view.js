import React from "react";

import Cluster from "./cluster";
import style from "./cluster-map-view.module.css";
import UncertaintyExplanation from "./uncertainty-explanation";
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
    let text = "";
    let mouseLocation = [0, 0];
    if (title) {
      let category = this.props.clusterData
        .map(cluster =>
          cluster.categories.find(category => category.title === title)
        )
        .find(p => p);
      text = category.title;
      mouseLocation = this.getPointLocation(
        category.mappoint,
        this.props.width,
        this.props.height
      );
    }
    return (
      title && (
        <HoverPopover
          width={"15em"}
          height="20px"
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
            <label>{text}</label>
          </p>
        </HoverPopover>
      )
    );
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
      isTouch,
      isProjectHovered,
      filteredCategories,
      topography,
      contoursSize
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
          posX={width - 170}
          posY={20}
          uncertaintyOn={uncertaintyOn}
        />
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
            data-intro="Das Herzstück der <b>WISSEN</b> Ansicht ist die Cluster-Darstellung von Forschungsthemen auf Basis algorithmischer Vergleiche von Projekt-Abstracts. Themen sind nach ihren jeweiligen <b>Hauptforschungsgebieten</b> eingefärbt um eine interdisziplinäre Perspektive auf die Forschung zu unterstützen. Hierdurch können Themen basierend auf Gemeinsamkeiten interaktiv exploriert werden."
          >
            {clusterData.map(cluster => {
              return (
                <Cluster
                  isTouchMode={isTouch}
                  key={cluster.id + "cluster"}
                  cluster={cluster}
                  getLocation={p => this.getPointLocation(p, width, height)}
                  radius={radius}
                  highlightedCategories={highlightedCategories}
                  filteredCategories={filteredCategories}
                />
              );
            })}
          </g>
        </svg>
        {this.renderHover(isProjectHovered)}
      </div>
    );
  }
}
