"use client";
import { useState, useEffect, useRef } from "react";
import { fontMono } from "@/config/fonts";
import { Button } from "@nextui-org/react";
import "../../styles/join-us/countDown.css";

export default function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval = useRef();

  const timerCount = () => {
    const expiredDay = new Date(2024, 7, 21, 23, 59, 59);
    interval = setInterval(() => {
      const now = new Date();
      const totalDays = expiredDay.getTime() - now.getTime();

      const days = Math.floor(totalDays / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (totalDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((totalDays % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((totalDays % (1000 * 60)) / 1000);

      if (totalDays < 0) {
        // stop count down
        clearInterval(interval.current);
      } else {
        // update timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    timerCount();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="countDown-container h-screen w-screen flex justify-center items-start">
      {/* <img
          src="https://ik.imagekit.io/wsdkzaaovq/Hero%20Section.svg?updatedAt=1718596790677"
          alt="hero background"
          className="-z-0  object-cover absolute"
        /> */}
      <div className="w-4/5 z-10 mt-16 absolute flex flex-col justify-center items-center">
        <h1
          className={`mb-14 text-[#F9FAFB] text-6xl font-bold ${fontMono.style}`}
        >
          Count down to form closed
        </h1>
        <div className="timer-container w-4/5">
          <div className="timer w-full flex justify-between items-center text-center mb-14">
            <section
              className={`text-[#F9FAFB] text-6xl font-bold ${fontMono.style}`}
            >
              <p className="text-8xl">{days}</p>
              <p className="text-5xl">DAYS</p>
            </section>
            <section
              className={`text-[#F9FAFB] text-6xl font-bold ${fontMono.style}`}
            >
              <p className="text-8xl">{hours}</p>
              <p className="text-5xl">HOURS</p>
            </section>
            <section
              className={`text-[#F9FAFB] text-6xl font-bold ${fontMono.style}`}
            >
              <p className="text-8xl">{minutes}</p>
              <p className="text-5xl">MINUTES</p>
            </section>
            <section
              className={`text-[#F9FAFB] text-6xl font-bold ${fontMono.style}`}
            >
              <p className="text-8xl">{seconds}</p>
              <p className="text-5xl">SECONDS</p>
            </section>
          </div>
        </div>
        <Button
          className="text-5xl px-10 py-12 bg-[#0D1742] border border-4 border-white text-[#F9FAFB]"
          size="lg"
        >
          Join us here
        </Button>
      </div>
    </div>
  );
}
