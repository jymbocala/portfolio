import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
