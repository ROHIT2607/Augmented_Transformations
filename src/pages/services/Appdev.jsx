import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css";

const AppDev = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "0",
        margin: "0",
        position: "relative", 
      }}
    >
      {/* Rotated Heading */}
      <h2
        className="rotated-heading"
        style={{
          position: "absolute",
          top: "43%", 
          left: "5%",
          transform: "translateX(-50%) rotate(270deg)",
          zIndex: 2, 
          fontSize: "3.7rem",
          fontWeight: "bold", 
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)", // Gradient for opacity effect
          WebkitBackgroundClip: "text",
          backgroundClip: "text", 
          color: "transparent",
        }}
      >
        Mobile App Development
      </h2>

      <Row className="align-items-center m-0" style={{ minHeight: "100vh" }}>
        {/* Left Content Section */}
        <div
          style={{
            position: "absolute",
            top: "-55%", // Position of the image behind the text
            left: "-20%", // Adjust the horizontal position of the image
            zIndex: 0, // Ensure the image is behind the content
          }}
        >
          <img src="public\\Groupprod.png" alt="line" />
        </div>

        <Col
          className="p-5 position-relative"
          style={{
            zIndex: 1, // Content should be above the image but below the heading
            textAlign: "justify",
            color: "white",
            marginLeft: "10%",
            fontFamily: "Poppins",
            fontSize: "1.2rem",
            marginRight: "10%",
          }}
        >
          <h2 className="mb-4 half-gradient-text">
            Mobile App Development
            <div className="rectangle"></div>
          </h2>

          <p>
            Augmented Transformations has a strong inbuilt team for developing
            and managing mobile app development.
          </p>
          <p className="mb-4">
            We handle custom app development, product development, and
            pre-developed apps on various technologies like Android Studio,
            React, and iOS. Our team specializes in creating tailor-made mobile
            applications that align perfectly with your vision, brand, and
            target audience. Whether you need an Android, iOS, or cross-platform
            app, our developers have the skills and experience to bring your
            ideas to life on any platform. We believe in pushing the boundaries
            of what mobile apps can do. From integrating complex APIs and
            third-party services to implementing advanced features such as
            real-time data synchronization, geolocation, and machine learning,
            our team ensures your app stands out from the crowd.
          </p>
          <p>
            We understand that a mobile app’s success hinges on its performance
            and scalability.
          </p>
          <p>
            Our team employs industry best practices and optimization techniques
            to ensure that your app runs smoothly, loads quickly, and delivers a
            flawless user experience.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AppDev;
