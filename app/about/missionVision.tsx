import { Montserrat } from "next/font/google";

const VisionMission = () => {
	return (
		<div className="min-w-56 flex flex-col-reverse justify-center items-center absolute left-0 md:flex-row">
			<div className="relative w-screen text-center bg-ft-primary-yellow pt-12 pb-24 px-16 md:rounded-ee-[8rem] md:w-1/2">
				<h1 className="text-ft-primary-blue mt-12 mb-20">Vision</h1>
				<div className="text-black text-lg md:text-4xl text-justify relative md:px-16">
					Richard McClintock, a Latin professor at Hampden-Sydney
					College in Virginia, looked up one of the more obscure Latin
					words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature,
					discovered the undoubtable source. Lorem Ipsum comes from
					sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
					Malorum" (The Extremes of Good and Evil) by Cicero, written
					in 45 BC. This book is a treatise on the theory of ethics,
					very popular during the Renaissance. The first line of Lorem
					Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
					section 1.10.32.
				</div>
				<div className="absolute -top-24 right-[10rem] -rotate-90 min-h-40 w-16 bg-ft-primary-yellow rounded-se-full shadow-inner md:h-56 md:left-[100%] md:top-80 md:rotate-0 z-10">
					<div className="absolute left-6 bottom-4 w-4 h-4 bg-ft-primary-blue rounded-full" />
				</div>
			</div>
			<div className="relative w-screen text-center bg-ft-primary-blue pt-12 pb-24 px-16 md:rounded-es-[8rem] md:w-1/2">
				<h1 className="text-ft-primary-yellow mt-12 mb-20">Mission</h1>
				<div className="text-white text-lg md:text-4xl text-justify relative md:px-16">
					Richard McClintock, a Latin professor at Hampden-Sydney
					College in Virginia, looked up one of the more obscure Latin
					words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature,
					discovered the undoubtable source. Lorem Ipsum comes from
					sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
					Malorum" (The Extremes of Good and Evil) by Cicero, written
					in 45 BC. This book is a treatise on the theory of ethics,
					very popular during the Renaissance. The first line of Lorem
					Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
					section 1.10.32.
				</div>
				<div className="absolute right-[20rem] -bottom-24 -rotate-90 bg-ft-primary-blue w-16 min-h-40 md:h-56 rounded-es-full shadow md:right-[100%] md:top-24 md:rotate-0">
					<div className="absolute left-6 top-4 w-4 h-4 bg-ft-primary-yellow rounded-full" />
				</div>
			</div>
		</div>
	);
};

export default VisionMission;
