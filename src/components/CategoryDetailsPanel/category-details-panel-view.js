import React from "react";
import style from "../SideBar/details-panel.module.css";
import { ReactComponent as Exit } from "../../assets/Exit.svg";
import { ReactComponent as Icon } from "../../assets/Selected-Project.svg";
import { getFieldColor } from "../../util/utility";

const CategoryDetailsPanel = props => {
  if (props.categoryData == null) {
    return (
      <div className={style.DetailsWrapper}>
        <div className={style.DetailsExit} onClick={props.returnToFilterView}>
          <Exit height={35} width={35} />
        </div>
      </div>
    );
  }
  let color = getFieldColor(props.categoryData.forschungsbereich);

  return (
    <div className={style.DetailsWrapper}>
      <div className={style.DetailsExit} onClick={props.returnToFilterView}>
        <Exit height={35} width={35} />
      </div>
      <div
        className={style.DetailsTitle}
        style={{ borderBottomColor: color, color: color }}
      >
        <Icon
          className={style.TitleIcon}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          fill={color}
          stroke={color}
        />
        <span className={style.titleTopic}>Forschungsthema</span> <br />
        <span className={style.titleText}>{props.categoryData.title}</span>
      </div>
      <p className={style.infoItems}>
        <span className={style.infoItemTitle}>
          Hauptthema: <br />
        </span>
        {props.categoryData.hauptthema}
      </p>
      <p className={style.infoItems}>
        <span className={style.infoItemTitle}>
          Forschungsgebiet: <br />
        </span>
        {props.categoryData.forschungsbereichStr}
      </p>
      <p className={style.infoItems}>
        <span className={style.infoItemTitle}>
          Anzahl der Forschungsprojekte in diesem Themenfeld: <br />
        </span>
        {props.categoryData.doc_count}
      </p>
      <p className={style.infoItems}>
        <span className={style.infoItemTitle}>
          Zeitraum: <br />
        </span>
        {props.categoryData.timeframe[0] +
          " bis " +
          props.categoryData.timeframe[props.categoryData.timeframe.length - 1]}
      </p>
    </div>
  );
};

export default CategoryDetailsPanel;
