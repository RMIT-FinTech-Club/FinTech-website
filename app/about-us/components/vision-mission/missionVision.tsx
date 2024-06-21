import ContentContainer from "./contentContainer";
import PuzzleContainer from "./puzzleContainer";

const VisionMission = () => {
	const mainContent = {
		mission: {
			title: "Mission",
			content:
				'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
		},
		vision: {
			title: "Vision",
			content:
				'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
		},
	};

	return (
		<div className="min-w-56 flex flex-col-reverse justify-center items-center left-0 md:flex-row">
			<ContentContainer
				title={mainContent.vision.title}
				content={mainContent.vision.content}
				headingColor={"text-ft-primary-blue"}
				textColor={"text-black"}
				bgColor={"bg-ft-primary-yellow"}
				rounded={"md:rounded-br-[50px]"}
			/>
			<ContentContainer
				title={mainContent.mission.title}
				content={mainContent.mission.content}
				headingColor={"text-ft-primary-yellow"}
				textColor={"text-white"}
				bgColor={"bg-ft-primary-blue"}
				rounded={"md:rounded-bl-[50px]"}
			/>
			<PuzzleContainer />
		</div>
	);
};

export default VisionMission;
