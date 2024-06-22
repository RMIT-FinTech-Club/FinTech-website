import type React from "react";

interface RoadToFtcContainerProps {
	header: string;
	text: string;
	containerClassName?: string;
}

const RoadToFtcContainer: React.FC<RoadToFtcContainerProps> = ({
	header,
	text,
	containerClassName,
}) => {
	return (
		<div className={containerClassName}>
			<div className="rounded-2xl bg-gradient-to-r from-ft-primary-blue-200 to-ft-primary-blue-500 p-1 lg:p-2 w-4/5 lg:w-full">
				<div className="flex flex-col items-center px-2 py-1 lg:px-4 lg:py-2 rounded-[calc(1rem-0.25rem)] bg-white w-full">
					<h5 className="px-1 py-1 lg:py-2 lg:px-2">{header}</h5>
					<p className="px-1 py-1 lg:py-2 lg:px-2 text-center leading-normal w-4/5">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default RoadToFtcContainer;
