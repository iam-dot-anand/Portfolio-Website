import React from "react";
import "./index.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import TabIcon from "../TabIcon";

export const Footer = () => {
  return (
    <div className="gradient d-flex flex-column justify-content-center align-items-center py-5">
      <span className="mb-3 d-flex justify-content-between align-items-center gap-1">
        <MdCopyright />
        Vishwa_Anand
      </span>
      <div className="d-flex align-items-center gap-5 fs-1 fw-bold ">
        <TabIcon
          link={"https://www.instagram.com/p/CsTQx3BPMzl/?igsh=MW4zNTA5bm03ZXYzZw=="}
          title={"Instagram"}
          Icon={<FaInstagram />}
        />
        <TabIcon
          link={"https://www.facebook.com/profile.php?id=100015623220795"}
          title={"Facebook"}
          Icon={<FaFacebookSquare />}
        />
        <TabIcon
          link={"https://x.com/AnandVishw22999?t=ywROFnBg85SBLrlUEunQJw&s=09"}
          title={"X."}
          Icon={<FaSquareXTwitter />}
        />
      </div>
    </div>
  );
};
