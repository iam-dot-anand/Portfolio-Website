import React from "react";
import "./index.css";
import { SiMongodb, SiExpress, SiRedux,SiMysql } from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaHtml5,FaPython,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { Resume } from "../Resume";

export const About = () => {
  return (
    <div className="about-section gradient " id="about">
      <div className="container ">
        <h1 className="text-white text-center mb-4">About Me</h1>
        <Resume/>
        <h1 className="text-white text-center mb-4">Tools & Technologies</h1>
        <div className="row justify-content-center  my-4">
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <SiMongodb className="icon text-success" />
            <p>MONGODB</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <SiExpress className="icon text-light" />
            <p>EXPRESS</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <FaReact className="icon text-primary" />
            <p>REACT</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <FaNodeJs className="icon text-success" />
            <p>NODEJS</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <SiRedux className="icon" style={{color:"#593d88"}}/>
            <p>REDUX TOOLKIT</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <FaHtml5 className="icon text-primary" />
            <p>HTML</p>
          </div>
        </div>

        <div className="row justify-content-center my-4">
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <IoLogoCss3 className="icon text-primary" />
            <p>CSS</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <FaBootstrap className="icon " style={{color:"#6f42c1"}}/>
            <p>BOOTSTRAP</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <IoLogoJavascript className="icon text-warning" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <FaPython className="icon text-warning-emphasis" />
            <p>Python</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <TbBrandCpp className="icon" />
            <p>C++</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <SiMysql className="icon text-info-emphasis" />
            <p>MySQL</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <FaGitAlt className="icon text-danger" />
            <p>GIT</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-center">
            <VscVscode className="icon text-primary" />
            <p>VS CODE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
