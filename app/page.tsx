"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import IntroSection from "./components/intro";

const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
			<IntroSection />
		</div>
	);
};

export default Home;
