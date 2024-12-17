import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Highlights.css";

const Highlights = () => {
  return (
    <Container
      fluid
      className="highlights-section"
      style={{
        backgroundColor: "white",
        padding: "50px 30px",
      }}
    >
      <Row className="d-flex">
        {" "}
        <h2 className="title-heading">
          <span className="highlighted-text">Highlights</span>
          <span> Video Analytics Solution</span>
        </h2>
        <Col md={6} className="d-flex flex-column justify-content-between">
          <div>
            {/* Points Section */}
            <ul className="highlights-list" style={{textAlign: "justify",marginRight:"5%", width:"80%",marginLeft:"10%"}}>
              <li>
                <h5>Smart Object Detection</h5>
                <p>
                  VAS employs advanced algorithms to intelligently identify and
                  track objects of interest in your video footage, enhancing
                  security and situational awareness.
                </p>
              </li>
              <li>
                <h5>Data-driven Decision Making</h5>
                <p>
                  Harness the power of video data analytics to make informed
                  decisions, improve operational efficiency, and respond
                  proactively to events.
                </p>
              </li>
            </ul>
            <div className="image-container" style={{ flexGrow: 1,textAlign:"center",marginTop:"-7%" }}>
            <img
              src="public\\finance2.png"
              alt="VAS Illustration"
              style={{
                maxWidth: "50%",
                height: "auto",
              }}
            />
          </div>
          </div>          
        </Col>
        {/* Second Half: Remaining Points */}
        <Col md={6} className="d-flex flex-column justify-content-between">
          <ul className="highlights-list" style={{ textAlign: "justify",width:"80%" }}>
            <li>
              <h5>Dashboards & Alerts</h5>
              <p>
                Tailor VAS with customizable dashboards, providing real-time
                insights & notifications for critical events.
              </p>
            </li>
            <li>
              <h5>Scalability</h5>
              <p>
                Whether you have a small-scale setup or a large-scale
                enterprise, VAS can scale to meet your needs, making it suitable
                for businesses of all sizes.
              </p>
            </li>
            <li>
              <h5>User-Friendly Interface</h5>
              <p>
                The intuitive user interface of VAS makes it easy for staff at
                all levels to use and extract valuable insights from your video
                surveillance system.
              </p>
            </li>
            <li>
              <h5>Integration Capabilities</h5>
              <p>
                Seamlessly integrate VAS solutions into your existing
                surveillance infrastructure, enabling a unified and
                comprehensive approach to video management.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Highlights;
