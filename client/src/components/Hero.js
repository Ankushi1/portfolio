import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {

  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Problem Solver",
      "Creative Coder"
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 1500
  });

  return (
     <section id="home" style={styles.container}>
      
      <h1 style={styles.heading}>
        Hi, I'm <span style={styles.name}>Ankushi Vishwakarma</span>
      </h1>

      <h2 style={styles.role}>
        {text}
        <Cursor cursorStyle="|" />
      </h2>

      <p style={styles.description}>
        Passionate about creating elegant solutions to complex problems.
        Transforming ideas into exceptional digital experiences.
      </p>

      <div style={styles.buttons}>
        <button style={styles.primaryBtn}>View Projects</button>
        <button style={styles.secondaryBtn}>Contact Me</button>
      </div>

    </section>
  );
}

const styles = {

container: {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
  color: "white",

  background: `
    radial-gradient(circle at 50% 50%, rgba(168,85,247,0.25), transparent 30%),
    radial-gradient(circle at 40% 50%, rgba(150,72,153,0.20), transparent 25%),
    #000000
  `
},

  heading: {
  fontSize: "72px",
  fontWeight: "700",
  letterSpacing: "1px"
},

  name: {
  background: "linear-gradient(90deg,#a855f7,#ec4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
},

  role: {
    marginTop: "15px",
    fontSize: "28px",
    color: "#c4c4c4"
  },

  description: {
  marginTop: "20px",
  maxWidth: "600px",
  color: "#9ca3af",
  fontSize: "18px",
  lineHeight: "28px"
},

  buttons: {
    marginTop: "35px",
    display: "flex",
    gap: "20px"
  },

  primaryBtn: {
    padding: "14px 30px",
    background: "linear-gradient(90deg,#a855f7,#ec4899)",
    border: "none",
    borderRadius: "30px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(168,85,247,0.5)"
  },

  secondaryBtn: {
    padding: "14px 30px",
    border: "2px solid #a855f7",
    borderRadius: "30px",
    background: "transparent",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  }
  

};

export default Hero;