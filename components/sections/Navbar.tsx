"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-sm font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/newlogo.png" 
                alt="Kayal Meal Box" 
                width={150} 
                height={43} 
                className="object-contain h-11 w-auto" 
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-text hover:text-primary font-medium text-[15px] transition-colors">Home</Link>
            <Link href="#menu" className="text-text hover:text-primary font-medium text-[15px] transition-colors">Our Menu</Link>
            <Link href="#subscribe" className="text-text hover:text-primary font-medium text-[15px] transition-colors">Our Plans</Link>
            <Link href="#about" className="text-text hover:text-primary font-medium text-[15px] transition-colors">About Us</Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="#contact" className="bg-text text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-text/90 transition-colors">
              Get in touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text hover:text-primary focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-text font-medium hover:bg-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#menu" className="block px-3 py-2 text-text font-medium hover:bg-gray-50" onClick={() => setIsOpen(false)}>Our Menu</Link>
            <Link href="#subscribe" className="block px-3 py-2 text-text font-medium hover:bg-gray-50" onClick={() => setIsOpen(false)}>Our Plans</Link>
            <Link href="#about" className="block px-3 py-2 text-text font-medium hover:bg-gray-50" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="#contact" className="block px-3 py-2 text-primary font-bold hover:bg-gray-50" onClick={() => setIsOpen(false)}>Get in touch</Link>
          </div>
        </div>
      )}
    </header>
  );
}
