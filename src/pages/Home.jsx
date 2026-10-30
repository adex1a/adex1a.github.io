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
        <p className="Home-text Home-smallText" style={{ fontSize: "15px" }}>
          Also a Southern California girl (born and raised!), diehard fan of My
          Chemical Romance, <br />
          and proud resident (+ former hallchair) of{" "}
          <a
            href="https://5west.mit.edu/"
            target="_blank"
            rel="noreferrer noopener"
            style={{ zIndex: 1 }}
            className="link"
          >
            Fifth West
          </a>{" "}
          in MIT's{" "}
          <a
            href="https://ec.mit.edu/"
            target="_blank"
            rel="noreferrer noopener"
            style={{ zIndex: 1 }}
            className="link"
          >
            East Campus
          </a>
          .
        </p>
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
