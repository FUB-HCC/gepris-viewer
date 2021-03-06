import React from "react";
import style from "./cluster-map-view.module.css";
import { useDispatch } from "react-redux";
import {
  showUncertainty,
  highlightUncertainty
} from "../../store/actions/actions";

/* legend for uncertaintyLandscape is drawn as a fixed position div over the cluster vis. when uncertainty landscape is toggled in through checkbox */
const UncertaintyExplanation = props => {
  const dispatch = useDispatch();
  return (
    <div
      data-intro="As another element of this view, an uncertainty landscape can be activated. This element supports the interpretation of the ordering of research areas, because it is based on algorithmic estimations of their contents similarities. The lighter the color of parts of the landscape, the more certain the algorithm is about the position of the research topics in that area, and reversed."
      data-step="3"
      id="uncertaintyLandscape"
      style={{
        position: "absolute",
        left: props.posX + "px",
        bottom: props.posY + "px",
        backgroundColor: "transparent",
        zIndex: 99,
        color: "#6B6B6B",
        fontFamily: "IBM_Plex_Mono",
        fontSize: "80%"
      }}
    >
      {props.uncertaintyOn && (
        <div
          className={style.legendRow}
          onMouseEnter={() => dispatch(highlightUncertainty(true))}
          onMouseLeave={() => dispatch(highlightUncertainty(false))}
          style={{ cursor: "POINTER" }}
          onClick={() =>
            window.alert(
              "We apply machine learning to order research topics with respect to their conceptual similarity. The uncertainty landscape indicates, how appropriate that ordering is according to the algorithm."
            )
          }
        >
          <p
            style={{
              fontWeight: "700",
              fontSize: "80%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>uncertain</span>
            <span>certain</span>
          </p>
          <svg width="190px" height="20">
            <linearGradient id="grad1" x1="20%" y1="0%" x2="120%" y2="0%">
              <stop offset="0%" stopColor="#0a0a0a" />
              <stop offset="100%" stopColor="#999" />
            </linearGradient>
            <rect width="190" height="20" fill="url(#grad1)" stroke="none" />
          </svg>
          <br />
          Ordering{" "}
          <svg width="15" height="15">
            <circle className={style.tooltipIcon} r="6" cx={6} cy={6} />
            <text
              x="3"
              y="10"
              style={{ cursor: "POINTER", stroke: "000", fill: "#000" }}
            >
              ?
            </text>
          </svg>
        </div>
      )}
      <label
        htmlFor="toggleUncertainty"
        style={{
          fontWeight: "700"
        }}
        className={style.checkboxWrapper}
      >
        <input
          type="checkbox"
          id="toggleUncertainty"
          checked={props.uncertaintyOn}
          onChange={() => dispatch(showUncertainty(!props.uncertaintyOn))}
        />
        Uncertainty Landscape
        <span className={style.checkmark}></span>
      </label>
    </div>
  );
};

export default UncertaintyExplanation;
