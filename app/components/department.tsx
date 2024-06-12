"use client";
import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Department = () => {
	type Department =
		| "technology"
		| "business"
		| "humanResources"
		| "marketing";

	type DepartmentInfo = {
		name: string;
		description: string;
		imageUrl: string;
		background: string;
	};

	const departments: Record<Department, DepartmentInfo> = {
		technology: {
			name: "TECHNOLOGY DEPARTMENT",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			imageUrl: "url('Hr.png')",
			background: "none",
		},
		business: {
			name: "BUSINESS DEPARTMENT",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			imageUrl: "url('Hr.png')",
			background: "none",
		},
		humanResources: {
			name: "HR DEPARTMENT",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			imageUrl: "url('Hr.png')",
			background: "url('Background.png')",
		},
		marketing: {
			name: "MARKETING DEPARTMENT",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			imageUrl: "url('Hr.png')",
			background: "none",
		},
	};

	// Manage the current department
	const [department, setDepartment] = useState<DepartmentInfo>(
		departments.humanResources,
	);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		
	};

	return (
		<section
			className="relative flex flex-col w-full max-h-fit justify-center items-center md:flex-row px-side-margin-mobile md:px-side-margin"
			style={{
				backgroundImage: department.background
					? `url(${department.background
						.replace("url('", "")
						.replace("')", "")})`
					: "none",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Department background image */}

			{/* Mobile buttons bar */}
			<div className="flex md:hidden justify-center items-center w-full p-2">
				<Slider {...settings} className="w-80" >
					<Button
						onClick={() => setDepartment(departments.technology)}
						variant="light"
					>
						TECHNOLOGY
					</Button>
					<Button
						onClick={() => setDepartment(departments.business)}
						variant="light"
					>
						BUSINESS
					</Button>
					<Button
						onClick={() => setDepartment(departments.humanResources)}
						variant="light"
					>
						HUMAN RESOURCES
					</Button>
					<Button
						onClick={() => setDepartment(departments.marketing)}
						variant="light"
					>
						MARKETING
					</Button>
				</Slider>
			</div>

			{/* Department content */}
			<div
				className="flex flex-col md:items-start items-center p-8 bg-opacity-50 z-10 md:mt-0"
				style={{ flex: 1 }}
			>
				{/* These elements will be pushed down on mobile due to the absolute positioning of the buttons bar */}
				<h4 className="font-bold text-ft-primary-yellow text-wrap">
					{department.name}
				</h4>
				<h4 className="text-ft-text-bright mt-4">BE ONE OF US!</h4>
				<p className="ft-body-2 text-ft-text-bright max-w-md mt-6 text-center md:text-left">
					{department.description}
				</p>

				{/* Desktop buttons */}
				<div className="hidden md:flex mt-6 gap-4">
					<Button
						onClick={() => setDepartment(departments.technology)}
						variant="light"
					>
						TECHNOLOGY
					</Button>
					<Button
						onClick={() => setDepartment(departments.business)}
						variant="light"
					>
						BUSINESS
					</Button>
					<Button
						onClick={() =>
							setDepartment(departments.humanResources)
						}
						variant="light"
					>
						HUMAN RESOURCES
					</Button>
					<Button
						onClick={() => setDepartment(departments.marketing)}
						variant="light"
					>
						MARKETING
					</Button>
				</div>
			</div>

			{/* Department right image */}
			<div className="relative w-full h-full md:h-5/6 md:w-2/5 flex justify-center items-center">
				<Image
					className="object-cover md:h-full md:w-full"
					src={department.imageUrl
						.replace("url('", "")
						.replace("')", "")}
					// Remove url() wrapper, NextUI Image component doesn't support it :<, this will change "url('image.png')" to "image.png"
					alt={`${department.name} Image`}
				/>
			</div>
		</section>
	);
};

export default Department;
