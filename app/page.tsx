"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import HeroSection from "../components/hero";
import IntroSection from "../components/intro";
import UpcomingEvent from "../components/upcomingEvent";
import HerosectionVid from "@/components/heroVideoSection";
const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
            <HerosectionVid />
			{/* <HeroSection />
			<IntroSection />
			<UpcomingEvent /> */}
		</div>
	);
};

export default Home;
