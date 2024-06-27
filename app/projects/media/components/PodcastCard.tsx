import { FaCirclePlay, FaRegCirclePlay } from "react-icons/fa6";

const PodcastCard: React.FC = () => {
	return (
		<div className="w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[360px] aspect-[1/1] shadow-lg rounded-xl relative overflow-hidden group">
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transition-all duration-300 group-hover:opacity-0" />
			<img
				src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/philip-an-podcast.png"
				alt="Avatar"
				className="w-full h-full object-cover rounded-lg"
			/>
			<div className="absolute h-auto bottom-0 w-full p-4 bg-gradient-to-t from-[#000] to-transparent text-white text-base md:text-lg lg:text-xl font-light transition-all duration-300">
				<div className="h-100 w-100 flex flex-row justify-between">
					<div className="w-3/5">
						<div className="flex flex-row justify-between mb-1">
							<p className="leading-normal text-sm font-semibold text-white">
								EP <span>1</span>
							</p>
							<p className="leading-normal text-sm font-semibold text-white">
								75 MINS
							</p>
						</div>
						<h1 className="leading-normal text-[19px] font-extrabold text-white">
							How FinTech promote sustainable finance?
						</h1>
					</div>
					<div className="h-[4/5] bg-white w-[2px] opacity-50" />
					<div className="w-1/4">
						<div className="">
							<p className="text-md leading-normal text-white font-semibold">
								By
							</p>
							<p className="text-md leading-normal font-extrabold text-white">
								Philip An
							</p>
						</div>
						<FaCirclePlay
							className="block m-auto mt-4 cursor-pointer"
							size={50}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PodcastCard;

