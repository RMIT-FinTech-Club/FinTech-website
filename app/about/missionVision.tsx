import { Montserrat } from "next/font/google";

const VisionMission = () => {
	return (
		<div className="flex justify-center items-center absolute left-0">
			<div className="w-1/2 text-center bg-ft-primary-yellow rounded-ee-[8rem] pt-12 pb-24 px-16">
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
				<div className="absolute left-1/2 top-80 bg-ft-primary-yellow w-16 h-56 rounded-se-full shadow-inner">
					<div className="absolute left-6 bottom-4 w-4 h-4 bg-ft-primary-blue rounded-full" />
				</div>
			</div>
			<div className="w-1/2 text-center bg-ft-primary-blue rounded-es-[8rem] pt-12 pb-24 px-16">
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
				<div className="absolute right-1/2 top-24 bg-ft-primary-blue w-16 h-56 rounded-es-full shadow">
					<div className="absolute left-6 top-4 w-4 h-4 bg-ft-primary-yellow rounded-full" />
				</div>
			</div>
		</div>
	);
};

export default VisionMission;
