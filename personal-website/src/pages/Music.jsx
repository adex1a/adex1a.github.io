import React from "react";
import "./Home.css";

const Music = () => {
  return (
    <div>
      {/* <h1 className="Home-text">Music page</h1> */}
      <h2>My Background</h2>
      <p className="Music-text">
        My music journey began with violin lessons in 3rd grade, and piano soon
        after. While I quit piano four years later, I continued violin
        seriously, joining several youth orchestras and attending Orange County
        School of the Arts (OCSA) in the Instrumental Music: Strings & Orchestra
        conservatory.
      </p>

      <h2>My Compositions</h2>

      <h4>Kiss of Death</h4>
      <section className="music">
        <audio controls>
          <source src="src/assets/kiss of death.ogg" type="audio/ogg" />
          <source src="src/assets/kiss of death.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <aside>All I had was Musescore4 and a dream.</aside>
      </section>
      <h4>Amused to Death</h4>
      <section className="music">
        <audio controls>
          <source src="src/assets/amused to death.ogg" type="audio/ogg" />
          <source src="src/assets/amused to death.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <aside>Made for the same game, if "Death" didn't give it away.</aside>
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
        <aside>First time using the big boy DAW Reaper.</aside>
      </section>
    </div>
  );
};
export default Music;
