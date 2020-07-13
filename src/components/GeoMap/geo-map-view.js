import React from "react";
import style from "./geo-map-view.module.css";
import { ReactComponent as Africa } from "../../assets/GeoMap/continents/africa.svg";
import { ReactComponent as Europe } from "../../assets/GeoMap/continents/europe.svg";
import { ReactComponent as NorthAmerica } from "../../assets/GeoMap/continents/north-america.svg";
import { ReactComponent as SouthAmerica } from "../../assets/GeoMap/continents/south-america.svg";
import { ReactComponent as Asia } from "../../assets/GeoMap/continents/asia.svg";
import { ReactComponent as Australia } from "../../assets/GeoMap/continents/australia.svg";

import HoverPopover from "../HoverPopover/HoverPopover";

const continentSVGs = continent => {
  switch (continent) {
    case "North America": {
      return <NorthAmerica />;
    }
    case "Europe": {
      return <Europe />;
    }
    case "Asia": {
      return <Asia />;
    }
    case "Australia": {
      return <Australia />;
    }
    case "Africa": {
      return <Africa />;
    }
    case "South America": {
      return <SouthAmerica />;
    }
    default:
      return <Europe />;
  }
};
/* these functions translate the geolocations of institutions to the svg maps*/
const mapLongToWidth = (width, continent, lon) => {
  return (
    ((lon - continent.longMin) * width) /
    (continent.longMax - continent.longMin)
  );
};
const distanceToEquator = lat => Math.asinh(Math.tan(lat * (Math.PI / 180)));
const mapLatToHeight = (height, continent, lat) =>
  ((distanceToEquator(lat) - distanceToEquator(continent.latMin)) * height) /
  Math.abs(
    distanceToEquator(continent.latMax) - distanceToEquator(continent.latMin)
  );

