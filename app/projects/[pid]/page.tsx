import { Avatar } from "@nextui-org/react";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { IconLink } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const ProjectDetail = () => {
	return (
		<section className="md:mt-16 flex flex-col justify-start p-10">
			<header className="text-center md:text-start">
				<h1>Global trading</h1>
			</header>
			<main className="md:mt-6">
				<div className="grid grid-cols-12 md:my-8 my-3 gap-6 grid-flow-row">
					<div className="my-auto md:col-span-1 col-span-3">
						<Avatar
							src="https://i.pravatar.cc/150?u=a04258114e29026302d"
							className=" w-20 h-20"
						/>
					</div>
					<div className=" place-self-start justify-self-start md:col-span-7 col-span-9 my-auto">
						<h6 className=" font-bold">
							Lorem ipsum dolor sit amet
						</h6>
						<h6 className="">Lorem ipsum dolor sit amet</h6>
					</div>
					<Link
						className="md:justify-self-end md:col-span-4 col-span-12 my-auto md:w-fit w-full"
						// can pass the link of the document on amazon s3
						href="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/UML+class+-+application+architecture.pdf"
						target="_blank"
						rel="noreferrer"
					>
						<button
							type="button"
							className="py-4 items-center justify-center flex flex-grow my-auto px-6 bg-blue-500 rounded-full drop-shadow-lg text-xl text-white duration-300 hover:bg-blue-700 active:bg-blue-900"
						>
							<IconLink
								stroke={2}
								className="basis-1/4 mr-2 mx-auto"
							/>
							<p className="md:w-fit text-2xl text-nowrap ">
								Full access
							</p>
						</button>
					</Link>
				</div>
				<Card className=" max-w-full my-4">
					<CardBody>
						<p>
							Make beautiful websites regardless of your design
							experience.
						</p>
					</CardBody>
				</Card>
				<p>
					The FinTech Forum 2024 is set to be the most dynamic student
					driven FinTech event, with a mission to educate and immerse
					students into the various aspects of the FinTech Universe!
					As we begin to officially launch the event, we would like to
					acknowledge the contributions made by our esteemed Sponsors
					that have made our event possible.
				</p>
				<Divider className="my-6 bg-black" />
				<div className=" grid grid-cols-2">
					<div>
						<h5>Lorem ipsum dolor sit amet</h5>
					</div>
					<div className=" grid grid-cols-2 grid-rows-2 text-center gap-6">
						<div className="flex flex-row">
							<Avatar isBordered radius="sm" src="" />
							<p className=" ml-3">lorem</p>
						</div>
						<div className="flex flex-row">
							<Avatar isBordered radius="sm" src="" />
							<p className=" ml-3">lorem</p>
						</div>
						<div className="flex flex-row">
							<Avatar isBordered radius="sm" src="" />
							<p className=" ml-3">lorem</p>
						</div>
						<div className="flex flex-row">
							<Avatar isBordered radius="sm" src="" />
							<p className=" ml-3">lorem</p>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default ProjectDetail;
