import React from "react";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";
import pageTransition from "./pageTransition.js";
import { IoMdText } from "react-icons/io";
import { MdEmail, MdVoicemail } from "react-icons/md";
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
          <h1 className="general-heading">Best ways to get in touch:</h1>
          <div className="general-body-text">
            <IoMdText />
            <h2>Text/SMS</h2>
            <p>Guaranteed quick response!</p>
            <MdEmail />
            <h2>Email</h2>
            <p>Fast response, I'll reply as soon as I see it.</p>
            <FaPhone />
            <h2>Phone</h2>
            <p>Feel free to text or email to arrange a phone call.</p>
            <MdVoicemail />
            <h2>Voicemail</h2>
            <p>I'm very bad with voicemail, bad way to contact.</p>
            <p>07769 583 616</p>
            <a
              href="mailto:mike.tandy.1@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <p className="contact-email">mike.tandy.1@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default ContactPage;
