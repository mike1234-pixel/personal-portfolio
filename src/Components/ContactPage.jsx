import React from "react";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";
import pageTransition from "./pageTransition.js";

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
        <h1>BEST WAYS TO GET IN TOUCH</h1>
        <p>Text: guaranteed quick response!</p>
        <p>Email: probable fast response, I'll reply as soon as I see it</p>
        <p>
          Phone call: please send me an email or text to arrange a call, I
          ignore unsolicited calls.
        </p>
        <p>Voicemail. I do not listen to my voicemail, bad idea.</p>
        <br></br>
        <br></br>
        <br></br>
        <h1>BEST WAYS TO GET IN TOUCH</h1>
        <p>Text: guaranteed quick response!</p>
        <p>Email: probable fast response, I'll reply as soon as I see it</p>
        <p>
          Phone call: please send me an email or text to arrange a call, I
          ignore unsolicited calls.
        </p>
        <p>Voicemail. I do not listen to my voicemail, bad idea.</p>
        <h1>BEST WAYS TO GET IN TOUCH</h1>
        <p>Text: guaranteed quick response!</p>
        <p>Email: probable fast response, I'll reply as soon as I see it</p>
        <p>
          Phone call: please send me an email or text to arrange a call, I
          ignore unsolicited calls.
        </p>
        <p>Voicemail. I do not listen to my voicemail, bad idea.</p>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </motion.div>
  );
}

export default ContactPage;
