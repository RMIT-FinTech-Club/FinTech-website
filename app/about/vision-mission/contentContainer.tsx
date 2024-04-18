import clsx from "clsx";
import React from "react";

type ContentContainerProps = {
    title: string;
    content: string;
    headingColor: string;
    textColor: string;
    bgColor: string;
};

const ContentContainer: React.FC<ContentContainerProps> = ({title, content, headingColor, textColor, bgColor}) => {
	return (
		<div
			className={clsx('relative w-screen text-center pt-12 pb-24 px-24 md:w-1/2', bgColor)}
		>
			<h1 className={clsx('text-6xl my-8', headingColor)}> {title} </h1>
			<div
				className={clsx('text-2xl text-justify relative md:text-xl', textColor)}
			>
				{" "}
				{content}{" "}
			</div>
		</div>
	);
};

export default ContentContainer;
