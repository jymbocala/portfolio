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
        <p>{props.description}</p>
        <div className="project-card__btn-cont">
          <a href={props.url} target="_blank">
            LIVE
          </a>
          {props.codeUrl != "" && (
            <a href={props.codeUrl} target="_blank">
              CODE
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
