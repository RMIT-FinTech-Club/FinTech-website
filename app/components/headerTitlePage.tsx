type HeaderTitlePageProps = {
	text: string;
};

const HeaderTitlePage: React.FC<HeaderTitlePageProps> = ({ text }) => {
	return (
		<section className="flex justify-center my-4 items-center">
			{/* Left arrow*/}
			<div className="relative flex items-center">
				<div className="bg-ft-primary-blue-500 h-1 w-64 invisible xl:visible"></div>
				<div className="absolute bg-ft-primary-blue-500 h-4 w-4 rounded-full invisible xl:visible"></div>
			</div>
			{/* Title page  */}
			<div className="bg-ft-primary-yellow-500 py-4 px-48 mx-16 rounded-2xl">
				<h5 className="uppercase text-white">{text}</h5>
			</div>
			{/* Right arrow*/}
			<div className="relative flex items-center">
				<div className="bg-ft-primary-blue-500 h-1 w-64 invisible xl:visible"></div>
				<div className="bg-ft-primary-blue-500 h-4 w-4 rounded-full invisible xl:visible"></div>
			</div>
		</section>
	);
};

export default HeaderTitlePage;
