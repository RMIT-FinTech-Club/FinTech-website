import react from "react";
import Doughtnut from "@/public/doughnut.png";

const CoreValue = () => {
    return (
        <div className="flex flex-col w-fit mx-auto my-[20px]">
            <h5 className="mx-auto mb-5 text-[#3B679F]">What we truly believe in ...</h5>
            <div className="w-full bg-yellow-400 rounded-xl p-10 relative">
            <div className="mr-[8%] flex mb-5">
                <div className="w-1/2">
                    <p className="text-2xl text-right text-[#3B679F]">We believe in thinking outside of the box and challenging conventions. Being innovative is taking creative ideas and turning them into valuable things.</p>
                </div>
                <div className="w-fit md:1/2 flex items-center">
                    <div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
                    <div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
                    <h5 className="ml-[5%] text-[60px] xl:text-[100px] text-[#3B679F]"><span className="text-[#C1272D]">I</span>NNOVATIVE</h5>
                </div>               
            </div>
            <div className="ml-[22%] flex mb-5">
                <div className="w-fit md:1/2 flex flex-row-reverse items-center">
                    <div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
                    <div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
                    <h5 className="text-right mr-[5%] text-[60px] xl:text-[100px] text-[#3B679F]">INCLUS<span className="text-[#C1272D]">I</span>VE</h5>
                </div>
                <div className="w-1/2">
                    <p className="text-2xl text-[#3B679F]">We truly believe in fostering an inclusive community where all members feel appreciated, welcomed, and unexcluded from the club’s journey.</p>
                </div>
            </div>
            <div className="flex mb-5">
                <div className="w-1/3">         
                    <p className="text-2xl text-right mr-[5%] text-[#3B679F]">We believe in building a club where members are inspired by their work and contributions.</p>
                </div>
                <div className="w-fit md:1/3 flex justify-center items-center">
                    <div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
                    <div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
                    <h5 className="text-[60px] xl:text-[100px] text-[#3B679F]">INSP<span className="text-[#C1272D]">I</span>RING</h5>
                </div>
                <div className="w-1/3">
                    <p className="text-2xl ml-[5%] text-[#3B679F]">We believe in building a club where members are inspired by their work and contributions.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CoreValue;