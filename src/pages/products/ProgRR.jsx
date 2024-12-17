import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ai.css";

const AIHubSection = () => {
  return (
    <Container
      fluid
      className="py-3"
      style={{
        position: "relative",
      }}
    >
      <Row className="g-0">
        {/* Left Image */}
        <Col md={6} className="p-0">
          <img
            src="public\cam3.png"
            alt="AI-Hub"
            className="img-fluid custom-image"
          />
        </Col>

        {/* Right Content */}
        <Col md={6} className="px-4 justify-content-start">
          <h2 className="mb-4">Toll Monitoring Solution</h2>
          <p
            className="mb-4"
            style={{ textAlign: "justify", marginRight: "7%" }}
          >
            We understand the challenges faced by toll plaza owners in ensuring
            smooth traffic flow, minimizing revenue leakage, and maintaining
            efficient operations. To address these key business problems, we
            have developed an advanced Toll Monitoring System that
            revolutionizes the way toll plazas are managed. Our solution
            combines real-time data analytics, traffic control, and
            comprehensive monitoring to optimize toll plaza performance and
            enhance overall efficiency.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AIHubSection;
