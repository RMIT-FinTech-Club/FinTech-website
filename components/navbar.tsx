"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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
      className={`sticky top-0 flex flex-col w-full transition-colors duration-300 ${
        isScrolled ? "bg-ft-primary-blue" : "bg-ft-background"
      }`}
    >
      <div className="flex justify-between items-start max-w-6xl mx-auto w-full">
        <div className="logo relative w-14 h-14">
          <img src="/navbar/ft_logo.png" alt="FinTech Club Logo" className="absolute top-0 left-1/2 transform -translate-x-1/2" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            <img src="/menu.svg" alt="Menu" className="h-6 w-6" />
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-10 py-4 ${
            isOpen ? "flex flex-col absolute right-0 top-0 w-48 bg-ft-primary-blue h-screen" : "hidden"
          }`}
        >
            <li>
            <Link href="/" legacyBehavior>
              <a
                className={`transition-colors ${
                  isScrolled ? "text-white hover:text-ft-secondary-yellow" : "text-ft-text-dark hover:text-ft-secondary-yellow"
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-us" legacyBehavior>
              <a
                className={`transition-colors ${
                  isScrolled ? "text-white hover:text-ft-secondary-yellow" : "text-ft-text-dark hover:text-ft-secondary-yellow"
                }`}
              >
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects" legacyBehavior>
              <a
                className={`transition-colors ${
                  isScrolled ? "text-white hover:text-ft-secondary-yellow" : "text-ft-text-dark hover:text-ft-secondary-yellow"
                }`}
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/events" legacyBehavior>
              <a
                className={`transition-colors ${
                  isScrolled ? "text-white hover:text-ft-secondary-yellow" : "text-ft-text-dark hover:text-ft-secondary-yellow"
                }`}
              >
                Events
              </a>
            </Link>
          </li>
          <li>
            <Link href="/join-us" legacyBehavior>
              <a
                className={`transition-colors ${
                  isScrolled ? "text-white hover:text-ft-secondary-yellow" : "text-ft-text-dark hover:text-ft-secondary-yellow"
                }`}
              >
                Join Us
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
