import React from "react";
import "./Home.css";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";

import kod_ogg from "../assets/kiss of death.ogg";
import kod_mp3 from "../assets/kiss of death.mp3";
import atd_ogg from "../assets/amused to death.ogg";
import atd_mp3 from "../assets/amused to death.mp3";
import ers_ogg from "../assets/mirror game wip-consolidated.ogg";
import ers_mp3 from "../assets/mirror game wip-consolidated.mp3";
import wcc_mp3 from "..assets/catcafe_bgmusic.mp3";

const Music = () => {
  return (
    <div>
      {/* <h1 className="Home-text">Music page</h1> */}
      {/* <h2>My Background</h2> */}
      <p className="Pages-paragraphText">
        My music journey began with violin lessons in 3rd grade and piano soon
        after. While I quit piano four years later, I continued violin
        seriously, joining several youth orchestras including the Pacific
        Symphony Youth Orchestra (PSYO), with whom I toured Vienna and Prague in
        2023. I attended{" "}
        <a
          href="https://www.ocsarts.net/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Orange County School of the Arts (OCSA)
        </a>{" "}
        for high school, in the Instrumental Music: Strings & Orchestra
        conservatory. At OCSA, beyond my classical performance, theory, and
        composition classes, I also participated in the MONTAGE! pop performance
        group and had the opportunity to play in gigs around the Orange County
        area. These days, I play violin in the{" "}
        <a
          href="https://youtube.com/@mitvgo?si=QYt448FaDn5cca8H"
          target="_blank"
          rel="noreferrer noopener"
        >
          MIT Video Game Orchestra
        </a>
        , which I also serve on the executive board of, and I'm a TA for an MIT
        music theory class. I also love composing music for my own games, some
        of which I've featured below.
      </p>

      <h2>Recent Compositions</h2>

      <h4>Kiss of Death</h4>
      <section className="music">
        <audio controls>
          <source src={kod_ogg} type="audio/ogg" />
          <source src={kod_mp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <aside>
          All I had was Musescore4 and a dream. Made for CDA, one of the{" "}
          <NavLink to="/games">games highligted here</NavLink>. This is probably
          my favorite song from that game, unsurprising given where it shows up
          in game.
        </aside>
      </section>

      <h4>Amused to Death</h4>
      <section className="music">
        <audio controls>
          <source src={atd_ogg} type="audio/ogg" />
          <source src={atd_mp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <aside>
          Made for the same game as above, if "Death" didn't give it away. This
          was the final boss theme (and a not-so-subtle reference to Neil
          Postman's essay. Shoutout CMS.100 Introduction to Media Studies).
        </aside>
      </section>

      <h4>Ersatz</h4>
      <section className="music">
        <audio controls>
          <source src={ers_ogg} type="audio/ogg" />
          <source src={ers_mp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <aside>
          First time using the big boy DAW Reaper. Made for{" "}
          <a
            href="https://coco-adventurer.itch.io/ersatz"
            target="_blank"
            rel="noreferrer noopener"
          >
            this visual novel
          </a>
          . I just wanted an excuse to mess around with echoes and reverb tbh.
        </aside>
      </section>

      <h4>Weird Cat Cafe</h4>
      <section className="music">
        <audio controls>
          <source src={wcc_mp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <aside>
          Wrote in one day (on Reaper) for an MIT Web.Lab project. Was going for
          lo-fi + cats vibe.
        </aside>
      </section>
    </div>
  );
};
export default Music;
