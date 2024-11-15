import React from "react";
import "./IndustryPage.css";
import Card from "./Card/Card.jsx"; // Importing the Card component

const IndustryPage = () => {
  return (
    <>
      <div className="industry-page ">
        <div className="heading d-flex justify-content-between">
          <div className="first-head">
            <p className="head-para">
              - Driving Excellence Across Diverse Sectors
            </p>
            <h1 className="header">Industries We Cover</h1>
          </div>
          <div className="about-company-para">
            <p>
              We specialize in delivering innovative AI-driven solutions across
              a wide range
            </p>
            <p>
              of technologies, empowering businesses to unlock new potential and
              drive
            </p>
            <p>transformation. Our expertise includes.</p>
          </div>
        </div>

        {/* Positioned Image */}
        <div className="image-container">
          <img src="/Wave.png" className="wave-img" alt="Wave" />
          {/* Cards Positioned on Top of the Image */}
          <div className="cards-overlay">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryPage;
