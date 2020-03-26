import React from "react";
import Flip from "react-reveal";

function HomeSectionOne() {
  return (
    <div className="home-sections section-one">
      <Flip left cascade>
        <h1 className="home-heading-1">Sheffield</h1>

        <h1 className="home-heading-2">based</h1>

        <h1 className="home-heading-3">JavaScript</h1>

        <h1 className="home-heading-4">Developer</h1>
      </Flip>
    </div>
  );
}

export default HomeSectionOne;
