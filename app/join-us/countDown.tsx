"use client";
import { fontMono } from "@/config/fonts";
import { Button } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import "../../styles/join-us/countDown.css";

export default function CountDown() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const interval = useRef<NodeJS.Timeout>();

	const timerCount = () => {
		const expiredDay = new Date(2024, 7, 21, 23, 59, 59);
		interval.current = setInterval(() => {
			const now = new Date();
			const totalDays = expiredDay.getTime() - now.getTime();

			const days = Math.floor(totalDays / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(totalDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor(
				(totalDays % (1000 * 60 * 60)) / (1000 * 60),
			);
			const seconds = Math.floor((totalDays % (1000 * 60)) / 1000);

			if (totalDays < 0) {
				// stop count down
				clearInterval(interval.current);
			} else {
				// update timer
				setDays(days);
				setHours(hours);
				setMinutes(minutes);
				setSeconds(seconds);
			}
		}, 1000);
	};
	useEffect(() => {
		timerCount();
		return () => {
			clearInterval(interval.current);
		};
	}, [timerCount]);

	return (
		<div className="countDown-container h-screen w-screen flex justify-center items-start">
			<div className="w-full z-10 mt-16 absolute flex flex-col justify-center items-center">
				<h1
					className={`mb-7 md:mb-14 text-[#F9FAFB] text-3xl md:text-6xl font-bold ${fontMono.style}`}
				>
					Count down to form closed
				</h1>
				<div className="timer-container w-full md:w-4/5">
					<div className="timer w-full flex flex-col md:flex-row  justify-between items-center text-center mb-7 md:mb-14">
						<section
							className={`text-[#F9FAFB] mb-12 md:mb-0 ${fontMono.style}`}
						>
							<p className="text-5xl md:text-8xl mb-5 font-black">
								{days}
							</p>
							<p className="text-2xl md:text-5xl font-bold">
								DAYS
							</p>
						</section>
						<section
							className={`text-[#F9FAFB] mb-12 md:mb-0 font-bold ${fontMono.style}`}
						>
							<p className="text-5xl md:text-8xl mb-5 font-black">
								{hours}
							</p>
							<p className="text-2xl md:text-5xl font-bold">
								HOURS
							</p>
						</section>
						<section
							className={`text-[#F9FAFB] mb-12 md:mb-0 font-bold ${fontMono.style}`}
						>
							<p className="text-5xl md:text-8xl mb-5 font-black">
								{minutes}
							</p>
							<p className="text-2xl md:text-5xl font-bold">
								MINUTES
							</p>
						</section>
						<section
							className={`text-[#F9FAFB] font-bold ${fontMono.style}`}
						>
							<p className="text-5xl md:text-8xl mb-5 font-black">
								{seconds}
							</p>
							<p className="text-2xl md:text-5xl font-bold">
								SECONDS
							</p>
						</section>
					</div>
				</div>
				<Button
					className="text-2xl md:text-5xl px-5 md:px-10 py-6 md:py-12 bg-[#0D1742] border-2 md:border-4 border-white text-[#F9FAFB]"
					size="lg"
				>
					Join us here
				</Button>
			</div>
		</div>
	);
}
