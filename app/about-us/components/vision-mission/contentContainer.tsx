import clsx from "clsx";
import type React from "react";

type ContentContainerProps = {
	title: string;
	content: string;
	headingColor: string;
	textColor: string;
	bgColor: string;
	rounded: string;
};

const ContentContainer: React.FC<ContentContainerProps> = ({
	title,
	content,
	headingColor,
	textColor,
	bgColor,
	rounded,
}) => {
	return (
		<div
			className={clsx(
				"relative w-screen text-center pt-12 md:pb-44 pb-32 md:px-32 px-11 md:w-1/2",
				rounded,
				bgColor,
			)}
		>
			<h1 className={clsx("text-6xl my-8", headingColor)}> {title} </h1>
			<div
				className={clsx(
					"text-2xl text-justify relative md:text-xl mx-auto",
					textColor,
				)}
			>
				{" "}
				{content}{" "}
			</div>
		</div>
	);
};

export default ContentContainer;
