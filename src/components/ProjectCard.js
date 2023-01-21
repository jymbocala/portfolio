import React from "react";
import "../projectsData";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.img} className="project-card__img" alt="website screenshot" loading="lazy"/>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <button>Router Link</button>
    </div>
  );
}
