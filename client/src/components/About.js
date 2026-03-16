import React from "react";
import "./About.css";
import profile from "../assests/profile.jpg.png";

function About() {
  return (
    <div className="about" id="about">

      <div className="about-container">

        <div className="about-image">
          <img src={profile} alt="profile" />
        </div>

        <div className="about-text">

          <h2>About Me</h2>

          <h4 className="tagline">
            Full Stack Developer | MERN Stack | Problem Solver
          </h4>

          <p>
            Hello! I'm Ankushi Vishwakarma, a third-year Software Engineering
            student with a strong interest in Full Stack Web Development.
            I enjoy building modern and scalable web applications using
            technologies such as React, Node.js, Express, and MongoDB.
          </p>

          <p>
            I have developed projects including a Quiz Application and an
            E-commerce platform where I implemented responsive UI,
            dynamic functionality, and backend integration.
          </p>

          <p>
            I am passionate about learning new technologies, writing clean
            code, and continuously improving my development skills. I am
            currently looking for opportunities where I can contribute,
            learn, and grow as a developer.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;