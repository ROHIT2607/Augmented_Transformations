import React from "react";
import VerticalSteps from "./VerticalSteps";

const Success = () => {
  return (
    <>
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          color: "#000",
          fontSize: "30px",
          padding: "20px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600",
          position: "relative",
        }}
      >
        Fostering Innovation: Stories of Technological Transformation
      </h2>

      {/* Centered Image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden", // Hide any overflowing content
        }}
      >
        {/* Container for the Cut Image */}
        <div
          style={{
            position: "relative",
            width: "fit-content",
            height: "90%", // Set the visible portion to 90% of the image height
          }}
        >
          {/* Image with Bottom Cut */}
          <img
            src="public\winner.png"
            alt="Success Stories"
            style={{
              display: "block",
              width: "100%",
              height: "80%",
              clipPath: "inset(0 0 10% 0)", // Cuts 10% from the bottom of the image
            }}
          />
        </div>

        {/* Small Black Circle */}
        <div
          style={{
            position: "absolute",
            bottom: "-17px", // Adjust to place the circle slightly overlapping
            left: "50%",
            transform: "translateX(-50%)", // Center the circle horizontally
            width: "30px",
            height: "30px",
            borderRadius: "50%", // Makes it a circle
            backgroundColor: "black",
            zIndex: "10", // Ensures it's above the image
          }}
        ></div>
      </div>

      <VerticalSteps />
    </>
  );
};

export default Success;
