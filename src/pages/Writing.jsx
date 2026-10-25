import React from "react";
import "./Home.css";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";
import iddtm from "../assets/IDDTM.pdf";
import genshinscript from "../assets/genshinspecscript.pdf";
import ersatz from "../assets/Ersatz_script.pdf";

const Writing = () => {
  return (
    <div>
      {/* <h1 className="Home-text">Writing page</h1> */}
      <h2>Game Writing</h2>
      <p className="Pages-paragraphText">
        I've written for many games, some of which are highlighted on the{" "}
        <NavLink className="link" to="/games">
          Games
        </NavLink>{" "}
        page. Below are some more examples of game related writing:
        <ul>
          <li>
            {" "}
            <a className="link" href={genshinscript} target="_blank">
              Spec Script (Genshin Impact)
            </a>{" "}
          </li>
          <li>
            <a className="link" href={genshinscript} target="_blank">
              Gameplay Script
            </a>
            , for this{" "}
            <a
              className="link"
              href="https://coco-adventurer.itch.io/ersatz"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              visual novel{" "}
            </a>
          </li>
        </ul>
      </p>
      <h2>Other Writing</h2>

      <p className="Pages-paragraphText">
        I've had poetry and prose published in MIT's Journal of Arts and
        Letters, Rune Literary Magazine, and my{" "}
        <a className="link" href={iddtm} target="_blank">
          memoir
        </a>{" "}
        won MIT's Isabelle De Courtivron Writing Prize for undergraduate writing
        on immigrant, diaspora, and bicultural experiences. Some of my high
        school writing was also recognized by the Scholastic Art and Writing
        Awards.
      </p>
      <p className="Pages-paragraphText">
        I write novels in the sci-fi/fantasy genre, with my interests especially
        lying in stories that combine social commentary, diverse representation,
        and a slowburn/enemies-to-lovers romance. Some of my favorite books are
        Leigh Bardugo's Ninth House trilogy and Maggie Stiefvater's Raven Cycle
        series. (And, of course, I grew up on the Hunger Games and Percy Jackson
        series.)
      </p>
    </div>
  );
};
export default Writing;
