import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="md:h-fit w-full bg-ft-primary-blue flex flex-col">
            <div className="container mx-auto flex items-center justify-between p-5">
                <div className="logo">
                    <img src="/whiteLogo.png" alt="Logo" className="h-8" />
                </div>
                <ul className="flex items-center space-x-10">
                    <li><a href="#" className="text-white hover:text-ft-secondary-yellow transition-colors">Home</a></li>
                    <li><a href="#" className="text-white hover:text-ft-secondary-yellow transition-colors">About Us</a></li>
                    <li><a href="#" className="text-white hover:text-ft-secondary-yellow transition-colors">Projects</a></li>
                    <li><a href="#" className="text-white hover:text-ft-secondary-yellow transition-colors">Events</a></li>
                    <li><a href="#" className="text-white hover:text-ft-secondary-yellow transition-colors">Join Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
