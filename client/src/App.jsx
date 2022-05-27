import { useEffect, useState } from "react";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import { connection } from "./connection";

const App = () => {
  const [skills, setSkills] = useState([]);

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
    getSkills();
  }, []);

  return (
    <>
      <Nav />
      <About />
      {skills?.length > 0 ? (
        <>
          <Skills skills={skills} /> 
          {/* <Portfolio /> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
