import React from "react";
import Project_Single_Card from "./Project_Single_Card/Project_Single_Card";
import "./Project_Cards.css";

const Project_Cards = () => {
  const projects = [
    {
      title: "Smart Meter Data Management System",
      description:
        "Developed a robust Smart Meter Data Management System, surpassing customer expectations.",
      image: "/project-card-1.png",
    },
    {
      title: "Quality Assurance through CCTV",
      description:
        "To address quality assurance challenges, we deployed our Video Analytics Solution (VAS) integrated with  high-resolution CCTV cameras along the production line.",
      image: "/project-card-2.png",
    },
    {
      title: "Safety Gear Detection",
      description:
        "We provided them with our state-of-the-art Video Analytics Solution designed to leverage the power  of artificial intelligence and computer vision to deliver real-time insights and actionable data.",
      image: "/project-card-3.png",
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Project_Single_Card
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Project_Cards;
