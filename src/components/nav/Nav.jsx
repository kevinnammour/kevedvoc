import React from "react";
import "./nav.scss";
import purpleLogo from "../../assets/purple-logo.webp";
import Resume from "../../assets/Resume.pdf";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-content">
        <div className="logo">
          <a href="/"><img src={purpleLogo} alt="" /></a>
        </div>
        <div className="links">
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contact</a></li>
            <li className="resume"><a href={Resume} download={true}>Resume</a></li>
          </ul>
          <BiMenuAltRight className="bi-menu-alt-right"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;