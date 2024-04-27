"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from 'tabler-icons-react';  // Including Tabler icons for menu controls

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
          <img src="/navbar/ft_logo.png" alt="FinTech Club Logo" className="absolute top-0 left-1/2 transform -translate-x-1/2" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} aria-label="Toggle menu" className="text-white">
            {isOpen ? <X size={24} stroke="1.5" /> : <Menu size={24} stroke="1.5" />}
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-10 py-4 ${
            isOpen ? "flex flex-col absolute inset-x-0 top-full right-0 bg-ft-primary-blue h-screen text-white" : "hidden"
          }`}
          style={{ textAlign: 'right', paddingRight: '20px' }} // Right aligning the sidebar links
        >
          <li className="my-2">
            <Link href="/" legacyBehavior>
              <a className="font-bold text-white hover:text-ft-secondary-yellow">Home</a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/about-us" legacyBehavior>
              <a className="font-bold text-white hover:text-ft-secondary-yellow">About Us</a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/projects" legacyBehavior>
              <a className="font-bold text-white hover:text-ft-secondary-yellow">Projects</a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/events" legacyBehavior>
              <a className="font-bold text-white hover:text-ft-secondary-yellow">Events</a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/join-us" legacyBehavior>
              <a className="font-bold text-white hover:text-ft-secondary-yellow">Join Us</a>
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
