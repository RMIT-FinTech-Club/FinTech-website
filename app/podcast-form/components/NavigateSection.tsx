import type React from "react";
import { useContext } from "react";
import { IndexContext } from "./context/IndexContext";
const NavigateSection = () => {
	const {focusIndex} = useContext(IndexContext);
	return (
		<section className="w-full flex justify-center items-center gap-3 py-5 border-b-1 border-gray">
			<h6 className={focusIndex == 1 ? "text-black" : "text-gray-600"}>
				Podcast details
			</h6>
			<h6 className={focusIndex == 1 ? "text-black" : "text-gray-600"}>
				&gt;
			</h6>
			<h6 className={focusIndex == 2 ? "text-black" : "text-gray-600"}>
				Upload
			</h6>
			<h6 className={focusIndex == 2 ? "text-black" : "text-gray-600"}>
				&gt;
			</h6>
			<h6 className={focusIndex == 3 ? "text-black" : "text-gray-600"}>
				Review
			</h6>
		</section>
	);
};
export default NavigateSection;
