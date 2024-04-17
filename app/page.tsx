"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardEvent from "./CardEvent";

const settings = {
	dots: false,
	infinite: false,
	dragagable: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 640,
			settings: {
				variableWidth: false,
			},
		},
	],
};

const Home = () => {
	return (
		<section className="flex flex-col gap-5 w-full overflow-hidden ">
			<h1 className="text-3xl font-bold mx-auto text-ft-primary-blue">
				EVENTS
			</h1>
			<div className="flex flex-row gap-2 mx-auto">
				<Button
					size="md"
					radius="md"
					className=" text-white text-xl bg-ft-primary-blue w-48"
				>
					Upcoming events
				</Button>
				<Button
					size="md"
					radius="md"
					className="text-ft-primary-blue text-xl w-1/3 bg-white border-solid border-ft-primary-blue border-2 w-32"
				>
					Past events
				</Button>
			</div>
			<section className="w-full sm:w-4/5 mx-auto">
				<section className="flex flex-row justify-between items-center w-full mb-5">
					<div className="w-1/3 border-solid border-ft-primary-yellow border-2 h-1 sm:hidden" />
					<div className="text-ft-primary-yellow text-2xl font-semibold">
						2024
					</div>
					<div className="w-1/3 border-solid border-ft-primary-yellow border-2 h-1 sm:w-full" />
				</section>
				<Slider className="w-screen" {...settings}>
					<CardEvent
						eventName="Fintech Forum 2024"
						location="Ohio"
						title="Lorem Ispum"
						detail="Lorem ipsum dolor sit amet, consectetur ..."
						timeOnHour=" 24:00 - 25:00"
						timeOnDay="30"
						timeOnMonth="Feb"
					/>
					<CardEvent
						eventName="Fintech Forum 2024"
						location="Ohio"
						title="Lorem Ispum"
						detail="Lorem ipsum dolor sit amet, consectetur ..."
						timeOnHour=" 24:00 - 25:00"
						timeOnDay="30"
						timeOnMonth="Feb"
					/>
					<CardEvent
						eventName="Fintech Forum 2024"
						location="Ohio"
						title="Lorem Ispum"
						detail="Lorem ipsum dolor sit amet, consectetur ..."
						timeOnHour=" 24:00 - 25:00"
						timeOnDay="30"
						timeOnMonth="Feb"
					/>
					<CardEvent
						eventName="Fintech Forum 2024"
						location="Ohio"
						title="Lorem Ispum"
						detail="Lorem ipsum dolor sit amet, consectetur ..."
						timeOnHour=" 24:00 - 25:00"
						timeOnDay="30"
						timeOnMonth="Feb"
					/>
					<CardEvent
						eventName="Fintech Forum 2024"
						location="Ohio"
						title="Lorem Ispum"
						detail="Lorem ipsum dolor sit amet, consectetur ..."
						timeOnHour=" 24:00 - 25:00"
						timeOnDay="30"
						timeOnMonth="Feb"
					/>
					<CardEvent
						eventName="Fintech Forum 2024"
						location="Ohio"
						title="Lorem Ispum"
						detail="Lorem ipsum dolor sit amet, consectetur ..."
						timeOnHour=" 24:00 - 25:00"
						timeOnDay="30"
						timeOnMonth="Feb"
					/>
				</Slider>
			</section>
		</section>
	);
};

export default Home;
