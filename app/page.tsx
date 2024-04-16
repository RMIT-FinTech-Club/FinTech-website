// import { Button } from "@nextui-org/button";
// import Image from "next/image";

// import React from "react";

// const Home = () => {
// 	return (
// 		<main
// 			className="flex
//                 min-h-screen flex-col
//                 items-center gap-4 p-24"
// 		>
//             <p className="text-tailwind">Placeholder</p>
// 		</main>
// 	);
// };

// export default Home;

import { Button } from "@nextui-org/button";
import {
	Card,
	CardHeader,
	CardBody,
	Image,
	CardFooter,
} from "@nextui-org/react";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
// import Image from "next/image";
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
