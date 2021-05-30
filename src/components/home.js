import React from "react";
import Homesvg from "../SVGs/Homesvg.svg";
import { motion } from "framer-motion";
import "../styles/home.scss";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <div className="Home">
      <div className="front">
        <img src={Homesvg} alt="" className="home_svg" />
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
            PRIYANSHU
          </motion.h1>
          <motion.p className="work_tag subtitles">A Web Developer</motion.p>
        </motion.div>
      </div>
      <HomeCard />
    </div>
  );
};

export default Home;
