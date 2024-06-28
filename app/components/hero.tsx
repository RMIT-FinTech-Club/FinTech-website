import { Button, Image } from "@nextui-org/react";
import React from "react";

const bottomImages = [
	{
		id: "1",
		src: "",
		size: "w-full md:w-1/4",
		alt: "Placeholder image",
	},
	{
		id: "2",
		size: "hidden md:block w-full md:w-1/2",
		src: "",
		alt: "Placeholder image",
	},
	{
		id: "3",
		size: "hidden md:block w-full md:w-1/4",
		src: "",
		alt: "Placeholder image",
	},
];

const HeroSection = () => {
	return (
		<div className="w-11/12 py-3 lg:py-12 flex-col justify-start items-center gap-6 md:gap-12 flex">
			<div className=" justify-start items-center gap-6 md:gap-[60px] flex flex-col md:flex-row ">
				<div className="w-full md:w-1/2 h-full">
					<h5>What is</h5>
					<br />
					<h4 className="text-ft-primary-yellow">Fintech Club</h4>
					<br />
					<p className="line-clamp-6 md:line-clamp-3 lg:line-clamp-5">
						We’re the first ever student-led Financial Technology initiative in Vietnam. Founded in 2020, our original mission was to create an interdisciplinary learning hub between Business and Technology major students, to advance each other’s expertise and help understand the interconnected nature of Technological advancement and real Business issues.
					</p>
					<p className="line-clamp-6 md:line-clamp-3 lg:line-clamp-5">
					Since then, we’ve evolved from just a learning hub, to an opportunity-driven playground for our members, where they can participate in diverse large-scale events, workshops, tours, media, tech-development, bonding and social projects. Through these activities, our organization hopes to deliver exceptional value to internal members, whilst engaging the wider community of Business, Finance and Technology enthusiasts!
					</p>
					<div className="justify-start items-center gap-6 flex">
						<Button
							className="bg-ft-primary-blue text-ft-text-bright"
							variant="solid"
						>
							Read More
						</Button>
						<Button
							className="bg-ft-primary-blue text-ft-text-bright"
							variant="solid"
						>
							Join Us
						</Button>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-[400px] md:h-[400px] lg:h-[400px] rounded-xl relative border-2 border-black">
					<Image
						className="w-full h-full absolute object-cover"
						src=""
						alt="Placeholder image"
					/>
				</div>
			</div>
			<div className="flex-col md:flex-row justify-end items-center gap-12 flex w-full">
				{bottomImages.map((img, _idx) => (
					<div
						key={img.id}
						className={`h-[300px] md:h-[200px] lg:h-[300px] relative border-2 rounded-xl border-black 
							${img.size}`}
					>
						<Image
							className="w-full h-full absolute object-cover"
							src={img.src}
							alt={img.alt}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default HeroSection;
