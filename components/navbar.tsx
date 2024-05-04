"use client";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "tabler-icons-react"; // Including Tabler icons for menu controls

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={`sticky top-0 z-50 flex w-full transition-colors duration-300 ${
				isScrolled ? "bg-ft-primary-blue shadow-md" : "bg-ft-background"
			}`}
		>
			<div className="flex justify-between items-center max-w-6xl mx-auto px-4 w-full">
				<div className="logo relative w-14 h-14">
					<img
						src="/navbar/ft_logo.png"
						alt="FinTech Club Logo"
						className="absolute top-0 left-1/2 transform -translate-x-1/2"
					/>
				</div>
				<div className="md:hidden">
					<Button
						isIconOnly
						onClick={toggleSidebar}
						aria-label="Toggle menu"
						className="bg-transparent"
					>
						{isOpen ? (
							<X size={24} stroke="1.5" />
						) : (
							<Menu size={24} stroke="1.5" />
						)}
					</Button>
				</div>
				<ul
					className={`md:flex md:items-center md:space-x-10 py-4 ${
						isOpen
							? "flex flex-col absolute inset-x-0 top-full right-0 bg-ft-primary-blue h-screen text-white"
							: "hidden"
					}`}
					style={{ textAlign: "right", paddingRight: "20px" }} // Right aligning the sidebar links
				>
					{siteConfig.navItems.map((item) => (
						<li key={item.href} className="my-2">
							<Link
								className="font-bold text-white hover:text-ft-secondary-yellow"
								href={item.href}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
			{isOpen && (
				<Button
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={toggleSidebar}
				/>
			)}
		</nav>
	);
};

export default Navbar;
