import React from "react";
import "../projectsData";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.img} className="project-card__img" alt="website screenshot" loading="lazy"/>
      <div className="project-card__content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button>ROUTER LINK</button>
      </div>
    </div>
  );
}
