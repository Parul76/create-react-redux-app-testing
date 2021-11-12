import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import About from "./about/About";
import Header from "./common/Header";
// import PageNotFound from "./PageNotFound";
import DressesCollection from "./dresses/Dresscoll";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/dresses" component={DressesCollection} />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
