// import Image from "next/image";
import React from "react";
import About from "./about/page";
import IntroSection from "./components/intro";

const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
			<About />
		</div>
	);
};

export default Home;
