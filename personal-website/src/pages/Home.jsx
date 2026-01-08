import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg">
      <h1 className="Home-text">Hello, world!</h1>
      <p className="Home-text">
        One sentence bio and contacts
        {
          " (actually maybe contacts is in footer on every page? along w substack)"
        }
      </p>
    </div>
  );
};
export default Home;
