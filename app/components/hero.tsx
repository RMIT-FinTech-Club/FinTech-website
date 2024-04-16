import type React from "react";

const HeroSection = () => {
    return (
        <div className="w-[1920px] h-[944px] px-[134px] py-12 flex-col justify-start items-center gap-12 inline-flex">
            <div className="self-stretch h-[400px] justify-start items-center gap-[60px] inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0"><span className="text-black text-[80px] font-bold font-['Montserrat']">What is <br /></span><span className="text-orange-300 text-[80px] font-bold font-['Montserrat']">FinTech Club?</span><span className="text-black text-[80px] font-bold font-['Montserrat']"> </span></div>
                    <div className="self-stretch grow shrink basis-0 text-black text-lg font-normal font-['Montserrat'] tracking-wide">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </div>
                    <div className="justify-center items-center gap-6 inline-flex">
                        <div className="w-[130px] h-[45px] px-3 py-[11px] bg-slate-700 rounded-xl justify-center items-center gap-2.5 flex">
                            <div className="text-white text-lg font-normal font-['Montserrat'] tracking-wide">Read More</div>
                        </div>
                        <div className="w-[130px] h-[45px] px-3 py-[11px] bg-slate-700 rounded-xl justify-center items-center gap-2.5 flex">
                            <div className="text-white text-lg font-normal font-['Montserrat'] tracking-wide">Join Us</div>
                        </div>
                    </div>
                </div>
                <div className="w-[814px] h-[400px] rounded-xl flex-col justify-center items-center inline-flex">
                    <img className="w-[814px] h-[400px]" src="https://via.placeholder.com/814x400" />
                </div>
            </div>
            <div className="self-stretch h-[400px] justify-end items-center gap-12 inline-flex">
                <div className="h-[400px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <img className="w-[400px] h-[400px]" src="https://via.placeholder.com/400x400" />
                </div>
                <div className="w-[788px] h-[400px] rounded-xl flex-col justify-center items-center inline-flex">
                    <img className="w-[788px] h-[400px]" src="https://via.placeholder.com/788x400" />
                </div>
                <div className="w-[400px] h-[400px] rounded-xl flex-col justify-center items-end inline-flex">
                    <img className="w-[814px] h-[400px]" src="https://via.placeholder.com/400x400" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;