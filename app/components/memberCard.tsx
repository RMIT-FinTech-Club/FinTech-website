import clsx from "clsx";
import type React from "react";
import type ClubMember from "./clubMember";

interface MemberCardProps {
	member: ClubMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
	return (
		<div className="flex flex-col m-4">
			<img
				className="w-32 h-32 rounded-lg"
				src={member.avatarSrc}
				alt={member.name}
			/>
			<p className="text-center">{member.name}</p>
		</div>
	);
};

export default MemberCard;
