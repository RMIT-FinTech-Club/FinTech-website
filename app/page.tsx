import React from "react";
import Department from "./components/department";
import Individual from "./components/hall-of-fame/individual";
import HeroSection from "./components/hero";
import HerosectionVid from "./components/heroVideoSection";
import IntroSection from "./components/intro";
import PastPartners from "./components/pastPartners";
import UpcomingEvent from "./components/upcomingEvent";
import JoinUs from "./join-us/page";
// import HeroSection from "../components/";
// import IntroSection from "../components/intro";
// import UpcomingEvent from "../components/upcomingEvent";
import Events from "./events/page";
const Home = () => {
	return (
		<div className="flex min-h-screen flex-col justify-center items-center">
			{/* <HerosectionVid />
			<HeroSection />
			<PastPartners />
			<IntroSection />
			<Department />
			<Individual />
			<UpcomingEvent /> */}
			<JoinUs />
		</div>
	);
};

export default Home;
