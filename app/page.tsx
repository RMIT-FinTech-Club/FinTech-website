import React from "react";
import { Toaster } from "react-hot-toast";
import Department from "./components/department";
import Individual from "./components/hall-of-fame/individual";
import HeroSection from "./components/hero";
import HerosectionVid from "./components/heroVideoSection";
import IntroSection from "./components/intro";
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
			{/* <HerosectionVid />
			<HeroSection />
			<PastPartners />
			<IntroSection />
			<Department />
			<Individual />
			<UpcomingEvent /> */}
			<LoginPage />
		</div>
	);
};

export default Home;
