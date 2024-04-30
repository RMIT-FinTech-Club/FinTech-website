import { Button, Image } from "@nextui-org/react";
import React from "react";

const HeroSection = () => {
	const bottomImages = [
		{
			id: "1",
			src: "https://via.placeholder.com/500x400",
			alt: "Placeholder image",
		},
		{
			id: "2",
			src: "https://via.placeholder.com/800x400",
			alt: "Placeholder image",
		},
		{
			id: "3",
			src: "https://via.placeholder.com/500x400",
			alt: "Placeholder image",
		},
	];

	return (
		<div className="w-full py-3 lg:py-12 flex-col justify-start items-center gap-6 md:gap-12 flex">
			<div className=" justify-start items-center gap-6 md:gap-[60px] flex flex-col md:flex-row">
				<div className="flex flex-col w-full lg:w-1/2 gap-4">
					<div className="w-full">
						<h2>What is</h2>
						<br />
						<h1 className="text-ft-primary-yellow">Fintech CLub</h1>
						<br />
					</div>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock, a Latin professor at Hampden-Sydney
						College in Virginia, Contrary to popular belief, Lorem
						Ipsum is not simply random text. It has roots in a piece
						of classical Latin literature from 45 BC, making it over
						2000 years old. Richard McClintock, a Latin professor at
						Hampden-Sydney College in Virginia,{" "}
					</p>
					<div className="justify-start items-center gap-6 flex">
						{/* <button className="w-[130px] h-[45px] text-ft-text-bright rounded-xl justify-center items-center flex bg-ft-primary-blue">
							Read More
						</button> */}
						{/* <button className="w-[130px] h-[45px] text-ft-text-bright rounded-xl justify-center items-center flex bg-ft-primary-blue">
                            Join Us
                        </button> */}
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
				<div className="w-full md:w-1/2 h-full rounded-xl">
					<Image
						className="w-full h-[450px] object-cover"
						src="https://via.placeholder.com/800x450"
						alt="Placeholder image"
					/>
				</div>
			</div>
			<div className="flex-col md:flex-row justify-end items-center gap-12 flex">
				{bottomImages.map((img, _idx) => (
					<Image
						className="w-full h-full"
						key={img.id}
						src={img.src}
						alt={img.alt}
					/>
				))}
			</div>
		</div>
	);
};

export default HeroSection;
