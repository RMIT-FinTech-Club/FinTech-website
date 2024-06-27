"use client";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Link from "next/link";

const Member = () => {
    const imageUrl = "HallOfFame-Background.svg";
    return (
        <section
            className=" relative bg-cover bg-center h-fit pb-10 px-side-margin-mobile md:px-side-margin md:pb-10"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {/* <div className="absolute right-10 bottom-0 z-0 max-w-44 md:max-w-96">
				<Image
					src="HallOfFame-FrontMasCot.svg"
					radius="none"
					id="HallOfFame-MasCot"
					className="mascot"
				/>
			</div> */}
            <div className="absolute right-0 md:right-12 top-10 md:top-4 z-10 max-w-24 md:max-w-96">
                <Image src="HallOfFame-ClubLogo.svg" radius="none" />
            </div>
            <header className="flex z-10 mt-0 -mx-side-margin-mobile md:mt-10 md:-mx-side-margin">
                <svg width="10%" height="100%" id="left-bar" aria-label="Line">
                    <title> Line bar </title>
                    <line
                        x1="0%"
                        y1="80"
                        x2="100%"
                        y2="80"
                        stroke="#FFFFFF"
                        strokeWidth="110"
                        id="white-line"
                    />
                    <line
                        x1="0"
                        y1="80"
                        x2="100%"
                        y2="80"
                        stroke="#DCB968"
                        strokeWidth="90"
                        id="yellow-line"
                    />
                </svg>
                <div className=" basis-2/12 w-full mx-3 md:mx-5 text-ft-text-bright content-center">
                    <h1>HALL</h1>
                    <div className="flex flex-row">
                        <h4 className="-mt-2 md:mt-7">OF</h4>
                        <h1 className="-mt-3 md:mt-10">FAME</h1>
                    </div>
                </div>
                <svg className=" basis-9/12" height="80%" aria-label="Line">
                    <title> Line bar </title>
                    <line
                        x1="100%"
                        y1="80"
                        x2="0%"
                        y2="80"
                        stroke="#FFFFFF"
                        strokeWidth="110"
                        id="white-line"
                    />
                    <line
                        x1="100%"
                        y1="80"
                        x2="0%"
                        y2="80"
                        stroke="#DCB968"
                        strokeWidth="90"
                        id="yellow-line"
                    />
                </svg>
            </header>
            <main className=" grid grid-cols-2 gap-8 mt-0  md:grid-cols-3 lg:grid-cols-4 md:gap-10 md:my-14">
                {/* 
                    WARNING: length of 4 is hardcoded for placeholder data
                    TODO: replace the placeholder with actual data 
                    */}
                {Array.from({ length: 8 }).map((_, index) => (
                    <Link
                        key={index}
                        href={`/hall-of-fame/6675667ae6b4538e26bec36d`}
                    >
                        <Card className="card h-full" isFooterBlurred>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="President.jpg"
                                radius="none"
                                isZoomed
                            />
                            <CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
                                <p className=" text-base text-ft-primary-yellow-500">
                                    Dung Nguyen
                                </p>
                                <p className="text-tiny text-ft-text-bright">
                                    President
                                </p>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </main>
        </section>
    );
};

export default Member;