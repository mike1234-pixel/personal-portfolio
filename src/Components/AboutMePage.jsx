import React from "react";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";
import pageTransition from "./pageTransition.js";

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
        <h1>HELLO ABOUT ME WORLD</h1>
        <p>ppp</p>
        <br></br>
        <br></br>
        <br></br>
        <h1>HELLO ABOUT ME WORLD</h1>
        <p>ppp</p>
        <br></br>
        <br></br>
        <br></br>
        <h1>HELLO ABOUT ME WORLD</h1>
        <p>ppp</p>
        <br></br>
        <br></br>
        <br></br>
        <h1>HELLO ABOUT ME WORLD</h1>
        <p>ppp</p>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </motion.div>
  );
}

export default AboutMePage;
