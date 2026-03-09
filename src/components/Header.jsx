import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header-container">
      <h1>
        <Link to="/" className="Header-title">
          Aadya Sharma
        </Link>
      </h1>
    </header>
  );
};
export default Header;
