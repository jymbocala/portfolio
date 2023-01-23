import React from "react";

export default function Footer() {
  return (
    <footer>
      
        <div className="footer__content">
          <div className="footer__content-socials">
            <h2 className="heading heading-lt">
              Social
            </h2>
            <div className="footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jym-bocala-6339b4237/">
                <img
                  className="footer__icon"
                  src="images/footer-icons/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/jymintech">
                <img
                  className="footer__icon"
                  src="images/footer-icons/twitter-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/jymbocala">
                <img
                  className="footer__icon"
                  src="images/footer-icons/github-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="footer__content-desc">
            <h4 className="heading heading-lt">Jym Bocala</h4>
            <p className="heading-lt">
            A showcase of my work, skills and experience as a Frontend Developer.
            </p>
          </div>
        </div>
      
    </footer>
  );
}
