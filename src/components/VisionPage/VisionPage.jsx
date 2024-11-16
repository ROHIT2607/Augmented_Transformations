import React from "react";
import "./VisionPage.css";

const VisionPage = () => {
  return (
    <>
      <div className="main-vision-div">
        <div className="vision-img-div">
          <img className="vision-img" src="/vision.png" alt="" />
        </div>
        <div className="shape-img-1">
          <img src="/video_shape_vision1.png" alt="" />
        </div>
        <div className="shape-img-2">
          <img src="/video_shape_vision.png" alt="" />
        </div>

        <div className="vision-para">
          <p>Driving Innovation</p>
        </div>

        <div className="vision-head-para">
          <p>
            Our vision is to be client's preferred technology <br /> partner for
            augmentation of their digitial <br />
            transformations journey
          </p>
        </div>

        <div className="vision-card-1-main">
          <div className="vision-card-1">
            <img
              className="vision-card-1-img"
              src="/vision-card-1.png"
              alt="card 1 image"
            />
            <p className="vision-card-1-para">100</p>
          </div>
          <div className="vision-card-1-para-2">
            <p>Solutions Provided</p>
          </div>
        </div>

        <div className="vision-card-2-main">
          <div className="vision-card-2">
            <img
              className="vision-card-2-img"
              src="/vision-card-2.png"
              alt="card 2 image"
            />
            <p className="vision-card-2-para">20</p>
          </div>
          <div className="vision-card-2-para-2">
            <p>Awards Recevied</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionPage;
