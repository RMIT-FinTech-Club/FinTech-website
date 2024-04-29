import { IconChevronCompactDown } from "@tabler/icons-react";
import clsx from "clsx";
import {
	AnimationControls,
	TargetAndTransition,
	type Variants,
	motion,
} from "framer-motion";
import type React from "react";

const HerosectionVid: React.FC = () => {
	const textAppearVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -50,
			transition: {
				when: "afterChildren",
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				when: "beforeChildren",
				duration: 0.5,
			},
		},
	};

	return (
		<div className={clsx("relative w-screen h-screen")}>
			{/* Video background */}
			<video
				autoPlay
				muted
				loop
				id="hero-section-bg-vid"
				className={clsx(
					"w-full h-full", // Full screen
					"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", // Center the video
					"object-cover", // Cover
				)}
			>
				<source src="/hero-section-bg-vid.mp4" type="video/mp4" />
			</video>

			{/* Text */}
			<motion.div
				initial="hidden"
				animate="visible"
				transition={{
					staggerChildren: 0.1,
				}}
				className="absolute bottom-16 right-0 left-0"
			>
				<motion.h2
					className="text-center w-full text-ft-text-bright"
					variants={textAppearVariants}
				>
					Welcome to FinTech
				</motion.h2>
				<br />

				<motion.p
					className="text-center w-full text-ft-text-bright"
					variants={textAppearVariants}
				>
					April 1st 2025, Report
				</motion.p>

				<motion.div variants={textAppearVariants}>
					<IconChevronCompactDown
						size={48}
						className="text-center w-full text-ft-text-bright"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default HerosectionVid;
