import React from "react";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";
import pageTransition from "./pageTransition.js";
import { Link } from "react-router-dom";

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
          <h1 className="general-heading">Hi</h1>
          <br></br>
          <div className="general-body-text about-body-text">
            <p>
              I'm Mike Tandy, an enthusiastic and passionate web developer
              working with JavaScript across the full stack, along with HTML,
              CSS and Sass on the front-end.
            </p>
            <hr className="about-hr"></hr>
            <p>
              I'm all about solving problems and making things work as desired,
              and will keep on googling until that happens!
            </p>
            <p>
              I enjoy writing well-architected, organised and modular code and
              look to implement this as best as I can. I am always looking for
              new hacks.
            </p>
            <hr className="about-hr"></hr>
            <p className="about-p">
              If you would like to discuss development please feel free to{" "}
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                contact me
              </Link>
              .
            </p>

            <br></br>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default AboutMePage;
