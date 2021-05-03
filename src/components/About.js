import React from "react";

import styled from "styled-components";

const AboutMe = () => {
  return (
    <div>
      <AboutHeader>About Me </AboutHeader>
      <AboutInfo>
        <img
          src="https://avatars.githubusercontent.com/u/70953098?v=4"
          alt="dsfsf"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          reprehenderit?
        </p>
      </AboutInfo>
    </div>
  );
};

const AboutHeader = styled.h1`
  text-align: center;
`;

const AboutInfo = styled.div`
  background: #2e2e2e;
  transform: rotate(1.3deg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
  > div:first-child {
    margin-right: 10%;
  }
  p {
    color: #f8f8f8;
  }
`;

export default AboutMe;
