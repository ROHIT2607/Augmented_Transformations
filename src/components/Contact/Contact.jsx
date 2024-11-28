import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#F0F4FF" }}>
      <Row
        className="align-items-center rounded shadow-lg"
        style={{
          backgroundColor: "#A9CCF9",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {/* Left Side - Form Section */}
        <Col md={6} className="p-5">
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              left:"5%",
              top:"10%",
              right:"50%",
            }}
          >
            <h2 className="mb-4 text-danger">Get in touch</h2>
            <p className="mb-4">
              Let’s connect and explore how Augmented Transformation can take
              your business to the next level. Reach out below, and our team
              will respond promptly to begin your transformation journey.
            </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#F7FAFF",
                    border: "1px solid #d3d9e3",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#F7FAFF",
                    border: "1px solid #d3d9e3",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#F7FAFF",
                    border: "1px solid #d3d9e3",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#F7FAFF",
                    border: "1px solid #d3d9e3",
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{
                  backgroundColor: "#007bff",
                  border: "none",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              >
                Send Message
              </Button>
            </Form>
          </div>
        </Col>

        {/* Right Side - Contact Info Section */}
        <Col md={6} className="p-5 d-flex flex-column justify-content-center">
          <div
            className="d-flex flex-column"
            style={{
              height: "100%",
            }}
          >
            {/* Top Half: Image */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                flex: 1,
                paddingBottom: "10px",
              }}
            >
              <img
                src="public\Group 787.png"
                alt="Contact Illustration"
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Bottom Half: Contact Info */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#ffffff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5 className="text-primary">Contact Info</h5>
              <div className="d-flex align-items-center mb-3">
                <img
                  src="public\mail (1).gif"
                  alt="Email Icon"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                <div>
                  <p style={{ margin: 0 }}>Mail Us</p>
                  <p style={{ margin: 0 }}>info@augtrans.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <img
                  src="public\Calling V5 (1).gif"
                  alt="Email Icon"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                <div>
                  <p style={{ margin: 0 }}>Phone</p>
                  <p style={{ margin: 0 }}>020-67225000</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <img
                   src="public\location (1).gif"
                  alt="Email Icon"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                <div>
                  <p style={{ margin: 0 }}>Location</p>
                  <p style={{ margin: 0 }}>X29, Pune, Maharashtra</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <img
                   src="public\time (1).gif"
                  alt="Email Icon"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                <div>
                  <p style={{ margin: 0 }}>Time</p>
                  <p style={{ margin: 0 }}>Monday - Friday, 9:00 AM - 6:00 PM</p>                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
