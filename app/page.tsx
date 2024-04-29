"use client";
import HerosectionVid from "@/components/heroVideoSection";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
// import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import HeroSection from "../components/hero";
import IntroSection from "../components/intro";
import UpcomingEvent from "../components/upcomingEvent";
import Department from "./homePage/department";

const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
			{/* <HerosectionVid /> */}
			<HeroSection />
			{/* <IntroSection /> */}
			<Department />
			{/* <UpcomingEvent /> */}
		</div>
		// </Router>
	);
};

export default Home;
