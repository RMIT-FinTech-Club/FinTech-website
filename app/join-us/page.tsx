import React from "react";
import { Image } from "@nextui-org/react";
import { Road } from "tabler-icons-react";
import RoadToFtcButton from "./components/roadToFtcButton";
import RoadToFtcContainer from "./components/roadToFtcContainer";

const JoinUs : React.FC = () => {
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
				< RoadToFtcContainer
					header="1. Club Day"
					text="Discover our unique culture and activities."
					className="absolute z-10 left-24 top-1/2 -translate-y-28"
				/>
				< RoadToFtcContainer
					header="2. Induction Day"
					text="Where you could find out more about us this semester."
					className="absolute z-10 left-1/4 top-1/2 -translate-x-8 translate-y-16"
				/>
				<RoadToFtcContainer 
					header="3. Application Round"
					text="Prepare your CV and fill in our application form."
					className="absolute z-10 right-1/4 top-1/3 translate-y-24"
				/>
				<RoadToFtcContainer 
					header="4. Interview Round"
					text="Prepare your CV and fill in our application form."
					className="absolute z-10 right-0 bottom-1/4 -translate-x-24 translate-y-12"	
				/>
				<div className="flex self-center justify-evenly w-1/2">
						<RoadToFtcButton text="Apply Now" color="bg-ft-primary-blue-500" />
						<RoadToFtcButton text="Our Booklet" color="bg-ft-primary-yellow-500" />
					</div>
			</div>
			{/* Mobile view */}
			<div>

			</div>
		</div>
	);
};

export default JoinUs;
