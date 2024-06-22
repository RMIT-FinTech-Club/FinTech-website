import { Image } from "@nextui-org/react";
import type React from "react";
import { Road } from "tabler-icons-react";
import RoadToFtcButton from "./components/roadToFtcButton";
import RoadToFtcContainer from "./components/roadToFtcContainer";
import RoadToFtcContainerMobileLeft from "./components/roadToFtcContainerMobileLeft";
import RoadToFtcContainerMobileRight from "./components/roadToFtcContainerMobileRight";

const JoinUs: React.FC = () => {
	return (
		<div className="">
			{/* Laptop view */}
			<div className="hidden lg:flex lg:flex-col h-screen">
				<h3 className="py-2 px-16 absolute">Road to FinTech Club</h3>
				<Image
					src="registration-background.png"
					alt="Road to FinTech Club"
					className="relative z-0"
					width={1920}
					height={1080}
				/>
				<RoadToFtcContainer
					header="1. Club Day"
					text="Discover our unique culture and activities."
					containerClassName="absolute z-10 left-24 top-1/2 -translate-y-28"
				/>
				<RoadToFtcContainer
					header="2. Induction Day"
					text="Where you could find out more about us this semester."
					containerClassName="absolute z-10 left-1/4 top-1/2 -translate-x-8 translate-y-16"
				/>
				<RoadToFtcContainer
					header="3. Application Round"
					text="Prepare your CV and fill in our application form."
					containerClassName="absolute z-10 right-1/4 top-1/3 translate-y-24"
				/>
				<RoadToFtcContainer
					header="4. Interview Round"
					text="Prepare your CV and fill in our application form."
					containerClassName="absolute z-10 right-0 bottom-1/4 -translate-x-24 translate-y-12"
				/>
				<div className="flex self-center justify-evenly w-1/2">
					<RoadToFtcButton
						text="Apply Now"
						color="bg-ft-primary-blue-500"
					/>
					<RoadToFtcButton
						text="Our Booklet"
						color="bg-ft-primary-yellow-500"
					/>
				</div>
			</div>
			{/* Mobile view */}
			<div className="flex flex-col h-screen items-center justify-around lg:hidden">
				<h1 className="mx-16 py-2 px-2 text-center">
					Road to FinTech Club
				</h1>
				<div className="flex flex-col w-full">
					<Image
						src="registration-background-mobile.png"
						alt="Road to FinTech Club Mobile"
						className="absolute z-0"
						width={402}
						height={455}
					/>
					<div className="flex flex-col w-full justify-around relative z-10">
						<RoadToFtcContainer
							header="1. Club Day"
							text="Discover our unique culture and activities."
							containerClassName="flex justify-center w-full my-2"
						/>
						<RoadToFtcContainer
							header="2. Induction Day"
							text="Where you could find out more about us this semester."
							containerClassName="flex justify-center w-full my-2"
						/>
						<RoadToFtcContainer
							header="3. Application Round"
							text="Prepare your CV and fill in our application form."
							containerClassName="flex justify-center w-full my-2"
						/>
						<RoadToFtcContainer
							header="4. Interview Round"
							text="Prepare your CV and fill in our application form."
							containerClassName="flex justify-center w-full my-2"
						/>
					</div>
				</div>
				{/* <RoadToFtcContainerMobileLeft
					header="1. Club Day"
					text="Discover our unique culture and activities."
					containerMobileLeftClassName="absolute z-10 -left-1/4 top-1/3 translate-x-20 -translate-y-6"
				/>
				<RoadToFtcContainerMobileRight
					header="2. Induction Day"
					text="Where you could find out more about us this semester."
					containerMobileRightClassName="absolute z-10 -right-1/2 top-1/2 -translate-x-8 -translate-y-14"
				/>
				<RoadToFtcContainerMobileLeft
					header="3. Application Round"
					text="Prepare your CV and fill in our application form."
					containerMobileLeftClassName="absolute z-10 -left-1/4 bottom-1/4 translate-x-12 -translate-y-14"
				/>
				<RoadToFtcContainerMobileRight
					header="4. Interview Round"
					text="Prepare your CV and fill in our application form."
					containerMobileRightClassName="absolute z-10 -right-1/2 bottom-1/2 -translate-x-20 translate-y-64"
				/> */}
				<div className="flex flex-col">
					<RoadToFtcButton
						text="Apply Now"
						color="bg-ft-primary-blue-500"
					/>
					<RoadToFtcButton
						text="Our Booklet"
						color="bg-ft-primary-yellow-500"
					/>
				</div>
			</div>
		</div>
	);
};

export default JoinUs;
