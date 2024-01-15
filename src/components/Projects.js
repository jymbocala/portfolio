import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projectsData";

export default function Projects() {
  const quickLessonPlannerData = projectsData[0];
  const picsomeData = projectsData[1];
  const porfolioData = projectsData[2];
  const tenziesData = projectsData[3];
  const notedData = projectsData[4];
  const urbanStyleXData = projectsData[5];
  const eatTheFrogData = projectsData[6];

  return (
    <section id="projects" className="projects sec-pad">
      <div className="projects-container">
        <div className="heading-sec">
          <h2 className="heading-sec__main heading">Projects</h2>
          <p className="heading-sec__sub text-grey">
            All my projects include links to the live version of the site. See
            it in action!
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jymbocala"
              className="heading-sec__sub text-grey github-cta"
            >
              View all my projects on my GitHub
            </a>
          </p>
        </div>

        <div className="projects__content">
          <ProjectCard
            title={eatTheFrogData.title}
            img={eatTheFrogData.img}
            url={eatTheFrogData.url}
            codeUrl={eatTheFrogData.codeUrl}
            description={eatTheFrogData.description}
          />
          <ProjectCard
            title={notedData.title}
            img={notedData.img}
            url={notedData.url}
            codeUrl={quickLessonPlannerData.codeUrl}
            description={notedData.description}
          />
          <ProjectCard
            title={urbanStyleXData.title}
            img={urbanStyleXData.img}
            url={urbanStyleXData.url}
            codeUrl={urbanStyleXData.codeUrl}
            description={urbanStyleXData.description}
          />
          {/* <ProjectCard
            title={quickLessonPlannerData.title}
            img={quickLessonPlannerData.img}
            url={quickLessonPlannerData.url}
            codeUrl={quickLessonPlannerData.codeUrl}
            description={quickLessonPlannerData.description}
          /> */}
          {/* <ProjectCard
            title={picsomeData.title}
            img={picsomeData.img}
            url={picsomeData.url}
            codeUrl={picsomeData.codeUrl}
            description={picsomeData.description}
          /> */}
          <ProjectCard
            title={porfolioData.title}
            img={porfolioData.img}
            url={porfolioData.url}
            codeUrl={porfolioData.codeUrl}
            description={porfolioData.description}
          />
          <ProjectCard
            title={tenziesData.title}
            img={tenziesData.img}
            url={tenziesData.url}
            codeUrl={tenziesData.codeUrl}
            description={tenziesData.description}
          />
          
        </div>
      </div>
    </section>
  );
}
