import React from "react";
import style from "../SideBar/details-panel.module.css";
import { ReactComponent as Exit } from "../../assets/Exit.svg";
import { getFieldColor, fieldsIntToString } from "../../util/utility";

const YearDetailsPanel = props => {
  if (!props.title) {
    return (
      <div className={style.DetailsWrapper}>
        <div className={style.DetailsExit} onClick={props.returnToFilterView}>
          <Exit height={35} width={35} />
        </div>
      </div>
    );
  }
  const color = getFieldColor(props.title);
  return (
    <div className={style.DetailsWrapper}>
      <div
        className={style.DetailsTitle}
        style={{
          borderBottomColor: color,
          color: color
        }}
      >
        <div className={style.DetailsExit} onClick={props.returnToFilterView}>
          <Exit height={35} width={35} />
        </div>
        <span className={style.titleTopic}>Jahr {props.year}</span> <br />
        <span className={style.titleText}>
          {fieldsIntToString(props.title)}
        </span>
      </div>
      <p className={style.infoItems}>
        <span className={style.infoItemTitle}>
          {"Forschungsprojekte in den " +
            fieldsIntToString(props.title) +
            " im Jahr " +
            props.year}
          <br />
        </span>
        Gestartet: {props.count.start}
        <br /> Geendet: {props.count.end}
      </p>
      <span className={style.infoItemTitle}>
        {
          "Forschungsprojekte in den Unterthemen dieses Forschungsbereiches im Jahr "
        }
        {props.year}:
        <br />
      </span>

      <div className={style.abstractText}>
        <table className={style.infoItems}>
          <tbody>
            <tr>
              <th className={style.sampleHeader}>THEMA</th>
              <th className={style.sampleHeader}>GESTARTET</th>
              <th className={style.sampleHeader}>GEENDET</th>
            </tr>
            {props.categories.map(category => (
              <tr
                key={category[0] + " " + category[1].start}
                onClick={() => props.showCategoryDetails(category[0])}
              >
                <td
                  width="60%"
                  className={style.sampleName}
                  style={{
                    color: color
                  }}
                >
                  {category[0] + ": "}
                </td>
                <td
                  className={style.sampleDate}
                  style={{
                    color: color
                  }}
                >
                  {category[1].start}
                </td>
                <td
                  className={style.sampleDate}
                  style={{
                    color: color
                  }}
                >
                  {category[1].end}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default YearDetailsPanel;
