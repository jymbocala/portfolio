import React from "react";
import "../projectsData";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      {/* <img /> */}
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <button>Router Link</button>
    </div>
  );
}
