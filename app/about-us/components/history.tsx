import { fontSans } from "@/config/fonts";

export default function HistorySection() {
	return (
			<div className="mx-auto w-[806px] px-[52px] bg-white bg-opacity-0 flex-col justify-center items-center gap-4">
				<div className="absolute w-[340px] top-[120px] left-[134px] h-[4px] bg-black flex items-center">
					<div className="w-6 h-6 bg-black rounded-full" />
				</div>
				<div className="absolute w-[340px] top-[120px] right-[134px] h-[4px] bg-black flex flex-row-reverse items-center">
					<div className="w-6 h-6 bg-black rounded-full" />
				</div>
				<div className="flex-col justify-start items-center gap-1 flex">
					<div
						className={`self-stretch text-center text-slate-700 text-2xl font-semibold ${fontSans.style} tracking-tight`}
					>
					</div>
						BACK TO TIME
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
		<>
				<div
					className={`mx-auto mt-[16px] text-black text-lg ${fontSans.style} tracking-wide text-center`}
				>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras viverra viverra eros, eu euismod arcu dignissim quis.
					Phasellus sollicitudin
				</div>
			</div>
			<div className="mt-[93px] mb-[77px] items-center flex justify-between">
				<div className="flex items-center w-32 h-32 bg-amber-200 rounded-full">
					<div
						className={`mx-auto text-slate-700 text-4xl font-semibold ${fontSans.style}`}
					>
						2020
					</div>
				</div>
				<div className="flex items-center w-32 h-32 bg-amber-200 rounded-full">
					<div
						className={`mx-auto text-slate-700 text-4xl font-semibold ${fontSans.style}`}
					>
						2021
					</div>
				</div>
				<div className="flex items-center w-64 h-64 bg-slate-700 rounded-full">
					<div
						className={`mx-auto text-orange-300 text-5xl  font-bold ${fontSans.style}`}
					>
						2022
					</div>
				</div>
				<div className="flex items-center w-32 h-32 bg-amber-200 rounded-full">
					<div
						className={`mx-auto text-slate-700 text-4xl font-semibold ${fontSans.style}`}
					>
						2023
					</div>
				</div>
				<div className="flex items-center w-32 h-32 bg-amber-200 rounded-full">
					<div
						className={`mx-auto text-slate-700 text-4xl font-semibold ${fontSans.style}`}
					>
						2024
					</div>
				</div>
			</div>
			<img
				alt=""
				className="absolute top-[257px] left-[-200.15px] rotate-[58.03deg] rounded-[59px]"
				src="https://ik.imagekit.io/mbrrji2rk/Picture1.png?updatedAt=1713240956080"
			/>
			<img
				alt=""
				className="absolute top-[257px] right-[-200.15px] rotate-[-58.03deg] rounded-[59px]"
				src="https://ik.imagekit.io/mbrrji2rk/Picture1.png?updatedAt=1713240956080"
			/>
			<img
				alt=""
				className="absolute bottom-0 left-0 w-[330px] h-[306px]"
				src="https://ik.imagekit.io/mbrrji2rk/3164276f-e306-432f-ab36-b9a275439de7.jpg?updatedAt=1713241506012"
			/>
			<img
				alt=""
				className="absolute bottom-0 w-[330px] h-[306px] right-0 rotate-[-24.12deg]"
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
