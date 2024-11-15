import React from "react";
import "./Single_Card.css";

const Single_Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card-container">
      <div className="box">
        <img src={imageSrc} alt="Card Top" className="card-image" />
        <h3 className="card-h3">{title}</h3>
        <p className="card-p">{description}</p>
      </div>
    </div>
  );
};

export default Single_Card;
