"use client";

import React, { useEffect, useState } from "react";

type HeaderTitlePageProps = {
  text: string;
};

const HeaderTitlePage: React.FC<HeaderTitlePageProps> = ({ text }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayText, setDisplayText] = useState(text);

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust displayed text based on the window width
  useEffect(() => {
    if (windowWidth < 640) { // Assuming 640px is the breakpoint for mobile
      setDisplayText("upcoming events");
    } else {
      setDisplayText(text);
    }
  }, [windowWidth, text]);

  const [first, middle, last] = displayText.split(" ");

  return (
    <section className="flex justify-center my-4 mx-auto items-center max-w-4xl w-full">
      <div className="relative flex items-center w-full lg:w-auto">
        {/* Left arrow */}
        <div className="bg-ft-primary-blue-500 h-1 w-full lg:w-64 lg:block hidden" />
        <div className="absolute bg-ft-primary-blue-500 h-4 w-full lg:w-4 rounded-full lg:block hidden" />
      </div>
      {/* Text with spacing adjustments */}
      <div className={`flex mx-8 xl:mx-16 text-center w-full ${windowWidth < 640 ? 'flex-col' : 'flex-row'}`}>
        {windowWidth < 640 ? (
          <>
            <h5 className="uppercase text-ft-primary-yellow font-bold flex-grow text-lg">
              upcoming
            </h5>
            <h5 className="uppercase text-ft-primary-blue-500 font-bold flex-grow text-lg">
              events
            </h5>
          </>
        ) : (
          <>
            <h5 className="uppercase text-ft-primary-blue-500 font-bold flex-grow px-2">
              {first}
            </h5>
            <h5 className="uppercase text-ft-primary-yellow font-bold flex-grow px-2">
              {middle}
            </h5>
            <h5 className="uppercase text-ft-primary-blue-500 font-bold flex-grow px-2">
              {last}
            </h5>
          </>
        )}
      </div>
      {/* Right arrow*/}
      <div className="relative flex items-center w-full lg:w-auto">
        <div className="bg-ft-primary-blue-500 h-1 w-full lg:w-64 lg:block hidden" />
        <div className="bg-ft-primary-blue-500 h-4 w-full lg:w-4 rounded-full lg:block hidden" />
      </div>
    </section>
  );
};

export default HeaderTitlePage;

