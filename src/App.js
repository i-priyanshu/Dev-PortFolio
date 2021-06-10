import React from "react";
import AboutMe from "./components/About";
import Home from "./components/home";
import Skills from "./components/skillsParallax";
import Project from "./components/Projects";
import Contact from "./components/contact";
const App = () => {
  return (
    <div>
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
