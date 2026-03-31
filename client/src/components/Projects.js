import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-container">
          {/* E-Commerce Website */}
<div className="project-card">
  <div className="project-content">
    <h3>E-Commerce Website</h3>
    <p>
      Full-stack e-commerce platform built with React, Node.js, Express, and MongoDB.
      Features include product listing, shopping cart, user authentication, and real-time backend API integration.
    </p>
    <div className="project-buttons">
      <a 
        href="https://github.com/Ankushi1/Ecommerce-Web"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code
      </a>
      <a 
        href="https://ecommerce-web-9gqb.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </a>
    </div>
  </div>
</div>

        {/* Quiz Application */}
        <div className="project-card">
          <div className="project-content">
            <h3>Quiz Application</h3>
            <p>
              Interactive quiz application built using Angular and JavaScript.
              Users can answer questions, view results instantly, and enjoy a
              responsive UI experience.
            </p>
            <div className="project-buttons">
              <a 
                href="https://github.com/Ankushi1/quiz-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              <a 
                href="https://ankushi1.github.io/quiz-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>

     
      </div>

    </section>
  );
}

export default Projects;