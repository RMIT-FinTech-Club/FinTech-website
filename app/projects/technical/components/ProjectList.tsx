import React from "react";
import TechnicalProjectCard from "./TechnicalProjectCard";

const ProjectList: React.FC = () => {
  return (
    <div className="flex flex-col">
      <TechnicalProjectCard projectTitle="Project 1" projectDescription="Description 1" projectImg="https://via.placeholder.com/150" />
      <TechnicalProjectCard projectTitle="Project 2" projectDescription="Description 2" projectImg="https://via.placeholder.com/150" />
      <TechnicalProjectCard projectTitle="Project 3" projectDescription="Description 3" projectImg="https://via.placeholder.com/150" />
    </div>
  );
};

export default ProjectList;