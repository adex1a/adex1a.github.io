import React from "react";
import "./Home.css";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg">
        <h1 className="Home-text">Hello, world!</h1>
        <div className="Home-text Home-smallText">
          I'm a{" "}
          <NavLink className="link" to="/writing">
            writer
          </NavLink>
          ,{" "}
          <NavLink className="link" to="/games">
            game developer
          </NavLink>
          ,{" "}
          <NavLink className="link" to="/music">
            musician
          </NavLink>
          , and{" "}
          <NavLink className="link" to="/education">
            MIT student
          </NavLink>
          .
        </div>
        <h2 className="Home-text" style={{ textAlign: "center" }}>
          Talk to me!
        </h2>
        <ul className="Home-contactList">
          -{" "}
          <a
            href="https://www.linkedin.com/in/aadya-sharma-/"
            target="_blank"
            rel="noreferrer noopener"
            style={{ zIndex: 1 }}
            className="Home-text Home-smallText link"
          >
            LinkedIn
          </a>
          {/* <a
            href="mailto:aadya314@mit.edu"
            target="_blank"
            rel="noreferrer noopener"
            style={{ zIndex: 1 }}
            className="Home-text Home-smallText"
          >
            Email
          </a> */}
          <div className="Home-text Home-smallText">
            - Email: me.adexia [at] gmail [dot] com
          </div>
        </ul>
      </div>
    </>
  );
};
export default Home;
