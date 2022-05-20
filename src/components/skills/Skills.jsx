import React from "react";
import "./skills.scss";
import BlobWrapper from "./BlobWrapper";
import PgLangWrapper from "./PgLangWrapper";

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-content">
        <BlobWrapper />
        <PgLangWrapper />
      </div>
    </div>
  );
};

export default Skills;