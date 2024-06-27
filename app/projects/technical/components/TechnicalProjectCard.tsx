import type React from "react";

const tags = ["Web Development", "Computer Vision", "UI/UX Design"];

const TechnicalTag: React.FC<{ tagName: string }> = ({ tagName }) => {
	return (
		<div className="m-1 text-[0.75rem] p-1 rounded-md text-black font-bold border-ft-primary-blue border-[2px]">
			{tagName}
		</div>
	);
};

const TechnicalProjectCard: React.FC<{
	projectTitle: string;
	projectDescription: string;
	projectImg: string;
}> = ({ projectTitle, projectDescription, projectImg }) => {
	return (
		<div className="flex odd:flex-row even:flex-row-reverse justify-between box-border p-2 rounded-xl">
			<img
				className="rounded-xl w-[20vw] max-sm:hidden aspect-square"
				src={projectImg}
				alt=""
			></img>

			<div className="flex flex-col lg:w-[40vw] md:w-[60vw] sm:w-full min-w-[320px] relative gap-2">
				<div className="flex gap-2 max-sm:justify-center">
					{tags.map((tag, id) => (
						<TechnicalTag key={id} tagName={tag} />
					))}
				</div>
				<h2 className="text-[3rem] text-ft-primary-yellow font-bold max-sm:text-center">
					{projectTitle}
				</h2>
				<p className="w-full text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Aperiam perferendis iusto ut adipisci velit deserunt
					necessitatibus explicabo exercitationem, possimus sequi
					minima impedit blanditiis itaque. Rerum veniam porro vitae
					nobis corrupti.
				</p>
				<div className="w-full flex justify-end">
					<button className="text-white text-[1rem] font-semibold bg-ft-primary-blue hover:bg-ft-primary-blue-600 w-40 max-sm:w-full p-3 rounded-lg">
						<span className="block w-full h-full hover:scale-110">
							Read more
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TechnicalProjectCard;
