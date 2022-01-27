import React from "react";
import { NavLink } from "react-router-dom";

import "../../style/navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <ul className="left-nav">
          <li className="nav-li name">
            <NavLink to="/">Morad Elazyzy</NavLink>
          </li>
        </ul>
        <ul className="right-nav">
          <li className="nav-li">
            <NavLink to="/design">Design</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/front">Front</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
