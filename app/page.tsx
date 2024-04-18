"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import UpcomingEvent from "../components/upcomingEvent";
import HeroSection from "../components/hero";
import PastPartners from "../components/pastPartners";
import IntroSection from "../components/intro";
const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
			<HeroSection />
			<PastPartners />
			<IntroSection />
			<UpcomingEvent />
		</div>
	);
};

export default Home;
