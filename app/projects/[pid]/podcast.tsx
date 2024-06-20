import Image from "next/image";
import React from "react";
import Author from "../components/author";
import FollowUs from "../components/followUs";
import HeaderPodcastPage from "../components/headerPodcastPage";
import PodcastDescription from "../components/podcastDescription";
import PodcastMainFunction from "../components/podcastMainFunction";
import PodcastTitle from "../components/podcastTitle";

const Podcast = () => {
	return (
		<div className="w-screen flex flex-col items-center justify-around relative">
			<Image
				className="object-cover absolute"
				src="/podcast-background.png"
				alt="Podcast background image"
				layout="fill"
				objectFit="cover"
			/>
			{/* Laptop view */}
			<div className="hidden lg:flex lg:flex-col z-10 h-screen justify-around my-4">
				<HeaderPodcastPage text="Podcast" />
				<div className="flex">
					<div className="w-1/3 h-full flex justify-center py-4">
						<Image
							src={"/fintechtainment.png"}
							alt="Fintechtainment logo"
							width={400}
							height={400}
						/>
					</div>
					<div className="w-3/4 flex flex-col justify-around">
						<div className="">
							<Author />
							<PodcastDescription />
							<FollowUs />
						</div>
					</div>
				</div>
				<div>
					<PodcastMainFunction />
				</div>
			</div>
			{/* Mobile view */}
			<div className="flex flex-col lg:hidden items-center justify-around z-10 my-4 h-screen">
				<div className="flex flex-col justify-center items-center">
					<Image
						src={"/fintechtainment.png"}
						alt="Fintechtainment logo"
						width={256}
						height={256}
						className="py-4"
					/>
					<PodcastTitle />
					<PodcastDescription />
				</div>
				<PodcastMainFunction />
			</div>
		</div>
	);
};

export default Podcast;
