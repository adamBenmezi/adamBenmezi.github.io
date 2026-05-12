import React, { useEffect } from "react";
import "./App.css";
import { initJQueryLogic } from "./script.js";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Formation from "./components/Formation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    initJQueryLogic();
  }, []);

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Formation />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
