import React from "react";
import "./Home.css";
import "../App.css";
import "../index.css";

const Games = () => {
  return (
    <div>
      {/* <h1 className="Home-text">Games page</h1> */}
      <p className="Pages-paragraphText">
        I've been making games independently for nearly four years now, starting
        in 2022 with the COSMOS Game Design summer program and continuing
        through 2024, when I was chosen to be an Entertainment Software
        Association Scholar, to 2026, when I am attending the GDC Festival of
        Gaming. I've covered many roles in gamedev, from programming to music,
        though these days, I'm most interested in writing and narrative design.
        Below are some games I've been involved in relatively recently.
      </p>
      <h2>Highlighted Games</h2>
      <h4>
        <a href="https://adexia.itch.io/cirque-des-animaux" target="_blank">
          Cirque des Animaux
        </a>
      </h4>
      <section className="music">
        <img
          src="src/assets/cda_sc.png"
          alt="A screenshot of the main character, Kat, thinking about how handsome the villain is."
        />
        <aside className="Pages-paragraphText">
          A dark fantasy RPG that placed #1 for Story and #4 Overall in the
          Themed Horror Game Jam 21 on itch.
        </aside>
      </section>

      <h4>
        <a href="https://cinnamew.itch.io/dermimis" target="_blank">
          Dermimi's
        </a>
      </h4>
      <section className="music">
        <img
          src="src/assets/dermimis_sc.png"
          alt="A screenshot of the main character, Mimi, and her shy girlfriend, Domo."
        />
        <p className="Pages-paragraphText">
          A dreamy, sapphic visual novel that placed #7 Overall out of over 200
          entries in the 2024 Winter MelonJam on itch.
        </p>
      </section>

      <h4>
        <a href="https://adexia.itch.io/the-love-application" target="_blank">
          The Love Application
        </a>
      </h4>
      <section className="music">
        <img
          src="src/assets/tla_sc.png"
          alt="A screenshot of the main character, Stacy, with her best friend, Mia."
        />
        <p className="Pages-paragraphText">
          A wholesome matchmaking-sim visual novel, made in 72 hours for the
          2023 Winter MelonJam on itch.
        </p>
      </section>

      {/*https://cinnamew.itch.io/dermimis
      https://adexia.itch.io/cirque-des-animaux
      https://adexia.itch.io/ost-cirque-des-animaux
      https://adexia.itch.io/the-love-application*/}
      <br />
      <p className="Home-smallText">
        See all my published games on my{" "}
        <a href="https://adexia.itch.io/" target="_blank">
          itch page
        </a>
        !
      </p>
    </div>
  );
};
export default Games;
