"use client";

import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrolled, menuOpen, setMenuOpen, scrollToSection }: NavbarProps) {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Education', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 lg:py-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-base sm:text-lg lg:text-xl font-light tracking-wider text-stone-800 hover:text-stone-900 transition-colors"
          >
            SHREEJAL KHATRI
          </button>
          
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm tracking-wider text-stone-600 hover:text-stone-900 transition-colors duration-300 relative group"
              >
                {item.toUpperCase()}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-stone-900 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden p-2 hover:bg-stone-100 rounded-sm transition-colors text-stone-900"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - positioned absolutely below navbar */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-t border-stone-200 shadow-lg z-40 transform transition-all duration-300 ease-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setMenuOpen(false);
              }}
              className="block w-full text-left text-sm tracking-wider text-stone-600 hover:text-stone-900 hover:bg-stone-50 px-3 py-2 rounded-sm transition-colors duration-300"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}