import PuzzleItem from "./puzzleItem";

const PuzzleContainer = () => {
	return (
		<div className="absolute -rotate-90 flex flex-col md:rotate-0">
			<PuzzleItem
				bgColor={"bg-ft-primary-blue"}
				circleColor={"bg-ft-primary-yellow"}
				borderRadius={"rounded-es-[2rem]"}
				circlePosition={"top-3 left-[18px]"}
			/>
			<PuzzleItem
				bgColor={"bg-ft-primary-yellow"}
				circleColor={"bg-ft-primary-blue"}
				borderRadius={"rounded-se-[2rem]"}
				circlePosition={"bottom-3 right-[18px]"}
			/>
		</div>
	);
};

export default PuzzleContainer;
