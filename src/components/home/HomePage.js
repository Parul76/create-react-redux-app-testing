import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Dresses Adminstration</h1>
    <p>New dresses collection for girls jeans, tshirts, leggings etc.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Who are we?
    </Link>
  </div>
);

export default HomePage;
