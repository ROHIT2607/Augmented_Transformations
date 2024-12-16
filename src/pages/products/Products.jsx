import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

const VASComponent = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "0",
        margin: "0",
      }}
    >
      <Row className="align-items-center m-0" style={{ minHeight: "100vh" }}>
        {/* Left Content Section */}
        <div style={{
            position: "absolute",
            top: "-45%",
            left: "-20%",
          }}>
            <img src="public\Groupprod.png" alt="line" />
          </div>
          
        <Col md={6} className="p-5 position-relative">
          <h2
            style={{
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, rgba(226, 14, 247, 1), rgba(95, 45, 238, 1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Video Analytics{" "}
            <span style={{ color: "rgba(14, 226, 246, 1)" }}>
              Solution (VAS)
            </span>
          </h2>
          <p
            style={{
              marginTop: "20px",
              fontSize: "15px",
              lineHeight: "2.0",
              textAlign: "justify",
              wordSpacing: "2px",
            }}
          >
            <div>
              At Augmented Transformations, we are dedicated to providing
              innovative solutions that enhance safety, security, and efficiency
              in various industries. Our state-of-the-art Video Analytics
              Solution is designed to leverage the power of artificial
              intelligence and computer vision to deliver real-time insights and
              actionable data. With a range of advanced features and use cases,
              our solution offers comprehensive safety and security solutions
              for organizations across different sectors.
            </div>
            <div>
              We are committed to delivering cutting-edge solutions that
              transform the way organizations approach safety, security, and
              efficiency.
            </div>
            <div>
              Contact us today to learn more about our Video Analytics Solution
              (VAS) and how it can benefit your specific needs. 
            </div>
          </p>
          <ul className="list-unstyled mt-4">
            <li style={{ marginBottom: "15px" }}>
              <span style={{ color: "#0EE2F6", marginRight: "10px" }}>✔</span>
              Quality Assurance through CCTV
            </li>
            <li style={{ marginBottom: "15px" }}>
              <span style={{ color: "#0EE2F6", marginRight: "10px" }}>✔</span>
              Safety Gear Detection
            </li>
            <li style={{ marginBottom: "15px" }}>
              <span style={{ color: "#0EE2F6", marginRight: "10px" }}>✔</span>
              Facial Recognition
            </li>
          </ul>
        </Col>

        {/* Right Image Section */}
        <Col md={6} className="p-0 imagebg">
          <img
            src="public/products1.png"
            alt="Video Analytics Camera"
            style={{
              height: "80vh",
              width: "100%",
              objectFit: "contain", 
              marginRight: "0",
              padding: "0",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default VASComponent;
