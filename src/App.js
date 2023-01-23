import React from "react";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/queries.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <section id="contact" className="contact sec-pad">
          <div className="contacts-container">
            <div className="heading-sec">
              <h2 className="heading-sec__main heading">Contact</h2>
              <p className="heading-sec__sub">
                Please reach out if you have any questions! Send me an email at
                jym.bocala@gmail.com or call me directly on (+61) 422 672 865.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
