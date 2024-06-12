"use client";

import Image from "next/image";
import { CalendarEvent, User, BrandApplePodcast, ReportSearch } from "tabler-icons-react";
import { useState } from 'react';


const ProjectGeneral = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="flex items-center justify-center w-full mt-10">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-center w-full mx-auto">
                    <div className="flex items-center w-1/3">
                        <div className="h-4 w-4 bg-ft-primary-blue rounded-full"></div>
                        <div className="border-t bg-ft-primary-blue flex-grow h-1"></div>
                    </div>
                    <div className="flex w-1/3 ">
                        <h2 className="text-ft-primary-yellow mx-auto">Projects</h2>
                    </div>
                    <div className="flex items-center w-1/3">
                        <div className="border-t bg-ft-primary-blue flex-grow h-1"></div>
                        <div className="h-4 w-4 bg-ft-primary-blue rounded-full"></div>
                    </div>
                </div>
                <div className="flex w-full mt-6">
                    <div className="flex flex-col items-center justify-center w-4/5 mr-4">
                        <div className="flex w-[95%] bg-ft-background rounded-lg mb-8">
                            <Image width={406}
			                height={267}
			                className="rounded-lg mx-4 my-4"
			                src={"/President.jpg"}
			                alt=""
			                />
                            <div className="mt-4 w-[58%]">
                                <h2 className="text-[24px]">This is our president</h2>
                                <div className="flex w-full">
                                    <div className="flex justify-center items-center mr-16">
                                        <CalendarEvent className="text-ft-primary-yellow w-8 h-8 mr-2"></CalendarEvent>
                                        <p>28/10/2024</p>
                                    </div>
                                    <div className="flex justify-center items-center mr-16">
                                        <User className="text-ft-primary-yellow w-8 h-8 mr-2"></User>
                                        <p>Dao Duy</p>
                                    </div>
                                    <div className="flex justify-center items-center mr-16">
                                        <BrandApplePodcast className="text-ft-primary-yellow w-8 h-8 mr-2"></BrandApplePodcast>
                                        <p>28/10/2024</p>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				                 	Cras viverra viverra eros, eu euismod arcu dignissim quis.
			                  		Phasellus sollicitudin
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				                 	Cras viverra viverra eros, eu euismod arcu dignissim quis.
			                  		Phasellus sollicitudin
                                    </p>
                                </div>
                                <div className="mt-auto flex justify-end">
                                    <button className="bg-ft-primary-yellow text-white rounded-lg px-4 py-2 mb-4 mr-4">
                                        More details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[95%] bg-ft-background rounded-lg mb-8">
                            <Image width={406}
			                height={267}
			                className="rounded-lg mx-4 my-4"
			                src={"/President.jpg"}
			                alt=""
			                />
                            <div className="mt-4 w-[58%]">
                                <h2 className="text-[24px]">This is our president</h2>
                                <div className="flex w-full">
                                    <div className="flex justify-center items-center mr-16">
                                        <CalendarEvent className="text-ft-primary-yellow w-8 h-8 mr-2"></CalendarEvent>
                                        <p>28/10/2024</p>
                                    </div>
                                    <div className="flex justify-center items-center mr-16">
                                        <User className="text-ft-primary-yellow w-8 h-8 mr-2"></User>
                                        <p>Dao Duy</p>
                                    </div>
                                    <div className="flex justify-center items-center mr-16">
                                        <ReportSearch className="text-ft-primary-yellow w-8 h-8 mr-2"></ReportSearch>
                                        <p>28/10/2024</p>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				                 	Cras viverra viverra eros, eu euismod arcu dignissim quis.
			                  		Phasellus sollicitudin
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				                 	Cras viverra viverra eros, eu euismod arcu dignissim quis.
			                  		Phasellus sollicitudin
                                    </p>
                                </div>
                                <div className="mt-auto flex justify-end">
                                    <button className="bg-ft-primary-yellow text-white rounded-lg px-4 py-2 mb-4 mr-4">
                                        More details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/5 mr-4">
                        <div>
                            <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full h-fit px-4 py-2 rounded-lg border border-gray-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-ft-primary-blue"
                            placeholder="Search..."
                            />
                        </div>
                        <div className="mt-4 bg-ft-background px-2 py-2 text-[24px]">
                            <p>Project filter:</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProjectGeneral;