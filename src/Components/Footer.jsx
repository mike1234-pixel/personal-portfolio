import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

// font-awesome icons in react-icons https://react-icons.netlify.com/#/icons/fa

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed and built by Michael Tandy
        <a
          href="https://github.com/mike1234-pixel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="footer-icons" />
        </a>
        <a
          href="https://uk.linkedin.com/in/mike-tandy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-icons" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
