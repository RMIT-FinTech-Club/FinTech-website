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
				"With an unquenchable thirst for coding, fixing bugs, and …, the Technology Department represents the second pillar of our organization. We are responsible for the development of the club’s technical projects, including the SnapID Computer Vision Project, RBPC Website, and currently the FinTech Club Website Project. Beyond practical coding projects, we also provide internal training & sharing sessions, public workshops, mentoring initiatives, and memorable bonding activities for Tech Dept. members. Our members receive the full package of skill improvement, industry connections, and a belonging environment.",
			imageUrl: "url('Hr.png')",
			background: "url('Background.png')",
		},
		business: {
			name: "BUSINESS DEPARTMENT",
			description:
				"The Business Department is regarded as the cornerstone of FinTech Club’s unequivocal success and rapid development. This curiosity-driven Dept. is actively involved in researching, brainstorming and collaborating with others to generate academic values, operation frameworks and awesome activities related to the Finance, Business and Technology space. More specifically, Business members are involved in curating internal skill training, knowledge workshops, hold meetings to evaluate working processes, propose toolkits, and composing well-researched articles on Financial Technology news and trends to educate members, and further engage the external community to our core disciplines!",
			imageUrl: "url('Hr.png')",
			background: "url('Background.png')",
		},
		humanResources: {
			name: "HR DEPARTMENT",
			description:
				"What is a club, without its people? Where would the club’s fun and desirability be, without its culture? That is where the Human Resources Department comes in. HR is in charge of organizing the club’s internal bonding activities, the FinTech Olympics, Newbies Orientation Day, End of Semester Award Ceremony, and the FinTech Field Trip – in addition to ensuring member well-being, safety and connection via the HR Committee. The HR Department consists of some of the kindest, most caring, most enthusiastic members in FTC. So, if you want to be a part of this lovely community, join the HR Dept.!",
			imageUrl: "url('Hr.png')",
			background: "url('Background.png')",
		},
		marketing: {
			name: "MARKETING DEPARTMENT",
			description:
				"With a creative and expressive mindset, the Marketing Department is accountable for maintaining and spreading the digital presence of the club’s story and mission. Through various media projects, collaborative teams, adventurous campaigns, the Marketing Dept. never failed to disappoint in generating the most engaging and visually appealing content to hook the eyes of curious FinTech Club followers! So, you want to express yourself, unleash your creativity, unbound your imagination? Join the Marketing Dept. to help us bolster our club presence, and fulfill your creative interests!",
			imageUrl: "url('Hr.png')",
			background: "url('Background.png')",
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
			<div className="flex flex-col lg:items-start items-center p-8 bg-opacity-50 z-10 mt-10 md:mt-0 lg:w-3/5">
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
