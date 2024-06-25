"use client";

import { Image } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type ClubMember from "./memberList/clubMember";
import HeaderTitlePage from "./memberList/headerTitlePage";
import MemberFilter from "./memberList/memberFilter";
import MemberList from "./memberList/memberList";

const Members: React.FC = () => {
	const [clubMembers, setClubMembers] = useState<ClubMember[]>([]);
	const [filteredMember, setFilteredMember] = useState<ClubMember[]>([]);
	const [departments, setDepartments] = useState<string[]>([]);

	useEffect(() => {
		const fetchMembers = async () => {
			try {
				const response = await axios.get("/api/v1/members");
				const members = response.data.members;
				const membersWithUuid = members.map((member: ClubMember) => ({
					...member,
					uuid: uuidv4(),
				}));
				setClubMembers(membersWithUuid);
				setFilteredMember(membersWithUuid);
				setDepartments(
					Array.from(
						new Set(
							membersWithUuid.map((member) => member.department),
						),
					),
				);
			} catch (error) {
				console.error("Error fetching members:", error);
			}
		};

		fetchMembers();
	}, []);

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

	useEffect(() => {
		document.body.style.overflowX = "hidden";

		return () => {
			document.body.style.overflowX = "auto";
		};
	}, []);

	return (
		<div className="flex flex-col gap-8 relative items-center justify-center overflow-x-hidden xl:overflow-x-visible overflow-y-hidden xl:overflow-y-visible">
			<HeaderTitlePage text="members" />
			<div className="flex justify-center">
				<MemberFilter
					departments={departments.filter(Boolean) as string[]}
					onFilterChange={handleFilterChange}
				/>
			</div>
			<div className="flex flex-wrap justify-center relative">
				<MemberList members={filteredMember} itemsPerPage={10} />
			</div>
			{/* Left Eclipses Decoration  */}
			<div className="absolute left-0 md:scale-100 scale-50 invisible xl:visible">
				<Image
					loading="lazy"
					src="/multiple-bubbles-left-side.svg"
					alt="left side bubble"
				/>
			</div>
			{/* Right FinTech Bear Decoration */}
			<div className="absolute right-20 bottom-4 md:scale-75 scale-50 invisible xl:visible">
				<Image
					loading="lazy"
					src="/bear-right-side.svg"
					alt="bear right side"
				/>
			</div>
			{/* Below Eclipses Decoration  */}
			<div className="absolute -bottom-14 right-56 scale-100 invisible xl:visible">
				<Image
					loading="lazy"
					src="/multiple-bubbles-bottom-side.svg"
					alt="bottom side bubble"
				/>
			</div>
			{/* Below FinTech Bear Decoration  */}
			<div className="absolute left-20 -bottom-14 md:scale-75 scale-50 invisible xl:visible">
				<Image
					loading="lazy"
					src="/bear-bottom-side.svg"
					alt="bear left side"
				/>
			</div>
		</div>
	);
};

export default Members;
