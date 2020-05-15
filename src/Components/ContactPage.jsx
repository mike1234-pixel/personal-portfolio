import React from "react";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";
import pageTransition from "./pageTransition.js";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

function ContactPage() {
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

      <div className="contact-page">
        <div className="contact-child-div">
          <div className="grid-container">
            <div className="grid-item grid-item-1"></div>
            <div className="grid-item grid-item-2"></div>
            <div className="grid-item grid-item-3"></div>
            <div className="grid-item grid-item-4"></div>
            <div className="grid-item grid-item-5"></div>
            <div className="grid-item grid-item-6">
              <FaPhone />
              <p>07769-583-616</p>
            </div>
            <div className="grid-item grid-item-7"></div>
            <div className="grid-item grid-item-8">
              <MdEmail />
              <p>
                mike.tandy.1<br></br>@gmail.com
              </p>
            </div>
            <div className="grid-item grid-item-9"></div>
            <div className="grid-item grid-item-10"></div>
            <div className="grid-item grid-item-11"></div>
            <div className="grid-item grid-item-12"></div>
            <div className="grid-item grid-item-13"></div>
            <div className="grid-item grid-item-14"></div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}

export default ContactPage;
