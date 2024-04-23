import { Button } from "@nextui-org/button";
import Image from "next/image";
// import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import IntroSection from "./(components)/intro";
import Members from "./about/members";

const Home = () => {
	return (
		// <Router>
		<div className="flex flex-col items-center justify-center gap-4">
			{/* <IntroSection />  */}
			<Members />
		</div>
		// </Router>
	);
};

export default Home;
