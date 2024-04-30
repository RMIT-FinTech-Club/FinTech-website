import react from "react";

const CoreValue = () => {
	return (
		<div className="flex flex-col w-fit mx-auto my-[20px]">
			<h5 className="mx-auto mb-5 text-[#3B679F]">
				What we truly believe in ...
			</h5>
			<div className="w-fit bg-yellow-400 rounded-xl p-10 relative">
				<div className="md:mr-[8%] flex flex-col-reverse md:flex-row mb-5">
					<div className="md:w-1/2 mx-auto md:mx-0">
						<p className="text-2xl text-center md:text-right text-[#3B679F]">
							We believe in thinking outside of the box and
							challenging conventions. Being innovative is taking
							creative ideas and turning them into valuable
							things.
						</p>
					</div>
					<div className="w-fit mx-auto md:mx-0 flex items-center">
						<div className="w-16 h-16 bg-white rounded-full absolute -left-8" />
						<div className="w-16 h-16 bg-white rounded-full absolute -right-8" />
						<h5 className="md:ml-[5%] text-[60px] xl:text-[100px] text-[#3B679F]">
							<span className="text-[#C1272D]">I</span>NNOVATIVE
						</h5>
					</div>
				</div>
				<div className="md:ml-[22%] flex flex-col md:flex-row mb-5">
					<div className="w-fit mx-auto md:mx-0 flex flex-row-reverse items-center">
						<div className="w-16 h-16 bg-white rounded-full absolute -left-8" />
						<div className="w-16 h-16 bg-white rounded-full absolute -right-8" />
						<h5 className="text-right mr-[5%] text-[60px] xl:text-[100px] text-[#3B679F]">
							INCLUS<span className="text-[#C1272D]">I</span>VE
						</h5>
					</div>
					<div className="md:w-1/2 mx-auto md:mx-0">
						<p className="text-2xl text-center md:text-left text-[#3B679F]">
							We truly believe in fostering an inclusive community
							where all members feel appreciated, welcomed, and
							unexcluded from the club’s journey.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row mb-5">
					<div className="w-1/3 hidden md:block">
						<p className="text-2xl text-right mr-[5%] text-[#3B679F]">
							We believe in building a club where members are
							inspired by their work and contributions.
						</p>
					</div>
					<div className="w-fit mx-auto md:mx-0 flex justify-center items-center">
						<div className="w-16 h-16 bg-white rounded-full absolute -left-8" />
						<div className="w-16 h-16 bg-white rounded-full absolute -right-8" />
						<h5 className="text-[60px] xl:text-[100px] text-[#3B679F]">
							INSP<span className="text-[#C1272D]">I</span>RING
						</h5>
					</div>
					<div className="md:w-1/3 md:hidden mx-auto md:mx-0">
						<p className="text-2xl text-center md:text-left ml-[5%] text-[#3B679F]">
							We believe in building a club where members are
							inspired by their work and contributions.
						</p>
					</div>
					<div className="md:w-1/3 mx-auto md:mx-0">
						<div className="w-16 h-16 bg-white rounded-full absolute -left-8 bottom-16 md:hidden" />
						<div className="w-16 h-16 bg-white rounded-full absolute -right-8 bottom-16 md:hidden" />
						<p className="text-2xl text-center md:text-left ml-[5%] text-[#3B679F]">
							We believe in building a club where members are
							inspired by their work and contributions.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoreValue;
