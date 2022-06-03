import React from "react";
import "./portfolio.scss";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { urlFor } from "../../connection";

const Portfolio = (props) => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-content">
        <h1 className="header">Portfolio</h1>
        <div className="projects-wrapper mt-3">
          {props?.projects?.length > 0 ? (
            props?.projects?.map((project) => {
              return (
                <div className="project" key={project.index}>
                  <img src={urlFor(project.imageUrl)} alt={project.title} />
                  <div className="text">
                    <h2>{project.title}</h2>
                    <p className="mt-3">{project.description}</p>
                    {project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target={"_blank"}
                        rel="noopener noreferrer"
                      >
                        <IoOpenOutline className="demo mt-2" />
                      </a>
                    ) : (
                      <></>
                    )}
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target={"_blank"}
                        rel="noopener noreferrer"
                      >
                        <FiGithub
                          className={
                            project.demoLink
                              ? "github ms-3 mt-2"
                              : "github mt-2"
                          }
                        />
                      </a>
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
          <p className="other-projects mt-5 text-center">
            Check my{" "}
            <a
              href="https://github.com/kevinnammour"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              github
            </a>{" "}
            to see other noteworthy projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
