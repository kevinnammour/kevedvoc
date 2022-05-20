import React from "react";
import "./about.scss";
import image from "../../assets/image.webp";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <div className="desc-wrapper">
          <h1 className="desc-header">Hi, I'm Kevin Nammour</h1>
          <p className="desc-text mt-3">
            I am a Full-Stack developer, tech enthusiast and open-source
            advocate.
          </p>
          <div className="btns mt-4">
            <button className="lets-talk">
              <span className="me-1">Let's talk</span>{" "}
              <FaRegPaperPlane className="icon" />
            </button>
          </div>
          <div className="social-media mt-5">
            <span>Check out my</span>
            <a
              href="https://www.linkedin.com/in/kevinnammour/"
              className="ms-3 me-3"
            >
              <IoLogoLinkedin className="sm-link linkedin" />
            </a>
            <a href="https://github.com/kevinnammour" className="me-3">
              <IoLogoGithub className="sm-link github" />
            </a>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;