import { Button } from "@nextui-org/button";
import Image from "next/image";

import React from "react";
import IntroSection from "./components/intro";
import Department from "./homePage/department";

const Home = () => {
	return (
		<div
			className="flex
                min-h-screen flex-col 
                items-center gap-4"
		>
			{/* <IntroSection /> */}
			<Department />
		</div>
	);
};

export default Home;
