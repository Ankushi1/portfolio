import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-text">
        I am currently looking for internship opportunities in software development.
        Feel free to connect with me.
      </p>

      <div className="contact-icons">

        <a href="mailto:ankushi.vishwakarma@gmail.com">
          <FaEnvelope />
        </a>

        <a
        href="https://github.com/Ankushi1"
        target="_blank"
        rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
        href="https://www.linkedin.com/in/ankushi-vishwakarma-394404305/"
        target="_blank"
        rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

    </section>
  );
}

export default Contact;