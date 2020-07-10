import React from "react";
import style from "../SideBar/details-panel.module.css";
import { ReactComponent as Exit } from "../../assets/Exit.svg";

const InstDetailsPanel = props => {
  if (!props.title) {
    return (
      <div className={style.DetailsWrapper}>
        <div className={style.DetailsExit} onClick={props.returnToFilterView}>
          <Exit height={35} width={35} />
        </div>
      </div>
    );
  }
  return (
    <div className={style.DetailsWrapper}>
      <div className={style.DetailsTitle}>
        <div className={style.DetailsExit} onClick={props.returnToFilterView}>
          <Exit height={35} width={35} />
        </div>
        <span className={style.titleText}>{props.title}</span>
      </div>

      <span className={style.infoItemTitle}>
        {props.description} (
        {props.projects ? props.projects.length : props.institutions.length})
        <br />
      </span>
      {props.institutions && (
        <div className={style.abstractText}>
          {props.institutions.map((inst, i) => (
            <span href="#" key={i + "inst"}>
              {inst}
              <br />
            </span>
          ))}
        </div>
      )}
      {props.projects && (
        <div className={style.abstractText}>
          {props.projects.map(p => (
            <span href="#" key={p.id}>
              <b>Forschungsprojekt: {p.id}:</b>
              <br />
              {props.continents[0] &&
                "Partner in " +
                  props.continents[0] +
                  ": " +
                  p.institutions
                    .filter(inst => inst[1] === props.continents[0])
                    .map(i => i[0])
                    .join(", ")}
              <br />
              <br />
              {props.continents[1] &&
                "Partner in " +
                  props.continents[1] +
                  ": " +
                  p.institutions
                    .filter(inst => inst[1] === props.continents[1])
                    .map(i => i[0])
                    .join(", ")}
              <br />
              <br />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
export default InstDetailsPanel;
