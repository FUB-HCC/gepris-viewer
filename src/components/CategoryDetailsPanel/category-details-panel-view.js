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
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          fill={color}
          stroke={color}
        />
        <span className={style.titleTopic}>Research Topic</span> <br />
        <span className={style.titleText}>{props.categoryData.title_lang}</span>
      </div>
      <p className={style.infoItems}>
        <span className={style.infoItemTitle}>
          Main Topic: <br />
        </span>
        {props.categoryData.rb_lang}
      </p>
      <p className={style.infoItems}>
        <span className={style.infoItemTitle}>
          Main Subject Area: <br />
        </span>
        {props.categoryData.fb_lang}
      </p>
      <p className={style.infoItems}>
        <span className={style.infoItemTitle}>
          Number of research projects with this research topic: <br />
        </span>
        {props.categoryData.doc_count}
      </p>
      <p className={style.infoItems}>
        <span className={style.infoItemTitle}>
          Timeframe: <br />
        </span>
        {Math.max(
          props.categoryData.timeframe.findIndex(time => time.start > 0) + 1979,
          props.timeframe[0]
        ) +
          " to " +
          Math.min(
            props.categoryData.timeframe.length + 1978,
            props.timeframe[1]
          )}
      </p>
    </div>
  );
};

export default CategoryDetailsPanel;
