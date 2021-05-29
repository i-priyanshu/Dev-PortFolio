import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Hidden } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faJs,
  faHtml5,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

library.add(faJs, faHtml5, faReact, faNode);
const Wordclouds = () => {
  return (
    <Parallax
      y={["-350px", "-150px"]}
      slowerScrollRate={true}
      aria-hidden="true"
      className="skills__word-clouds"
    >
      <p style={{ top: 250, left: "30%", fontSize: 23 }}>HTML5</p>
      <p style={{ top: 0, left: 10, fontSize: 25 }}>Typescript</p>
      <p style={{ top: 200, left: "78%", fontSize: 14 }}>CSS3</p>
      <p style={{ top: 40, left: "87%", fontSize: 17 }}>Redux</p>
      <p style={{ top: "30%", left: "35%", fontSize: 18 }}>figma</p>
      <p style={{ top: 20, left: "60%", fontSize: 18 }}>Github</p>
      <p style={{ top: 380, left: "85%", fontSize: 18 }}>MongoDB</p>
      <p style={{ top: 300, left: "65%", fontSize: 19 }}>Firebase</p>
      <p style={{ top: 350, left: 150, fontSize: 20 }}>ES6</p>
      <p style={{ top: 120, left: "22%", fontSize: 14 }}>Web Sockets</p>
      <p style={{ top: 180, left: "45%", fontSize: 15 }}>Socket.io</p>
    </Parallax>
  );
};

const Skills = () => {
  return (
    <SkillsWrapper>
      <SkillHead>My Skillsets</SkillHead>
      <Flex>
        <FontAwesomeIcon icon={["fab", "html5"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "js"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "react"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "node"]} size="5x" />
      </Flex>
      <ParallaxProvider>
        <Hidden md xs sm lg>
          <Wordclouds />
        </Hidden>
      </ParallaxProvider>
    </SkillsWrapper>
  );
};

export default Skills;

const SkillHead = styled.h1`
  position: relative;
  color: #fff;
  text-align: center;
  z-index: 10;
  padding: 2rem;
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: blueviolet;
  padding: 2rem 0;
  z-index: 10;
`;

const SkillsWrapper = styled.section`
  position: relative;
  margin-top: 50px;
  .skills__word-clouds {
    p {
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      font-weight: 900;
      color: grey;
    }
    z-index: -1;
  }
`;
