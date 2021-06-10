import React from "react";
import Homesvg from "../SVGs/Homesvg.svg";
import { motion } from "framer-motion";
import "../styles/home.scss";
import HomeCard from "./HomeCard";
import Lottie from "react-lottie";
import animationData from "../lottie/63921-developer.json";
import { Hidden } from "react-grid-system";
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "",
    },
  };
  return (
    <div className="Home">
      <div className="front">
        {/* <img src={Homesvg} alt="" className="home_svg" /> */}
        <Hidden sm xs>
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, type: "spring", stiffness: "200" }}
            animate={{ opacity: 1, y: 0 }}
            className="homeSvg"
          >
            <Lottie options={defaultOptions} height={500} width={500} />
          </motion.span>
        </Hidden>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, y: 0 }}
          className="intro"
        >
          <motion.p className="Hi_tag subtitles">Hello, World</motion.p>
          <motion.p className="Hi_tag subtitles">I am</motion.p>

          <motion.h1
            initial={{ x: -100 }}
            transition={{ duration: 1.5, type: "spring" }}
            animate={{ x: 0 }}
            className="Name"
          >
            PRIYANSHU<span style={{ color: "#7350E6" }}></span>
          </motion.h1>
          <motion.p className="work_tag subtitles">A Web Developer</motion.p>
        </motion.div>
      </div>
      <HomeCard />
    </div>
  );
};

export default Home;
