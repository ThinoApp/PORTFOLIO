// import { useEffect } from "react";
import "./App.css";
import HeroContainer from "./containers/HeroContainer/HeroContainer";
import AnimatedCursor from "react-animated-cursor";
import MesCompetencesContainer from "./containers/MesCompetencesContainer/MesCompetencesContainer";
import WebProject from "./presentationals/WebProject/WebProject";
import WebProject2 from "./presentationals/WebProject2/WebProject2";
import WebProject3 from "./presentationals/WebProject3/WebProject3";
import FooterContainer from "./containers/FooterContainer/FooterContainer";
import GithubClone from "./presentationals/GithubClone/GithubClone";

function App() {
  // let timer: NodeJS.Timeout;

  //Fonction qui permet de créer un tableau entre 2 intervalles de nombre

  // useEffect(() => {
  //   let dots: { dot: HTMLDivElement; timer: NodeJS.Timeout }[] = [];
  //   const mouseMoveHandler = function (e: MouseEvent) {
  //     clearTimeout(dots[0]?.timer);
  //     const dot = document.createElement("div");
  //     dot.className = "dot-first";
  //     dot.style.left = e.pageX + "px";
  //     dot.style.top = e.pageY + "px";

  //     document.body.appendChild(dot);
  //     timer = setTimeout(function () {
  //       document.body.removeChild(dot);
  //       dots = dots.filter((d) => d.dot !== dot); // remove the dot from the array
  //     }, 200); // adjust time here
  //     dots.push({ dot, timer });
  //   };

  //   document.addEventListener("mousemove", mouseMoveHandler);
  // }, []);

  return (
    <div className="App">
      <AnimatedCursor color="0,0,0" />
      <HeroContainer />
      <MesCompetencesContainer />
      <h2 className="projects-title">Projects</h2>
      <WebProject />
      <WebProject2 />
      <WebProject3 />
      <GithubClone />
      <FooterContainer />
    </div>
  );
}

export default App;
