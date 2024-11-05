"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* -------------------------------------navigation bar---------------------------------------- */}
      <div className="bg-black flex justify-between items-center pr-10">
        <Link href={'/'}>
          <Image
            src="/beautylogo.png"
            alt="logo"
            width={90}
            height={0}
            className="hover:scale-110 transition-transform duration-300 ml-10"
          />
        </Link>

        {/* Toggle Button for Mobile Menu */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'} 
        </button>

        {/* Responsive Navigation Links */}
        
        <div className={`hidden md:flex gap-8 text-lg sm:text-xl font-bold text-white`}>
          <Link href="/#">
            <span className="hover:text-grey-300 hover:underline transition-colors duration-300">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="hover:text-grey-300 hover:underline transition-colors duration-300">
              About
            </span>
          </Link>
          <Link href="/contactUs">
            <span className="hover:text-grey-300 hover:underline transition-colors duration-300">
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center text-lg sm:text-xl font-bold text-pink-600 p-4">
          <Link href="/#">
            <span className="hover:text-grey-300 hover:underline transition-colors duration-300 mb-2">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="hover:text-grey-300 hover:underline transition-colors duration-300 mb-2">
              About
            </span>
          </Link>
          <Link href="/contactUs">
            <span className="hover:text-grey-300 hover:underline transition-colors duration-300 mb-2">
              Contact Us
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
