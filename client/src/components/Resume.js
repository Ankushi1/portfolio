import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume" id="resume">

      <h2 className="resume-title">Resume</h2>

      <div className="resume-card">

        <div className="resume-icon">
          📄
        </div>

        <h3>Download My Resume</h3>

        <p>
          Get a detailed overview of my education, technical skills,
          and project experience. My resume highlights my journey as
          a Software Engineering student and aspiring Full Stack Developer.
        </p>

        <a href="/resume.pdf" download className="resume-btn">
          Download Resume
        </a>

      </div>

    </div>
  );
}

export default Resume;