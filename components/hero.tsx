import { Button, Image } from "@nextui-org/react";
import React from "react";
import { Id } from "tabler-icons-react";

const HeroSection = () => {
	const bottomImages = [
		{
			id: "1",
			src: "https://via.placeholder.com/400x400",
			alt: "Placeholder image",
		},
		{
			id: "2",
			src: "https://via.placeholder.com/800x400",
			alt: "Placeholder image",
		},
		{
			id: "3",
			src: "https://via.placeholder.com/400x400",
			alt: "Placeholder image",
		},
	];

	return (
		<div className="w-full py-12 flex-col justify-start items-center gap-12 flex">
			<div className=" justify-start items-center gap-[60px] flex">
				<div className="flex flex-col w-1/2 gap-4">
					<div className="w-full">
						<h2>What is</h2>
						<br />
						<h1 className="text-ft-primary-yellow">Fintech CLub</h1>
					</div>
					<div className="p">
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock, a Latin professor at Hampden-Sydney
						College in Virginia, Contrary to popular belief, Lorem
						Ipsum is not simply random text. It has roots in a piece
						of classical Latin literature from 45 BC, making it over
						2000 years old. Richard McClintock, a Latin professor at
						Hampden-Sydney College in Virginia,{" "}
					</div>
					<div className="justify-start items-center gap-6 flex">
						{/* <button className="w-[130px] h-[45px] text-ft-text-bright rounded-xl justify-center items-center flex bg-ft-primary-blue">
                            Read More
                        </button> */}
						{/* <button className="w-[130px] h-[45px] text-ft-text-bright rounded-xl justify-center items-center flex bg-ft-primary-blue">
                            Join Us
                        </button> */}
						<Button color="primary" variant="solid">
							Read More
						</Button>
						<Button color="primary" variant="solid">
							Join Us
						</Button>
					</div>
				</div>
				<div className="w-1/2 h-full rounded-xl">
					<Image
						className="w-full h-full"
						src="https://via.placeholder.com/800x450"
					/>
				</div>
			</div>
			<div className="h-[400px] justify-end items-center gap-12 flex">
				{bottomImages.map((img, _idx) => (
					<Image
						key={img.id}
						className="w-full h-full"
						src={img.src}
						alt={img.alt}
					/>
				))}
			</div>
		</div>
	);
};

export default HeroSection;