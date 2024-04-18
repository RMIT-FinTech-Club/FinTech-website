import { Button } from "@nextui-org/button";
import Image from "next/image";
// import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import Members from "./about/members";
import IntroSection from "./(components)/intro";

const Home = () => {
	return (
		// <Router>
			<div className="flex min-h-screen flex-col items-center gap-4">
				{/* <IntroSection />  */}
				<Members />
			</div>
		// </Router>
	);
};

export default Home;
