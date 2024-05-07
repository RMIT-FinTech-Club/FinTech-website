import React from "react";
// import HeroSection from "../components/";
// import IntroSection from "../components/intro";
// import UpcomingEvent from "../components/upcomingEvent";
import Events from "./events/page";
import PastPartners from "./components/pastPartners";
import HerosectionVid from "./components/heroVideoSection";
import HeroSection from "./components/hero";
import IntroSection from "./components/intro";
import Individual from "./components/hall-of-fame/individual";
import Department from "./components/department";
import UpcomingEvent from "./components/upcomingEvent";
const Home = () => {
	return (
		<div className="flex min-h-screen flex-col justify-center gap-4">
			<HerosectionVid />
			<HeroSection />
			<PastPartners />
			<IntroSection />
			<Department />
			<Individual />
			<UpcomingEvent />
		</div>
	);
};

export default Home;
