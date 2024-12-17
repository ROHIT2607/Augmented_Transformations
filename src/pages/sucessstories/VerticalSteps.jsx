import React from "react";

const VerticalSteps = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Container */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* First Box */}
        <div style={boxStyle}>
          <h3 style={titleStyle}>Empowering Resource Management with Outsource Operator</h3>
          <p style={descStyle}>
            <strong>Customer Requirement:</strong> Managing workforce and optimizing output.
          </p>
          <p style={descStyle}>
            <strong>Our Solution:</strong> Developed a streamlined operator system to improve efficiency.
          </p>
        </div>
        <div style={connectorStyle}></div> {/* Dotted Line */}

        {/* Second Box */}
        <div style={boxStyle}>
          <h3 style={titleStyle}>Quality Assurance through CCTV</h3>
          <p style={descStyle}>
            <strong>Business Challenge:</strong> Ensuring product quality through real-time monitoring.
          </p>
          <p style={descStyle}>
            <strong>Solution Delivered:</strong> Implemented AI-powered CCTV monitoring systems.
          </p>
        </div>
        <div style={connectorStyle}></div> {/* Dotted Line */}

        {/* Third Box */}
        <div style={boxStyle}>
          <h3 style={titleStyle}>Machinery Performance Monitoring</h3>
          <p style={descStyle}>
            <strong>Business Challenge:</strong> Monitoring equipment for downtime and performance.
          </p>
          <p style={descStyle}>
            <strong>Solution Delivered:</strong> IoT-based sensors and dashboards for performance tracking.
          </p>
        </div>
        <div style={connectorStyle}></div> {/* Dotted Line */}

        {/* Fourth Box */}
        <div style={boxStyle}>
          <h3 style={titleStyle}>Perimeter Intrusion Detection</h3>
          <p style={descStyle}>
            <strong>Challenge:</strong> Detecting perimeter breaches for improved security.
          </p>
          <p style={descStyle}>
            <strong>Solution Delivered:</strong> Deployed AI-enabled detection systems for instant alerts.
          </p>
        </div>
      </div>
    </div>
  );
};

// Inline Styles for Reusability
const boxStyle = {
  backgroundColor: "#2A2A2A",
  border: "1px solid #0066FF",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "10px 0",
  position: "relative",
};

const connectorStyle = {
  width: "2px",
  height: "50px",
  borderLeft: "2px dotted white",
};

const titleStyle = {
  fontSize: "1.2rem",
  color: "#0099FF",
  margin: "0 0 10px 0",
};

const descStyle = {
  fontSize: "1rem",
  lineHeight: "1.5",
  margin: "0",
};

export default VerticalSteps;
