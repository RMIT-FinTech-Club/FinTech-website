import React from "react";
import HeroSection from "../components/hero";
import IntroSection from "../components/intro";
import UpcomingEvent from "../components/upcomingEvent";
import Events from "./events/page";
const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
			<Events />
		</div>
	);
};

export default Home;
