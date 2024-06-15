type HeaderPodcastPageProps = {
	text: string;
};

const HeaderPodcastPage: React.FC<HeaderPodcastPageProps> = ({ text }) => {
	return (
		<section className="hidden lg:flex justify-center my-4 mx-16 items-center">
			{/* Left arrow*/}
			<div className="relative flex items-center invisible lg:visible">
				<div className="bg-ft-primary-yellow-500 h-1 w-full lg:w-96" />
				<div className="absolute bg-ft-primary-yellow-500 h-4 w-full lg:w-4 rounded-full" />
			</div>
			{/* Title page  */}
			<div className="mx-16">
				<h4 className="uppercase text-ft-primary-yellow-500 font-bold">
					{text}
				</h4>
			</div>
			{/* Right arrow*/}
			<div className="relative flex items-center invisible lg:visible">
				<div className="bg-ft-primary-yellow-500 h-1 w-full lg:w-96" />
				<div className="bg-ft-primary-yellow-500 h-4 w-full lg:w-4 rounded-full" />
			</div>
		</section>
	);
};

export default HeaderPodcastPage;
