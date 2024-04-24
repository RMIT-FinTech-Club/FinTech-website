import { fontSans } from "@/config/fonts";

const Achievements = () => {
	return (
			<div className="bg-[#2C305F] w-screen h-screen">
                <div className="flex flex-row items-top justify-between items-center md:pt-[43px]">
                    <div className=" 2xl:w-[500px] xl:w-[700px] sm:w-[300px] md:h-[0px] border-2 border-orange-300 md:mt-[25px]"/>
                    <div className={`text-orange-300 md:text-8xl sm:text-5xl font-bold items-center ${fontSans.style}`}>Our Achievements</div>
                    <div className=" 2xl:w-[500px] xl:w-[700px] sm:w-[300px] md:h-[0px] border-2 border-orange-300 md:mt-[25px]"/>
                </div>
            </div>

    );
};

export default Achievements;