export default class GeoMapView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hovered: false,
      mouseLocation: [0, 0]
    };
    this.renderHover = this.renderHover.bind(this);
  }

  renderHover(hovered, mouseLocation) {
    return (
      hovered && (
        <HoverPopover
          width={"15em"}
          height="20px"
          locationX={mouseLocation[0]}
          locationY={mouseLocation[1]}
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
            <label>{hovered}</label>
          </p>
        </HoverPopover>
      )
    );
  }

  render() {
    const {
      institutions,
      continents,
      continentConnections,
      height,
      width
    } = this.props;
    if (isNaN(height) || !continents) {
      return <div />;
    }

    const scale = Math.min(width * 0.16, height * 0.45);
    return (
      <div
        className={style.geoMapWrapper}
        style={{ width: scale * 6, height: scale * 4 }}
        data-intro="In the view <b>RAUM</b> a different, more international perspective on research in germany is enabled. New potential can be revealed consequently."
        data-step="1"
      >
        <span className={style.plotTitle}>
          <br /> Research Projects by International Cooperation
        </span>
        <div
          className={style.arcWrapper}
          data-step="2"
          data-intro="  <b>Research projects </b> are visualized as <b>bows</b> between continents, if institutions from both continents have cooperated on them. By clicking on a bow, you obtain a list of those projects."
        >
          <svg width={scale * 6} height={scale * 2}>
            {Object.values(continentConnections)
              .filter(con => con.weight > 0)
              .map((con, i) => (
                <path
                  d={`M${con.end * scale * 6},${scale * 2} C${con.end *
                    scale *
                    6},${scale * 2 -
                    Math.abs(con.end - con.start) *
                      0.55 *
                      scale *
                      6} ${con.start * scale * 6},${scale * 2 -
                    Math.abs(con.end - con.start) *
                      0.55 *
                      scale *
                      6} ${con.start * scale * 6},${scale * 2}`}
                  stroke="white"
                  strokeWidth={Math.max(3, con.weight * 2)}
                  style={{ transition: "stroke-Width 1s" }}
                  fill="none"
                  opacity={0.4}
                  className={style.arcHover}
                  key={JSON.stringify([con.start, con.end])}
                  onClick={() => {
                    this.props.showInstDetails(con.name);
                  }}
                  onMouseOver={evt => {
                    this.setState({
                      hovered:
                        con.weight +
                        " Cooperations with institutions in " +
                        con.name.split("|")[0] +
                        " and " +
                        con.name.split("|")[1],
                      mouseLocation: [
                        evt.nativeEvent.clientX,
                        evt.nativeEvent.clientY
                      ]
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      hovered: false,
                      mouseLocation: [0, 0]
                    });
                  }}
                />
              ))}
          </svg>
        </div>
        <div
          className={style.mapsWrapper}
          data-step="3"
          data-intro="The red dots mark the locations of institutions on the continents. Through clicking of a continent a list of these institutions can be seen."
        >
          {continents
            .filter(c => c.institutionCount > 0)
            .map(c => {
              const instititutionsOnContinent = Object.values(
                institutions
              ).filter(ins => ins.continent === c.name);
              return (
                <div className={style.continentWrapper} key={c.name}>
                  <svg viewBox={"0 0 500 120"} width={scale}>
                    <text
                      fill="#aaa"
                      x="50%"
                      y="100"
                      fontSize="300%"
                      key={c.name}
                      textAnchor="middle"
                    >
                      {c.name}
                    </text>
                  </svg>
                  <svg viewBox={"0 0 500 500"}>
                    <g
                      className={style.continentSVG}
                      onClick={() => {
                        this.props.showInstDetails(c.name + "|c");
                      }}
                      onMouseOver={evt => {
                        this.setState({
                          hovered:
                            c.projectsCount +
                            " Research projects with institutions in " +
                            c.name,
                          mouseLocation: [
                            evt.nativeEvent.clientX,
                            evt.nativeEvent.clientY
                          ]
                        });
                      }}
                      onMouseLeave={() => {
                        this.setState({
                          hovered: false,
                          mouseLocation: [0, 0]
                        });
                      }}
                    >
                      {continentSVGs(c.name)}
                    </g>
                    <g
                      transform={`translate(${c.xOffset}, ${c.yOffset})`}
                      fill="transparent"
                    >
                      {instititutionsOnContinent.map(ins => (
                        <circle
                          fill={"red"}
                          stroke="red"
                          cx={mapLongToWidth(c.mapWidth, c, ins.latlon[1])}
                          cy={
                            c.mapHeight -
                            mapLatToHeight(c.mapHeight, c, ins.latlon[0])
                          }
                          r={5}
                          key={ins.name + ins.id}
                          className={style.circle}
                          onMouseOver={evt => {
                            this.setState({
                              hovered: ins.name,
                              mouseLocation: [
                                evt.nativeEvent.clientX,
                                evt.nativeEvent.clientY
                              ]
                            });
                          }}
                          onMouseLeave={() => {
                            this.setState({
                              hovered: false,
                              mouseLocation: [0, 0]
                            });
                          }}
                        />
                      ))}
                    </g>
                  </svg>
                </div>
              );
            })}
        </div>{" "}
        <span className={style.plotTitle}>
          {" "}
          Number of Cooperating Institutions on this Continent
        </span>
        <div
          className={style.mapsWrapper}
          data-step="4"
          data-intro="Here, the total amount of institutions on one continent is shown. As expected, most projects were grounded in Germany or Europe."
        >
          {continents
            .filter(c => c.institutionCount > 0)
            .map((c, i) => {
              return (
                <svg width={scale * 6} height={scale * 0.5} key={i + "region"}>
                  <circle
                    cx="50%"
                    cy="50%"
                    className={style.countCircle}
                    r={Math.min(
                      scale * 0.24,
                      scale * 0.05 + c.institutionCount / 3
                    )}
                    onClick={() => {
                      this.props.showInstDetails(c.name + "|f");
                    }}
                    onMouseOver={evt => {
                      this.setState({
                        hovered:
                          c.institutionCount + "  Institutionen in " + c.name,
                        mouseLocation: [
                          evt.nativeEvent.clientX,
                          evt.nativeEvent.clientY
                        ]
                      });
                    }}
                    onMouseLeave={() => {
                      this.setState({
                        hovered: false,
                        mouseLocation: [0, 0]
                      });
                    }}
                  />
                  <text
                    fill="#0e0e0e"
                    x="50%"
                    y="50%"
                    fontSize="75%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                  >
                    {c.institutionCount}
                  </text>
                </svg>
              );
            })}
        </div>
        {this.renderHover(this.state.hovered, this.state.mouseLocation)}
      </div>
    );
  }
}
