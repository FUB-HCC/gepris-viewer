import React from "react";

const GeprisExplanation = props => {
  return (
    <div
      style={{
        position: "absolute",
        left: props.posX + "px",
        bottom: props.posY + "px",
        backgroundColor: "transparent",
        zIndex: 99,
        color: "#6B6B6B",
        fontFamily: "IBM_Plex_Mono",
        fontSize: "80%",
        width: 180
      }}
    >
      This visualization is based on information about research projects, that
      have been funded by the German Research Foundation (DFG).
      <br /> Source:
      <a
        href="https://gepris.dfg.de"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#afca0b", opacity: "50%" }}
      >
        GEPRIS (German Project Information System)
      </a>
    </div>
  );
};

export default GeprisExplanation;
