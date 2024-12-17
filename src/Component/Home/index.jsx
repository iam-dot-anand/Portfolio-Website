import React from "react";
import "./index.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AnandImg from "../../Assets/AnandImg.jpg";
import TabIcon from "../TabIcon";

export const Home = () => {
  return (
    <div className="bg">
      <div className="d-flex px-5 justify-content-between align-items-center container rev_Img py-5">
        <div className="left w-50">
          <div className="intro_text">
            <p className="mb-0">Hy! I am</p>
            <p className="mb-0">Anand Vishwakarma</p>
            <p className="">
              Looking for a job opportunity in Software Development
            </p>
          </div>
          <div>
            <a href="mailto:anandvishwakarma0052@gmail.com" title="Hire Me">
              <button className="hire_btn">Hire Me</button>
            </a>
          </div>
          <div className="mt-2">
            <ul className="d-flex justify-content-between list-Style w-75 fs-1 pointer">
              <li>
                <TabIcon
                  link={"https://www.linkedin.com/in/anand-vishwa"}
                  title={"LinkedIn"}
                  Icon={<FaLinkedinIn />}
                />
              </li>
              <li>
                <TabIcon
                  link={"https://github.com/iam-dot-anand?tab=repositories"}
                  title={"GitHub"}
                  Icon={<FaGithub />}
                />
              </li>
              <li>
                <TabIcon
                  link={"mailto:anandvishwakarma0052@gmail.com"}
                  title={"Send an email"}
                  Icon={<SiGmail />}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <img alt="Anand_Image" src={AnandImg} className="img_Bg" />
        </div>
      </div>
    </div>
  );
};
