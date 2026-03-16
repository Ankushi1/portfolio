import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-container">

        <div className="project-card">

    

          <div className="project-content">
            <h3>Quiz Application</h3>

            <p>
              Interactive quiz application built using Angular and JavaScript.
              Users can answer questions, view results instantly and enjoy a
              responsive UI experience.
            </p>

            <div className="project-buttons">
              <a href="https://github.com/Ankushi1/quiz-app" target="_blank">Code</a>
              <a href="https://ankushi1.github.io/quiz-app/" target="_blank">Live</a>
            </div>
          </div>

        </div>


        <div className="project-card">

        

          <div className="project-content">
            <h3>E-Commerce Website</h3>

            <p>
              Full stack e-commerce platform built with React, Node.js,
              Express and MongoDB including product listing, cart and backend API.
            </p>

            <div className="project-buttons">
              <a href="https://github.com/Ankushi1" target="_blank">Code</a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;