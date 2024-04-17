"use client";

import { avatar } from "@nextui-org/react";
import clsx from "clsx";
import type React from "react";
import { useState, useEffect } from "react";
import type ClubMember from "../components/clubMember";
import HeaderTitlePage from "../components/headerTitlePage";
import MemberAvatar from "../components/memberCard";
import MemberFilter from "../components/memberFilter";
import MemberList from "../components/memberList";

const clubMembers: ClubMember[] = [
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "John Smith", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Smith", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Marketing" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Marketing",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Marketing",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Marketing" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Marketing" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Marketing",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Marketing",
	},
	{
		name: "John Doe",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "Jane Doe",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "John Doe",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "Jane Doe",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "John Doe",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "Jane Doe",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Technology" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Technology" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Marketing" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Technology" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Marketing" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Technology" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Marketing" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Technology" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Marketing" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Human Resources",
	},
	{
		name: "Jane Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
	{ name: "John Doe", avatarSrc: "/RiceSrc01.png", department: "Business" },
	{ name: "Jane Doe", avatarSrc: "/RiceSrc01.png", department: "Technology" },
	{
		name: "John Smith",
		avatarSrc: "/RiceSrc01.png",
		department: "Technology",
	},
];

const Members: React.FC = () => {
	const departments = Array.from(
		new Set(clubMembers.map((member) => member.department)),
	);

	const [filteredMember, setFilteredMember] =
		useState<ClubMember[]>(clubMembers);

	const handleFilterChange = (department: string | null) => {
		if (department) {
			const filteredMembers = clubMembers.filter(
				(member) => member.department === department,
			);
			setFilteredMember(filteredMembers);
		} else {
			setFilteredMember(clubMembers);
		}
	};

	// useEffect(() => {
	// 	document.body.style.maxWidth = "1920px";
	// 	document.body.style.overflowX = "hidden";
	// 	window.addEventListener("resize", () => {
	// 		if (window.innerWidth === 1920 && window.innerHeight === 1080) {
	// 			document.body.style.overflowX = "hidden";
	// 		} else {
	// 			document.body.style.overflowX = "auto";
	// 		}
	// 	});
	// 	return () => {
	// 		window.removeEventListener("resize", () => {
	// 			if (window.innerWidth === 1920 && window.innerHeight === 1080) {
	// 				document.body.style.overflowX = "hidden";
	// 			} else {
	// 				document.body.style.overflowX = "auto";
	// 			}
	// 		});
	// 		document.body.style.overflowX = "auto";
	// 		document.body.style.overflowY = "auto";
	// 	};
	// }, []);

	return (
		<div className="flex flex-col gap-8 relative w-full items-center">
			<HeaderTitlePage text="members" />
			<div className="flex justify-center">
				<MemberFilter
					departments={departments.filter(Boolean) as string[]}
					onFilterChange={handleFilterChange}
				/>
			</div>
			<div className="flex flex-wrap justify-center">
				<MemberList members={filteredMember} itemsPerPage={10} />
			</div>
			{/* Left Eclipses Decoration  */}
			<div className="absolute top-1/2 left-0 invisible 2xl:visible transform -translate-x-12">
				<div className="absolute w-24 h-24 rounded-full bg-ft-primary-blue-500 transform -translate-x-3/4"></div>
				<div className="absolute w-24 h-24 rounded-full bg-ft-primary-blue-500 transform -translate-x-1/3 -translate-y-36"></div>
				<div className="absolute w-24 h-24 rounded-full bg-[#c9d6ea] transform -translate-x-24 -translate-y-44"></div>
				<div className="absolute w-4 h-4 rounded-full bg-ft-primary-blue-500 transform -translate-x-2/3 translate-y-36"></div>
			</div>
			{/* Below Eclipses Decoration  */}
			<div className="absolute bottom-0 right-0 invisible 2xl:visible transform translate-y-16 -translate-x-24">
				<div className="absolute w-24 h-24 rounded-full bg-ft-primary-yellow-500 transform translate-x-44"></div>
				<div className="w-24 h-24 rounded-full bg-ft-primary-blue-500 transform -translate-x-12"></div>
				<div className="absolute w-24 h-24 rounded-full bg-ft-primary-blue-500 transform translate-x-12 translate-y-4"></div>
				<div className="absolute w-24 h-24 rounded-full bg-[#c9d6ea] transform translate-x-32 -translate-y-4"></div>
				<div className="absolute w-4 h-4 rounded-full bg-ft-primary-blue-500 transform -translate-x-32 -translate-y-20"></div>
				<div className="absolute w-4 h-4 rounded-full bg-ft-primary-yellow-500 transform translate-x-52 -translate-y-64"></div>
			</div>
			{/* Right FinTech Bear Decoration */}
			<img src="./FinTechBear.svg" alt="FinTech Bear" className="absolute right-0 top-1/2 rotate-[-40deg] transform -translate-y-1/2 translate-x-3/4 w-[400px] h-[400px] invisible 2xl:visible" />
			{/* Below FinTech Bear Decoration  */}
			<img src="./FinTechBear.svg" alt="FinTech Bear" className="absolute bottom-0 left-0 w-[400px] h-[400px] translate-y-full invisible 2xl:visible" />
		</div>
	);
};

export default Members;
