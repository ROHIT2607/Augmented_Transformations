import React from "react";
import "./Project_Single_Card.css";

const Project_Single_Card = ({ title, description, image }) => {
  return (
    <div className="card-div">
      <div className="card-data">
        <div className="circle"></div>
        <div className="card-head-div">
          <h3 className="card-head">{title}</h3>
        </div>
        <div className="div-card-para">
          <p className="card-para">{description}</p>
        </div>
      </div>
      <div className="card-img-div">
        <img className="card-img-dim" src={image} alt="project-card" />
      </div>
    </div>
  );
};

export default Project_Single_Card;
