import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero__content">
        <h1 className="heading-primary">Hey, My name is Jym Bocala</h1>
        <div className="hero__info">
          <p className="text-primary">
            I am a passionate frontend developer based in Melbourne, Australia. My speciality is in <strong>React JS</strong>, and i am passionate in upskilling both technical and non-technical skills.
          </p>
        </div>
        <button className="hero__cta">
          See my projectss
        </button>
      </div>

    </section>
  )
}