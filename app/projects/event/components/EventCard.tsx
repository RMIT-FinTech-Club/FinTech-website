import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const EventCard = () => {
    return (
        <>
            <div className="w-full my-14">
                <h1 className="text-center text-[#dbb969]">
                    Past Events
                </h1>
                <p className="mx-auto mt-12 md:px-10 px-2 text-lg tracking-wide text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, velit? Laborum commodi mollitia facere perspiciatis facilis, debitis delectus nobis ipsam cumque esse quas officiis, odio possimus error, numquam vel eaque.
                </p>
                <div className="grid grid-cols-3 grid-flow-row mt-12 gap-14 px-40">
                    <div className="w-full justify-self-center m-auto items-center text-center bg-[#dbb969] h-52 rounded-2xl hover:bg-[#dbb969]/90 hover:shadow-2xl transition-all duration-3000">
                        Event 1
                    </div>
                    <div className="w-full justify-self-center m-auto items-center text-center bg-[#dbb969] h-52 rounded-2xl hover:bg-[#dbb969]/90 hover:shadow-2xl transition-all duration-3000">
                        Event 1
                    </div>
                    <div className="w-full justify-self-center m-auto items-center text-center bg-[#dbb969] h-52 rounded-2xl hover:bg-[#dbb969]/90 hover:shadow-2xl transition-all duration-3000">
                        Event 1
                    </div>
                    <div className="w-full justify-self-center m-auto items-center text-center bg-[#dbb969] h-52 rounded-2xl hover:bg-[#dbb969]/90 hover:shadow-2xl transition-all duration-3000">
                        Event 1
                    </div>
                    <div className="w-full justify-self-center m-auto items-center text-center bg-[#dbb969] h-52 rounded-2xl hover:bg-[#dbb969]/90 hover:shadow-2xl transition-all duration-3000">
                        Event 1
                    </div>
                    <div className="w-full justify-self-center m-auto items-center text-center bg-[#dbb969] h-52 rounded-2xl hover:bg-[#dbb969]/90 hover:shadow-2xl transition-all duration-3000">
                        Event 1
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCard;