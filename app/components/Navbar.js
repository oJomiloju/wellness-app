"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FAEBD7] relative">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <div className="text-[#3C3C3B] font-serif font-bold text-2xl tracking-wider">
          Thrive in Grace
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="block md:hidden text-[#3C3C3B] focus:outline-none"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log("Menu Open State:", isMenuOpen); // Debugging
          }}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-10 text-[#F25C05]">
          <a
            href="#"
            className="font-serif text-lg hover:underline hover:text-[#D94D1A] transition"
          >
            Menu
          </a>
          <a
            href="#"
            className="relative group border border-[#F25C05] px-6 py-2 rounded-full text-md font-serif tracking-wide text-[#F25C05] overflow-hidden"
          >
            <span
              className="absolute inset-0 bg-[#F25C05] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
            ></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Login
            </span>
          </a>
        </div>
      </div>

      {/* Dropdown Menu for Mobile Screens */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-[#FAEBD7] shadow-md z-50">
        

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-4 py-6">
            <a
              href="#"
              className="font-serif text-lg text-[#F25C05] hover:underline hover:text-[#D94D1A] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a
                href="#"
                className="relative group border border-[#F25C05] px-6 py-2 rounded-full text-md font-serif text-[#F25C05] overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
                >
            {/* Slide-Up Background Effect */}
            <span
                className="absolute inset-0 bg-[#F25C05] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
            ></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Login
            </span>
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
