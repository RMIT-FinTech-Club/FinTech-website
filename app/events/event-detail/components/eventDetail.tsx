"use client";
import type { EventDetails } from "./types";
import type { Event } from "../../components/types";
const EventDetail: React.FC<{ event: Event }> = ({ event }) => {
	console.log(event);
	return (
		<div className="items-center lg:w-1/2 2xl:w-1/3 h-full mx-4 2xl:mx-16 my-4 2xl:my-8 justify-between">
			<div className="my-1 py-1 2xl:my-2 2xl:py-4">
				<h4 className="py-1 2xl:py-2 text-center lg:text-left">
					Description
				</h4>
				<p className="py-1 2xl:py-2 text-justify">
					{event?.description}
				</p>
			</div>
			<div className="my-1 py-1 2xl:my-2 2xl:py-4">
				<h4 className="py-1 2xl:py-2 text-center lg:text-left">Time</h4>
				<p className="py-1 2xl:py-2 text-justify">{event?.dateTime}</p>
			</div>
			<div className="my-1 py-1 2xl:my-2 2xl:py-4">
				<h4 className="py-1 2xl:py-2 text-center lg:text-left">Link</h4>
				<p className="py-1 2xl:py-2 text-justify">
					{event?.registrationLink}
				</p>
			</div>
		</div>
	);
};

export default EventDetail;
