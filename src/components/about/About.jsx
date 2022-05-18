import React from "react";
import "./about.scss";
import image from "../../assets/image.webp";
import { FaRegPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="desc-wrapper">
        <h1 className="desc-header">Hi, I'm Kevin Nammour</h1>
        <p className="desc-text mt-3">
          I am a Full-Stack developer, tech enthusiast and open-source advocate.
        </p>
        <div className="btns mt-5">
          <button className="lets-talk">
            <span className="me-1">Let's talk</span>{" "}
            <FaRegPaperPlane className="icon" />
          </button>
        </div>
        <div className="social-media mt-5">
          Check out my
        </div>
      </div>
      <div className="image-wrapper">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default About;
