import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer-container">
      <div>
        © Aadya Sharma 2025 <br />
        <div style={{ fontSize: "10px" }}>
          {" "}
          This site was made entirely by humans (actually, only one human) (it's
          just me)
        </div>
      </div>
    </footer>
  );
};
export default Footer;
