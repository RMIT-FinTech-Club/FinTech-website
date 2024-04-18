const PuzzleItem = ({ bgColor, circleColor, borderRadius, circlePosition }) => {
	return (
		<div
			className={`w-24·h-48·z-10·md:right-[100%]·md:top-24·md:rotate-0·${bgColor}·${borderRadius}`}
		>
			<div
				className={`absolute·w-3·h-3·rounded-full·${circleColor}·${circlePosition}`}
			/>
		</div>
	);
};

export default PuzzleItem;
