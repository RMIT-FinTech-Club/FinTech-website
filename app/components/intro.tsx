import clsx from "clsx";
import Image from "next/image";
import type React from "react";

const IntroSection = () => {
	return (
		<section className="flex gap-6">
			{/* Left text */}
			<div className="flex flex-col justify-center">
				<h4 className="text-ft-primary-yellow">Vision and mission</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus ut consectetur enim. Mauris dapibus mauris in
					aliquet laoreet. Cras sollicitudin quis odio efficitur
					pellentesque. Vivamus fringilla finibus tellus, eget varius
					quam tempor posuere. Morbi semper dui vitae leo rhoncus, ac
					porttitor quam cursus. Curabitur purus ex, laoreet porta
					nisl ut.
				</p>
			</div>
			{/* Image */}
			{/* <MaskImage src='/ImageMask.svg' /> */}
			<MaskImage src="/ClubDaySemC2023-2.jpg" />
			{/* Right text */}
			<div className="flex flex-col justify-center gap-4">
				<div className="flex flex-col justify-center text-center gap-3">
					<h4 className="text-ft-primary-yellow">100+</h4>
					<h5 className="text-ft-primary-blue">Projects</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Phasellus ut consectetur enim. Mauris dapibus mauris in
						aliquet laoreet. Cras sollicitudin quis odio efficitur
						pellentesque. Vivamus fringilla finibus tellus, eget
						varius quam tempor posuere. Morbi semper dui vitae leo
						rhoncus, ac porttitor quam cursus. Curabitur purus ex,
						laoreet porta nisl ut.
					</p>
				</div>
				<div className="flex flex-col justify-center text-center gap-3">
					<h4 className="text-ft-primary-yellow">300+</h4>
					<h5 className="text-ft-primary-blue">Sponsorship</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec vitae semper dui. Etiam a aliquet magna, et
						ultrices mauris. Quisque sollicitudin ultricies nisl,
						sit amet.{" "}
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
		maskSize: "contain",
		maskPosition: "center",
		maskRepeat: "no-repeat",
		// height: "100%",
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
