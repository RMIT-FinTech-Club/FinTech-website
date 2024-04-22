type HeaderTitlePageProps = {
	text: string;
};

const HeaderTitlePage: React.FC<HeaderTitlePageProps> = ({ text }) => {
	return (
		<section className="flex justify-center my-4 mx-4 items-center w-full">
			{/* Left arrow*/}
			<div className="relative flex items-center invisible lg:visible">
				<div className="bg-ft-primary-blue-500 h-1 w-64"></div>
				<div className="absolute bg-ft-primary-blue-500 h-4 w-4 rounded-full"></div>
			</div>
			{/* Title page  */}
			<div className="bg-ft-primary-yellow-500 py-4 px-24 mx-8 xl:px-48 xl:mx-16 rounded-2xl">
				<h5 className="uppercase text-ft-text-bright">{text}</h5>
			</div>
			{/* Right arrow*/}
			<div className="relative flex items-center invisible lg:visible">
				<div className="bg-ft-primary-blue-500 h-1 w-64"></div>
				<div className="bg-ft-primary-blue-500 h-4 w-4 rounded-full"></div>
			</div>
		</section>
	);
};

export default HeaderTitlePage;
