import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url(/Footer.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "20px 0",
      }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <img
              src="public\footer-logo.png"
              alt="Augmented Transformations Logo"
              style={{ width: "150px", marginBottom: "10px" }}
            />
            <p className="info">
              We specialize in crafting data-driven solutions tailored to meet
              the distinct challenges encountered by organizations across a
              diverse range of industry verticals.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="public\Item → Link (3).png"
                  alt="Twitter"
                  style={{ width: "30px" }}
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="public\Item → Link.png"
                  alt="Facebook"
                  style={{ width: "30px" }}
                />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="public\Item → Link (1).png"
                  alt="Pinterest"
                  style={{ width: "30px" }}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="public\Item → Link (2).png"
                  alt="Instagram"
                  style={{ width: "30px" }}
                />
              </a>
            </div>
          </Col>

          <Col md={2}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#about"
                  className="text-decoration-none"
                  style={{ color: "#ccc", fontWeight: "300" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-decoration-none"
                  style={{ color: "#ccc", fontWeight: "300" }}
                >
                  Meet our Team
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-decoration-none"
                  style={{ color: "#ccc", fontWeight: "300" }}
                >
                  News & Media
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-decoration-none"
                  style={{ color: "#ccc", fontWeight: "300" }}
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-decoration-none"
                  style={{ color: "#ccc", fontWeight: "300" }}
                >
                  Contacts
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 style={{ fontWeight: "300" }}>Newsletter</h5>
            <p style={{ fontWeight: "lighter", fontSize: "small" }}>
              Signup for our latest news & articles. We won’t give you spam
              mails.
            </p>
            <Form>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  style={{
                    fontWeight: "300", // Light font weight for the input text
                  }}
                />
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#4e69db",
                    border: "none",
                    fontWeight: "300", // Light font weight for button icon if needed
                  }}
                >
                  <i className="fa fa-paper-plane" />
                </Button>
              </InputGroup>
            </Form>
          </Col>

          <Col md={3}>
            <h5 style={{ marginLeft: '20px'}}>Contact</h5>
            <p style={{ fontWeight: "300", fontSize: "small", marginLeft: '20px' }}>
              <i className="fa fa-phone"></i> 020 67696500
            </p>
            <p style={{ fontWeight: "300", fontSize: "small", marginLeft: '20px' }}>
              <i className="fa fa-map-marker"></i> 1020, Premlal Patel Nagar,
              Bavdhan, Pune, Maharashtra
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
