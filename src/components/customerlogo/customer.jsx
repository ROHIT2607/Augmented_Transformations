import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './customer.css'

function CustomerLogos() {
  return (
    <>
    <Container style={{fontFamily:"poppins", marginLeft:0}}>
        <h2 className="mb-4" style={{fontWeight:"600"}}>Our Customers & Partners</h2>
    </Container>
    <Container fluid className="py-5" style={{ backgroundColor: "#E9E9E9",height:"20px" }}>
      <Container style={{marginTop:"-50px"}}>
        <div className="scrollable-row">
          <div className="scrollable-content">
            <div className="image-wrapper">
              <Image src="public/image 12.png" alt="DSC" fluid />
            </div>
            <div className="image-wrapper">
              <Image src="public/image 13.png" alt="AJAX" fluid />
            </div>
            <div className="image-wrapper">
              <Image src="public/image 14.png" alt="OVINO" fluid />
            </div>
            <div className="image-wrapper">
              <Image src="public/image 15.png" alt="ACE" fluid />
            </div>
            <div className="image-wrapper">
              <Image src="public/image 16.png" alt="Apollo" fluid />
            </div>
            <div className="image-wrapper">
              <Image src="public/image 17.png" alt="GEPDEC" fluid />
            </div>
          </div>
        </div>
      </Container>
    </Container>
    </>
  );
}

export default CustomerLogos;