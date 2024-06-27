import React from "react";
import { Toaster } from "react-hot-toast";
import ExecuteBoard from "./about-us/components/execute-board/executeBoard";
import ManagementBoard from "./about-us/components/execute-board/managementBoard";
import MemberList from "./about-us/components/members";
import AchievementsSection from "./components/achievements";
import Department from "./components/department";
import HeroSection from "./components/hero";
import HerosectionVid from "./components/heroVideoSection";
import IntroSection from "./components/intro";
import IntroVideo from "./components/introVideo";
import PastPartners from "./components/pastPartners";
import UpcomingEvent from "./components/upcomingEvent";
import Events from "./events/page";
import LoginPage from "./login/page";
import ProjectDetail from "./projects/[pid]/page";
import Member from "./components/member";
const Home = () => {
	return (
		<div className="flex min-h-screen flex-col justify-center items-center">
			<Toaster position="bottom-center" />
			<HerosectionVid />
			<HeroSection />
			<IntroSection />
			<Department />
            <Member />
			<UpcomingEvent />
		</div>
	);
};

export default Home;
