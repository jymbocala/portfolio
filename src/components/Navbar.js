import React from "react";

export default function Navbar() {
  function toggleHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav__menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  return (
    <header>
      <div className="nav">
        <div className="nav__logo-group">
          <img src="images/hero-profile3.png" width={60} alt="jym bocala profile" />
          <p>{"<jymintech>"}</p>
        </div>

        <ul className="nav__menu">
          <li className="menu__item">
            <a
              href="#home"
              className="menu__item-link"
              onClick={toggleHamburger}
            >
              Home
            </a>
          </li>
          <li className="menu__item">
            <a href="#projects" className="menu__item-link" onClick={toggleHamburger}>
              Projects
            </a>
          </li>
          <li className="menu__item">
            <a href="#about-me" className="menu__item-link" onClick={toggleHamburger}>
              About Me
            </a>
          </li>
          <li className="menu__item">
            <a href="#contact-me" className="menu__item-link" onClick={toggleHamburger}>
              Contact Me
            </a>
          </li>
          <li className="menu__item">
            <a
              href="./Jym_Bocala_CV.pdf"
              className="menu__item-link"
              download="Jym_Bocala_CV.pdf"
              target="_blank"
            >
              <button className="download-btn">
                <i className="ri-download-2-fill download-icon"></i>
                CV
              </button>
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleHamburger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}
