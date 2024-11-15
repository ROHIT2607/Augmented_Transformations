import React from "react";
import "./IndustryPage.css";


 const IndustryPage = () => {
  return (
    <>
      <div className="industry-page">
        <div className="heading d-flex justify-content-between">
          <div className="first-head">
            <p className="head-para">
              - Driving Excellence Across Diverse Sectors
            </p>
            <h1 className="header">Industries We Cover</h1>
          </div>
          <div className="about-company-para">
            <p>
              We specialize in delivering innocative AI-driven solutions across
              a wide range
            </p>
            <p>
              of technologies, empowring businesses to unlock new potential and
              drive
            </p>
            <p>transformation. Our experties includes.</p>
          </div>
        </div>
        <div>
            <img src="/Wave.png" className="wave-img"/>
       
        </div>
      </div>
    </>
  );
};

export default IndustryPage;
