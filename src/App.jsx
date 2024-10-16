import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { frontend } from "./data";
import { backend } from "./data";

const App = () => {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <section id="profile">
          <div className="section__pic__container first">
            <img src="/Images/img1.jpeg" alt="John Mark profile picture" />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I am</p>
            <h1 className="title">Dipo</h1>
            <p className="section__text__p2">A Frontend Developer</p>
            <div className="btn-container">
              <a href="/Images/Akinde Dipo.pdf">
                <button className="btn btn-color-2">Download CV</button>
              </a>

              <button
                className="btn btn-color-1"
                onClick={() => window.open("#contact", "_self")}
              >
                Contact Info
              </button>
            </div>
            <div id="socials-container">
              <a href="https://www.linkedlin.com">
                <img
                  src="/Images/linkedin.png"
                  alt="linkedlin link"
                  className="icon"
                />
              </a>
              <a href="https://www.github.com">
                <img
                  src="/Images/github.png"
                  alt="github link"
                  className="icon"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="section__pic__container">
              <img
                src="/Images/img1.jpeg"
                alt="Profile picture"
                className="about-pic"
              />
            </div>
            <div className="about-details-container">
              <div className="about-containers second">
                <div className="details-container">
                  <img
                    src="/Images/experience.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <h3>Experience</h3>
                  <p>
                    1+ years <br />
                    Frontend Development
                  </p>
                </div>
                <div className="details-container">
                  <img
                    src="/Images/education.png"
                    alt="Education icon"
                    className="icon"
                  />
                  <h3>Education</h3>
                  <p>
                    University Of Lagos Bachelors Degree in Civil Engineering
                    <br />.
                  </p>
                </div>
              </div>
              <div className="text-container">
                <p>
                  As a proficient front-end web developer, I specialize in
                  creating responsive, user-friendly websites and applications.
                  My expertise lies in React, CSS, HTML, and JavaScript,
                  allowing me to build dynamic and engaging interfaces. Whether
                  you need a custom website, a single-page application, or
                  enhancements to your existing site, I am committed to
                  delivering high-quality code and a seamless user experience.
                  Let’s collaborate to bring your vision to life!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="experience">
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>

              <article className="inside-article">
                {frontend.map((front) => {
                  const { id, img, software, level } = front;
                  return (
                    <div key={id} className="experience-item">
                      <img src={img} alt="checkmark" className="icon" />
                      <div>
                        <h3>{software}</h3>
                        <p>{level}</p>
                      </div>
                    </div>
                  );
                })}
              </article>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article className="inside-article2">
                  {backend.map((front) => {
                    const { id, img, software, level } = front;
                    return (
                      <div key={id} className="experience-item">
                        <img src={img} alt="checkmark" className="icon" />
                        <div>
                          <h3>{software}</h3>
                          <p>{level}</p>
                        </div>
                      </div>
                    );
                  })}
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <p className="section__text__p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container color-container">
                <div className="article-container">
                  <img
                    src="/Images/img2.png"
                    alt="Project 1"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  Project One
                </h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() =>
                      window.open("https://github.com/DippsytheDev/MakeupByBim")
                    }
                  >
                    Github
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.open("https://www.makeupbybims.com")}
                  >
                    Live Demo
                  </button>
                </div>
              </div>

              <div className="details-container color-container">
                <div className="article-container">
                  <img
                    src="/Images/img3.png"
                    alt="Project 1"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  Project Two
                </h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() =>
                      window.open(
                        "https://github.com/DippsytheDev/Portfolio-Website"
                      )
                    }
                  >
                    Github
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() =>
                      window.open(
                        "https://portfolio-website-green-nu.vercel.app"
                      )
                    }
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img
                src="/Images/email.png"
                alt="Email icon"
                className="icon contact-icon email-icon"
              />
              <p>
                <a href="mailto:akindedipo@gmail.com">akindedipo@gmail.com</a>
              </p>
            </div>
            <div className="contact-info-container">
              <img
                src="/Images/linkedin.png"
                alt="LinkedIn icon"
                className="icon contact-icon"
              />
              <p>
                <a href="https://www.linkedin.com">LinkedIn</a>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default App;
