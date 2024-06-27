import React from "react";
import EventDescription from "./components/EventDescription";
import Sponsor from "./components/Sponsor";
import EventGallery from "./components/EventGallery";

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