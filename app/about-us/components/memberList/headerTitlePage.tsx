type HeaderTitlePageProps = {
	text: string;
};

const HeaderTitlePage: React.FC<HeaderTitlePageProps> = ({ text }) => {
	return (
		<section className="flex justify-center my-4 mx-4 items-center">
			{/* Left arrow*/}
			<div className="relative flex items-center invisible lg:visible">
				<div className="bg-ft-primary-blue-500 h-1 w-full lg:w-64" />
				<div className="absolute bg-ft-primary-blue-500 h-4 w-full lg:w-4 rounded-full" />
			</div>
			{/* Title page  */}
			<div className="bg-ft-primary-yellow-500 py-4 px-24 mx-8 xl:px-48 xl:mx-16 rounded-2xl">
				<h5 className="uppercase text-ft-text-bright font-bold">
					{text}
				</h5>
			</div>
			{/* Right arrow*/}
			<div className="relative flex items-center invisible lg:visible">
				<div className="bg-ft-primary-blue-500 h-1 w-full lg:w-64" />
				<div className="bg-ft-primary-blue-500 h-4 w-full lg:w-4 rounded-full" />
			</div>
		</section>
	);
};

export default HeaderTitlePage;
