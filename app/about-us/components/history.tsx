"use client";
import { fontSans } from "@/config/fonts";
import {
	Modal,
	ModalBody,
	ModalContent,
	useDisclosure,
} from "@nextui-org/react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import "../../../styles/about-us/historyPage.css";

export default function HistorySection() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const [emblaHorizontalRef, emblaHorizontalApi] = useEmblaCarousel({
		loop: false,
		dragFree: true,
	});

	const [emblaVerticalRef, emblaVerticalApi] = useEmblaCarousel({
		loop: false,
		dragFree: true,
		axis: "y",
		align: "center",
	});

	const [centerSlideIndex, setCenterSlideIndex] = useState<number>(0);

	useEffect(() => {
		if (emblaHorizontalApi) {
			const onSelect = () => {
				const selectedIndex = emblaHorizontalApi.selectedScrollSnap();
				setCenterSlideIndex(selectedIndex);
			};

			emblaHorizontalApi.on("select", onSelect);
			return () => {
				emblaHorizontalApi.off("select", onSelect);
			};
		}

		if (emblaVerticalApi) {
			const onSelect = () => {
				const selectedIndex = emblaVerticalApi.selectedScrollSnap();
				setCenterSlideIndex(selectedIndex);
			};

			emblaVerticalApi.on("select", onSelect);
			return () => {
				emblaVerticalApi.off("select", onSelect);
			};
		}
	}, [emblaHorizontalApi, emblaVerticalApi]);

	return (
		<>
			<div className="mx-auto w-full md:px-[52px] bg-white bg-opacity-0 flex-col grid grid-cols-8 justify-center items-center gap-4">
				<div className="md:inline-flex sm:hidden md:w-full md:h-1 bg-black flex items-center col-span-1">
					<div className="md:inline-block sm:hidden md:w-6 md:h-6 bg-black rounded-full" />
				</div>

				<div className="flex-col justify-start items-center md:gap-1 flex md:col-span-6 col-span-8">
					<div
						className={`self-stretch text-center text-slate-700 text-2xl font-bold ${fontSans.style} tracking-tight`}
					>
						BACK TO TIME
					</div>
					<div className="self-stretch text-center">
						<span
							className={`text-slate-700 md:text-5xl text-2xl font-bold ${fontSans.style}`}
						>
							Discover the
						</span>
						<span
							className={`text-zinc-800 md:text-5xl text-2xl font-bold ${fontSans.style}`}
						>
							{" "}
						</span>
						<span
							className={`text-orange-300 md:text-5xl text-2xl font-bold ${fontSans.style} `}
						>
							FINTECH CLUB
							<br />
						</span>
						<span
							className={`text-slate-400 md:text-5xl text-2xl font-bold ${fontSans.style}`}
						>
							Story & History
						</span>
					</div>

					<div
						className={`mx-auto mt-[16px] md:px-0 px-20 text-black text-lg ${fontSans.style} tracking-wide text-center`}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras viverra viverra eros, eu euismod arcu dignissim
						quis. Phasellus sollicitudin
					</div>
				</div>

				<div className="md:inline-flex sm:hidden md:w-full md:h-1 bg-black flex flex-row-reverse items-center justify-self-end col-span-1">
					<div className="md:inline-block sm:hidden md:w-6 md:h-6 bg-black rounded-full" />
				</div>
			</div>

			{/* desktop version */}
			<div className="hidden items-center w-full mt-8 md:grid md:grid-cols-6 grid-cols-1 overflow-hidden">
				<img
					alt="fintech mascot"
					className="md:block hidden md:w-[300px] lg:w-[600px] rotate-[58.03deg] rounded-[59px] z-10"
					src="https://ik.imagekit.io/mbrrji2rk/Picture1.png?updatedAt=1713240956080"
				/>
				<div
					className={`mt-[93px] mb-[77px] md:w-[0px] w-auto md:h-[300px] h-[100px] grid grid-cols-3 col-span-4 z-0 md: mx-auto ${centerSlideIndex === 0
						? "pr-96"
						: centerSlideIndex === 4
							? "pl-96"
							: "px-96"
						}`}
					ref={emblaHorizontalRef}
				>
					<div className="flex justify-between items-center">
						{["2020", "2021", "2022", "2023", "2024"].map(
							(year, index) => {
								return (
									<div
										key={year}
										className={`flex shrink-0 md:ml-[50px] lg:ml-[90px] items-center rounded-full duration-1000 ease-out select-none ${index === centerSlideIndex
											? "md:w-[170px] md:h-[170px] lg:w-60 lg:h-60 bg-slate-700 w-36 h-36"
											: "sm:inline-flex hidden lg:w-32 lg:h-32 bg-amber-200 md:w-[120px] md:h-[120px]"
											} `}
									>
										<div
											className={`mx-auto font-extrabold ${index === centerSlideIndex
												? "text-orange-300 md:text-4xl lg:text-5xl text-3xl"
												: "sm:inline-flex hidden text-slate-700 md:text-3xl lg:text-4xl"
												} ${fontSans.style}`}
										>
											{year}
										</div>
									</div>
								);
							},
						)}
					</div>
				</div>
				<img
					alt="fintech mascot"
					className=" md:block hidden md:w-[400px] lg:w-[600px] rotate-[-58.03deg] rounded-[59px] z-10 "
					src="https://ik.imagekit.io/mbrrji2rk/Picture1.png?updatedAt=1713240956080"
				/>
			</div>

			{/* mobile version */}
			<div className="md:hidden items-center w-full grid grid-cols-3">
				<img
					alt=""
					className="w-[250px] md:hidden h-auto transform -scale-x-100 rotate-[-24.12deg]"
					src="https://ik.imagekit.io/mbrrji2rk/3164276f-e306-432f-ab36-b9a275439de7.jpg?updatedAt=1713241506012"
				/>
				<div className="mt-[93px] mb-[77px] md:w-[0px] w-auto md:h-[300px] h-[100px] md:mx-auto">
					<div className="flex w-auto justify-between items-center">
						<div className="flex shrink-0 md:ml-[50px] lg:ml-[90px] items-center rounded-full duration-1000 ease-out select-none md:w-[170px] md:h-[170px] lg:w-60 lg:h-60 bg-slate-700 mx-auto w-32 h-32">
							<div
								className={`mx-auto font-semibold text-orange-300 md:text-4xl lg:text-5xl text-3xl ${fontSans.style}`}
							>
								2022
							</div>
						</div>
					</div>
				</div>
				<img
					alt=""
					className="w-[250px] md:hidden h-auto transform rotate-[24.12deg] justify-self-end"
					src="https://ik.imagekit.io/mbrrji2rk/3164276f-e306-432f-ab36-b9a275439de7.jpg?updatedAt=1713241506012"
				/>
			</div>

			<div
				className="md:hidden mx-auto text-center font-semibold text-2xl text-[#5E5E92]"
				onClick={onOpen}
				onKeyUp={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						onOpen();
					}
				}}
			>
				change
			</div>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{() => (
						<>
							<ModalBody>
								<div
									className={`w-auto h-[850px] grid grid-rows-5 z-0 m-auto ${centerSlideIndex === 0
										? ""
										: centerSlideIndex === 4
											? "pl-96"
											: "px-96"
										}`}
									ref={emblaVerticalRef}
								>
									<div className="flex flex-col justify-between items-center gap-40 justify-self-center">
										{[
											"2020",
											"2021",
											"2022",
											"2023",
											"2024",
										].map((year, index) => {
											return (
												<div
													key={year}
													className={`flex shrink-0 md:ml-[50px] lg:ml-[90px] items-center rounded-full duration-1000 ease-out select-none ${index ===
														centerSlideIndex
														? "md:w-[170px] md:h-[170px] lg:w-60 lg:h-60 bg-slate-700 w-52 h-52"
														: "sm:inline-flex w-44 h-44 bg-amber-200"
														} `}
												>
													<div
														className={`mx-auto font-semibold ${index ===
															centerSlideIndex
															? "text-orange-300 text-5xl"
															: "sm:inline-flex text-slate-700 text-4xl"
															} ${fontSans.style
															}`}
													>
														{year}
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>

			<div className="grid grid-cols-3 justify-between items-center w-full my-8">
				<img
					alt=""
					className="md:w-[250px] hidden md:inline-block md:h-auto rotate-[-24.12deg]"
					src="https://ik.imagekit.io/mbrrji2rk/3164276f-e306-432f-ab36-b9a275439de7.jpg?updatedAt=1713241506012"
				/>
				<div className="md:col-span-1 col-span-full">
					<div
						className={`md:mb-[26px] mb-2 mx-auto text-center text-slate-400 md:text-5xl text-3xl md:px-0 font-semibold ${fontSans.style}`}
					>
						Develop and Grow
					</div>
					<div
						className={`mx-auto text-justify text-black text-lg font-medium ${fontSans.style} tracking-wide md:p-0 px-14`}
					>
						Richard McClintock, a Latin professor at Hampden-Sydney
						College in Virginia, looked up one of the more obscure
						Latin words, consectetur, from a Lorem Ipsum passage,
						and going through the cites of the word in classical
						literature, discovered the undoubtable source. Lorem
						Ipsum comes from sections 1.10.32 and 1.10.33 of "de
						Finibus Bonorum et Malorum" (The Extremes of Good and
						Evil) by Cicero, written in 45 BC. This book is a
						treatise on the theory of ethics, very popular during
						the Renaissance. The first line of Lorem Ipsum, "Lorem
						ipsum dolor sit amet..", comes from a line in section
						1.10.32.
					</div>
				</div>
				<img
					alt=""
					className="md:w-[250px] md:inline-block hidden md:h-auto transform -scale-x-100 rotate-[24.12deg] justify-self-end"
					src="https://ik.imagekit.io/mbrrji2rk/3164276f-e306-432f-ab36-b9a275439de7.jpg?updatedAt=1713241506012"
				/>
			</div>
		</>
	);
}
