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
        <div className="about-grid-container">
          <div className="about-grid-item about-grid-item-1"></div>
          <div className="about-grid-item about-grid-item-2">
            Hi, I'm Mike, a web developer working with JavaScript across the
            full stack, primarily React and Node.js.
          </div>
          <div className="about-grid-item about-grid-item-3"></div>
          <div className="about-grid-item about-grid-item-4"></div>
          <div className="about-grid-item about-grid-item-5">
            I enjoy writing well-architected, organised and modular code.
          </div>
          <div className="about-grid-item about-grid-item-6"></div>
          <div className="about-grid-item about-grid-item-7"></div>
          <div className="about-grid-item about-grid-item-8">
            I enjoy creating good design and love CSS Grids.
          </div>
          <div className="about-grid-item about-grid-item-9"></div>
          <div className="about-grid-item about-grid-item-10"></div>
          <div className="about-grid-item about-grid-item-11">
            Outside of development I enjoy reading, keeping fit and playing
            Mortal Kombat.
          </div>
          <div className="about-grid-item about-grid-item-12"></div>
          <div className="about-grid-item about-grid-item-13">
            I am open to discuss anything so if you have something you would
            like to talk to me about please{" "}
            <Link
              to="/Contact"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              get in touch.
            </Link>
          </div>
          <div className="about-grid-item about-grid-item-14"></div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default AboutMePage;
