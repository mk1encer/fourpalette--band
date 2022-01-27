import React from "react";
import Nav from './Nav';
import background from "./images/background.jpg";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";

function About() {
    return (
      <div id="init">
        <Nav/>
        <div className="about">
          <div id="item" className="outer">
            <img className="outer-image" src={background} alt="profile-image" />
              <div className="inner">
              <img className="inner-image"  src={one} alt="profile-image" />
              <img className="inner-image"  src={two} alt="profile-image" />
              <img className="inner-image"  src={three} alt="profile-image" />
              </div>
          </div>
          <div id="item" className="introduce">소개</div>
        </div>
      </div>
    );
  }
  
  export default About;
  