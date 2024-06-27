import React from "react";
import ProjectDescription from "./components/projectDescription";
import ProjectTeam from "./components/projectTeam";
import TechStack from "./components/techStack";

const TechnicalProjectPage: React.FC = () => {
  return (
    <div className="w-100 h-auto bg-ft-background">
      <ProjectDescription />
      <TechStack />

      {/* Project Video/Image Demo */}
      <h1 className="w-full h-full my-4 text-center text-ft-primary-blue text-4xl font-extrabold">
        Our Demo
      </h1>
      <div className="w-[16vw] h-0.5 bg-ft-primary-yellow m-auto" />
      <img
        src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/fintech-forum-2024.JPG"
        alt="event-img"
        className="mx-auto w-[70vw] h-auto rounded-2xl"
      />

      <ProjectTeam />
    </div>
  );
};

export default TechnicalProjectPage;