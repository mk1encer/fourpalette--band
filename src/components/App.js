import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/App.css";
import About from "./About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <div className="footer">&copy; Minseok Kim, Sunah Lee</div>
    </div>
  );
}

export default App;
