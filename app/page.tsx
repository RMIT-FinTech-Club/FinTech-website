"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import UpcomingEvent from "../components/upcomingEvent";
import HeroSection from "../components/hero";
import IntroSection from "../components/intro";
import Member from "@/components/home/hall-of-fame/member";
const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
			{/* <HeroSection />
			<IntroSection />
			<UpcomingEvent /> */}
			<Member />
		</div>
	);
};

export default Home;
