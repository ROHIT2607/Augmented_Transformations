import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ai.css";

const SmartMetering = () => {
  return (
    <div className="py-3">
      <Row className="row">
        {/* Right Content */}
        <Col md={6} className="px-4">
          <h2 className="mb-4">Smart Metering Solution</h2>
          <p
            className="mb-4"
            style={{ textAlign: "justify", marginRight: '70px'}}
          >
            Developed a comprehensive Smart Meter Data Management System with integrated HES and MDM modules to collect, store, process, and visualize smart meter data. The solution includes a smart meter app, providing users with real-time insights and notifications. Advanced analytics tools enable management and operational teams to monitor performance and resolve issues efficiently. Additionally, real-time alert notifications via SMS and WhatsApp ensure quick fault redressals and address consumer concerns effectively. This robust platform delivers seamless functionality, enhancing both user experience and operational efficiency.
          </p>
          <Button className="gradient-button">
            <span style={{ fontWeight: "500", letterSpacing: "1.5px" }}>
              Learn More
            </span>
            <span className="button-icon">
              <img src="public\\Vector (1).png" alt="Right Arrow" />
            </span>
          </Button>
        </Col>

        {/* Left Image */}
        <Col md={6}>
          <img
            src="public\\Group 731.png"
            alt="AI-Hub"
            className="img-fluid"
            style={{ width: "100%", height: "80%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SmartMetering;
