import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ai.css";

const AIHubSection = () => {
  return (
    <Container fluid className="py-3">
      <Row className="align-items-center g-0">
        {/* Right Content */}
        <Col md={6} className="px-4">
          <h2 className="mt-4 mb-4">Video Analytics Solution (VAS)</h2>
          <p
            className="mb-4"
            style={{ textAlign: "justify", marginRight: '70px'}}
          >
            Our state-of-the-art Video Analytics Solution is designed to
            leverage the power of artificial intelligence and computer vision to
            deliver real-time insights and actionable data. Our solution offers
            comprehensive safety and security solutions for organizations across
            different sectors.
          </p>
          <ul
            className="mb-4"
            style={{ listStyleType: "none", paddingLeft: 0 }}
          >
            <li className="d-flex align-items-center mb-4">
              <img
                src="public/Icon.png"
                alt="Icon 1"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              Quality Assurance through CCTV
            </li>
            <li className="d-flex align-items-center mb-4">
              <img
                src="public/Icon.png"
                alt="Icon 2"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              Safety Gear Detection
            </li>
            <li className="d-flex align-items-center mb-4">
              <img
                src="public/Icon.png"
                alt="Icon 3"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              Facial Recognition
            </li>
          </ul>
          <Button className="gradient-button" >
            <span style={{ fontWeight: "500", letterSpacing: "1.5px" }}>
              Learn More
            </span>
            <span className="button-icon" >
              <img src="public\\Vector (1).png" alt="Right Arrow" />
            </span>
          </Button>
        </Col>

        {/* Left Image */}
        <Col md={6} className="p-0">
          <img
            src="public\\Group 464.png"
            alt="AI-Hub"
            className="img-fluid"
            style={{
              height: "80%",
              width: "90%",
              objectFit: "cover",
              marginTop: "40px",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AIHubSection;
