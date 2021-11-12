// import React from "react";
// import { render } from "react-dom";

// function Hi() {
//   return <p>Hi.</p>;
// }

/* JS class component*/

// class HelloWorld extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h1>Hello World</h1>;
//   }
// }

// /*Function component*/

// function HelloWorld(props) {
//   return <h1>Hello Redux</h1>;
// }

// /*Arrow function*/
// const Hell = (props) => <h1>Hel</h1>;
// render(<Hi />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
