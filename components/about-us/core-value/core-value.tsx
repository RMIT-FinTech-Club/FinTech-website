"use client";

import react, { useState, useEffect } from "react";

const CoreValue = () => {
	const [activeButton, setActiveButton] = useState<string | null>(
		"innovative",
	);
	const [textContent, setTextContent] = useState<string>(
		"We believe in thinking outside of the box and challenging conventions. Being innovative is taking creative ideas and turning them into valuable things.",
	);
	const [fadeIn, setFadeIn] = useState<boolean>(false);

	const handleClick = (button: string) => {
		setActiveButton(button);
		switch (button) {
			case "innovative":
				setTextContent(
					"We believe in thinking outside of the box and challenging conventions. Being innovative is taking creative ideas and turning them into valuable things.",
				);
				break;
			case "inclusive":
				setTextContent(
					"We truly believe in fostering an inclusive community where all members feel appreciated, welcomed, and unexcluded from the club’s journey.",
				);
				break;
			case "inspiring":
				setTextContent(
					"We believe in building a club where members are inspired by their work and contributions.",
				);
				break;
			default:
				setTextContent("");
		}
	};

	useEffect(() => {
		// Set fade in to true when textContent changes
		setFadeIn(true);
		// Set fade in to false after 500ms (adjust timing as needed)
		const timer = setTimeout(() => setFadeIn(false), 500);
		return () => clearTimeout(timer); // Clean up timer
	}, [textContent]);

	return (
		<div className="flex flex-col w-full md:w-fit mx-auto my-[20px]">
			<h5 className="mx-auto mb-5 text-[#3B679F] hidden md:block">
				What we truly believe in ...
			</h5>
			<div className="w-fit bg-yellow-400 rounded-xl p-10 relative hidden md:block">
				<div className="md:mr-[8%] flex flex-col-reverse md:flex-row mb-5">
					<div className="md:w-1/2 mx-auto md:mx-0">
						<p className="text-2xl text-center md:text-right text-[#3B679F]">
							We believe in thinking outside of the box and
							challenging conventions. Being innovative is taking
							creative ideas and turning them into valuable
							things.
						</p>
					</div>
					<div className="w-fit mx-auto md:mx-0 flex items-center">
						<div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
						<div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
						<h5 className="md:ml-[5%] text-[60px] xl:text-[100px] text-[#3B679F]">
							<span className="text-[#C1272D]">I</span>NNOVATIVE
						</h5>
					</div>
				</div>
				<div className="md:ml-[22%] flex flex-col md:flex-row mb-5">
					<div className="w-fit mx-auto md:mx-0 flex flex-row-reverse items-center">
						<div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
						<div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
						<h5 className="text-right mr-[5%] text-[60px] xl:text-[100px] text-[#3B679F]">
							INCLUS<span className="text-[#C1272D]">I</span>VE
						</h5>
					</div>
					<div className="md:w-1/2 mx-auto md:mx-0">
						<p className="text-2xl text-center md:text-left text-[#3B679F]">
							We truly believe in fostering an inclusive community
							where all members feel appreciated, welcomed, and
							unexcluded from the club’s journey.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row mb-5">
					<div className="w-1/3 hidden md:block">
						<p className="text-2xl text-right mr-[5%] text-[#3B679F]">
							We believe in building a club where members are
							inspired by their work and contributions.
						</p>
					</div>
					<div className="w-fit mx-auto md:mx-0 flex justify-center items-center">
						<div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
						<div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
						<h5 className="text-[60px] xl:text-[100px] text-[#3B679F]">
							INSP<span className="text-[#C1272D]">I</span>RING
						</h5>
					</div>
					<div className="md:w-1/3 md:hidden mx-auto md:mx-0">
						<p className="text-2xl text-center md:text-left ml-[5%] text-[#3B679F]">
							We believe in building a club where members are
							inspired by their work and contributions.
						</p>
					</div>
					<div className="md:w-1/3 mx-auto md:mx-0">
						<div className="w-16 h-16 bg-white rounded-full absolute -left-8 bottom-16 md:hidden"></div>
						<div className="w-16 h-16 bg-white rounded-full absolute -right-8 bottom-16 md:hidden"></div>
						<p className="text-2xl text-center md:text-left ml-[5%] text-[#3B679F]">
							We believe in building a club where members are
							inspired by their work and contributions.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full md:hidden">
				<div className="flex mx-auto">
					<button
						className={`${
							activeButton === "innovative"
								? "bg-ft-primary-yellow transition duration-500 ease-in-out"
								: "bg-ft-primary-blue transition duration-500 ease-in-out"
						}  mr-[3%] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
						onClick={() => handleClick("innovative")}
					>
						{activeButton === "innovative" ? "Innovative" : "I"}
					</button>
					<button
						className={`${
							activeButton === "inclusive"
								? "bg-ft-primary-yellow transition duration-500 ease-in-out"
								: "bg-ft-primary-blue transition duration-500 ease-in-out"
						}  mx-[3%] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
						onClick={() => handleClick("inclusive")}
					>
						{activeButton === "inclusive" ? "Inclusive" : "I"}
					</button>
					<button
						className={`${
							activeButton === "inspiring"
								? "bg-ft-primary-yellow transition duration-500 ease-in-out"
								: "bg-ft-primary-blue transition duration-500 ease-in-out"
						}  mx-[3%] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
						onClick={() => handleClick("inspiring")}
					>
						{activeButton === "inspiring" ? "Inspiring" : "I"}
					</button>
				</div>
				<div>
					<div className={`bg-ft-primary-blue rounded-md my-3 p-5 `}>
						<img
							className={`w-[125px] h-[125px] mx-auto ${
								fadeIn ? "opacity-0" : "opacity-100"
							} transition-opacity duration-200`}
							src="/whiteLogo.png"
							alt="White logo"
						/>
						<p
							className={`text-center text-white ${
								fadeIn ? "opacity-0" : "opacity-100"
							} transition-opacity duration-200`}
						>
							{textContent}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoreValue;
