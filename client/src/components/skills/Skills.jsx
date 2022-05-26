import React from "react";
import "./skills.scss";
import { urlFor } from "../../connection";

const Skills = (props) => {
  return (
    <div className="skills-wrapper">
      <div className="skills-content mt-4 mb-3">
        <h1 className="header">Skills & Services</h1>
        <div className="skills-boxes mt-3">
          {props?.skills?.length > 0 ? (
            props?.skills?.map((skill) => {
              return (
                <div className="skill-box" key={skill._id}>
                  <img
                    src={urlFor(skill.imageUrl)}
                    alt="Skill"
                    className="skill-icon"
                  />
                  <h2 className="skill-header mt-3">{skill.category}</h2>
                  <p className="mt-3">{skill.description}</p>
                  <div>
                    {skill.tools.length > 0 ? (
                      skill.tools.map((tool) => {
                        return (
                          <img
                            className="tool-icon"
                            key={tool._key}
                            src={urlFor(tool)}
                            alt="Tool"
                          />
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
