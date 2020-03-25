import React from "react";
import Navigation from "./Navigation.jsx";
import HomeSectionOne from "./HomeSectionOne.jsx";
import HomeSectionTwo from "./HomeSectionTwo";
import HomeSectionThree from "./HomeSectionThree";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";
import pageTransition from "./pageTransition.js";

function Home() {
  return (
    <motion.div
      className="app-body motion-div"
      style={{ position: "absolute" }}
      exit={pageTransition.out}
      animate={pageTransition.in}
      initial={pageTransition.initial}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <Footer />
    </motion.div>
  );
}

export default Home;
