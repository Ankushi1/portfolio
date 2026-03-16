import { useState } from "react";
import "./Navbar.css";

function Navbar() {

const [open,setOpen] = useState(false);

return (

<nav className="navbar">

<div className="logo">
Ankushi Vishwakarma
</div>

<div className="hamburger" onClick={()=>setOpen(!open)}>
☰
</div>

<ul className={open ? "menu active" : "menu"}>

<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#resume">Resume</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>

</ul>

</nav>

);
}

export default Navbar;