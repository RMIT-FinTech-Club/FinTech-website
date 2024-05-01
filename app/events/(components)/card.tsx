import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
} from "@nextui-org/react";
import type React from "react";

interface CardProps {
	title: string;
	description: string;
	date: string;
	imageUrl: string;
}

const EventCard: React.FC<CardProps> = ({
	title,
	description,
	date,
	imageUrl,
}) => {
	return (
		<div className="bg-ft-background-popup bg-opacity-20 transition-shadow duration-300 rounded-2xl w-11/12 h-[500px] relative flex g-5 hover:shadow mb-5 border-gray-300 border-2">
			<Image
				isZoomed
				width={650}
				src={imageUrl}
				alt={title}
				className="object-cover h-[350px] rounded-2xl z-10"
			/>

			<div className="absolute bottom-0 text-ft-primary-blue-500 p-5 h-[150px] w-full flex items-center justify-around gap-10 rounded-b-2xl">
				<div>
					<h5>{date}</h5>
				</div>
				<div>
					<h3 className="text-ft-heading-5 font-bold">{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
