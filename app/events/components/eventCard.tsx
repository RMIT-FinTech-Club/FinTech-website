import React from "react";
import { IconClock, IconBuildingCommunity, IconLink, IconMapPin } from "@tabler/icons-react";
import { Event } from "./types";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  // Define your theme colors
  const primaryYellow = "#DCB968";  // Make sure this color is defined correctly
  const primaryBlue = "#2C305F";

  return (
    <div className="grid grid-cols-12 gap-4 border rounded-lg shadow-md overflow-hidden max-w-4xl w-full mx-auto my-4">
      {/* Event Image */}
      <div className="col-span-4">
        <img
          src={event.imageUrl}
          alt="Event"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Event Info */}
      <div className="col-span-6 flex flex-col justify-between p-4 space-y-2">
        <h3 className="text-xl font-bold">{event.name}</h3>
        <div className="flex items-center text-md">
          <IconClock className="mr-2 text-lg" stroke={primaryYellow} strokeWidth={2} style={{ color: primaryYellow }} />
          {event.dateTime}
        </div>
        <div className="flex items-center text-md">
          {event.type === "Offline" ? (
            <IconBuildingCommunity className="mr-2 text-lg" stroke={primaryYellow} strokeWidth={2} style={{ color: primaryYellow }} />
          ) : (
            <IconLink className="mr-2 text-lg" stroke={primaryYellow} strokeWidth={2} style={{ color: primaryYellow }} />
          )}
          {event.type}
        </div>
        <div className="flex items-center text-md">
          <IconMapPin className="mr-2 text-lg" stroke={primaryYellow} strokeWidth={2} style={{ color: primaryYellow }} />
          {event.location}
        </div>
      </div>

      {/* Explore More Section */}
      <div className="col-span-2 flex items-center justify-center bg-ft-primary-blue relative">
        <div className="absolute left-0 top-0 bottom-0 w-px" style={{ borderLeft: '1px dashed white', backgroundImage: 'linear-gradient(to bottom, white 50%, transparent 50%)', backgroundSize: '100% 12px' }} />
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
