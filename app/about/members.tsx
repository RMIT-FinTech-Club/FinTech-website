"use client";

import { avatar } from "@nextui-org/react";
import clsx from "clsx";
import type React from "react";
import { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import type ClubMember from "./(components)/clubMember";
import HeaderTitlePage from "./(components)/headerTitlePage";
import MemberAvatar from "./(components)/memberCard";
import MemberFilter from "./(components)/memberFilter";
import MemberList from "./(components)/memberList";

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

    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 relative items-center justify-center xl:w-full">
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
      <div className="absolute -left-unit-52 top-unit-52 scale-50 invisible xl:visible">
        <Image
          loading="lazy"
          src="/multiple-bubbles-left-side.svg"
          alt="left side bubble"
        />
      </div>
      {/* Right FinTech Bear Decoration */}
      <div className="absolute -right-unit-56 top-unit-28 scale-50 invisible xl:visible">
        <Image
          loading="lazy"
          src="/bear-right-side.svg"
          alt="bear right side"
        />
      </div>
      {/* Below Eclipses Decoration  */}
      <div className="absolute -bottom-unit-18 -right-unit-16 scale-50 invisible xl:visible">
        <Image
          loading="lazy"
          src="/multiple-bubbles-bottom-side.svg"
          alt="bottom side bubble"
        />
      </div>
      {/* Below FinTech Bear Decoration  */}
      <div className="absolute -bottom-unit-14 -left-unit-28 scale-50 invisible xl:visible">
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
