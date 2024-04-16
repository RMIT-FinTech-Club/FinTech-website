type HeaderTitlePageProps = {
	text: string;
	leftSvgSrc: string;
	rightSvgSrc: string;
};

const HeaderTitlePage: React.FC<HeaderTitlePageProps> = ({ text }) => {
	return (
		<section className="flex my-4 items-center">
			{/* Left arrow svg */}
			<div className="">
				<img
					src="./decorationLineLeftCircleArrow.svg"
					alt="decorationLineLeftCircleArrow"
				/>
			</div>
			{/* Title page  */}
			<div className="bg-ft-primary-yellow-500 py-4 px-48 mx-16 rounded-2xl">
				<h5 className="uppercase text-white">{text}</h5>
			</div>
			{/* Right arrow svg */}
			<div className="">
				<img
					src="./decorationLineRightCircleArrow.svg"
					alt="decorationLineRightCircleArrow"
				/>
			</div>
		</section>
	);
};

export default HeaderTitlePage;
