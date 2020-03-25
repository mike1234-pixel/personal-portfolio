import React from "react";
import { IoLogoGithub } from "react-icons/io";

// font-awesome icons in react-icons https://react-icons.netlify.com/#/icons/fa

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        Bulit by Michael Tandy {year} with React
        <a href="https://github.com/mike1234-pixel" className="footer-icon">
          <IoLogoGithub className="footer-icons" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
