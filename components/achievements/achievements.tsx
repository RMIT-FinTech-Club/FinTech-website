'use client'
import { fontSans } from "@/config/fonts";
import { IconUsers, IconTools, IconHeartHandshake, IconCalendarEvent } from '@tabler/icons-react';
import CountUp from 'react-countup';
const AchievementsSection = () => {
    return (
        <div className="bg-[#2C305F] w-screen h-screen">
            <div className="flex flex-row items-top justify-between items-center md:pt-[43px] pt-[40px]">
                <div className="w-[700px] md:w-[500px] w-[40px] md:h-[0px] border-2 border-orange-300 md:mt-[25px] mt-[10px]" />
                <div className={`text-orange-300 md:w-auto md:text-8xl text-4xl font-bold items-center ${fontSans.style}`}>Our Achievements</div>
                <div className="w-[700px] md:w-[500px] w-[40px] md:h-[0px] border-2 border-orange-300 md:mt-[25px] mt-[10px]" />
            </div>
            <div className="md:flex md:flex-row sm:flex-col mx-atuo justify-around md:mt-[200px] items-center flex-wrap px-[200px] flex-wrap">
                <div className="flex flex-col justify-evenly w-1/2">
                    <div className="mx-auto mb-4">
                        <IconUsers strokeWidth={2} stroke={"#ffffff"} fill={"none"} width={200} height={200} style={{ color: 'white', stroke: 'white' }} />
                    </div>
                    <CountUp
                        start={1}
                        end={100}
                        duration={5}
                    >
                        {({ countUpRef }) => (
                            <>
                                <div className={`text-center text-white text-4xl font-semibold ${fontSans.style}`}>Members: {" "}
                                    <span ref={countUpRef} className={` text-center text-white text-[100px] font-semibold ${fontSans.style}`} />
                                </div>
                            </>
                        )}
                    </CountUp>
                </div>
                <div className="flex flex-col justify-evenly w-1/2">
                    <div className="mx-auto mb-4">
                        <IconTools strokeWidth={2} stroke={"#ffffff"} fill={"none"} width={200} height={200} style={{ color: 'white', stroke: 'white' }} />
                    </div>
                    <CountUp
                        start={1}
                        end={100}
                        duration={5}
                    >
                        {({ countUpRef }) => (
                            <>
                                <div className={`text-center text-white text-4xl font-semibold ${fontSans.style}`}>Projects: {" "}
                                    <span ref={countUpRef} className={` text-center text-white text-[100px] font-semibold ${fontSans.style}`} />
                                </div>
                            </>
                        )}
                    </CountUp>
                </div>
                <div className="flex flex-col w-1/2 md:mt-[200px]">
                    <div className="mx-auto mb-4">
                        <IconHeartHandshake strokeWidth={2} stroke={"#ffffff"} fill={"none"} width={200} height={200} style={{ color: 'white', stroke: 'white' }} />
                    </div>
                    <CountUp
                        start={1}
                        end={100}
                        duration={5}
                    >
                        {({ countUpRef }) => (
                            <>
                                <div className={`text-center text-white text-4xl font-semibold ${fontSans.style}`}>Events Partners: {" "}
                                    <span ref={countUpRef} className={` text-center text-white text-[100px] font-semibold ${fontSans.style}`} />
                                </div>
                            </>
                        )}
                    </CountUp>
                </div>
                <div className="flex flex-col md:mt-[200px] w-1/2">
                    <div className="mx-auto mb-4">
                        <IconCalendarEvent strokeWidth={2} stroke={"#ffffff"} fill={"none"} width={200} height={200} style={{ color: 'white', stroke: 'white' }} />
                    </div>
                    <CountUp
                        start={1}
                        end={100}
                        duration={5}
                    >
                        {({ countUpRef }) => (
                            <>
                                <div className={`text-center text-white text-4xl font-semibold ${fontSans.style}`}>Events: {" "}
                                    <span ref={countUpRef} className={` text-center text-white text-[100px] font-semibold ${fontSans.style}`} />
                                </div>
                            </>
                        )}
                    </CountUp>
                </div>
            </div>

        </div>

    );
};

export default AchievementsSection;
