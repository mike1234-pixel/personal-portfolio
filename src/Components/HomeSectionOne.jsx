import React from "react";
import Fade from "react-reveal";

function HomeSectionOne() {
  return (
    <div className="home-sections section-one">
      <Fade top cascade>
        <h1 className="home-heading">Sheffield</h1>
        <h1 className="home-heading">based</h1>
        <h1 className="home-heading">JavaScript</h1>
        <h1 className="home-heading">Developer</h1>
      </Fade>
    </div>
  );
}

export default HomeSectionOne;

// reveal didn't work with line breaks, required a workaround
