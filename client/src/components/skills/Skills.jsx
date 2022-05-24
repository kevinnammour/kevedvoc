import React from "react";
import "./skills.scss";
import webApps from "../../assets/web-apps.webp";
import mobileApps from "../../assets/mobile-apps.webp";
import programming from "../../assets/programming.webp";
import database from "../../assets/database.webp";
import ux from "../../assets/ux.webp";
import otherTools from "../../assets/other-tools.webp";

const Skills = () => {

  return (
    <div className="skills-wrapper">
      <div className="skills-content mt-5 mb-5">
        <h1 className="header">Skills & Services</h1>
        <div className="skills-boxes mt-3">
          <div className="skill-box">
            <img className="skill-icon" src={webApps} alt="" />
            <h2 className="skill-header mt-4">Web development</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste explicabo delectus repellendus eum alias quaerat assumenda, reiciendis at quasi.
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={mobileApps} alt="" />
            <h2 className="skill-header mt-4">Mobile development</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste explicabo delectus repellendus eum alias quaerat assumenda, reiciendis at quasi.
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={database} alt="" />
            <h2 className="skill-header mt-4">Database</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste explicabo delectus repellendus eum alias quaerat assumenda, reiciendis at quasi.
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={ux} alt="" />
            <h2 className="skill-header mt-4">UI/UX design</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste explicabo delectus repellendus eum alias quaerat assumenda, reiciendis at quasi.
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={otherTools} alt="" />
            <h2 className="skill-header mt-4">Other tools</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste explicabo delectus repellendus eum alias quaerat assumenda, reiciendis at quasi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;