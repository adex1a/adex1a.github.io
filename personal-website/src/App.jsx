// import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "@mantine/core/styles.layer.css";
import "./App.css";
import "./index.css";

import { Route, Routes } from "react-router-dom";

import NotFound from "./NotFound.jsx";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./pages/About.jsx";
import Music from "./pages/Music.jsx";
import Games from "./pages/Games.jsx";
import Writing from "./pages/Writing.jsx";

import { MantineProvider } from "@mantine/core";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <MantineProvider>
        <div className="App-container">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/games" element={<Games />} />
            <Route path="/music" element={<Music />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </MantineProvider>
    </>
  );
}

export default App;
