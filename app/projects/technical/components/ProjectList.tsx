import React from "react";
import TechnicalProjectCard from "./TechnicalProjectCard";

const ProjectList: React.FC = () => {
	return (
		<div className="lg:w-[65vw] w-[90vw] mx-auto flex flex-col md:gap-24 gap-12 py-8">
			<TechnicalProjectCard
				projectTitle="Project 1"
				projectDescription="Description 1"
				projectImg="https://via.placeholder.com/150"
			/>
			<TechnicalProjectCard
				projectTitle="Project 2"
				projectDescription="Description 2"
				projectImg="https://via.placeholder.com/150"
			/>
			<TechnicalProjectCard
				projectTitle="Project 3"
				projectDescription="Description 3"
				projectImg="https://via.placeholder.com/150"
			/>
		</div>
	);
};

export default ProjectList;

