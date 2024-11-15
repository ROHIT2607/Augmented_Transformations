import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ai.css";

const AIHubSection = () => {
  return (
    <Container fluid className="py-3">
      <Row className="align-items-center g-0">
        {/* Left Image with Bottom-Right Box */}
        <Col md={6} className="p-0">
          <div style={{ position: "relative", width: "100%" }}>
            <img
              src="public\\iStock-1363232669.png"
              alt="AI-Hub"
              className="img-fluid"
              style={{
                height: "70%",
                width: "80%",
                objectFit: "cover",
                marginLeft: "25px",
              }}
            />
            {/* Small Grey Box */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                backgroundColor: "#D3D3D3",
                padding: "35px 20px 20px 90px",
                borderRadius: "20px",
                color: "white",
                fontSize: "12px",
                marginRight:"100px"
              }}
            >
             <span> Logo Box</span>
            </div>
          </div>
        </Col>

        {/* Right Content */}
        <Col md={6} className="px-4">
          <h2 className="mt-4 mb-4">Internet of Things (IoT)</h2>
          <p className="mb-4" style={{ textAlign: "justify", marginRight: "110px" }}>
            The internet of things helps people live and work smarter, as well
            as gain complete control over their lives. In addition to offering
            smart devices to automate homes, IoT is essential to business.
          </p>
          <ul className="mb-4" style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li className="d-flex align-items-center mb-4">
              <img
                src="public/Icon.png"
                alt="Icon 1"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              IOT Software & Telematic Devices
            </li>
            <li className="d-flex align-items-center mb-4">
              <img
                src="public/Icon.png"
                alt="Icon 2"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              Data Security and Encryption
            </li>
            <li className="d-flex align-items-center mb-4">
              <img
                src="public/Icon.png"
                alt="Icon 3"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              Firmware and Software
            </li>
          </ul>
          <Button className="gradient-button">
            <span style={{ fontWeight: "500", letterSpacing: "1.5px" }}>
              Learn More
            </span>
            <span className="button-icon">
              <img src="public\\Vector (1).png" alt="Right Arrow" />
            </span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AIHubSection;
