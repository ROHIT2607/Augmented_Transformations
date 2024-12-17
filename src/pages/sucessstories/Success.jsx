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
          padding: "20px",
          position: "relative",
        }}
      >
        <img
          src="/winner.png" 
          alt="Success Stories"
          style={{
            maxWidth: "100%", 
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      <VerticalSteps />
    </>
  );
};

export default Success;
