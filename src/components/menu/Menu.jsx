import React from "react";
import "./menu.scss";
import logo from "../../assets/purple-logo.png";
import MobileNavigation from "../mobile-nav/MobileNavigation";

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-wrapper-child logo-wrapper">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-wrapper-child menu-list">
        <a href="" className="m-3">
          About
        </a>
        <a href="" className="m-3">
          Skills
        </a>
        <a href="" className="m-3">
          Portfolio
        </a>
        <a href="" className="m-3">
          Contact
        </a>
        <div className="mobile-nav-wrapper">
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
};

export default Menu;
