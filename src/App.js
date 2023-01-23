import React from "react";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/queries.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
