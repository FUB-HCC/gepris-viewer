import React, { Component } from "react";
import { connect } from "react-redux";
import introJs from "intro.js";
import classes from "./navigation-subpages.module.css";
import { ReactComponent as Tutorial } from "../../assets/Icon-Tutorial.svg";
import { ReactComponent as Reset } from "../../assets/Icon-Reset.svg";
import {
  highlightUncertainty,
  showUncertainty,
  legendHovered,
  tutorialStarted,
  pageReset,
  changeGraph,
  unClicked
} from "../../store/actions/actions";
import { sideBarWidth } from "../../App";
class ActionButtons extends Component {
  constructor(props) {
    super();
    this.startPageTour = this.startPageTour.bind(this);
  }

  /* is executed when in browser mode and tutorial button is clicked. Gives a short tutorial made with intro.js according to the page you are on ("WISSEN", "ZEIT", "RAUM") */
  startPageTour() {
    this.props.tutorialStarted();
    var tour = introJs();
    tour.setOptions({
      tooltipPosition: "auto",
      showStepNumbers: false,
      overlayOpacity: 0.1,
      tooltipClass: classes.introTooltip,
      highlightClass: classes.introHighlightClass,
      nextLabel: "continue",
      prevLabel: "back",
      skipLabel: "cancel",
      doneLabel: "complete"
    });
    tour
      .onbeforechange(() => {
        switch (tour._currentStep) {
          case 2: {
            this.props.onShowUncertainty(true);
            this.props.onHighlightUncertainty(true);
            break;
          }
          default: {
            this.props.onHighlightUncertainty(false);
            this.props.onShowUncertainty(false);
            break;
          }
        }
      })
      .onexit(() => this.props.onHighlightUncertainty(false))
      .start();
  }

  render() {
    return (
      <>
        <div
          className={classes.rightPanel}
          id="step4"
          style={{
            maxWidth: sideBarWidth,
            minWidth: sideBarWidth
          }}
        >
          <div
            className={classes.rightElement}
            onClick={this.startPageTour}
            id="tutorialButton"
          >
            <Tutorial className={classes.buttonIcon} /> <p>Tutorial</p>
          </div>

          <div
            className={classes.rightElement}
            onClick={() => {
              this.props.pageReset();
            }}
          >
            <Reset className={classes.buttonIcon} /> <p>Reset</p>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  legendHovered: legendKey => {
    dispatch(legendHovered(legendKey));
  },
  onHighlightUncertainty: value => {
    dispatch(highlightUncertainty(value));
  },
  onShowUncertainty: value => {
    dispatch(showUncertainty(value));
  },
  tutorialStarted: () => {
    dispatch(tutorialStarted());
  },
  pageReset: () => {
    dispatch(pageReset());
  },
  unClicked: () => {
    dispatch(unClicked());
  },
  changeGraph: key => dispatch(changeGraph(key))
});

export default connect(null, mapDispatchToProps)(ActionButtons);
