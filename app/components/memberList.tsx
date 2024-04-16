"use client";

import React, { useState } from "react";
import type ClubMember from "./clubMember";
import MemberCard from "./memberCard";

interface MemberListProps {
	members: ClubMember[];
	itemsPerPage: number;
}

const MemberList: React.FC<MemberListProps> = ({ members, itemsPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastMember = currentPage * itemsPerPage;
	const indexOfFirstMember = indexOfLastMember - itemsPerPage;
	const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

	const totalPages = Math.ceil(members.length / itemsPerPage);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div className="flex flex-col justify-center">
			{/* Member Avatar and Name */}
			<div className="grid grid-cols-5 justify-center my-4 gap-x-16 gap-y-8">
				{currentMembers.map((member, index) => (
					<MemberCard key={index} member={member} />
				))}
			</div>
			<div className="flex justify-center gap-4 my-4 items-center">
				{/* Left caret icon */}
				<img
					src="/leftCaretIcon.svg"
					alt="Previous Member Page"
					className="w-8 h-8 cursor-pointer"
					onClick={() => {
						if (currentPage > 1) {
							handlePageChange(currentPage - 1);
						}
					}}
				/>
				{/* Pagination dots */}
				{Array.from({ length: totalPages }, (_, index) => (
					<svg
						key={index}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 8 8"
						className={`${
							currentPage === index + 1
								? "text-ft-primary-yellow-500"
								: "text-ft-primary-blue-500"
						} w-4 h-4 cursor-pointer`}
						onClick={() => handlePageChange(index + 1)}
					>
						<circle cx="4" cy="4" r="4" fill="currentColor" />
					</svg>
				))}
				{/* Right caret icon */}
				<img
					src="/rightCaretIcon.svg"
					alt="Next Member Page"
					className="w-8 h-8 cursor-pointer"
					onClick={() => {
						if (currentPage < totalPages) {
							handlePageChange(currentPage + 1);
						}
					}}
				/>
			</div>
		</div>
	);
};

export default MemberList;
