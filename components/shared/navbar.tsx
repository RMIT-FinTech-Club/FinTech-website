import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

import { siteConfig } from "@/config/site";

const navItems = siteConfig.navItems;

const Navbar = () => {
	return (
		<nav className="md:h-fit w-full bg-ft-primary-blue flex flex-col">
			<div className="container mx-auto flex items-center justify-between p-5">
				<div className="logo">
					<Image
						radius="none"
						src="/whiteLogo.png"
						alt="Logo"
						className="h-8"
					/>
				</div>
				<ul className="flex items-center space-x-10">
					{/* <li><a href="#" className="text-white hover:text-ft-secondary-yellow transition-colors">Home</a></li> */}
					{navItems.map((item, _) => {
						return (
							<li key={item.href}>
								<Link
									className="text-ft-text-bright hover:text-ft-text-dark transition-colors"
									href={item.href}
								>
									{item.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
