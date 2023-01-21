import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projectsData";

export default function Projects() {
  const quickLessonPlanner = projectsData[0];

  return (
    <section id="projects" className="projects sec-pad">
      <div className="projects-container">
        <div className="heading-sec">
          <h2 className="heading-sec__main">Projects</h2>
          <p className="heading-sec__sub">
            All my projects include links to the code and live version. Click
            the button to learn more about each one.
          </p>
        </div>

        <div className="projects__content">
          <ProjectCard
            title={quickLessonPlanner.title}
            img={quickLessonPlanner.img}
            description={quickLessonPlanner.description}
          />
          <ProjectCard
            title={quickLessonPlanner.title}
            img={quickLessonPlanner.img}
            description={quickLessonPlanner.description}
          />
        </div>
      </div>
    </section>
  );
}
