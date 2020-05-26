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
        {props.description} ({props.institutions.length})
        <br />
      </span>
      {props.institutions.length > 0 && (
        <div className={style.abstractText}>
          {props.institutions.map(inst => (
            <span href="#" key={inst}>
              {inst}
              <br />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
export default InstDetailsPanel;
