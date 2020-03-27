import React from "react";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";
import pageTransition from "./pageTransition.js";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { GiMartini } from "react-icons/gi";
import { IoLogoGithub } from "react-icons/io";

function AboutMePage() {
  return (
    <motion.div
      style={{ position: "absolute" }}
      exit={pageTransition.out}
      animate={pageTransition.in}
      initial={pageTransition.initial}
      transition={{ duration: 0.5 }}
      className="motion-div"
    >
      <Navigation />
      <div className="about-me-page">
        <div className="about-me-child-div">
          <Fade top cascade>
            <h1 className="general-heading">About Me</h1>
            <br></br>
            <div className="general-body-text">
              <p>
                I work primarily with React and Node.js and like to find simple
                solutions using clean, understandable code.
              </p>
              <p>
                I regularly work on new projects and you can find out what I'm
                up to on my Github account.
                <a
                  href="https://github.com/mike1234-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <IoLogoGithub />
                </a>
              </p>
              <p>
                I'm a former cocktail bartender and sales account manager. My
                favourite cocktail of all time is the anomalous Porto Flip.
                <br></br>
                <i>* It's not to everyone's taste but I highly recommend it.</i>
                <a
                  href="https://en.wikipedia.org/wiki/Porto_flip"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <GiMartini />
                </a>
              </p>
              <p className="about-p">
                If you would like to discuss development please feel free to{" "}
                <Link to="/Contact" style={{ textDecoration: "none" }}>
                  contact me
                </Link>
                .
              </p>

              <br></br>
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default AboutMePage;
