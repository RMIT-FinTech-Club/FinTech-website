"use client";

import type React from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import Slider from "react-slick";

const eventPhotos = [
	{
		id: 1,
		url: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/forum-recap-1.JPG",
		description: "Image 1",
	},
	{
		id: 2,
		url: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/forum-recap-2.JPG",
		description: "Image 2",
	},
	{
		id: 3,
		url: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/forum-recap-3.JPG",
		description: "Image 3",
	},
	{
		id: 4,
		url: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/forum-recap-4.JPG",
		description: "Image 4",
	},
	{
		id: 5,
		url: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/forum-recap-5.JPG",
		description: "Image 5",
	},
	{
		id: 6,
		url: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/forum-recap-6.JPG",
		description: "Image 6",
	},
	{
		id: 7,
		url: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/forum-recap-7.JPG",
		description: "Image 7",
	},
	{
		id: 8,
		url: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/forum-recap-8.JPG",
		description: "Image 8",
	},
];

type PhotoInfo = {
	id: number;
	url: string;
	description: string;
};

const EventCard: React.FC<{ photoInfo: PhotoInfo }> = ({ photoInfo }) => {
	return (
		<img
			className="w-full h-full rounded-2xl object-cover"
			src={photoInfo.url}
			alt={photoInfo.description}
		/>
	);
};

const PreArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
	return (
		<div className="absolute top-1/2 left-3 z-10">
			<button
				onClick={onClick}
				className="flex justify-center w-10 h-10 rounded-full bg-ft-primary-yellow hover:bg-ft-primary-yellow-600"
			>
				<MdOutlineNavigateBefore size={40} color="white" />
			</button>
		</div>
	);
};

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
	return (
		<div className="absolute top-1/2 right-3 z-10">
			<button
				onClick={onClick}
				className="flex justify-center w-10 h-10 rounded-full bg-ft-primary-yellow hover:bg-ft-primary-yellow-600"
			>
				<MdOutlineNavigateNext size={40} color="white" />
			</button>
		</div>
	);
};

const EventGallery: React.FC = () => {
	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		accessibility: true,
		appendDots: (dots: any) => (
			<div
				style={{
					bottom: "12px",
				}}
			>
				<ul>{dots}</ul>
			</div>
		),
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "linear",
		prevArrow: <PreArrow />,
		nextArrow: <NextArrow />,
	};

	return (
		<div className="w-full h-auto py-6 bg-ft-background">
			<h1 className="w-full h-full my-4 text-center text-ft-primary-blue text-4xl font-extrabold">
				Event Recap
			</h1>
			<div className="w-[16vw] h-0.5 bg-ft-primary-yellow m-auto" />
			<div className="flex justify-center">
				<Slider
					className="w-[90vw] md:w-[80vw] lg:w-[60vw] m-2"
					{...settings}
				>
					{eventPhotos.map((photo) => (
						<EventCard key={photo.id} photoInfo={photo} />
					))}
				</Slider>
			</div>
		</div>
	);
};

export default EventGallery;
