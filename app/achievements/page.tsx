'use client'
import { fontSans } from "@/config/fonts";
import { useRef } from "react";
import { useCountUp } from 'react-countup';
import CountUp from 'react-countup';
const Achievements = () => {
    return (
        <div className="bg-[#2C305F] w-screen h-screen">
            <div className="flex flex-row items-top justify-between items-center md:pt-[43px] pt-[40px]">
                <div className="w-[700px] md:w-[500px] w-[40px] md:h-[0px] border-2 border-orange-300 md:mt-[25px] mt-[10px]"/>
                <div className={`text-orange-300 md:w-auto md:text-8xl text-4xl font-bold items-center ${fontSans.style}`}>Our Achievements</div>
                <div className="w-[700px] md:w-[500px] w-[40px] md:h-[0px] border-2 border-orange-300 md:mt-[25px] mt-[10px]"/>
            </div>
            <div className="md:flex md:flex-row sm:flex-col mx-atuo justify-around md:mt-[250px] items-center">
                <div className="flex flex-col justify-evenly">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:w-[350px] w-[200px] md:mt-[0px] mt-[40px] mx-auto icon icon-tabler icons-tabler-outline icon-tabler-trophy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 21l8 0" /><path d="M12 17l0 4" /><path d="M7 4l10 0" /><path d="M17 4v8a5 5 0 0 1 -10 0v-8" /><path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>
                    </div>
                    <CountUp
                        start={1}
                        end={100}
                        duration={5}
                    >
                        {({ countUpRef }) => (
                            <>
                                <span ref={countUpRef} className={` text-center text-white text-[100px] font-semibold ${fontSans.style}`}/>
                            </>
                        )}
                    </CountUp>
                </div>
                <div className="flex flex-col justify-evenly">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="md:w-[350px] w-[200px] md:mt-[0px] mt-[40px] mx-auto icon icon-tabler icons-tabler-outline icon-tabler-certificate">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                        <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                        <path d="M6 9l12 0" />
                        <path d="M6 12l3 0" />
                        <path d="M6 15l2 0" />
                    </svg>
                    <CountUp
                        start={1}
                        end={100}
                        duration={5}
                    >
                        {({ countUpRef }) => (
                            <>
                                <span ref={countUpRef} className={` text-center text-white text-[100px] font-semibold ${fontSans.style}`}/>
                            </>
                        )}
                    </CountUp>
                </div>
                <div className="flex flex-col justify-evenly">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="md:w-[350px] w-[200px] md:mt-[0px] mt-[40px] mx-auto icon icon-tabler icons-tabler-outline icon-tabler-award">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                        <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
                        <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
                    </svg>
                    <CountUp
                        start={1}
                        end={100}
                        duration={5}
                    >
                        {({ countUpRef }) => (
                            <>
                                <span ref={countUpRef} className={` text-center text-white text-[100px] font-semibold ${fontSans.style}`}/>
                            </>
                        )}
                    </CountUp>
                </div>
            </div>

        </div>

    );
};

export default Achievements;
