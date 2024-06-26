"use client";
import { fontSans } from "@/config/fonts";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

export default function HistoryPage() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		dragFree: true,
	});
	const [centerSlideIndex, setCenterSlideIndex] = useState<number>(0);

	useEffect(() => {
		if (emblaApi) {
			const onSelect = () => {
				const selectedIndex = emblaApi.selectedScrollSnap();
				setCenterSlideIndex(selectedIndex);
			};

			emblaApi.on("select", onSelect);
			return () => {
				emblaApi.off("select", onSelect);
			};
		}
	}, [emblaApi]);

	return (
		<>
			<div className="mx-auto w-[806px] px-[52px] bg-white bg-opacity-0 flex-col justify-center items-center gap-4">
				<div className="absolute md:w-[250px] md:left-[100px] lg:w-[340px] top-[120px] lg:left-[134px] h-[4px] bg-black flex items-center">
					<div className="w-6 h-6 bg-black rounded-full" />
				</div>
				<div className="absolute md:w-[250px] md:right-[100px] lg:w-[340px] top-[120px] lg:right-[134px] h-[4px] bg-black flex flex-row-reverse items-center">
					<div className="w-6 h-6 bg-black rounded-full" />
				</div>
				<div className="flex-col justify-start items-center gap-1 flex">
					<div
						className={`self-stretch text-center text-slate-700 text-2xl font-semibold ${fontSans.style} tracking-tight`}
					>
						BACK TO TIME
					</div>
					<div className="self-stretch text-center">
						<span
							className={`text-slate-700 text-5xl font-bold ${fontSans.style}`}
						>
							Discover the
						</span>
						<span
							className={`text-zinc-800 text-5xl font-bold ${fontSans.style}`}
						>
							{" "}
						</span>
						<span
							className={`text-orange-300 text-5xl font-bold ${fontSans.style} `}
						>
							FINTECH CLUB
							<br />
						</span>
						<span
							className={`text-slate-400 text-5xl font-bold ${fontSans.style}`}
						>
							Story & History
						</span>
					</div>
				</div>
				<div
					className={`mx-auto mt-[16px] text-black text-lg ${fontSans.style} tracking-wide text-center`}
				>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras viverra viverra eros, eu euismod arcu dignissim quis.
					Phasellus sollicitudin
				</div>
			</div>
			<div
				className={`mt-[93px] mb-[77px] w-[500px] h-[300px] md: mx-auto ${centerSlideIndex === 0
						? "pr-96"
						: centerSlideIndex === 4
							? "pl-96"
							: "px-96"
					}`}
				ref={emblaRef}
			>
				<div className="flex justify-between items-center">
					{["2020", "2021", "2022", "2023", "2024"].map(
						(year, index) => {
							return (
								<div
									key={year}
									className={`flex shrink-0 md:ml-[60px] lg:ml-[90px] items-center rounded-full duration-1000 ease-out ${index === centerSlideIndex
											? "md:w-[200px] md:h-[200px] lg:w-64 lg:h-64 bg-slate-700 "
											: "lg:w-32 lg:h-32 bg-amber-200 md:w-[120px] md:h-[120px]"
										} `}
								>
									<div
										className={`mx-auto font-semibold ${index === centerSlideIndex
												? "text-orange-300 md:text-4xl lg:text-5xl "
												: "text-slate-700 md:text-3xl lg:text-4xl"
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
				alt=""
				className="absolute md:w-[300px] md:left-[-120px] md:top-[340px] lg:left-[-190.15px] lg:w-[600px] top-[257px] rotate-[58.03deg] rounded-[59px]"
				src="https://ik.imagekit.io/mbrrji2rk/Picture1.png?updatedAt=1713240956080"
			/>
			<img
				alt=""
				className="absolute md:w-[400px] md:right-[-120px] md:top-[340px] lg:right-[-190.15px] lg:w-[600px] top-[257px] rotate-[-58.03deg] rounded-[59px]"
				src="https://ik.imagekit.io/mbrrji2rk/Picture1.png?updatedAt=1713240956080"
			/>
			<img
				alt=""
				className="absolute md:bottom-[-330px] lg:bottom-0 left-0 w-[330px] h-[306px] md:w-[250px] md:h-auto"
				src="https://ik.imagekit.io/mbrrji2rk/3164276f-e306-432f-ab36-b9a275439de7.jpg?updatedAt=1713241506012"
			/>
			<img
				alt=""
				className="absolute md:bottom-[-330px] md:w-[180px] lg:bottom-0 w-[330px] h-[306px] md:w-[250px] md:h-auto right-0 rotate-[-24.12deg]"
				src="https://ik.imagekit.io/mbrrji2rk/3164276f-e306-432f-ab36-b9a275439de7.jpg?updatedAt=1713241506012"
			/>
			<div
				className={`w-[716px] mb-[26px] mx-auto text-center text-slate-400 text-5xl font-bold ${fontSans.style}`}
			>
				Develop and Grow
			</div>
			<div
				className={` mx-auto w-[760px] text-justify text-black text-lg font-normal ${fontSans.style} tracking-wide`}
			>
				Richard McClintock, a Latin professor at Hampden-Sydney College
				in Virginia, looked up one of the more obscure Latin words,
				consectetur, from a Lorem Ipsum passage, and going through the
				cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
				1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
				and Evil) by Cicero, written in 45 BC. This book is a treatise
				on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
				comes from a line in section 1.10.32.
			</div>
		</>
	);
}
