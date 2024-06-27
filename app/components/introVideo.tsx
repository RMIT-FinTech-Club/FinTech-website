"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const IntroVideo = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const hasPlayed = localStorage.getItem("introVideoPlayed");
		console.log(hasPlayed);
		if (!hasPlayed) {
			setShow(true);
			localStorage.setItem("introVideoPlayed", "true");
		}

		// localStorage.removeItem('introVideoPlayed');
	}, []);

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center"
				>
					<video
						autoPlay
						muted
						onEnded={() => setShow(false)}
						className="w-full h-full object-cover"
					>
						<source src="/intro.mov" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default IntroVideo;
