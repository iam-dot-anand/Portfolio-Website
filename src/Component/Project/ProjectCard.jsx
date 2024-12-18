import React from "react";
import { FaLink } from "react-icons/fa";
import "./index.css";

function ProjectCard({ project }) {
  console.log({ project });

  return (
    <div
      className={`${
        project.class === "odd" ? "project_card odd animation" : "project_card even animation"
      }`}
    >
      <div className="text-box ">
        <h2>
          {project.ProjectName}{" "}
          <a target="_blank" rel="noreferrer" href={project.link}>
            <FaLink />
          </a>
        </h2>
        <ul className="ul">
          {project.decs.map((item, indx) => (
            <li className="text" key={indx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
