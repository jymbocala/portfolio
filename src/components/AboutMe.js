import React from "react";

export default function AboutMe() {
  return (
    <section className="about sec-pad" id="about">
      <div className="about-main-cont">
        <div className="heading-sec">
          <h2 className="heading heading-sec__main">About Me</h2>
          <p className="heading-sec__sub">
            I'm a frontend developer based out of Melbourne, Australia. I love
            building webpages that solve real-world problems, and that are
            delightful to use. My specialities include React JS and Redux.
          </p>
        </div>

        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>

            <div className="about__content-para">
              <p>
                I have a Bachelor of Arts/Bachelor of Education in Business
                Studies and Commerce and a background in high school teaching. I
                am now pursuing a career in front-end development and enjoy
                learning new concepts, libraries and frameworks. I have
                transferable skills in problem-solving, communication,
                leadership and time management. I am also looking for new
                opportunities to collaborate and make an impact.
              </p>
              <p>
                Outside of work, I enjoy spending time with friends and family,
                and playing tennis and badminton. I am continuously exploring
                new technologies and methodologies to enhance my skillset and be
                a valuable asset to any organization. Additionally, I am a
                lifelong learner and always strive to improve and adapt to new
                challenges.
              </p>
            </div>

            <a href="./#contact" className="content-main__contact-btn">
              Contact
            </a>
          </div>

          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div>
                <img src="images/icons/html-1.svg" alt="html logo" width={25} />
                <p>HTML5</p>
              </div>
              <div>
                <img src="images/icons/css-3.svg" alt="css logo" width={25} />
                <p>CSS3</p>
              </div>
              <div>
                <img
                  src="images/icons/javascript-1.svg"
                  alt="javascript logo"
                  width={25}
                />
                <p>Javascript</p>
              </div>
              <div>
                <img
                  src="images/icons/react-2.svg"
                  alt="react logo"
                  width={25}
                />
                <p>React</p>
              </div>
              <div>
                <img
                  src="images/icons/nodejs-icon.svg"
                  alt="node logo"
                  width={25}
                />
                <p>Node.js</p>
              </div>
              <div>
                <img
                  src="images/icons/express-109.svg"
                  alt="express logo"
                  width={25}
                />
                <p>Express.js</p>
              </div>
              <div>
                <img src="images/icons/sass-1.svg" alt="sass logo" width={25} />
                <p>SASS</p>
              </div>
              <div>
                <img
                  src="images/icons/bootstrap-5-1.svg"
                  alt="bootstrap logo"
                  width={25}
                />
                <p>Bootstrap</p>
              </div>
              <div>
                <img
                  src="images/icons/webpack.svg"
                  alt="webpack logo"
                  width={25}
                />
                <p>Webpack</p>
              </div>
              <div>
                <img src="images/icons/jest-2.svg" alt="jest logo" width={25} />
                <p>Jest</p>
              </div>
              <div>
                <img
                  src="images/icons/git-icon.svg"
                  alt="git logo"
                  width={25}
                />
                <p>Git</p>
              </div>
              <div>
                <img
                  src="images/icons/visual-studio-code-1.svg"
                  alt="vs code logo"
                  width={25}
                />
                <p>VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
