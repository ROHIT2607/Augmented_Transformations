import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ai.css";

const AIHubSection = () => {
  return (
    <Container fluid className="py-3" style={{
        position:"relative"
    }}>
      <Row className="g-0">
        {/* Left Image */}
        <Col md={6} className="p-0">
          <img
            src="public\cam1.png"
            alt="AI-Hub"
            className="img-fluid custom-image"
           
          />
        </Col>

        {/* Right Content */}
        <Col md={6} className="px-4 justify-content-start">
          <h2 className="mb-4">Quality Assurance through CCTV</h2>
          <p
            className="mb-4"
            style={{ textAlign: "justify", marginRight: "7%" }}
          >
            Our Video Analytics Solution (VAS) offers a pioneering approach to
            quality assurance through CCTV technology. By harnessing the power
            of cutting-edge video analytics, we transform traditional
            surveillance systems into dynamic tools for ensuring and enhancing
            quality across various domains. It involves using video surveillance
            technology to monitor and ensure the quality and compliance of
            processes, products, or services in various industries.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AIHubSection;
