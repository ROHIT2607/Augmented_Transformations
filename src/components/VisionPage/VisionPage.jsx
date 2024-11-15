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

        <div className="vision-card-1">
          <img
            className="vision-card-1-img"
            src="/vision-card-1.png"
            alt="card 1 image"
          />
          <p className="vision-card-1-para">
          100
          </p>
        </div>
      </div>
    </>
  );
};

export default VisionPage;
