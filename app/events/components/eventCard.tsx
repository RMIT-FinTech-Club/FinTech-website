"use client";
import {
	IconBuildingCommunity,
	IconClock,
	IconLink,
	IconMapPin,
} from "@tabler/icons-react";
import type React from "react";
import { useEffect, useState } from "react";
import type { Event } from "./types";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [displayDate, setDisplayDate] = useState(false);

	// Effect to handle window resizing
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Adjust displayed text based on the window width
	useEffect(() => {
		if (windowWidth < 640) {
			// Assuming 640px is the breakpoint for mobile
			setDisplayDate(true);
		} else {
			setDisplayDate(false);
		}
	}, [windowWidth]);

	// Define your theme colors
	const primaryYellow = "#DCB968"; // Make sure this color is defined correctly
	const primaryBlue = "#2C305F";

	return (
		<div className="grid grid-rows-2 grid-cols-12 gap-2 md:grid-rows-1 md:gap-4 border rounded-lg shadow-md overflow-hidden max-w-4xl w-full mx-auto my-4">
			{/* Event Image */}
			<div className="row-span-1 col-span-12 md:col-span-4 w-full">
				<img
					src={event.imageUrl}
					alt="Event"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Event Info */}
			<div className="date row-span-1 col-span-3 flex flex-col justify-between p-2 md:p-4 py-auto space-y-2 text-center align-middle mb-2">
				<div className="flex flex-col align-middle h-full">
					<h2 className="my-auto text-ft-primary-yellow-500">
						{event.date}
					</h2>
				</div>
			</div>
			<div className="row-span-1 col-span-9 md:col-span-6 flex flex-col justify-between p-1 md:p-4 space-y-2 mb-2">
				<h3 className="text-xl font-bold">{event.name}</h3>
				<div className="flex items-center text-md">
					<IconClock
						className="mr-2 text-lg"
						stroke={primaryYellow}
						strokeWidth={2}
						style={{ color: primaryYellow }}
					/>
					{displayDate ? event.time : event.dateTime}
				</div>
				<div className="flex items-center text-md">
					{event.type === "Offline" ? (
						<IconBuildingCommunity
							className="mr-2 text-lg"
							stroke={primaryYellow}
							strokeWidth={2}
							style={{ color: primaryYellow }}
						/>
					) : (
						<IconLink
							className="mr-2 text-lg"
							stroke={primaryYellow}
							strokeWidth={2}
							style={{ color: primaryYellow }}
						/>
					)}
					{event.type}
				</div>
				<div className="flex items-center text-md">
					<IconMapPin
						className="mr-2 text-lg"
						stroke={primaryYellow}
						strokeWidth={2}
						style={{ color: primaryYellow }}
					/>
					{event.location}
				</div>
			</div>

			{/* Explore More Section */}
			<div className="col-span-2 flex items-center justify-center bg-ft-primary-blue relative explore">
				<div
					className="absolute left-0 top-0 bottom-0 w-px"
					style={{
						borderLeft: "1px dashed white",
						backgroundImage:
							"linear-gradient(to bottom, white 50%, transparent 50%)",
						backgroundSize: "100% 12px",
					}}
				/>
				<a
					href={`/events/${event.id}`}
					className="text-ft-primary-yellow rotate-90 text-lg font-bold z-10"
				>
					Explore More
				</a>
			</div>
		</div>
	);
};

export default EventCard;
