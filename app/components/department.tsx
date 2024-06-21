"use client";
import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";

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

	return (
		<section
			className="relative flex flex-col-reverse w-full max-h-fit justify-center items-center lg:flex-row"
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
			<div className="flex lg:hidden justify-center items-center w-full p-2 ">
				<Button
					className="text-white"
					onClick={() => setDepartment(departments.technology)}
					variant="light"
				>
					TECHNOLOGY
				</Button>
				<Button
					className="text-white"
					onClick={() => setDepartment(departments.business)}
					variant="light"
				>
					BUSINESS
				</Button>
			</div>

			{/* Department content */}
			<div
				className="flex flex-col lg:items-start items-center p-8 bg-opacity-50 z-10 mt-10 md:mt-0"
				style={{ flex: 1 }}
			>
				{/* These elements will be pushed down on mobile due to the absolute positioning of the buttons bar */}
				<h4 className="font-bold text-ft-primary-yellow text-wrap">
					{department.name}
				</h4>
				<h4 className="text-ft-text-bright mt-4">BE ONE OF US!</h4>
				<p className="ft-body-2 text-ft-text-bright max-w-lg mt-6 text-center md:text-left">
					{department.description}
				</p>

				{/* Desktop buttons */}
				<div className="hidden lg:flex mt-6 gap-4 ">
					<Button
						className="text-white"
						onClick={() => setDepartment(departments.technology)}
						variant="light"
					>
						TECHNOLOGY
					</Button>
					<Button
						className="text-white"
						onClick={() => setDepartment(departments.business)}
						variant="light"
					>
						BUSINESS
					</Button>
					<Button
						className="text-white"
						onClick={() =>
							setDepartment(departments.humanResources)
						}
						variant="light"
					>
						HUMAN RESOURCES
					</Button>
					<Button
						className="text-white"
						onClick={() => setDepartment(departments.marketing)}
						variant="light"
					>
						MARKETING
					</Button>
				</div>
			</div>

			{/* Department right image */}
			<div className="relative h-full w-96 lg:min-w-60 lg:max-w-96 lg:h-5/6 md:w-2/5 flex justify-center items-center">
				<Image
					className="object-cover lg:h-full md:w-full"
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
