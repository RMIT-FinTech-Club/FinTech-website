import React from "react";

const HeroSection = () => {
    return (
        <div className="w-full py-12 flex-col justify-start items-center gap-12 flex">
            <div className=" justify-start items-center gap-[60px] flex max-h-[450px]">
                <div className="flex flex-col w-1/2 gap-4">
                    <div className="w-full">
                        <span className="text-[80px] font-bold ">What is <br /></span>
                        <span className="text-ft-primary-yellow text-[80px] font-bold">FinTech Club?</span>
                    </div>
                    <div className="p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </div>
                    <div className="justify-start items-center gap-6 flex">
                        <button className="w-[130px] h-[45px] text-ft-text-bright rounded-xl justify-center items-center flex bg-ft-primary-blue">
                            Read More
                        </button>
                        <button className="w-[130px] h-[45px] text-ft-text-bright rounded-xl justify-center items-center flex bg-ft-primary-blue">
                            Join Us
                        </button>
                    </div>
                </div>
                <div className="w-1/2 h-full rounded-xl">
                    <img className="w-full h-full" src="https://via.placeholder.com/800x450" />
                </div>
            </div>
            <div className="h-[400px] justify-end items-center gap-12 flex">
                <div className="h-full">
                    <img className=" h-[400px]" src="https://via.placeholder.com/400x400" />
                </div>
                <div className="h-full">
                    <img className="h-[400px]" src="https://via.placeholder.com/800x400" />
                </div>
                <div className="h-full">
                    <img className="h-[400px]" src="https://via.placeholder.com/400x400" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;