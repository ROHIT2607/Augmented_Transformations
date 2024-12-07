import React, { useState } from "react";
import "./about.css";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    { id: 0, backgroundColor: "#FFCD4B", label: "Vision", imageSrc: "public/imgg1.png", overlayText: "Our Vision: Shaping the future." },
    { id: 1, backgroundColor: "#FF7676", label: "Mission", overlayText: "Our Mission: Delivering excellence." },
    { id: 2, backgroundColor: "#FF4B91", label: "Values", overlayText: "Our Values: Integrity and innovation." },
    { id: 3, backgroundColor: "#0802A3", label: "Innovation", imageSrc: "public/immg2.png", overlayText: "Innovation drives growth." },
  ];

  return (
    <>
      <div
        className="text-heading container"
        style={{
          display: "block",
          width: "90vw",
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
              backgroundColor: panel.imageSrc ? "transparent" : panel.backgroundColor,
              backgroundImage: panel.imageSrc ? `url(${panel.imageSrc})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden",
            }}
            onClick={() => setActiveIndex(index)}
          >
            {/* Dark Overlay for Image Background */}
            {panel.imageSrc && activeIndex === index && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                }}
              />
            )}
            {/* Text Overlay */}
            {activeIndex === index && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  textAlign: "center",
                  zIndex: 2,
                  fontSize: "1.5rem",
                  padding: "10px",
                }}
              >
                {panel.overlayText}
              </div>
            )}
            <h3 style={{ position: "relative", zIndex: 3 }}>{panel.label}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
