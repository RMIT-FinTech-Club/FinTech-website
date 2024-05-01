import Image from "next/image";
import React from "react";
import EventDetail from "./(components)/eventDetail";
import EventLocation from "./(components)/eventLocation";

const EventDateAndLocation = () => {
	return (
		<div className="flex flex-col my-16">
			<div className="lg:flex">
				<EventDetail />
				<EventLocation />
			</div>
			<div className="hidden lg:flex lg:absolute lg:top-1/4 lg:right-0">
				<Image
					loading="lazy"
					src="./SideFinTechBearForEventDateAndLocation.svg"
					alt="above decoration for event date and location"
					width={300}
					height={300}
				/>
			</div>
			<div className="hidden lg:flex lg:justify-center lg:my-4">
				{/* Below Decoration for Event Date and Location */}
				<Image
					loading="lazy"
					src="./ThreeBearsAndDecorationsForEventDateAndLocation.svg"
					alt="below decoration for event date and location"
					width={1200}
					height={300}
				/>
			</div>
		</div>
	);
};

export default EventDateAndLocation;
