import React from "react";
import HeaderTitlePage from "./components/headerTitlePage";
import EventCard from "./components/eventCard";
import { Event } from "./components/types";

const eventsData: Event[] = [
  {
    id: 1,
    name: "The FinTech Forum 2024",
    dateTime: "April 24, 2024, 1:00 PM - 4:30 PM",
    type: "Offline",
    location: "RMIT University Vietnam - Auditorium 2.1.5",
    imageUrl: "/events/FinTechForumCover.png",
  },
  {
    id: 2,
    name: "The FinTech Forum 2024",
    dateTime: "April 24, 2024, 1:00 PM - 4:30 PM",
    type: "Offline",
    location: "RMIT University Vietnam - Auditorium 2.1.5",
    imageUrl: "/events/FinTechForumCover.png",
  },
  {
    id: 3,
    name: "The FinTech Forum 2024",
    dateTime: "April 24, 2024, 1:00 PM - 4:30 PM",
    type: "Offline",
    location: "RMIT University Vietnam - Auditorium 2.1.5",
    imageUrl: "/events/FinTechForumCover.png",
  },
];

const Events = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <HeaderTitlePage text="Our Upcoming Events" />

      {/* Background decorations arranged with the bottom ones sticking to the screen corners */}
      <div className="fixed top-0 left-0 h-full w-full pointer-events-none">
        {/* Top decorations positioned lower relative to the header */}
        <img src="/events/decoration_mascot_left.png" alt="Left Mascot" className="absolute left-0 top-32 h-96" />
        <img src="/events/decoration_left.svg" alt="Left Decoration" className="absolute left-0 bottom-0 h-50" />

        <img src="/events/decoration_right.svg" alt="Right Decoration" className="absolute right-0 top-32 h-50" />
        <img src="/events/decoration_mascot_right.png" alt="Right Mascot" className="absolute right-0 bottom-0 h-96" />
      </div>

      {eventsData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;
