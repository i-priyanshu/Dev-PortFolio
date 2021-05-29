import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@material-ui/icons/GitHub";
import { motion } from "framer-motion";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <ProjectPage>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectCard>
        <ProjectDetail>
          <h2>Project Header</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
            ipsa?
          </p>
          <CardButton>
            <Button
              variant="contained"
              color="primary"
              href="#"
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="#"
              target="_blank"
              startIcon={<VideoLabelIcon />}
              style={{ margin: "1rem 1rem" }}
            >
              Live Preview
            </Button>
          </CardButton>
        </ProjectDetail>
        <ProjectPreview>
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            src="https://wallpaperaccess.com/full/3040338.jpg"
            alt="project_preview"
          />
          <CardSVg>
            <FontAwesomeIcon icon={["fab", "js"]} />
            <FontAwesomeIcon icon={["fab", "react"]} />
            <FontAwesomeIcon icon={["fab", "html5"]} />
          </CardSVg>
        </ProjectPreview>
      </ProjectCard>
    </ProjectPage>
  );
};

export default Projects;

//STYLE

const ProjectPage = styled.div`
  margin: 3rem;
`;

const ProjectTitle = styled.h1`
  text-align: center;
  color: snow;
  margin-top: 5rem;
`;

const ProjectCard = styled.div`
  position: relative;
  background: #2e2e2e;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: white;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectDetail = styled.div`
  padding: 50px;
  border-radius: 10px;
  min-height: 350px;
  width: 90%;
  p {
    line-height: 170%;
    min-height: 250px;
  }
  h2 {
    margin-bottom: 25px;
    font-family: "poppins";
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
  }
`;

const ProjectPreview = styled.div`
  position: relative;
  img {
    border-radius: 20px;
    width: 90%;
    height: auto;
  }
  @media (max-width: 1280px) {
    margin-top: 1rem;
    left: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.3rem;
    left: 1rem;
  }
`;

const CardButton = styled.div`
  @media (max-width: 800px) {
    display: flex;
  }
`;

const CardSVg = styled(motion.div)`
  svg {
    color: #6d83f2;
    margin-left: 1rem;
    font-size: 24px;
  }
  margin-top: 0.2rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
