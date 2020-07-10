import React from "react";
import style from "./sidebar.module.css";
import { appMargin, menuBarHeight, sideBarWidth } from "../../App";

class SideBarView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      height: this.heightStandard
    };
  }

  heightStandard = window.innerHeight - menuBarHeight - appMargin * 2 - 10;

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({
      height: this.heightStandard
    });
  }

  render() {
    return (
      <div
        className={style.sideBarWrapper}
        style={{
          height: this.state.height,
          width: sideBarWidth,
          overflowY: "inherit",
          overflowX: "hidden"
        }}
        id="detailsPanelID"
      >
        {this.props.isDataProcessed && this.props.sideBarComponent}
      </div>
    );
  }
}

export default SideBarView;
