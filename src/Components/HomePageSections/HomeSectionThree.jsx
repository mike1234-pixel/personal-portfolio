import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoGithub } from "react-icons/io";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import Fade from "react-reveal/Fade";

function HomeSectionThree() {
  return (
    <div className="home-sections section-three">
      <ul className="fa-icons">
        <Fade top cascade>
          <li>
            <FaHtml5 className="html-logo" />
            <FaCss3Alt className="css-logo" />
            <FaBootstrap className="bootstrap-logo" />
            <FaSass className="sass-logo" />
            <br></br>HTML, CSS, Bootstrap, Sass
          </li>

          <li>
            <IoLogoJavascript className="js-logo" />
            <DiJqueryLogo className="jquery-logo" />
            <FaReact className="react-logo" /> <br></br>JavaScript, jQuery,
            React
          </li>

          <li>
            <FaGitAlt className="git-logo" />
            <IoLogoGithub className="github-logo" />
            <br></br>Git, Github, Unix CLI
          </li>
          <li>
            <FaNodeJs className="node-logo" /> <br></br>Node.js, Express, EJS
          </li>
          <li>
            <DiMongodb className="mongodb-logo" /> <br></br>MongoDB, Mongoose
          </li>
        </Fade>
      </ul>
    </div>
  );
}

export default HomeSectionThree;

// SOURCES
// react-reveal: https://www.react-reveal.com/examples/common/fade/
// react-icons (font-awesome): https://react-icons.netlify.com/#/search
