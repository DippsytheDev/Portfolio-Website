import React from "react";
import "./Components.css";

const Footer = () => {
  return (
    <>
      <nav className="nav-links-container">
        <ul className="nav-links2">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <p className="copyright">
        Copyright &#169; 2024 Akinde Oladipupo. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
