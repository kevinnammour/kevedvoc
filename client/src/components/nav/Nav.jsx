import React from "react";
import "./nav.scss";
import purpleLogo from "../../assets/images/purple-logo.webp";
import Resume from "../../assets/pdfs/Resume.pdf";
import MobileNav from "../mobile-nav/MobileNav";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-content">
        <div className="logo">
          <a href="/">
            <img src={purpleLogo} alt="Purple Logo" />
          </a>
        </div>
        <div className="links">
          <div className="desktop">
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
            <a className="resume" href={Resume} download={true}>Resume</a>
          </div>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Nav;