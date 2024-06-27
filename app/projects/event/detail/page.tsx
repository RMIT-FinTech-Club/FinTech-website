import type React from "react";
import EventDescription from "./components/EventDescription";
import EventGallery from "./components/EventGallery";
import Sponsor from "./components/Sponsor";

const EventDetailPage: React.FC = () => {
	return (
		<div className="w-100 h-auto">
			<EventDescription />
			<Sponsor />
			<EventGallery />
		</div>
	);
};

export default EventDetailPage;
