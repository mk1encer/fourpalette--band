import React from "react";
import Nav from './Nav';
import main from "./images/fpband.jpg";

function About() {
    return (
      <div id="init">
        <Nav/>
        <div id="content">
          <img id="imgcontent" src={main} alt="main" />
        </div>
        <div id="footer">Copyright Minseok Kim</div>
      </div>
    );
  }
  
  export default About;
  