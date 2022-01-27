import React from "react";
import { Link } from 'react-router-dom';
import logo from "./images/logo.png";

const Nav = () => {
  return (
    <div>
      <div id="head">
        <div id="header">
          <div id="header-logo">
            <img id="logo" src={logo} />
          </div>
          <Nav />
        </div>
      </div>
      <div id="navbar">
        <ul id="nav">
          <li id="eachmenu">
            <Link to="/">ABOUT</Link>
          </li>
          <li id="eachmenu">
            <Link to="/discography">DISCOGRAPHY</Link>
          </li>
          <li id="eachmenu">
            <Link to="/video">VIDEO</Link>
          </li>
          <li id="eachmenu">
            <Link to="/concert">CONCERT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
