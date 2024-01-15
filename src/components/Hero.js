import React from "react";

export default function Hero() {
  return (
    <section className="hero sec-pad" id="home">
      <div className="hero__content">
        <h1 className="heading-primary">Hey, My name is Jym Bocala</h1>
        <div className="hero__info">
          <p className="text-primary">
            I am a passionate teacher turned software developer based in Melbourne, Australia.
            My speciality is in <strong>React JS</strong>, and I am passionate
            in upskilling both technical and non-technical skills.
          </p>
        </div>
        <a href="#projects" className="hero__cta">
          SEE MY PROJECTS
        </a>
      </div>
    </section>
  );
}
