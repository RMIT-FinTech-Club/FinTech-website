"use client";

import { Button, Slider } from "@nextui-org/react";
import {
	IconDotsVertical,
	IconDownload,
	IconInfoCircle,
	IconPlayerPauseFilled,
	IconPlayerPlayFilled,
	IconRewindBackward10,
	IconRewindForward10,
	IconShare,
	IconVolume,
	IconVolumeOff,
} from "@tabler/icons-react";
import { color } from "framer-motion";
import { useState } from "react";
import SpeedSelector from "./audioSpeedSelector";
import FollowUs from "./followUs";
import PodcastTitle from "./podcastTitle";

const PodcastMainFunction = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isVolumeOn, setIsVolumeOn] = useState(true);
	const [showIcons, setShowIcons] = useState(false);
	const [showFollowUs, setShowFollowUs] = useState(false);

	return (
		<div className="my-4">
			{/* Mobile view */}
			<div className="flex flex-col h-full lg:hidden w-screen">
				<div className="flex justify-end px-2">
					<SpeedSelector
						onSpeedChange={(speed: number): void => {
							throw new Error("Function not implemented.");
						}}
					/>
				</div>
				<div className="">
					<Slider size="md" className="px-2 py-2" />
				</div>
				<div className="flex justify-around items-center">
					<div className="relative">
						<IconInfoCircle
							size={30}
							color="#ebebeb"
							className="mx-2 cursor-pointer"
							onClick={() => setShowFollowUs(!showFollowUs)}
						/>
						{showFollowUs && (
							<div className="absolute bg-ft-primary-yellow-500 my-2 rounded-xl">
								<FollowUs />
							</div>
						)}
					</div>
					<div className="flex justify-center items-center">
						<IconRewindBackward10
							size={30}
							color="#ebebeb"
							className="mx-2 cursor-pointer"
						/>
						{isPlaying ? (
							<IconPlayerPauseFilled
								size={50}
								color="#ebebeb"
								className="mx-2 cursor-pointer"
								onClick={() => setIsPlaying(false)}
							/>
						) : (
							<IconPlayerPlayFilled
								size={50}
								color="#ebebeb"
								className="mx-2 cursor-pointer"
								onClick={() => setIsPlaying(true)}
							/>
						)}
						<IconRewindForward10
							size={30}
							color="#ebebeb"
							className="mx-2"
						/>
					</div>
					<div className="relative">
						<IconDotsVertical
							size={30}
							color="#ebebeb"
							className="mx-2 cursor-pointer"
							onClick={() => setShowIcons(!showIcons)}
						/>
						{showIcons && (
							<div className="absolute bg-ft-primary-yellow-500 rounded-xl my-2">
								<ul className="rounded-xl">
									<li className="my-2">
										<IconDownload
											size={30}
											color="#ebebeb"
											className="mx-2 cursor-pointer"
											onClick={() => {
												setShowIcons(false);
											}}
										/>
									</li>
									<li className="my-2">
										<IconShare
											size={30}
											color="#ebebeb"
											className="mx-2 cursor-pointer"
											onClick={() => {
												setShowIcons(false);
											}}
										/>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
			{/* Laptop view */}
			<div className="hidden lg:flex lg:flex-col lg:px-24">
				<PodcastTitle />
				<Slider />
				<div className="w-full py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center w-1/6">
							{isVolumeOn ? (
								<IconVolume
									size={50}
									color="#ebebeb"
									className="mx-2 flex-shrink-0 cursor-pointer"
									onClick={() => setIsVolumeOn(false)}
								/>
							) : (
								<IconVolumeOff
									size={50}
									color="#ebebeb"
									className="mx-2 flex-shrink-0 cursor-pointer"
									onClick={() => setIsVolumeOn(true)}
								/>
							)}
							<Slider size="md" className="w-full mx-2" />
						</div>
						<div className="flex items-center justify-center">
							<IconRewindBackward10
								size={75}
								color="#ebebeb"
								className="mx-2 cursor-pointer"
							/>
							{isPlaying ? (
								<IconPlayerPauseFilled
									size={125}
									color="#ebebeb"
									className="mx-2 cursor-pointer"
									onClick={() => setIsPlaying(false)}
								/>
							) : (
								<IconPlayerPlayFilled
									size={125}
									color="#ebebeb"
									className="mx-2 cursor-pointer"
									onClick={() => setIsPlaying(true)}
								/>
							)}
							<IconRewindForward10
								size={75}
								color="#ebebeb"
								className="mx-2 cursor-pointer"
							/>
						</div>
						<div className="flex items-center">
							<SpeedSelector
								onSpeedChange={(speed: number): void => {
									throw new Error(
										"Function not implemented.",
									);
								}}
							/>
							<IconDownload
								size={50}
								color="#ebebeb"
								className="mx-2 cursor-pointer"
							/>
							<IconShare
								size={50}
								color="#ebebeb"
								className="mx-2 cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PodcastMainFunction;
