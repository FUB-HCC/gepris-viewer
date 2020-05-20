import React from "react";

/* legend for uncertaintyLandscape is drawn as a fixed position div over the cluster vis. when uncertainty landscape is toggled in through checkbox */
const CircleExplanation = props => {
  return (
    <div
      data-intro="Die Größe der Kreise sagt aus, wie viele Forschungsprojekte insgesamt in einem Themenbereich gefördert wurden."
      data-step="2"
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
      Anzahl Forschungsprojekte <br />
      <br />
      <svg width="100" height="130">
        <circle cx={25} cy={25} r={22} fill={"#888"} />
        <text fill={"#888"} x="60px" y="25px" fontSize="80%">
          50.000
        </text>
        <circle cx={25} cy={70} r={12} fill={"#888"} />
        <text fill={"#888"} x="60px" y="70px" fontSize="80%">
          5.000
        </text>
        <circle cx={25} cy={100} r={7} fill={"#888"} />
        <text fill={"#888"} x="60px" y="100px" fontSize="80%">
          500
        </text>
      </svg>
    </div>
  );
};

export default CircleExplanation;
