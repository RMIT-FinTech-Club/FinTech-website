import clsx from "clsx";
import Image from "next/image";
import type React from "react";

const IntroSection = () => {
	return (
		<section className="flex flex-col md:flex-row items-center gap-6 w-11/12 py-3 lg:py-12">
			{/* Left text */}
			<div className="flex flex-col items-center  md:w-1/3 justify-center">
				<h4 className="text-ft-primary-yellow mb-5">Vision and mission</h4>
				<p className="text-center">
					“Where the brightest, most creative, innovative and ambitious RMIT students, from diverse major backgrounds assemble!”
				</p>
			</div>
			{/* Image */}
			{/* <MaskImage src='/ImageMask.svg' /> */}
			<div className="md:w-1/3" style={{ aspectRatio: "1/ 1.5" }}>
				<MaskImage src="/RiceSrc01.png" />
			</div>
			{/* Right text */}
			<div className="flex flex-col md:w-1/3 justify-center gap-4">
				<div className="flex flex-col justify-center text-center gap-3 mb-10">
					<h4 className="text-ft-primary-yellow">50+</h4>
					<h5 className="text-ft-primary-blue">Projects</h5>
					<p>
						Include academic events, competitions, workshops, training, creative & media projects, technical development, and organizational projects.
					</p>
				</div>
				<div className="flex flex-col justify-center text-center gap-3">
					<h4 className="text-ft-primary-yellow">60+</h4>
					<h5 className="text-ft-primary-blue">Sponsorship</h5>
					<p>
						In broad industries such as Traditional FinTech, Web3 FinTech, Finance, Technology, Healthcare, Venture Capital, etc.
					</p>
				</div>
			</div>
		</section>
	);
};

type MaskImageProps = {
	src: string;
	mask?: string;
	maskSize?: string;
	maskPosition?: string;
	maskRepeat?: string;
};

const MaskImage: React.FC<MaskImageProps> = ({
	src,
	maskSize,
	maskPosition,
	maskRepeat,
}) => {
	const recWidth = "50px";
	const recHeight = ["100px", "200px", "300px", "200px", "100px"];

	// const maskImage = `url('${src}')`

	const style: React.CSSProperties = {
		maskImage: "url('/ImageMask.svg')",
		maskSize: "cover",
		maskPosition: "center",
		maskRepeat: "no-repeat",
		width: "100%",
		height: "100%",
	};

	return (
		<Image
			width={300}
			height={0}
			className=""
			src={src}
			alt="Fintech club members"
			style={style}
		/>
	);
};

export default IntroSection;
