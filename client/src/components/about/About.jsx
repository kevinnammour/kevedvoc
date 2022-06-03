import React from "react";
import "./about.scss";
import { FaRegPaperPlane } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";
import devVector from "../../assets/images/dev-vector.svg";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content pt-3">
        <div className="about-desc">
          <h1 className="header">Hi, I'm Kevin Nammour</h1>
          <p className="desc mt-3">
            I am a Full-Stack developer focusing on web and mobile app
            development. Currently, I'm a senior Computer Science student at the{" "}
            <a
              href="https://www.lau.edu.lb/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Lebanese American University
            </a>
            .
          </p>
          <div className="btns mt-4">
            <motion.button
              className="lets-talk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="me-1">Let's talk</span>{" "}
              <FaRegPaperPlane className="icon" />
            </motion.button>
          </div>
          <div className="social-media mt-4">
            <span>Check out my</span>
            <a
              href="https://www.linkedin.com/in/kevinnammour/"
              className="ms-2 me-2"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <GrLinkedinOption className="sm-link linkedin" />
            </a>
            <a
              href="https://github.com/kevinnammour"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="sm-link github" />
            </a>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={devVector} alt="Developer vector" />
        </div>
      </div>
    </div>
  );
};

export default About;
