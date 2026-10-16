import React from "react";
import "./Home.css";
import "../index.css";
import centralbank from "../assets/centralbank.pdf";
import discussionguide from "../assets/discussionguide.pdf";
import introguide from "../assets/introguide.pdf";
import remotedoc from "../assets/remotedoc.pdf";
import stepbystep from "../assets/stepbystep.pdf";

const About = () => {
  return (
    <div>
      <p className="Pages-paragraphText">
        {/* <h1 className="Home-text">About page</h1>
      <p>More in depth bio like school etc, and link to resume/cv? </p> */}
        Currently, I am an undergraduate student at Massachusetts Institute of
        Technology majoring in course 21E (Humanities and Engineering) and
        minoring in 21G/Japanese. 21E is basically a build-your-own-major
        combining one humanities and one engineering degree program of choice.
        My combination is{" "}
        <a
          className="link"
          href="https://cmsw.mit.edu/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Comparative Media Studies (CMS)
        </a>{" "}
        and Computer Science, which I chose due to my interests in video game
        development, human-computer interaction, and digital humanities. I find
        it to be the perfect program for a student as interdisciplinary as me.
      </p>
      <p className="Pages-paragraphText">
        Some of my relevant coursework includes:
        <ul>
          <li>
            6.1010 Fundamentals of Programming, 6.1210 Introduction to
            Algorithms, 6.1903 Low-Level Programming in C and Assembly,{" "}
            <a
              className="link"
              href="http://webdevelopment.mit.edu/"
              target="_blank"
              rel="noreferrer noopener"
            >
              6.9620 Web.Lab
            </a>
          </li>
          <li>
            CMS.301 Game Design Methods, CMS.618 Interactive Narrative, CMS.611
            Creating Video Games, CMS.307 Critical Worldbuilding
          </li>
          <li>
            21G.516 Japanese VI, 21G.594 Japanese Cinema, part of the 2026{" "}
            <a
              className="link"
              href="https://misti.mit.edu/japan"
              target="_blank"
              rel="noreferrer noopener"
            >
              MISTI Japan
            </a>{" "}
            cohort
          </li>
        </ul>
        {/* I've participated in MIT's{" "}
        <a
          className="link"
          href="https://urop.mit.edu/about/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Undergraduate Research Opportunities Program (UROP)
        </a>{" "} */}
      </p>
      <h2>Research</h2>
      <h4>
        <a
          className="link"
          href="https://gamelab.mit.edu/"
          target="_blank"
          rel="noreferrer noopener"
        >
          The Game Lab
        </a>
      </h4>
      <p className="Pages-paragraphText">
        I worked from January '25 to January '26 with Rik Eberhardt on the{" "}
        <a
          className="link"
          href="https://education.mit.edu/project/psims-participatory-simulations/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Participatory Simulations (pSims)
        </a>{" "}
        project, a series of classroom mobile games. I worked on two games:
        Tragedy of the Commons (ToC), which was about resource management and
        environmental conservation, and the unnamed Source Game, which was about
        news misinformation. For ToC, I wrote technical documentation and aided
        in playtesting sessions. In particular, I created a suite of specific,
        detailed guides on the game's usage and functionality, including new
        features, which can be seen below:
        <ul>
          <li>
            <a className="link" href={introguide} target="_blank">
              Introductory Guide
            </a>
          </li>
          <li>
            <a className="link" href={stepbystep} target="_blank">
              Step-by-Step Guide
            </a>
          </li>
          <li>
            <a className="link" href={discussionguide} target="_blank">
              Discussion Guide
            </a>
          </li>
          <li>
            <a className="link" href={centralbank} target="_blank">
              Central Bank Guide
            </a>
          </li>
          <li>
            <a className="link" href={remotedoc} target="_blank">
              Remote Game Guide
            </a>
          </li>
        </ul>
        For the Source Game, I helped prototype and then implement it using
        Typescript and React. I made several important features for that game
        including a dashboard for displaying and ranking news headlines, a quiz
        mechanic for students, a page for students to review the headlines
        they've viewed, and a page for students to create and post their own
        headlines.
      </p>
      <h4>
        <a
          className="link"
          href="https://tropetank.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          The Trope Tank
        </a>
      </h4>
      <p className="Pages-paragraphText">
        Most recently, I've been working with Dr. Nick Montfort, who was my
        professor for Interactive Narrative. Our work in Spring '26 and beyond
        is focused on historical computational story generation systems, and
        reimplementing miniatures of them through the Narrative Nubs project for
        preservation, artistic, and research purposes. We've also worked on
        adding new features to Dr. Montfort's own system,{" "}
        <a
          className="link"
          href="https://nickm.com/curveship/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Curveship
        </a>
        , which computationally models a story world and allows for the same
        underlying events to be narrated in different ways. My role has been
        primarily programming new Curveship features (such as passive voice
        sentences) using Javascript, creating new Nubs using Python, and reading
        and editing papers.
      </p>
    </div>
  );
};
export default About;
