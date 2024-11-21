import React from "react";
import Project_Cards from "./Project_Cards/Project_Cards";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="project-cards-div">
        <div className="project-cards-scroll">
          <Project_Cards />
        </div>
      </div>
    </>
  );
};

export default Projects;
