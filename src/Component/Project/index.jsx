import React from "react";
import "./index.css";
import ProjectCard from "./ProjectCard";
import { projectArr } from "../../utils/projectDetails";

export const Project = () => {
  return (
    <div className="gradient mobile-view pt-4" id="project">
      <h1 className="text-center">Projects</h1>
      <div className="timeline  container">
        {projectArr.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};
