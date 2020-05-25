import React, { Component } from "react";
import { connect } from "react-redux";
import introJs from "intro.js";
import classes from "./navigation-subpages.module.css";
import { Dialog } from "@blueprintjs/core";
import { ReactComponent as Tutorial } from "../../assets/Icon-Tutorial.svg";
import { ReactComponent as Download } from "../../assets/Icon-Download.svg";
import { ReactComponent as Teilen } from "../../assets/Icon-Teilen.svg";
import { ReactComponent as Reset } from "../../assets/Icon-Reset.svg";
import {
  highlightUncertainty,
  showUncertainty,
  legendHovered,
  tutorialStarted,
  pageReset,
  shareDialogOpened,
  changeGraph,
  unClicked
} from "../../store/actions/actions";
import { sideBarWidth } from "../../App";
class ActionButtons extends Component {
  constructor(props) {
    super();
    this.startPageTour = this.startPageTour.bind(this);
    this.startPageTourTouch = this.startPageTourTouch.bind(this);
    this.dialogOpened = this.dialogOpened.bind(this);
    this.dialogClosed = this.dialogClosed.bind(this);
    this.state = {
      shareDialogIsOpen: false
    };
  }

  dialogOpened() {
    this.props.shareDialogOpened();
    this.setState({ shareDialogIsOpen: true });
  }
  dialogClosed() {
    this.setState({ shareDialogIsOpen: false });
  }

