import React from "react";

import styled from "styled-components";

const AboutMe = () => {
  return (
    <div>
      <AboutHeader>About Me </AboutHeader>
      <AboutBack>
        <AboutInfo>
          <AboutImg
            src="https://avatars.githubusercontent.com/u/70953098?v=4"
            alt="dsfsf"
          />
          <p>
            Hi, I'm Priyanshu Kumar, a passionate self-taught frontEnd web
            developer from India, I tend to make use of modern web technologies
            to build websites that look great, feel fantastic, and function
            correctly. I am especially focusing on Reactjs.
            <br />
            <br />I also do Graphic and UI designing. Since I love both
            programming and designing, I'm also interested in creating
            programmatic designs and creative coding projects.
          </p>
        </AboutInfo>
      </AboutBack>
    </div>
  );
};

const IWidth = window.innerWidth;
const Iheight = window.innerHeight;

const AboutHeader = styled.h1`
  text-align: center;
`;

const AboutBack = styled.div`
  background: #2e2e2e;
  transform: rotate(1.3deg);
  width: 100vw;
  margin-top: 10rem;
  padding-bottom: 1.3rem;
  @media (max-width: 768px) {
    transform: rotate(0deg);
  }
`;

const AboutInfo = styled.div`
  transform: rotate(-1.3deg);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #e6e6e6;
    margin-right: 10%;
    margin-left: 6%;
  }

  @media (max-width: 768px) {
    display: block;
    transform: rotate(0deg);
  }
`;

const AboutImg = styled.img`
  border-radius: 50%;
  width: ${IWidth / 10};
  height: ${Iheight / 10};
`;

export default AboutMe;
