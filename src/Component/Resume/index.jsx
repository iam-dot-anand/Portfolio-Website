import React from "react";
import pdf from "../../Assets/Anand_Resume.pdf";
import "./index.css";

export const Resume = () => {
  return (
    <div className="d-flex flex-column flex-md-row container mb-5 ">
      <div className="pdf-container-wrapper flex-grow-1 mb-4 mb-md-0">
        <iframe
          className="pdf-container w-100 h-100"
          src={pdf}
          title="Resume"
        ></iframe>
      </div>
    
      <div className="text-section ms-md-4">
        <p>
        Hi!  My name is Anand Vishwakarma, and I am from Ghazipur, Uttar Pradesh. I recently graduated from <b>ABES Engineering College</b>, Ghaziabad (2024).
        </p>
        <p >
          I have a strong foundation in C++, Data
          Structures, and Algorithms, along with hands-on experience in MERN
          stack development using React JS, Node.js, and MongoDB. I am
          passionate about building responsive web applications and eager to
          apply my skills in real-world projects. Always motivated to learn new
          technologies and contribute to team success.
        </p>
      </div>
    </div>
  );
};
