import React from "react";
import "./Single_Card.css";
import { motion } from "motion/react";
const Single_Card = ({ imageSrc, title, description, style }) => {
  return (
    <div className="card-container" style={style}>
      <div className="box">
        <div className="box-content">
          <img src={imageSrc} alt="Card Top" className="card-image" />
          <img src="line.png" alt="" className="line-img" />
          <div className="card-data">
            <h3 className="card-h3">{title}</h3>
            <p className="card-p">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_Card;
