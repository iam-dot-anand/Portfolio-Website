import React from "react";

export default function TabIcon({title,link,Icon}) {
  return (
      <a
        className="text-light hoverEffect"
        href={link}
        target="_blank"
        rel="noreferrer"
        title={title}
      >
        {Icon}
      </a>
  );
}
