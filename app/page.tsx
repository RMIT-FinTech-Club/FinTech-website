import React from "react";
import MemberList from "./about-us/components/members";
import AchievementsSection from "./components/achievements";
import { Toaster } from "react-hot-toast";
import Department from "./components/department";
import HeroSection from "./components/hero";
import HerosectionVid from "./components/heroVideoSection";
import IntroSection from "./components/intro";
import IntroVideo from "./components/introVideo";
import PastPartners from "./components/pastPartners";
import UpcomingEvent from "./components/upcomingEvent";
// import HeroSection from "../components/";
// import IntroSection from "../components/intro";
// import UpcomingEvent from "../components/upcomingEvent";
import Events from "./events/page";
import LoginPage from "./login/page";
const Home = () => {
	return (
		<div className="flex min-h-screen flex-col justify-center items-center">
			<Toaster position="bottom-center" />
			<HerosectionVid />
			<HeroSection />
			<PastPartners />
			<IntroSection />
			<Department />
			<UpcomingEvent />
			<AchievementsSection />
		</div>
	);
};

export default Home;
