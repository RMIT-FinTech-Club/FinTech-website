"use client";
import { fontSans } from "@/config/fonts";
import {
	IconCalendarEvent,
	IconHeartHandshake,
	IconTools,
	IconUsers,
} from "@tabler/icons-react";
import CountUp from "react-countup";
const AchievementsSection = () => {
	return (
		<div className="bg-ft-primary-blue w-screen md:pb-[200px]">
			<div className="flex flex-row items-top justify-between items-center md:pt-[43px] pt-[40px]">
				<div className="w-[700px] md:w-[500px] md:h-[0px] border-2 border-orange-300 md:mt-[25px] mt-[10px]" />
				<div
					className={`text-orange-300 md:w-auto md:text-8xl text-4xl font-bold items-center ${fontSans.style}`}
				>
					Our Achievements
				</div>
				<div className="w-[700px] md:w-[500px] md:h-[0px] border-2 border-orange-300 md:mt-[25px] mt-[10px]" />
			</div>
			<div className="grid md:grid-cols-4 mx-atuo justify-around my-7 items-center px-auto gap-24">
				<div className="bg-ft-primary-blue flex flex-col justify-evenly md:p-16">
					<div className="mx-auto">
						<IconUsers
							strokeWidth={2}
							stroke={"#ffffff"}
							fill={"none"}
							width={120}
							height={120}
							style={{ color: "white", stroke: "white" }}
							className="md:m-12"
						/>
					</div>
					<div
						className={`text-center text-white text-4xl font-semibold ${fontSans.style}`}
					>
						Members:{" "}
					</div>
					<CountUp start={1} end={100} duration={5}>
						{({ countUpRef }) => (
							<span
								ref={countUpRef}
								className={` text-center text-white text-7xl font-semibold ${fontSans.style}`}
							/>
						)}
					</CountUp>
				</div>
				<div className="bg-ft-primary-blue  flex flex-col justify-evenly md:p-16">
					<div className="mx-auto">
						<IconTools
							strokeWidth={2}
							stroke={"#ffffff"}
							fill={"none"}
							width={120}
							height={120}
							style={{ color: "white", stroke: "white" }}
							className="md:m-12"
						/>
					</div>
					<div
						className={`text-center text-white text-4xl font-semibold ${fontSans.style}`}
					>
						Projects:{" "}
					</div>
					<CountUp start={1} end={100} duration={5}>
						{({ countUpRef }) => (
							<span
								ref={countUpRef}
								className={` text-center text-white text-7xl font-semibold ${fontSans.style}`}
							/>
						)}
					</CountUp>
				</div>
				<div className="bg-ft-primary-blue flex flex-col justify-evenly md:p-16">
					<div className="mx-auto">
						<IconHeartHandshake
							strokeWidth={2}
							stroke={"#ffffff"}
							fill={"none"}
							width={120}
							height={120}
							style={{ color: "white", stroke: "white" }}
							className="md:m-12"
						/>
					</div>
					<div
						className={`text-center text-white text-4xl font-semibold ${fontSans.style}`}
					>
						Events Partners:{" "}
					</div>
					<CountUp start={1} end={100} duration={5}>
						{({ countUpRef }) => (
							<span
								ref={countUpRef}
								className={` text-center text-white text-7xl font-semibold ${fontSans.style}`}
							/>
						)}
					</CountUp>
				</div>
				<div className="bg-ft-primary-blue flex flex-col justify-evenly md:p-16">
					<div className="mx-auto">
						<IconCalendarEvent
							strokeWidth={2}
							stroke={"#ffffff"}
							fill={"none"}
							width={120}
							height={120}
							style={{ color: "white", stroke: "white" }}
							className="md:m-12"
						/>
					</div>
					<div
						className={`text-center text-white text-4xl font-semibold ${fontSans.style}`}
					>
						Events:{" "}
					</div>
					<CountUp start={1} end={100} duration={5}>
						{({ countUpRef }) => (
							<span
								ref={countUpRef}
								className={` text-center text-white text-7xl font-semibold ${fontSans.style}`}
							/>
						)}
					</CountUp>
				</div>
			</div>
		</div>
	);
};

export default AchievementsSection;
