import React from "react";
import "./Home.css";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";

const Writing = () => {
  return (
    <div>
      {/* <h1 className="Home-text">Writing page</h1> */}
      {/* <h2>My Writing</h2> */}
      <p className="Pages-paragraphText">
        Whether it was poetry, plays, short stories, games, memoirs, or novels,
        I've always been a writer in some form or another. I've aspired to be an
        author or screenplay writer or game narrative designer at various points
        of my life, and nowadays I would love to do any combination of those
        things.
      </p>
      <p className="Pages-paragraphText">
        I've had poetry and prose published in MIT's Journal of Arts and
        Letters, Rune Literary Magazine, and my memoir won MIT's Isabelle De
        Courtivron Writing Prize for undergraduate writing on immigrant,
        diaspora, and bicultural experiences. Some of my high school writing was
        also recognized by the Scholastic Art and Writing Awards. Some of my
        game writing can be seen in my games on the{" "}
        <NavLink to="/games">Games</NavLink> page.
      </p>
      <p className="Pages-paragraphText">
        My prose fiction typically leans towards sci-fi/fantasy and romance,
        with my interests especially lying in stories that combine social
        commentary, diverse representation, and a slowburn/enemies-to-lovers
        romance. Some of my favorite books are Leigh Bardugo's Ninth House
        series and Maggie Stiefvater's Raven Cycle series. (And, of course, I
        grew up on the Hunger Games and Percy Jackson series.)
      </p>
    </div>
  );
};
export default Writing;
