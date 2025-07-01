import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ setSearchQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 tracking-tight">
          🚀 SkillShowcase
        </div>

        {/* Desktop Search + Button */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search by title or tag..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[300px] px-4 py-2 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <a
            href="https://company-website.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-all duration-300 text-sm md:text-base shadow"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6 text-indigo-600" /> : <Menu className="w-6 h-6 text-indigo-600" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col gap-3 px-6 pb-4 md:hidden animate-fadeIn">
          <input
            type="text"
            placeholder="Search by title or tag..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <a
            href="https://company-website.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-all duration-300 text-sm shadow"
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
}
