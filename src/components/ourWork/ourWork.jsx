import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ai.css";

const AIHubSection = () => {
  return (
    <Container fluid className="py-3">
      <Row className="align-items-center g-0">
        <h3
          className="text-primary custom-gradient-text"
          style={{ fontWeight: "bolder" }}
        >
          Our Work
        </h3>

        {/* Left Image */}
        <Col md={6} className="p-0">
          <img
            src="public\iPhone 15.png"
            alt="AI-Hub"
            className="img-fluid"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              marginLeft: "-15px",
            }}
          />
        </Col>

        {/* Right Content */}
        <Col md={6} className="px-4">
          <h2 className="mt-4 mb-4">E-Commerce Platform</h2>
          <p
            className="mb-4"
            style={{ textAlign: "justify", marginRight: "110px" }}
          >
            Develop an E-Commerce Platform (Web/App). The goal is to sell dairy
            products, beginning with milk. The service entails shipping fresh
            milk daily in glass bottles directly to customers. Customers should
            be able to order, make payments, and connect with the company via
            the app
          </p>
          {/* <Button
            
          variant="primary">Learn More</Button> */}
          <Button className="gradient-button">
            <span style={{ fontWeight: "500", letterSpacing: "1.5px" }}>
              Learn More
            </span>
            <span className="button-icon">
              <img src="public\Vector (1).png" alt="Right Arrow" />
            </span>
          </Button>
          <img src="public\Component 54.png" alt="AI-Hub" className="img-fluid" style={{marginLeft:"215px",
            marginTop:"-70px",width:"50%",height:"40%",objectFit:"cover"
          }}/>
        </Col>
      </Row>
    </Container>
  );
};

export default AIHubSection;
