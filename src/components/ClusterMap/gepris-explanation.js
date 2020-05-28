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
        width: 160
      }}
    >
      Diese Visualisierung basiert auf Informationen zu Forschungsprojekten, die
      von der Deutschen Forschungsgemeinschaft (DFG) gefördert wurden.
      <br /> Quelle:
      <a
        href="https://gepris.dfg.de"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#afca0b", opacity: "50%" }}
      >
        GEPRIS
      </a>
    </div>
  );
};

export default GeprisExplanation;
