import { Button } from "@nextui-org/button";
import Image from "next/image";

import React from "react";
import HeroSection from "./components/hero";
import IntroSection from "./components/intro";

const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
			<HeroSection />
			<IntroSection />
		</div>
	);
};

export default Home;
