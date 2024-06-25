import { fontSans } from "@/config/fonts";
import {
	IconBroadcast,
	IconCalendarMonth,
	IconUser,
	IconX,
} from "@tabler/icons-react";
export default function ProjectGeneralPage() {
	return (
		<>
			<div className="w-full md:px-16 px-5">
				<div className="grid grid-cols-12 md:py-10 items-center">
					<div className="hidden col-span-4 md:inline-flex h-[4px] bg-black items-center">
						<div className=" w-6 h-6 bg-black rounded-full" />
					</div>
					<div
						className={`w-full text-center text-orange-300 text-[56px] font-bold ${fontSans} mx-auto md:col-span-4 col-span-full`}
					>
						PROJECTS
					</div>
					<div className="hidden col-span-4 md:inline-flex h-[4px] bg-black flex-row-reverse items-center">
						<div className="w-6 h-6 bg-black rounded-full" />
					</div>
				</div>
				<div className="md:grid md:grid-cols-3 md:mt-10 md:mb-44 w-full md:px-0">
					<div className="flex flex-col gap-4 items-center md:col-span-2">
						<ProjectGeneralCard />
						<ProjectGeneralCard />
						<ProjectGeneralCard />
						<ProjectGeneralCard />
					</div>
					{/* projects filter  */}
					<div className="md:flex md:flex-col hidden gap-4 md:pl-16 justify-self-start">
						<div className="flex justify-between items-center mb-4">
							<input
								type="text"
								placeholder="Search projects"
								className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs md:w-[252px] md:h-[62px]"
							/>
						</div>
						<div className="mb-4">
							<h2 className="text-lg font-bold mb-2">
								Project filter:
							</h2>
							<div className="flex flex-col gap-2">
								<span className="bg-orange-300 grid grid-cols-2 text-white py-1 px-3 rounded-full w-28">
									Research
									<IconX stroke={2} className="ml-6" />
								</span>
								<span className="bg-orange-300 grid grid-cols-2 text-white py-1 px-3 rounded-full w-28">
									Podcast
									<IconX stroke={2} className="ml-6" />
								</span>
							</div>
						</div>
						<div className="mb-4">
							<h2 className="text-lg font-bold mb-2">Sort by:</h2>
							<div className="flex flex-col">
								<label className="flex items-center">
									<input
										type="checkbox"
										name="sort"
										className="mr-2 w-6 h-6 border-2"
									/>
									Newest release date
								</label>
								<label className="flex items-center mt-4 border-orange-300">
									<input
										type="checkbox"
										name="sort"
										className="mr-2 w-6 h-6 border-2"
									/>
									Oldest release date
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function ProjectGeneralCard() {
	return (
		<>
			<div className="grid md:grid-cols-2 bg-white shadow-lg rounded-lg p-6 w-fit">
				<div className="flex-shrink-0 mx-auto md:my-0 my-7 md:px-0 px-3 md:rounded-none rounded-full">
					<img
						className="md:w-[406px] md:h-[267px] w-full rounded-lg"
						alt="Fintech Forum"
						src="https://ik.imagekit.io/mbrrji2rk/ProjectGeneralImage.png?updatedAt=1715686577329"
					/>
				</div>
				<div className="md:ml-10 flex flex-col justify-between">
					<div>
						<h6 className="md:text-2xl text-xl font-bold text-black text-center">
							THE FINTECH FORUM 2024
						</h6>
						<div className="grid md:grid-cols-3 items-center mt-4 text-gray-600 md:gap-0 gap-2">
							<div className="flex items-center mr-4">
								<IconCalendarMonth className="w-6 h-6 mr-1 text-orange-300" />
								<span>28/10/2024</span>
							</div>
							<div className="flex items-center mr-4">
								<IconUser className="w-6 h-6 mr-1 text-orange-300" />
								<span>Duy2k5</span>
							</div>
							<div className="flex items-center">
								<IconBroadcast className="w-6 h-6 mr-1 text-orange-300" />
								<span>Research</span>
							</div>
						</div>
						<article className="text-wrapper mt-4 text-gray-700">
							<p className="leading-relaxed">
								The FinTech Forum 2024 is set to be the most
								dynamic student driven FinTech event, with a
								mission to educate and immerse students into the
								various aspects of the FinTech Universe! As we
								begin to officially launch the event, we would
								like to acknowledge the contributions made by
								our esteemed Sponsors that have made our event
								possible.
							</p>
						</article>
					</div>
					<button
						type="button"
						className="mt-4 items-center bg-orange-300 hover:bg-orange-400 active:bg-orange-500 text-white py-2 px-4 rounded-full self-end md:w-fit w-full"
					>
						More detail
					</button>
				</div>
			</div>
		</>
	);
}
