"use client";

import type React from "react";
import { useState } from "react";
import { CaretLeft, CaretRight, Circle } from "tabler-icons-react";
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
		<div className="flex flex-col justify-center items-center w-full">
			{/* Member Avatar and Name */}
			<div className="grid grid-cols-2 lg:grid-cols-5 flex sm:flex-col justify-center my-4 gap-x-8 gap-y-2 xl:gap-x-12 xl:gap-y-4 2xl:gap-x-16 2xl:gap-y-8 min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px]">
				{currentMembers.map((member, index) => (
					<MemberCard key={index} member={member} />
				))}
			</div>
			<div className="flex justify-center gap-4 my-4 items-center">
				{/* Left caret icon */}
				<CaretLeft
					className="w-8 h-8 cursor-pointer fill-ft-primary-blue-500"
					color="ft-primary-blue-500"
					onClick={() => {
						if (currentPage > 1) {
							handlePageChange(currentPage - 1);
						}
					}}
				/>
				{/* Pagination dots */}
				{Array.from({ length: totalPages }, (_, index) => (
					<Circle
						key={index}
						size={16}
						color="ft-primary-blue-500"
						className={`${
							currentPage === index + 1
								? "fill-ft-primary-yellow-500"
								: "fill-ft-primary-blue-500"
						} cursor-pointer`}
						onClick={() => handlePageChange(index + 1)}
					/>
				))}
				{/* Right caret icon */}
				<CaretRight
					className="w-8 h-8 cursor-pointer fill-ft-primary-blue-500"
					color="ft-primary-blue-500"
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
