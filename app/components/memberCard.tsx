import clsx from "clsx";
import type React from "react";
import type ClubMember from "./clubMember";

interface MemberCardProps {
	member: ClubMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
	return (
		<div className="flex flex-col items-center m-4">
			<img
				className="w-24 h-24 xl:w-32 xl:h-32 2xl:w-44 2xl:h-44 rounded-2xl"
				src={member.avatarSrc}
				alt={member.name}
			/>
			<p className="text-center text-ft-text-dark">{member.name}</p>
		</div>
	);
};

export default MemberCard;
