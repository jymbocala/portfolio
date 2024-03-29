import React from "react";
import "../projectsData";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img
        src={props.img}
        className="project-card__img"
        alt="website screenshot"
        loading="lazy"
      />
      <div className="project-card__content">
        <h3>{props.title}</h3>
        <p className="text-grey">{props.description}</p>
        <div className="project-card__btn-cont">
          {props.url !== "" && (
            <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">
            Live
            </a>
          )}
          {props.codeUrl !== "" && (
            <a href={props.codeUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
