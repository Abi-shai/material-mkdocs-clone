// import { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navigation from "../../components/navigation/navigation.component";

import './centered-content.style.scss';

const CenteredContent = () => {
  return (
    <section
      className="centered-content-wrapper"
    >
      <Navigation />
      <div className="doc-section">
        <h1 className="doc-section-h1">Documentation that simply works</h1>
        <div className="catch-phrase-section">
          <p>
            Write your documentation in Markdown and create a professionnal static site in minutes - searchable, customizable, for all devices.
          </p>
          <div className="catch-phrase-section-links">
            <button className="catch-phrase-section-button">Get started</button>
            <span>Learn more</span>
          </div>
        </div>
      </div>
      <div className="huge-space"></div>
    </section >
  )
}

export default CenteredContent;