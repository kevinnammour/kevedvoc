import "./global.scss";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Menu />
      <div className="content-wrapper">
        <About />
      </div>
    </>
  );
}

export default App;
