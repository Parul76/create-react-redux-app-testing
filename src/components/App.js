import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import About from "./about/About";
import Header from "./common/Header";
// import PageNotFound from "./PageNotFound";
import Dresses from "./dresses/Dresses";
import DressForm from "./dresses/DressForm";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/dresses" component={Dresses} />
        <Route path="/dressform" component={DressForm} />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
