import React, { Component } from "react";
import GraphView from "./pages/GraphView/graph-view";
import { default as NavigationSubpages } from "./components/NavigationSubpages/navigation-subpages";
import Sidebar from "./components/SideBar/sidebar";
import { ConnectedRouter } from "connected-react-router";
import { Route, Redirect, Switch } from "react-router";
import { history } from "./index";
import classes from "./App.module.css";

export const sideBarWidth = 450;
export const menuBarHeight = 65;
export const appMargin = 5;

const AppBody = () => (
  <>
    <NavigationSubpages height={menuBarHeight} />
    <div className={classes.appBody}>
      <div className={classes.contentWindow}>
        <GraphView />
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
    </div>
  </>
);

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <>
          <div className={classes.offsetWrapper} style={{ padding: appMargin }}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/explore" />} />
              <Route path="/explore" component={AppBody} />
            </Switch>
          </div>
        </>
      </ConnectedRouter>
    );
  }
}
//TODO: reverse redirect
export default App;
