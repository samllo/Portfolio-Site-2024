import React from "react";
import "./intro.css";
import CanvasText from "../CanvasText/canvastext";
import profileImg from "../../assets/profile.png";
export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
      <span className="hello">Hello</span><br></br>
      <span className="introText">My Name is Sam</span><br></br>
      <span className="introText">I'm a Front-End Developer</span>
      </div>
     <CanvasText/>
    </section>
  );
}
