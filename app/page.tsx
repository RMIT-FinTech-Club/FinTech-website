import React from "react";
import Department from "./components/department";
import Individual from "./components/hall-of-fame/individual";
import HeroSection from "./components/hero";
import HerosectionVid from "./components/heroVideoSection";
import IntroSection from "./components/intro";
import PastPartners from "./components/pastPartners";
import UpcomingEvent from "./components/upcomingEvent";
import ExecuteBoard from "./about-us/components/execute-board/page";
const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
			{/* <HerosectionVid /> */}
			{/* <HeroSection /> */}
			{/* <PastPartners /> */}
			{/* <IntroSection /> */}
			{/* <Department /> */}
			{/* <Individual /> */}
			{/* <UpcomingEvent /> */}
			<ExecuteBoard />
		</div>
	);
};

export default Home;
