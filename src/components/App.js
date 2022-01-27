import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/App.css";
import About from "./About";
import Nav from './Nav';

function App() {
  return (
    <div>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
