import React from 'react';
import './carousel.css'; // Import your styles
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/pexels-fauxels-3184339.jpg"
            className="d-block w-100"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block" id="data">
            <h5>
              THE FUTURE IS <span className="text-primary"> NOW</span>
            </h5>
            <p>
              Partner with Augmented Transformation <span>
                <img src="\banner-icon.png-removebg-preview.png" alt="and" id='and' style={{height:"45px",width:"45px"}}/>
              </span>
            </p>
            <p>
              Unlock the true potential of your organization through data-driven
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
