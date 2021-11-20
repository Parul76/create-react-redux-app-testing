import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/dresses" activeStyle={activeStyle}>
        Dresses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>

      {" | "}
      <NavLink to="/dressform" activeStyle={activeStyle}>
        Dress Form
      </NavLink>
    </nav>
  );
};

export default Header;
