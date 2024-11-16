import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ai.css';

const AIHubSection = () => {
  return (
    <Container fluid className="py-3">
      <Row className="align-items-center g-0">
      <h3 className="text-primary custom-gradient-text">
      Transform your vision into reality with our innovative projects <br />
      that redefine success and set new industry standards.
    </h3>

        {/* Left Image */}
        <Col md={6} className="p-0">
          <img
            src="public/ai-cloud-concept-with-robot-hand 1 (1).png"
            alt="AI-Hub"
            className="img-fluid"
            style={{ height: '100%', width: '100%', objectFit: 'cover', marginLeft: '-15px' }}
          />
        </Col>

        {/* Right Content */}
        <Col md={6} className="px-4">
          <h2 className="mt-4 mb-4">AI-Hub</h2>
          <p className='mb-4' style={{ textAlign: 'justify',marginRight: '50px' }}>
            AI-Hub is a robust platform designed for container orchestration in
            GPU-enabled environments. It seamlessly handles multi-node
            operations and accommodates various AI/ML frameworks, ensuring
            optimal performance and adaptability.
          </p>
          <ul className='mb-4' style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li className="d-flex align-items-center mb-4">
                <img
                src="public/Icon.png"
                alt="Icon 1"
                style={{ width: '24px', height: '24px', marginRight: '10px' }}
                />
                Sparkling AI Workspace
            </li>
            <li className="d-flex align-items-center mb-4">
                <img
                src="public/Icon.png"
                alt="Icon 2"
                style={{ width: '24px', height: '24px', marginRight: '10px' }}
                />
                GPU Orchestration
            </li>
            <li className="d-flex align-items-center mb-4">
                <img
                src="public/Icon.png"
                alt="Icon 3"
                style={{ width: '24px', height: '24px', marginRight: '10px' }}
                />
                Multi-Framework Support
            </li>
            </ul>
          {/* <Button
            
          variant="primary">Learn More</Button> */}
           <Button className="gradient-button">
            <span style={{fontWeight:"500",letterSpacing:"1.5px"}}>Learn More</span>
            <span className="button-icon">
                <img src="public\Vector (1).png" alt="Right Arrow" />
            </span>
            </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AIHubSection;
