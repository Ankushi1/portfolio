import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-grid">

        <div className="skill-box">
          <h3>Languages</h3>
          <p>Python, C, C++, JavaScript</p>
        </div>

        <div className="skill-box">
          <h3>Frontend</h3>
          <p>HTML, CSS, React.js, Angular, Bootstrap</p>
        </div>

        <div className="skill-box">
          <h3>Backend</h3>
          <p>Node.js, Express.js</p>
        </div>

        <div className="skill-box">
          <h3>Databases</h3>
          <p>MongoDB, PostgreSQL, MySQL</p>
        </div>

        <div className="skill-box">
          <h3>Concepts</h3>
          <p>Data Structures & Algorithms, DBMS, REST APIs, JWT Authentication</p>
        </div>

        <div className="skill-box">
          <h3>Tools & Platforms</h3>
          <p>Git, GitHub, VS Code, Postman, MongoDB Atlas</p>
        </div>

        <div className="skill-box">
          <h3>Soft Skills</h3>
          <p>Teamwork, Communication, Leadership, Time Management</p>
        </div>

      </div>

    </div>
  );
}

export default Skills;