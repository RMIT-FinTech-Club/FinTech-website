import React from "react";

const tags = ["Web Development", "Computer Vision", "UI/UX Design", "Cloud Computing"]

const TechnicalTag: React.FC<{ tagName: string }> = ({ tagName }) => {
  return (
    <div>{tagName}</div>
  );
}

const TechnicalProjectCard: React.FC<{ projectTitle: string, projectDescription: string, projectImg: string }> = ({ projectTitle, projectDescription, projectImg }) => {
  return (
    <div className="flex flex-row">
      <img className="" src={projectImg} alt=""></img>
      <div className="flex flex-col">
        {tags.map((tag) => (<TechnicalTag tagName={tag} />))}
        <h2></h2>
      </div>
    </div>
  );
}