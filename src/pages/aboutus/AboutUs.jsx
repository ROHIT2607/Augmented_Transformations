import React, { useState } from "react";
import Offerpage from "./offerpage";
import "./about.css";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    {
      id: 0,
      backgroundColor: "#FFCD4B",
      label: "Vision",
      imageSrc: "public/imgg1.png",
      overlayText: "Our vision is to be the trusted partner in our clients' digital transformation, delivering cutting-edge solutions that drive innovation, efficiency, and growth.",
    },
    {
      id: 1,
      backgroundColor: "rgba(68, 90, 225, 1)",
      label: "Mission",
      overlayText: "Our mission is to create maximum value for our clients by reducing costs and driving efficiency through cutting-edge technologies. We are committed to delivering innovative, sustainable solutions that address current needs while future-proofing businesses in an ever-evolving digital landscape.",
    },
    {
      id: 2,
      backgroundColor: "rgba(177, 194, 224, 1)",
      label: "Values",
      overlayText: "We are dedicated to fostering innovation and excellence, building enduring relationships with our clients and partners rooted in trust, transparency, and shared success. Our commitment is to consistently exceed expectations, delivering exceptional results that propel our clients' businesses to new heights.",
    },
    {
      id: 3,
      backgroundColor: "#0802A3",
      label: "Innovation",
      imageSrc: "public/immg2.png",
      overlayText: "Innovation drives growth.",
    },
  ];

  return (
    <>
    <div className="wrapper">
      <div
        className="text-heading container"
        style={{
          display: "block",
        }}
      >
        <h2>
          the dream navigator is your
          <span>
            <img src="public/map.png" alt="map" />
          </span>
        </h2>
        <h2>path to inspiration and innovation</h2>
      </div>
      <div className="container">
        {panels.map((panel, index) => (
          <div
            key={panel.id}
            className={`panel ${activeIndex === index ? "active" : ""}`}
            style={{
              backgroundColor: panel.imageSrc
                ? "transparent"
                : panel.backgroundColor,
              backgroundImage: panel.imageSrc
                ? `url(${panel.imageSrc})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setActiveIndex(index)}
          >
            {/* Dark Overlay for Image Background */}
            {panel.imageSrc && (
              <div
                className={`overlay ${
                  activeIndex === index ? "active-overlay" : ""
                }`}
              />
            )}
            {/* Text Overlay */}
            {activeIndex === index && (
              <div className="overlay-text">{panel.overlayText}</div>
            )}
            {/* Label */}
            <div
              className={`label ${activeIndex === index ? "label-active" : ""}`}
            >
              <span className="label-number">{`0${panel.id + 1}`}</span>
              <span className="label-text">{panel.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div class="line-container">
        <div class="line short"></div>
        <div class="line long"></div>
      </div>
    </div>
    <Offerpage />
    </>
  );
};

export default App;
