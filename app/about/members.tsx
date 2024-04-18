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
	// 	const resizeHandler = () => {
	// 		if (window.innerWidth >= 1920) {
	// 			document.body.style.overflowX = "hidden";
	// 		} else {
	// 			document.body.style.overflowX = "auto";
	// 		}
	// 	};
	
	// 	document.body.style.maxWidth = "1920px";
	// 	document.body.style.overflowX = "hidden";
	// 	window.addEventListener("resize", resizeHandler);
	
	// 	return () => {
	// 		window.removeEventListener("resize", resizeHandler);
	// 		document.body.style.overflowX = "auto";
	// 		document.body.style.overflowY = "auto";
	// 	};
	// }, []);

	useEffect(() => {
		document.body.style.overflowX = "hidden";

		return() => {
			document.body.style.overflowX = "auto";
		};
	}, [])

	return (
		<div className="flex flex-col gap-8 relative items-center">
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
			<div className="absolute top-1/2 left-0 invisible xl:visible transform xl:-translate-x-24 2xl:-translate-x-52">
				<div className="absolute w-16 h-16 2xl:w-24 2xl:h-24 rounded-full bg-ft-primary-blue-500 transform xl:-translate-x-1/3 2xl:-translate-x-3/4"></div>
				<div className="absolute w-16 h-16 2xl:w-24 2xl:h-24 rounded-full bg-ft-primary-blue-500 transform xl:-translate-y-20 2xl:-translate-x-1/3 2xl:-translate-y-36"></div>
				<div className="absolute w-16 h-16 2xl:w-24 2xl:h-24 rounded-full bg-[#c9d6ea] transform xl:-translate-x-2/3 xl:-translate-y-28 2xl:-translate-x-24 2xl:-translate-y-44"></div>
				<div className="absolute w-3 h-3 2xl:w-4 2xl:h-4 rounded-full bg-ft-primary-blue-500 transform xl:translate-x-full xl:translate-y-24 2xl:-translate-x-2/3 2xl:translate-y-36"></div>
			</div>
			{/* Below Eclipses Decoration  */}
			<div className="absolute bottom-0 right-0 invisible xl:visible transform xl:-translate-y-8 xl:-translate-x-1/2 2xl:translate-y-16 2xl:translate-x-16">
				<div className="absolute w-16 h-16 2xl:w-24 2xl:h-24 rounded-full bg-ft-primary-yellow-500 transform xl:translate-x-24 xl:-translate-y-6 2xl:translate-x-44"></div>
				<div className="w-16 h-16 2xl:w-24 2xl:h-24 rounded-full bg-ft-primary-blue-500 transform xl:-translate-x-12 xl:-translate-y-6 2xl:-translate-x-12"></div>
				<div className="absolute w-16 h-16 2xl:w-24 2xl:h-24 rounded-full bg-ft-primary-blue-500 transform xl:translate-x-6 xl:-translate-y-4 2xl:translate-x-12 2xl:translate-y-4"></div>
				<div className="absolute w-16 h-16 2xl:w-24 2xl:h-24 rounded-full bg-[#c9d6ea] transform xl:translate-x-16 xl:-translate-y-8 2xl:translate-x-32 2xl:-translate-y-4"></div>
				<div className="absolute w-3 h-3 2xl:w-4 2xl:h-4 rounded-full bg-ft-primary-blue-500 transform xl:-translate-x-24 xl:-translate-y-16 2xl:-translate-x-24 2xl:-translate-y-20"></div>
				<div className="absolute w-3 h-3 2xl:w-4 2xl:h-4 rounded-full bg-ft-primary-yellow-500 transform xl:translate-x-32 xl:-translate-y-44 2xl:translate-x-52 2xl:-translate-y-64"></div>
			</div>
			{/* Right FinTech Bear Decoration */}
			<img src="./FinTechBear.svg" alt="FinTech Bear" className="absolute right-0 top-1/2 rotate-[-40deg] transform xl:translate-x-64 xl:-translate-y-1/2 2xl:-translate-y-1/2 2xl:translate-x-[30rem] w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] invisible xl:visible" />
			{/* Below FinTech Bear Decoration  */}
			<img src="./FinTechBear.svg" alt="FinTech Bear" className="absolute bottom-0 left-0 w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] xl:-translate-x-8 xl:translate-y-1/2 2xl:-translate-x-1/2 2xl:translate-y-full invisible xl:visible" />
		</div>
	);
};

export default Members;
