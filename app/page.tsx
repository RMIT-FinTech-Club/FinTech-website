import React from "react";
import ExecuteBoard from "./about-us/components/execute-board/executeBoard";
import ManagementBoard from "./about-us/components/execute-board/managementBoard";
import Department from "./components/department";
import Individual from "./components/hall-of-fame/individual";
import HeroSection from "./components/hero";
import HerosectionVid from "./components/heroVideoSection";
import IntroSection from "./components/intro";
import PastPartners from "./components/pastPartners";
import UpcomingEvent from "./components/upcomingEvent";
import Events from "./events/page";
import AchievementsSection from "./components/achievements";
const Home = () => {
	return (
		<div className="flex min-h-screen flex-col justify-center items-center">
			<HerosectionVid />
			<HeroSection />
			<PastPartners />
			<IntroSection />
			<Department />
			<Individual />
			<UpcomingEvent />
			<AchievementsSection />
			<ExecuteBoard />
			<ManagementBoard />
		</div>
	);
};

export default Home;
