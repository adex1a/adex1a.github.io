import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Header-navbarContainer">
      <NavLink to="/" className="Header-navbarLink">
        Home
      </NavLink>
      <NavLink to="/education" className="Header-navbarLink">
        Education
      </NavLink>
      <NavLink to="/games" className="Header-navbarLink">
        Games
      </NavLink>
      <NavLink to="/writing" className="Header-navbarLink">
        Writing
      </NavLink>
      <NavLink to="/music" className="Header-navbarLink">
        Music
      </NavLink>
    </nav>
  );
};
export default NavBar;
