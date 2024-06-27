"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const BondingActivities = () => {
    const [scrollClass, setScrollClass] = useState('');

    useEffect(() => {
        const updateScrollClass = () => {
            if (window.innerWidth >= 768) {
                setScrollClass('horizontal-scroll');
            } else {
                setScrollClass('');
            }
        };

        updateScrollClass(); // Set the class initially

        window.addEventListener('resize', updateScrollClass);

        return () => {
            window.removeEventListener('resize', updateScrollClass);
        };
    }, []);

    useEffect(() => {
        const scrollContainers = document.querySelectorAll('.horizontal-scroll');

        const handleWheelScroll = (evt) => {
            // Prevent the default behavior only if horizontal scroll is desired
            if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
                evt.preventDefault();
                evt.currentTarget.scrollLeft += evt.deltaY;
            }
        };

        scrollContainers.forEach((container) => {
            container.addEventListener('wheel', handleWheelScroll);
        });

        return () => {
            scrollContainers.forEach((container) => {
                container.removeEventListener('wheel', handleWheelScroll);
            });
        };
    }, [scrollClass]);

    return (
        <>
        <h4 className="w-full text-center mt-10 text-ft-primary-blue hidden md:block">Internal Activities</h4>
        <h1 className="w-full text-center mt-10 text-ft-primary-blue block md:hidden">Internal Activities</h1>
        <div className="flex flex-col md:flex-row w-full md:justify-end items-center mb-8">
            <h5 className="text-ft-primary-yellow mr-2 hidden md:block">2023A</h5>
            <h2 className="text-ft-primary-yellow mr-2 block md:hidden">2023A</h2>
            <div className="mx-auto my-4 md:my-0 md:mx-0 w-[90%] h-1 bg-ft-primary-yellow"/>
        </div>
        <div className={`${scrollClass} md:w-[97%] w-[90%] md:ml-[3%] flex flex-col mx-auto md:mx-0 md:flex-row gap-6 md:overflow-x-auto pb-4`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>   
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
        </div>
        <div className="my-4 md:my-0 flex flex-col-reverse md:flex-row w-full items-center">
            <div className="w-[90%] h-1 bg-ft-primary-yellow"/>
            <h5 className="text-ft-primary-yellow mr-2 hidden md:block">2023B</h5>
            <h2 className="text-ft-primary-yellow mr-2 block md:hidden">2023B</h2>
        </div>
        <div className={`${scrollClass} md:w-[97%] w-[90%] flex flex-col mx-auto md:mx-0 md:flex-row gap-6 md:overflow-x-auto pb-4 mb-4`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>   
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row w-full md:justify-end items-center mb-8">
            <h5 className="text-ft-primary-yellow mr-2 hidden md:block">2023C</h5>
            <h2 className="text-ft-primary-yellow mr-2 block md:hidden">2023C</h2>
            <div className="mx-auto my-4 md:my-0 md:mx-0 w-[90%] h-1 bg-ft-primary-yellow"/>
        </div>
        <div className={`${scrollClass} md:w-[97%] w-[90%] md:ml-[3%] flex flex-col mx-auto md:mx-0 md:flex-row gap-6 md:overflow-x-auto pb-4`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>   
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
            <div className="bg-ft-background rounded-lg shadow-md overflow-hidden flex-none w-fit">
                <Image
                    width={420}
                    height={120}
                    className="rounded-lg"
                    src={"/President.jpg"}
                    alt="President"
                />
                <div className="p-4">
                    <h5 className="text-ft-primary-blue">A lot of president</h5>
                    <p>Yessir chac chan la nhu vay roi</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default BondingActivities;
