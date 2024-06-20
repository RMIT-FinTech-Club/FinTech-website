import React from "react";
import EventCard from "./components/eventCard";
import HeaderTitlePage from "./components/headerTitlePage";
import type { Event } from "./components/types";

const eventsData: Event[] = [
	{
		id: 1,
		name: "The FinTech Forum 2024",
		date: "24 April",
		time: "1:00 PM - 4:30 PM",
		dateTime: "April 24, 2024, 1:00 PM - 4:30 PM",
		type: "Offline",
		location: "RMIT University Vietnam - Auditorium 2.1.5",
		imageUrl: "/events/FinTechForumCover.png",
	},
	{
		id: 2,
		name: "The FinTech Forum 2024",
		date: "24 April",
		time: "1:00 PM - 4:30 PM",
		dateTime: "April 24, 2024, 1:00 PM - 4:30 PM",
		type: "Offline",
		location: "RMIT University Vietnam",
		imageUrl: "/events/FinTechForumCover.png",
	},
	{
		id: 3,
		name: "The FinTech Forum 2024",
		date: "24 April",
		time: "1:00 PM - 4:30 PM",
		dateTime: "April 24, 2024, 1:00 PM - 4:30 PM",
		type: "Offline",
		location: "RMIT University Vietnam - Auditorium 2.1.5",
		imageUrl: "/events/FinTechForumCover.png",
	},
];

const Events = () => {
	return (
		<section className="relative">
			<div className=" flex flex-col gap-8 items-center justify-center w-full md:w-screen">
				<HeaderTitlePage text="Our Upcoming Events" />

				{eventsData.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
			{/* Background decorations arranged with the bottom ones sticking to the screen corners */}
			{/* Top decorations positioned lower relative to the header */}
			<img
				src="/events/decoration_mascot_left.png"
				alt="Left Mascot"
				className="mascot absolute inset-y-0 left-0 h-96"
			/>
			<img
				src="/events/decoration_left.svg"
				alt="Left Decoration"
				className="mascot absolute left-0 bottom-0 h-50"
			/>

			<img
				src="/events/decoration_right.svg"
				alt="Right Decoration"
				className="mascot absolute right-0 bottom-0 h-50"
			/>
			<img
				src="/events/decoration_mascot_right.png"
				alt="Right Mascot"
				className="mascot absolute inset-y-0 right-0 h-96"
			/>
		</section>
	);
};

export default Events;
