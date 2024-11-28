import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#F0F4FF" }}>
      <Row
        className="d-flex align-items-stretch rounded shadow-lg"
        style={{
          backgroundColor: "#A9CCF9",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {/* Left Side - Form Section */}
        <Col
          md={6}
          className="p-5 d-flex flex-column justify-content-center h-100"
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              height: "100%",
            }}
          >
            <h2 className="mb-4 text-danger">Get in touch</h2>
            <p className="mb-4">
              Let’s connect and explore how Augmented Transformation can take
              your business to the next level. Reach out below, and our team
              will respond promptly to begin your transformation journey.
            </p>
            <hr />
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
                  rows={12}
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
        <Col
          md={6}
          className="p-5 d-flex flex-column justify-content-between h-100"
        >
          {/* Top Half: Image */}
          <div
            className="d-flex justify-content-center flex-grow-1 mb-3"
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#a9ccf9",
              padding: "10px",
              height: "50%", // Image container height
            }}
          >
            <img
              src="public/Group 787-2.png" // Corrected the backslash
              alt="Contact Illustration"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover", // Ensures the image fills from top
              }}
            />
          </div>

          {/* Bottom Half: Contact Info */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              flexShrink: 0,
            }}
          >
            <h5 className="text-primary">Contact Info</h5>
            <div className="d-flex align-items-center mb-3">
              <img
                src="public/mail (1).gif"
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
                src="public/Calling V5 (1).gif"
                alt="Phone Icon"
                style={{ width: "30px", marginRight: "10px" }}
              />
              <div>
                <p style={{ margin: 0 }}>Phone</p>
                <p style={{ margin: 0 }}>020-67225000</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img
                src="public/location (1).gif"
                alt="Location Icon"
                style={{ width: "30px", marginRight: "10px" }}
              />
              <div>
                <p style={{ margin: 0 }}>Location</p>
                <p style={{ margin: 0 }}>X29, Pune, Maharashtra</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img
                src="public/time (1).gif"
                alt="Time Icon"
                style={{ width: "30px", marginRight: "10px" }}
              />
              <div>
                <p style={{ margin: 0 }}>Time</p>
                <p style={{ margin: 0 }}>Monday - Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
