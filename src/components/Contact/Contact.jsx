import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#f8f9fc" }}>
      <Row className="align-items-center">
        <Col md={6} className="p-4">
          <h2 className="mb-4 text-primary">Get in touch</h2>
          <p className="mb-4">
            Let’s connect and explore how Augmented Transformation can take your
            business to the next level. Reach out below, and our team will
            respond promptly to begin your digital transformation journey.
          </p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email Address"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Subject"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Button
              type="submit"
              className="w-100"
              style={{
                backgroundColor: "#007bff",
                border: "none",
                borderRadius: "10px",
              }}
            >
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6} className="text-center position-relative">
          <div className="position-absolute" style={{ top: "10%", left: "50%" }}>
            <img
              src="public\Group 787.png" 
              alt="Mobile Contact Illustration"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "20%",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5 className="text-primary">Contact Info</h5>
            <p>Email: <strong>info@augtrans.com</strong></p>
            <p>Phone: <strong>020-67225000</strong></p>
            <p>Location: X29, Pune, Maharashtra</p>
            <p>Time: Monday - Friday, 9:00 AM - 6:00 PM</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
