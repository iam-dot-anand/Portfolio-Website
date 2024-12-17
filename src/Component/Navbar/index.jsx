import React, { useState } from "react";
import "./index.css";
import { MdOutlineToggleOff,MdOutlineToggleOn } from "react-icons/md";
import { Home } from "../Home";


const Navbar = () => {

  const [dark, setDark]= useState(true);
  const changeMode=()=>{
    setDark(!dark);
  }

  return (
    <div className="py-4 bg my-3" id="home">
      <div className="d-flex justify-content-between align-items-center container mobile">
        <div className="fs-4">
          <p><span className="fw-medium fs-1">AV |</span> Portfolio...</p>
        </div>
        <div className="w-50 hambarger">
          <ul className="nav-links list-Style d-flex justify-content-between align-items-center mb-0 fw-bolder fsize pointer">
            <li><a className="text-light hoverEffect" href="#home">Home</a></li>
            <li><a className="text-light hoverEffect" href="#about">About Me</a></li>
            <li><a className="text-light hoverEffect" href="#project">Projects</a></li>
            <li><a className="text-light hoverEffect" href="#contact">Contact</a></li>
            <li onClick={changeMode}>{dark ? <MdOutlineToggleOff className="fs-1"/> : <MdOutlineToggleOn className="fs-1 text-dark"/>}</li>
          </ul>
        </div>
      </div>  
      <Home/>
    </div>
  );
};

export default Navbar;
