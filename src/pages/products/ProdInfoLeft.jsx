import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ai.css";

const AIHubSection = () => {
  return (
    <div fluid className="py-3">
      <Row className="g-0">
        {/* Left Content */}
        <Col md={6} className="px-4 justify-content-start">
          <h2 className="mb-4" style={{
            textAlign: "left",
            marginLeft: "7%",
          }}>Safety Gear Detection</h2>
          <p
            className="mb-4"
            style={{ textAlign: "justify", marginLeft: "7%" }}
          >
            Our Video Analytics Solution can accurately detect the presence or
            absence of essential safety gear such as Personal Protective
            Equipment (PPE), including helmets, goggles, shoes, gloves, and
            more. By monitoring compliance with safety protocols, organizations
            can reduce the risk of accidents and create a safer work environment
            for their employees. Instant notifications can be sent to personnel
            when safety gear is not being used, allowing for immediate
            intervention and adherence to safety regulations.
          </p>
        </Col>

        {/* Right Image */}
        <Col md={6} className="p-0" style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "start",
            marginRight: "-2%",   
        }}>
          <img src="public\\cam2.png" alt="AI-Hub" className="img-fluid custom-image1" />
        </Col>
      </Row>
    </div>
  );
};

export default AIHubSection;
