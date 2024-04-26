"use client";
import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Department = () => {
    // Manage the current department
    const [department, setDepartment] = useState({
        name: "HR DEPARTMENT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        imageUrl: "url('Hr.png')",
        background: "url('Background.png')"
    });

    // Handler to change the department
    const handleDepartmentChange = (name: string) => {
        const departments = {
            "Technology": {
                name: "TECHNOLOGY DEPARTMENT",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                imageUrl: "bg-gray-300",
                background: "none"
            },
            "Business": {
                name: "BUSINESS DEPARTMENT",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                imageUrl: "bg-gray-300",
                background: "none"
            },
            "Human Resources": {
                name: "HR DEPARTMENT",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                imageUrl: "url('Hr.png')",
                background: "url('Background.png')"
            },
            "Marketing": {
                name: "MARKETING DEPARTMENT",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                imageUrl: "bg-gray-300",
                background: "none"
            }
        };
        setDepartment(departments[name] || departments["Human Resources"]);
    };

    const responsive = {
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2
        }
    };

    const isImageUrl = department.imageUrl.includes('url'); // Check if a Phuc dua image zo or not

    return (
        <section className="relative flex flex-col w-full max-h-fit justify-center items-center md:flex-row px-side-margin-mobile md:px-side-margin" style={{
            backgroundImage: department.background ? `url(${department.background.replace("url('", "").replace("')", "")})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {/* Department background image */}


            {/* Mobile buttons bar */}
            <div className="flex md:hidden justify-center items-center w-full p-2">
                    <button className="text-ft-heading-3 button text-ft-text-bright hover:bg-ft-primary-yellow-700 hover:rounded-medium p-2 transition-all duration-300 ease-in-out" onClick={() => handleDepartmentChange("Technology")}>TECHNOLOGY</button>
                    <button className="text-ft-heading-3 button text-ft-text-bright hover:bg-ft-primary-yellow-700 hover:rounded-medium p-2 transition-all duration-300 ease-in-out" onClick={() => handleDepartmentChange("Business")}>BUSINESS</button>
                    <button className="text-ft-heading-3 button text-ft-text-bright hover:bg-ft-primary-yellow-700 hover:rounded-medium p-2 transition-all duration-300 ease-in-out" onClick={() => handleDepartmentChange("Human Resources")}>HUMAN RESOURCES</button>
                    <button className="text-ft-heading-3 button text-ft-text-bright hover:bg-ft-primary-yellow-700 hover:rounded-medium p-2 transition-all duration-300 ease-in-out" onClick={() => handleDepartmentChange("Marketing")}>MARKETING</button>
            </div>

            {/* Department content */}
            <div className="flex flex-col md:items-start items-center p-8 bg-opacity-50 z-10 mt-24 md:mt-0" style={{ flex: 1 }}>
                {/* These elements will be pushed down on mobile due to the absolute positioning of the buttons bar */}
                <h4 className="font-bold text-ft-primary-yellow break-all">{department.name}</h4>
                <h4 className="text-ft-text-bright mt-4">BE ONE OF US!</h4>
                <p className="ft-body-2 text-ft-text-bright max-w-md mt-6 text-center md:text-left">{department.description}</p>

                {/* Desktop buttons */}
                <div className="hidden md:flex mt-6">
                    <button className="button text-ft-text-bright hover:bg-ft-primary-yellow-700 hover:rounded-medium p-2 transition-all duration-300 ease-in-out" onClick={() => handleDepartmentChange("Technology")}>TECHNOLOGY</button>
                    <button className="button text-ft-text-bright hover:bg-ft-primary-yellow-700 hover:rounded-medium p-2 transition-all duration-300 ease-in-out" onClick={() => handleDepartmentChange("Business")}>BUSINESS</button>
                    <button className="button text-ft-text-bright hover:bg-ft-primary-yellow-700 hover:rounded-medium p-2 transition-all duration-300 ease-in-out" onClick={() => handleDepartmentChange("Human Resources")}>HUMAN RESOURCES</button>
                    <button className="button text-ft-text-bright hover:bg-ft-primary-yellow-700 hover:rounded-medium p-2 transition-all duration-300 ease-in-out" onClick={() => handleDepartmentChange("Marketing")}>MARKETING</button>
                </div>
            </div>

            {/* Department right image */}
            <div className="relative w-full h-full md:h-5/6 md:w-2/5 flex justify-center items-center">
                {isImageUrl ? (
                    <Image className="object-cover md:h-full md:w-full"
                        src={department.imageUrl.replace("url('", "").replace("')", "")}
                        // Remove url() wrapper, NextUI Image component doesn't support it :<, this will change "url('image.png')" to "image.png"
                        alt={`${department.name} Image`}
                    />
                ) : (
                    <div className={`absolute inset-0 ${department.imageUrl}`} style={{ width: '100%', height: '100%' }}></div>
                )}
            </div>
        </section>
    );
};

export default Department;


