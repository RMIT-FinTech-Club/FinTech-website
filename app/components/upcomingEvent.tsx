"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardEvent from "./CardEvent";

const settings = {
    className: "w-full",
    dots: false,
    infinite: true,
    autoplay: true,
    autoSpeed: 1000,
    dragagable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
};

const UpcomingEvent = () => {
    return (
        <section className="flex flex-col px-side-margin gap-5 w-screen py-2 lg:py-12">
            <h1 className="text-3xl font-bold mx-auto text-ft-primary-blue">
                PROJECTS
            </h1>
            <section className="mx-auto overflow-hidden w-full">
                <section className="flex flex-row justify-between items-center w-full mb-5 gap-4">
                    <hr className="w-1/3  border-b-2 border-solid border-ft-primary-yellow md:hidden" />
                    <div className="text-ft-primary-yellow text-2xl font-semibold">
                        2024
                    </div>
                    <hr className="w-1/3  border-b-2 border-solid border-ft-primary-yellow  md:w-full" />
                </section>
                <Slider {...settings}>
                    {Array.from({ length: 5 }).map((_, index) => {
                        return (
                            <CardEvent
                                key={index}
                                eventName="Fintech Forum 2024"
                                location="Ohio"
                                title="Lorem Ispum"
                                detail="Lorem ipsum dolor sit amet, consectetur ..."
                                timeOnHour=" 24:00 - 25:00"
                                timeOnDay="30"
                                timeOnMonth="Feb"
                            />
                        )
                    })}
                </Slider>
            </section>
        </section>
    );
};

export default UpcomingEvent;
