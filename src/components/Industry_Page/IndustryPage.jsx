import React from "react";
import "./IndustryPage.css";
import CardList from "./Card/Card";
import { motion } from "motion/react";
const IndustryPage = () => {
  return (
    <div>
      <motion.div className="industry-page" 
        whileHover={{ backgroundColor: "#000000" }}
      >
        <img src="/wave.png" alt="" />
        <div className="heading d-flex justify-content-between">
          <div className="first-head">
            <p className="head-para">
              - Driving Excellence Across Diverse Sectors
            </p>
            <h1 className="header">Our Core Competencies</h1>
          </div>
          <div className="about-company-para">
            <p className="company-para">
              We specialize in delivering innovative AI-driven solutions across
              a wide range of technologies, empowering businesses to unlock new
              potential and drive transformation. Our expertise includes:
            </p>
          </div>
        </div>

        {/* Positioned Image */}
        <div className="image-container">
          {/* Cards Positioned on Top of the Image */}
          <div className="cards-overlay">
            <CardList />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IndustryPage;
