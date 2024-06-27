// components/Header.tsx

import type React from "react";

const Header: React.FC = () => {
	return (
		<section
			className="relative w-full h-[40vh] bg-cover bg-center sm:h-[50vh] lg:h-[60vh]"
			style={{
				backgroundImage:
					"url('https://creatioftu2.com/wp-content/uploads/2023/02/bg-1-2048x1152.png')",
			}}
		>
			{/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
			<div className="flex justify-center h-full w-full">
				<div className="flex flex-col lg:flex-row max-w-screen-lg m-auto font-poppins text-white p-4 lg:p-0">
					<div className="w-full lg:w-2/5 flex flex-col justify-end uppercase">
						<p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mt-4 lg:mt-0">
							FinTech Club Initiatives
						</p>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl my-4 lg:my-8 text-[#dbb969]">
							Media
							<br />
							Projects
						</h1>
					</div>
					<div className="w-full lg:w-3/5 flex flex-col font-light mt-4 lg:mt-0">
						<div className="w-1/5 h-1 bg-white mt-8 lg:mt-32"></div>
						<p className="text-sm sm:text-base lg:text-lg xl:text-xl mt-4">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
