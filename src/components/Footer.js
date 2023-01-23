import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jym-bocala-6339b4237/">
                <img
                  className="main-footer__icon"
                  src="images/footer-icons/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/jymintech">
                <img
                  className="main-footer__icon"
                  src="images/footer-icons/twitter-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/jymbocala">
                <img
                  className="main-footer__icon"
                  src="images/footer-icons/github-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Jym Bocala</h4>
            <p className="main-footer__short-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
              tempora explicabo quae quod deserunt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
