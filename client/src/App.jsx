import { useEffect, useState } from "react";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import { connection } from "./connection";

const App = () => {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      const query = '*[_type == "skills"]';
      connection
        .fetch(query)
        .then((data) => {
          data = data.sort((a, b) => (a.index > b.index ? 1 : -1));
          return data;
        })
        .then((data) => setSkills(data));
    };

    const getProjects = async () => {
      const query = '*[_type == "projects"]';
      connection
        .fetch(query)
        .then((data) => {
          data = data.sort((a, b) => (a.index > b.index ? 1 : -1));
          return data;
        })
        .then((data) => {
          setProjects(data);
        });
    };

    getSkills();
    getProjects();
  }, []);

  return (
    <>
      <Nav />
      <About />
      {skills?.length > 0 ? (
        <>
          <Skills skills={skills} />
        </>
      ) : (
        <></>
      )}
      {projects?.length > 0 ? (
        <>
          <Portfolio projects={projects} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
