import { Button } from "@nextui-org/react";
import React from "react";

interface RoadToFtcButtonProps {
	text: string;
	color: string;
}

const RoadToFtcButton = ({ text, color }: RoadToFtcButtonProps) => {
	return (
		<div>
			{/* Laptop view */}
			<div className="hidden lg:flex">
				<Button
					className={`mx-8 my-2 py-2 px-4 ${color} text-white font-bold rounded-xl w-96 h-24 text-4xl`}
				>
					{text}
				</Button>
			</div>
			{/* Mobile view */}
			<div className="flex lg:hidden">
				<Button
					className={`mx-2 my-2 py-2 px-2 ${color} text-white font-bold rounded-full w-44 h-12 text-xl`}
				>
					{text}
				</Button>
			</div>
		</div>
	);
};

export default RoadToFtcButton;
