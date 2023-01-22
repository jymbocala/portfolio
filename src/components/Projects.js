import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projectsData";

export default function Projects() {
  const quickLessonPlannerData = projectsData[0];
  const picsomeData = projectsData[1];
  const porfolioData = projectsData[2];
  const tenziesData = projectsData[3];

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
            title={quickLessonPlannerData.title}
            img={quickLessonPlannerData.img}
            description={quickLessonPlannerData.description}
          />
          <ProjectCard
            title={picsomeData.title}
            img={picsomeData.img}
            description={picsomeData.description}
          />
          <ProjectCard
            title={porfolioData.title}
            img={porfolioData.img}
            description={porfolioData.description}
          />
          <ProjectCard
            title={tenziesData.title}
            img={tenziesData.img}
            description={tenziesData.description}
          />
        </div>
      </div>
    </section>
  );
}
