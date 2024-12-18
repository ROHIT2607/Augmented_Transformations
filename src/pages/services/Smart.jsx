import React from "react";

const Smart = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100vh",
          backgroundColor: "#f0f0f0",
        }}
      >
        {/* "Smarter" in the Top Left */}
        <h1
          style={{
            position: "absolute",
            top: "5%", // Top left position
            left: "12%", // Adjust distance from the edge
            margin: 0,
            fontSize: "3rem",
            letterSpacing: "0.2rem",
            color: "blue",
            zIndex: 2, // Ensures text is on top of the image
          }}
        >
          Smarter
        </h1>

        {/* Image Overlapping */}
        <img
          src="public/iphone.png"
          alt="Smart"
          style={{
            position: "absolute",
            top: "-47%", // Adjust image overlap upwards
            left: "0%", // Left aligned
            width: "100%", // Full width
            zIndex: 1, // Keep it below the text
          }}
        />

        {/* "With App" in the Bottom Right */}
        <h1
          style={{
            position: "absolute",
            bottom: "5%", // Bottom right position
            right: "5%", // Adjust distance from the edge
            margin: 0,
            fontSize: "4rem",
            color: "#333",
            zIndex: 2, // Ensures text is on top of the image
          }}
        >
          With App
        </h1>
      </div>
    </>
  );
};

export default Smart;
