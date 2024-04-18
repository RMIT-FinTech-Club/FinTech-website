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
				className="w-44 h-44 rounded-lg"
				src={member.avatarSrc}
				alt={member.name}
			/>
			<p className="text-center text-ft-text-dark">{member.name}</p>
		</div>
	);
};

export default MemberCard;
