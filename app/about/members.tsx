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
	// 	document.body.style.overflowX = "hidden";
	// 	document.body.style.overflowY = "hidden";
	// 	return () => {
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
			{/* Right FinTech Bear Decoration */}
			{/* <img src="./FinTechBear.svg" alt="FinTech Bear" className="absolute right-0 top-1/2 transform translate-y-[-50%] transform translate-x-[50%] w-[500px] h-[500px] invisible xl:visible" /> */}
			{/* Below FinTech Bear Decoration  */}
			{/* <img src="./FinTechBear.svg" alt="FinTech Bear" className="absolute bottom-0 left-0 w-[500px] h-[500px] rotate-[40deg] translate-y-1/2 -translate-x-1/2 invisible xl:visible" /> */}
		</div>
	);
};

export default Members;
