"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EventDetail from "../components/eventDetail";
import EventLocation from "../components/eventLocation";
import ClipLoader from "react-spinners/ClipLoader";
import type { EventDetails } from "../components/types";
import type { Event } from "../../components/types";
let eventData: EventDetails;
const EventDateAndLocation = ({ params }: { params: { id: string } }) => {
	const [data, setData] = useState<Event>();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		// console.log(eventId);
		const configuration = {
			method: "post",
			url: "/api/v1/events/getOneEvent",
			data: {
				id: params.id,
			},
		};
		axios(configuration)
			.then((result) => {
				setData(result.data.data);
				setIsLoading(false);
				// console.log(result.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [params.id]);
	return (
		isLoading ? (
			<section className="flex flex-col items-center h-screen w-full justify-center">
			<ClipLoader color="#2C305F" />
		</section>
		) : (
			<div className="flex flex-col my-16">
			<div className="lg:flex">
				{/* <EventDetail event={eventData} /> */}
				<EventDetail event={data!} />
				<EventLocation />
			</div>
			<div className="hidden lg:flex lg:absolute lg:top-1/3 lg:right-0">
				<Image
					loading="lazy"
					src="/SideFinTechBearForEventDateAndLocation.svg"
					alt="above decoration for event date and location"
					width={200}
					height={200}
				/>
			</div>
			<div className="hidden lg:flex lg:justify-center lg:my-4">
				{/* Below Decoration for Event Date and Location */}
				<Image
					loading="lazy"
					src="/ThreeBearsAndDecorationsForEventDateAndLocation.svg"
					alt="below decoration for event date and location"
					width={1000}
					height={250}
				/>
			</div>
		</div>
		)
	);
};

export default EventDateAndLocation;
