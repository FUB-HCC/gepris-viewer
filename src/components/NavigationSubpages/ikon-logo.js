import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./navigation-subpages.module.css";
import introJs from "intro.js";
import { changeGraph, tourStarted } from "../../store/actions/actions";
import { isTouchMode } from "../../util/utility";

class IKONlogo extends Component {
  constructor() {
    super();
    this.startTour = this.startTour.bind(this);
    this.changeGraphHandler = this.changeGraphHandler.bind(this);
  }
  render() {
    return (
      <div
        className={
          this.props.isTouch ? classes.IKONlogoTouch : classes.IKONlogoNoTouch
        }
        style={{ backgroundColor: "#1c1d1f", textAlign: "center" }}
        onClick={this.props.isTouch ? null : this.startTour}
      ></div>
    );
  }

  changeGraphHandler(graph) {
    this.props.changeGraph(graph);
    this.setState({
      activePopover: -1
    });
  }
  /* intro.js tour that is started when the ikon-logo is clicked in browser mode. Gives an introduction to all pages, the sidepanel and navbar. */
  startTour() {
    this.props.tourStarted();
    var tour = introJs();
    tour.setOptions({
      tooltipPosition: "auto",
      positionPrecedence: ["right", "top", "left", "bottom"],
      showStepNumbers: false,
      overlayOpacity: 0.5,
      tooltipClass: classes.introTooltip,
      highlightClass: classes.introHighlightClass,
      skipLabel: "Benutzen",
      doneLabel: "Fertig",
      prevLabel: "Zurück",
      nextLabel: "Weiter",
      steps: [
        {
          intro:
            "<h2>Willkommen im Gepris-Viewer</h2>In dieser Visualisierungs-Software werden im Gepris Datensatz gesammelte vom DFG geförderte Projekte und deren Forschungsbereiche in Verbindung gesetzt.",
          element: "step1"
        },
        {
          element: "#step1",
          intro:
            "Diese Software bietet drei Ansichten auf Forschung in Deutschland. Der Datensatz für die Visualisierungen stammt aus der <a style='color: #afca0b;' href='https://gepris.dfg.de/gepris/OCTOPUS'   target='_blank' rel='noopener noreferrer'>GEPRIS-Datenbank</a>. In <b>WISSEN</b> werden die existierende Verbindungen zwischen Forschungsprojekten und deren Forschungsbereichen dargestellt. Hierdurch können zum Beispiel Inspirationen für Wissenstransfer oder Wissensaustausch zielstrebig gefunden werden."
        },
        {
          element: "#step2",
          intro:
            "In der Ansicht <b>ZEIT</b> wird die Anzahl der geförderten Projekte über die Jahre dargestellt. Hierdurch können zum Beispiel Trends gefunden werden, welche in der Planung berücksichtigt werden könnten."
        },
        {
          element: "#step3",
          intro:
            "In der Ansicht <b>RAUM</b> rückt die internationale Seite der Forschung in Deutschland in den Vordergrund. Die Bögen zwischen Kontinenten drücken die durch Projekte verbundenen Partnerinstitutionen aus. In den Karten ist angedeutet, wie sich diese geographisch verteilen. In der untersten Zeile werden die Forschungsprojekte nach Forschungsregionen aufgeteilt."
        },
        {
          element: "#step4",
          intro:
            "Der <b>Tutorial-Button</b> bietet für jede der drei Ansichten eine eigene Einführung an. Mit dem <b>Teilen-Button</b> kann jeder Zustand der Visualisierung als URL geteilt werden. Der <b>Zurücksetzen-Button</b> stellt den ungefilterten Anfangszustand wieder her."
        },
        {
          element: "#detailsPanelID",
          intro:
            "Jede Ansicht kann mithilfe der <b>Filter</b>  angepasst werden — und jeder resultierende Zustand wird auch bei einem Wechsel der Ansicht beibehalten. Über den <b>Zeitraum</b>-Slider kann der gesamte Betrachtungszeitraum eingeschränkt werden. Die <b>Forschungsgebiet</b>-Auswahl ermöglicht eine Unterteilung der dargestellten Projekte nach thematischen Kriterien."
        },
        {
          element: "#step6",
          intro:
            "<h3>Hiermit ist diese Einführung beendet!</h3> Für eine Wiederholung entweder <b>Zurück</b> wählen oder das <b>IKON Logo</b> klicken. Nicht vergessen: Für jede einzelne Ansicht ist eine gesonderte Einführung über den <b>Tutorial</b>-Button verfügbar."
        }
      ]
    });

    tour.onchange(() => {
      switch (tour._currentStep) {
        case 2: {
          this.changeGraphHandler("1");
          break;
        }
        case 3: {
          this.changeGraphHandler("1");
          break;
        }
        default: {
          this.changeGraphHandler("0");
          break;
        }
      }
    });

    tour.start();
  }
}
const mapStateToProps = state => ({
  isTouch: isTouchMode(state)
});

const mapDispatchToProps = dispatch => ({
  changeGraph: key => dispatch(changeGraph(key)),
  tourStarted: () => dispatch(tourStarted())
});

export default connect(mapStateToProps, mapDispatchToProps)(IKONlogo);