  copiedToClipboard() {
    const input = document.getElementById("share_input");
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    window.alert("Link kopiert: \n" + input.value);
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
      nextLabel: "Weiter",
      prevLabel: "Zurück",
      skipLabel: "Abbrechen",
      doneLabel: "Fertig"
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

  /* is executed when in touch mode and tutorial button is clicked. Gives a  tutorial made with intro.js including a short operation manual and information about all elements. */
  startPageTourTouch() {
    this.props.tutorialStarted();
    var tour = introJs();
    tour.setOptions({
      positionPrecedence: ["bottom", "left", "right", "top"],
      scrollPadding: "0px",
      showStepNumbers: false,
      overlayOpacity: 0.1,
      tooltipClass: classes.introTooltip,
      highlightClass: classes.introHighlightClass,
      nextLabel: "Weiter",
      prevLabel: "Zurück",
      skipLabel: "Abbrechen",
      doneLabel: "Benutzen",
      hintButtonLabel: "Ok",
      steps: [
        {
          intro:
            "<h2>Willkommen im Gepris-Viewer</h2>In dieser Visualisierungs-Software werden im Gepris Datensatz gesammelte vom DFG geförderte Projekte und deren Forschungsbereiche in Verbindung gesetzt.",
          element: "step0"
        },

        {
          intro:
            "Diese Version des Gepris-Viewer ist komplett per Touch-Interaktionen bedienbar. Einzelne Elemente können per <b>einmaligem Antippen</b> angewählt werden, wodurch Kurzinformationen wie Titel, Anzahl oder bestehende Verbindungen zu anderen Elementen angezeigt werden. Per <b>zweimaliges schnell aufeinanderfolgendes Antippen</b> werden Elemente ausgewählt, und im Detail in der Seitenleiste links angezeigt.",
          element: "interaktionIntro"
        },
        {
          element: "#detailsPanelID",
          intro:
            "Die Ansicht kann mithilfe der <b>Filter</b>  angepasst werden. Über den <b>Zeitraum</b>-Slider kann der gesamte Betrachtungszeitraum eingeschränkt werden. Die <b>Forschungsgebiet</b>-Auswahl ermöglicht eine Unterteilung der dargestellten Projekte nach thematischen Kriterien."
        },
        {
          element: "#clusterViewIntro",
          intro:
            "Das Herzstück der Ansicht ist die Cluster-Darstellung von Forschungsthemen auf Basis algorithmischer Vergleiche von Projekt-Abstracts. Themen sind nach ihren jeweiligen <b>Forschungsgebieten</b> eingefärbt um eine interdisziplinäre Perspektive auf die Forschung zu unterstützen. Hierdurch können Forschungsthemen basierend auf Gemeinsamkeiten interaktiv exploriert werden."
        },
        {
          intro:
            "Als weiteres Element dieser Ansicht kann die <b>Unsicherheits-Landschaft</b> aktiviert werden. Da die Anordnung auf algorithmischen Schätzungen von inhaltlichen Ähnlichkeiten basiert, unterstützt dieses Element die Interpretation der Anordnung. Je heller die Färbung der Landschaft, desto sicherer ist sich der Algorithmus über die Position des jeweiligen Forschungsthemas, und umgekehrt.",
          element: "#uncertaintyLandscape"
        },
        {
          intro:
            "Die interdisziplinäre Perspektive auf Drittmittelforschung wird durch den äußeren Ring bedeutsam erweitert. Projekte werden hier, basierend auf Informationen aus dem <b>GEPRIS-Datensatz</b>, mit <b>XYZ</b> verknüpft. Hierdurch können einerseits Projekte weitergehend nach Gemeinsamkeiten eingeordnet werden, andererseits Potenziale basierend auf Gemeinsamkeiten entdeckt werden.",
          element: "#labelsIntro"
        },
        {
          intro:
            "Im oberen Teil werden die Anzahl und Laufzeiten von <b>Forschungsprojekten</b> gruppiert nach <b>Forschungsgebieten</b> angezeigt. Der gemusterte Bereich zeigt hierbei an, dass noch nicht alle tatsächlich geförderten Projekte vorliegen und unterstützt somit die Interpretation der Entwicklung der Forschungsgebiete.",
          element: "#timelineView"
        },
        {
          intro:
            "Hiermit ist diese Einführung beendet. Sie können sie jederzeit über den <b>Tutorial</b> Button erneut aufrufen.",
          element: "step0"
        }
      ],
      hints: [
        {
          element: "#doppelklickIntro",
          hint:
            "Einzelne Elemente können per <b>einmaligem Antippen</b> angewählt werden, wodurch Kurzinformationen wie Titel, Anzahl oder bestehende Verbindungen zu anderen Elementen angezeigt werden. <br/><br/> Per <b>zweimaliges schnell aufeinanderfolgendes Antippen</b> werden Elemente ausgewählt, und im Detail in der Seitenleiste links angezeigt.",
          position: "left"
        }
      ]
    });
    tour
      .onbeforechange(() => {
        switch (tour._introItems[tour._currentStep].element.id) {
          case "geteilteAnsichten": {
            this.props.showSampleList();
            break;
          }
          case "detailsPanelID": {
            this.props.unClicked();
            break;
          }
          case "uncertaintyLandscape": {
            this.props.onShowUncertainty(true);
            this.props.onHighlightUncertainty(true);
            break;
          }
          case "labelsIntro": {
            this.props.onHighlightUncertainty(false);
            this.props.onShowUncertainty(false);
            this.props.legendHovered("labels");
            break;
          }
          default: {
            this.props.legendHovered();
            break;
          }
        }
      })
      .onexit(() => {
        this.props.legendHovered();
        tour.addHints();
      })
      .start();
  }

  render() {
    const { shareDialogIsOpen } = this.state;
    const isTouch = window.location.pathname.includes("touch");
    return (
      <>
        <Dialog
          isOpen={shareDialogIsOpen}
          onClose={this.dialogClosed}
          className={classes.bp3Dialog}
        >
          <div className={classes.shareDialog}>
            <div className={classes.shareHeader}>
              Die aktuelle Auswahl teilen:
            </div>
            <div>
              <input
                id={"share_input"}
                className={classes.shareInput}
                value={window.location}
                readOnly={true}
              />
            </div>
            <div className={classes.shareButtons}>
              <span
                className={classes.shareClipboardLink}
                onClick={this.copiedToClipboard}
              >
                In die Zwischenablage kopieren
              </span>
            </div>
            <div className={classes.closeShare} onClick={this.dialogClosed}>
              Fertig
            </div>
          </div>
        </Dialog>
        <div
          className={classes.rightPanel}
          id="step4"
          style={{
            maxWidth: sideBarWidth,
            minWidth: sideBarWidth,
            borderTop: isTouch ? "4px solid #0e0e0e" : "none"
          }}
        >
          <div
            className={classes.rightElement}
            onClick={isTouch ? this.startPageTourTouch : this.startPageTour}
            id="tutorialButton"
          >
            <Tutorial className={classes.buttonIcon} /> <p>Tutorial</p>
          </div>

          {isTouch && (
            <div className={classes.rightElement} id="geteilteAnsichten">
              <Download className={classes.buttonIcon} />
              <p>Geteilte Ansichten</p>
            </div>
          )}

          {!isTouch && (
            <div className={classes.rightElement} onClick={this.dialogOpened}>
              <Teilen className={classes.buttonIcon} />
              <p>Teilen</p>
            </div>
          )}

          <div
            className={classes.rightElement}
            onClick={() => {
              this.props.pageReset();
            }}
          >
            <Reset className={classes.buttonIcon} /> <p>Zurücksetzen</p>
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
  shareDialogOpened: () => {
    dispatch(shareDialogOpened());
  },
  unClicked: () => {
    dispatch(unClicked());
  },
  changeGraph: key => dispatch(changeGraph(key))
});

export default connect(null, mapDispatchToProps)(ActionButtons);
