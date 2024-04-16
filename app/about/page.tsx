import { Button } from "@nextui-org/button";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
} from "@nextui-org/react";
// import Image from "next/image";
import React from "react";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
// import "../styles/globals.css"

const About = () => {
	return (
		<section className="mx-side-margin-mobile my-4 h-fit mobile:mx-side-margin">
			<header className="grid grid-cols-4 gap-4 relative mx-auto">
				<div className="line">
					<svg width="100%" height="100%" aria-labelledby="Test">
						<title>I'm a circle</title>
						<circle cx="4%" cy="85" r="8" fill="#2C305F" />
						<line
							x1="4%"
							y1="85"
							x2="100%"
							y2="85"
							stroke="#2C305F"
							strokeWidth="2"
							className=" bg-ft-primary-blue-500"
						/>
					</svg>
				</div>
				<div className="col-span-4 relative flex flex-col text-center mobile:col-span-2">
					<h3 className=" text-xl uppercase font-bold mobile:text-2xl">
						OUR EXECUTIVE BOARD
					</h3>
					<h1 className=" font-bold text-3xl text-ft-primary-yellow-500 drop-shadow-none mobile:text-5xl mobile:drop-shadow-3xl">
						<span className=" text-ft-primary-blue-500">
							Meet the
						</span>{" "}
						Fintech
					</h1>
					<h1 className=" text-3xl font-bold text-ft-secondary-blue drop-shadow-none mobile:text-5xl mobile:drop-shadow-3xl">
						Executive Board
					</h1>
					<div className="">
						<p className=" text-base text-ft-text-dark my-4 mx-6 mobile:text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras viverra viverra eros, eu euismod arcu
							dignissim quis. Phasellus sollicitudin
						</p>
					</div>
				</div>
				<div className="line">
					<svg width="100%" height="100%" aria-labelledby="Test">
						<title>I'm a circle</title>
						<circle cx="96%" cy="85" r="8" fill="#2C305F" />
						<line
							x1="0"
							y1="85"
							x2="96%"
							y2="85"
							stroke="#2C305F"
							strokeWidth="2"
							className=" bg-ft-primary-blue-500"
						/>
					</svg>
				</div>
			</header>
			<div className="mascot absolute z-0 top-1/4 -left-5">
				<Image
					src="MascotFront.svg"
					alt="Mascot Decoration"
					className=""
					width={300}
				/>
			</div>
			<div className="mascot absolute z-0 top-1/4 right-0">
				<Image
					src="MascotSide.svg"
					alt="Mascot Decoration"
					className=""
					width={300}
				/>
			</div>
			<div className="bubble absolute z-0 -bottom-14 left-0">
				<Image
					src="LeftDecoration.svg"
					alt="Mascot Decoration"
					className=""
					width={200}
				/>
			</div>
			<div className="bubble absolute z-0 -bottom-14 right-0">
				<Image
					src="RightDecoration.svg"
					alt="Mascot Decoration"
					className=""
					width={260}
				/>
			</div>
			{/* <main className=" mx-side-margin "> */}
			<main className="flex mobile:h-5/6">
				<div className="flex flex-col gap-4 my-auto">
					<div className="flex flex-col gap-4 w-full mobile:flex-row mobile:w-8/12 mx-auto">
						<Card className="card" isFooterBlurred shadow="lg">
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
						<Card className="card" isFooterBlurred shadow="lg">
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
						<Card className="card" isFooterBlurred shadow="lg">
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
					</div>
					<div className="flex flex-col gap-4 w-full mobile:flex-row mobile:w-10/12 mx-auto">
						<Card
							className="card border-4 border-[#545ce1]"
							shadow="lg"
							isFooterBlurred
						>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
						<Card
							className="card border-4 border-[#26d00f]"
							shadow="lg"
							isFooterBlurred
						>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
						<Card
							className="card border-4 border-[#d6302f]"
							shadow="lg"
							isFooterBlurred
						>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
						<Card
							className="card border-4 border-[#da840b]"
							shadow="lg"
							isFooterBlurred
						>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
					</div>
					<div className="flex flex-col gap-4 w-full mobile:flex-row mx-auto">
						<Card
							className="card border-5 border-[#545ce1]"
							shadow="lg"
							isFooterBlurred
						>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
						<Card
							className="card border-4 border-[#545ce1]"
							shadow="lg"
							isFooterBlurred
						>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>

						<Card
							className="card border-4 border-[#26d00f]"
							shadow="lg"
							isFooterBlurred
						>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
						<Card
							className="card border-4 border-[#d6302f]"
							shadow="lg"
							isFooterBlurred
						>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
						<Card
							className="card border-4 border-[#da840b]"
							shadow="lg"
							isFooterBlurred
						>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="President.jpg"
								radius="none"
								isZoomed
							/>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-white/80">
									Dung Nguyen
								</p>
								<p className="text-tiny text-white/80">
									President
								</p>
							</CardFooter>
						</Card>
					</div>
				</div>
			</main>
		</section>
	);
};

export default About;
