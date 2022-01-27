import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import main from "./images/fpband.jpg";
import "../css/App.css";
import Nav from "./Nav";

function App() {
  return (
    <div id="init">
      <div id="head">
        <div id="header">
          <div id="header-logo">
            <img id="logo" src={logo} />
          </div>
          <Nav />
        </div>
      </div>
      <div id="content">
        <img id="imgcontent" src={main} alt="main" />
      </div>
      <div id="footer">Copyright Minseok Kim</div>
    </div>
  );
}

export default App;
