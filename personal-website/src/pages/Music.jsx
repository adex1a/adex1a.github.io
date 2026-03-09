import React from "react";
import "./Home.css";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";

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
        <a href="https://www.ocsarts.net/" target="_blank">
          Orange County School of the Arts (OCSA)
        </a>{" "}
        for high school, in the Instrumental Music: Strings & Orchestra
        conservatory. At OCSA, beyond my classical performance, theory, and
        composition classes, I also participated in the MONTAGE! pop performance
        group and had the opportunity to play in gigs around the Orange County
        area. These days, I still play violin in the{" "}
        <a
          href="https://youtube.com/@mitvgo?si=QYt448FaDn5cca8H"
          target="_blank"
        >
          MIT Video Game Orchestra
        </a>
        , which I also serve on the executive board of; I also still love
        composing music for my own games.
      </p>

      <h2>My Compositions</h2>

      <h4>Kiss of Death</h4>
      <section className="music">
        <audio controls>
          <source src="src/assets/kiss of death.ogg" type="audio/ogg" />
          <source src="src/assets/kiss of death.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <aside>
          All I had was Musescore4 and a dream. Made for one of my{" "}
          <NavLink to="/games">games</NavLink>.
        </aside>
      </section>

      <h4>Amused to Death</h4>
      <section className="music">
        <audio controls>
          <source src="src/assets/amused to death.ogg" type="audio/ogg" />
          <source src="src/assets/amused to death.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <aside>
          Made for the same game as above, if "Death" didn't give it away.
        </aside>
      </section>

      <h4>Ersatz</h4>
      <section className="music">
        <audio controls>
          <source
            src="src/assets/mirror game wip-consolidated.ogg"
            type="audio/ogg"
          />
          <source
            src="src/assets/mirror game wip-consolidated.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <aside>
          First time using the big boy DAW Reaper. Made for{" "}
          <a href="https://coco-adventurer.itch.io/ersatz" target="_blank">
            this game
          </a>
          .
        </aside>
      </section>

      <h4>Weird Cat Cafe</h4>
      <section className="music">
        <audio controls>
          <source src="src/assets/catcafe_bgmusic.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <aside>Wrote in one day (on Reaper) for an MIT Web.Lab project.</aside>
      </section>
    </div>
  );
};
export default Music;
