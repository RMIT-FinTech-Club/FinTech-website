import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`md:h-fit w-full ${isScrolled ? 'bg-ft-primary-blue' : 'bg-transparent'} flex flex-col transition-colors duration-300`}>
            <div className="container mx-auto flex items-center justify-between p-5">
                <div className="logo">
                    <img src="/whiteLogo.png" alt="Logo" className="h-8" />
                </div>
                <ul className="flex items-center space-x-10">
                    <li>
                        <Link href="/">
                            <a className="text-white hover:text-ft-secondary-yellow transition-colors">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/docs">
                            <a className="text-white hover:text-ft-secondary-yellow transition-colors">Docs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing">
                            <a className="text-white hover:text-ft-secondary-yellow transition-colors">Pricing</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a className="text-white hover:text-ft-secondary-yellow transition-colors">Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="text-white hover:text-ft-secondary-yellow transition-colors">About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar
