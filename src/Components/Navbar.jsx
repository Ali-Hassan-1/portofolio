import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2>Portfolio</h2>

        <ul className="list">
          <li>Projects</li>
          <li>Technologies</li>
          <li>About</li>
        </ul>

        <ul className="icons">
          <li>
            <FaGithub size={25} />
          </li>
          <li>
            <FaLinkedin size={25} />
          </li>
          <li>
            <FaInstagram size={25} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
