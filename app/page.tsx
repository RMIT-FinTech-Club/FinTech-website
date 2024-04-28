"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
// import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import HeroSection from "../components/hero";
import Members from "./about/members";
const Home = () => {
	return (
		// <Router>
		<div className="flex flex-col items-center justify-center gap-4">
			{/* <HeroSection /> */}
			{/* <IntroSection />  */}
			{/* <Members /> */}
			{/* <UpcomingEvent /> */}
		</div>
		// </Router>
	);
};

export default Home;
