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
        through 2024, when I was chosen to be an ESA Foundation Scholar, to
        2026, when I am attending the GDC Festival of Gaming. I've covered many
        roles in gamedev, from programming to music, though these days I'm most
        interested in writing and narrative design. Below are some games I've
        developed relatively recently.
      </p>
      <h2>Highlighted Games</h2>
      <h4>
        <a
          href="https://adexia.itch.io/cirque-des-animaux"
          target="_blank"
          rel="noreferrer noopener"
        >
          Cirque des Animaux
        </a>
      </h4>
      <section className="music">
        <img
          src="src/assets/cda_sc.png"
          alt="A screenshot of the main character, Prince Kat, thinking about how handsome the villain is."
        />
        <aside>
          <ul>
            <li className="Pages-paragraphText">
              A dark fantasy RPG that placed #1 for Story and #4 Overall in the
              Themed Horror Game Jam 21 on itch.
            </li>
            <li className="Pages-paragraphText">
              My role: team lead, writer, composer
            </li>
          </ul>
          <p className="Pages-paragraphText">
            I came up with the idea for the game, assembled a small team, and
            wrote the entire ~17K word story, complete with multiple routes and
            endings. I then composed ten minutes worth of songs for the mostly
            strings and piano based{" "}
            <a
              href="https://adexia.itch.io/ost-cirque-des-animaux"
              target="_blank"
              rel="noreferrer noopener"
            >
              OST
            </a>
            . The story is about a hedonistic prince, Kat, getting trapped in a
            magic murder circus run by a troupemaster he can't help but fall in
            love with. I had a really fun time writing the toxic romance and
            coming up with my own version of mixed vampire/fae lore for the
            monsters in the troupe.
          </p>
        </aside>
      </section>

      <h4>
        <a
          href="https://cinnamew.itch.io/dermimis"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dermimi's
        </a>
      </h4>
      <section className="music">
        <img
          src="src/assets/dermimis_sc.png"
          alt="A screenshot of the main character, a taxidermist, and her shy girlfriend."
        />
        <aside>
          <ul>
            <li className="Pages-paragraphText">
              A dreamy, sapphic visual novel that placed #7 Overall out of over
              200 entries in the 2024 Winter MelonJam on itch.
            </li>
            <li className="Pages-paragraphText">My role: writer, playtester</li>
          </ul>
          <p className="Pages-paragraphText">
            I got to work on this game with my longtime friend (and roommate at
            the time), the super talented Cinnamew. It was my first signficant
            experience writing a canon story about someone else's characters,
            and that was certainly a challenge (especially since I was sick and
            visiting family in India at the time), but everything turned out
            well in the end, if the tens of thousands of plays we got is any
            indication. I really enjoyed writing subtle foreshadowing for the
            romance's toxicity, as well as the horror plot twist towards the
            end.
          </p>
        </aside>
      </section>

      <h4>
        <a
          href="https://adexia.itch.io/the-love-application"
          target="_blank"
          rel="noreferrer noopener"
        >
          The Love Application
        </a>
      </h4>
      <section className="music">
        <img
          src="src/assets/tla_sc.png"
          alt="A screenshot of the main character, an awkward high school senior, talking to her best friend."
        />
        <aside>
          <ul>
            <li className="Pages-paragraphText">
              A wholesome matchmaking-sim visual novel, made in 72 hours for the
              2023 Winter MelonJam on itch.
            </li>
            <li className="Pages-paragraphText">My role: programmer, writer</li>
          </ul>
          <p className="Pages-paragraphText">
            This game was definitely a test of my ability to crunch, as I had to
            write the entire script, including four distinct endings and many
            branching choices, and implement everything into Renpy within a mere
            three days. But I was quite happy with the final game, as the story,
            about a high schooler named Stacy creating a "boyfriend application"
            to find the best match for her best friend, captured the
            lighthearted, humorous tone I was going for, and I managed to code a
            pretty interesting gameplay mechanic where you get to evaluate and
            rate these boyfriend applications.
          </p>
        </aside>
      </section>

      <p className="Home-smallText">
        See all my published games on my{" "}
        <a
          href="https://adexia.itch.io/"
          target="_blank"
          rel="noreferrer noopener"
        >
          itch page
        </a>
        !
      </p>
    </div>
  );
};
export default Games;
