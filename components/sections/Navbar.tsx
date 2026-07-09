"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_URL } from '@/lib/data';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-background/90 backdrop-blur-md transition-all font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-[80px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/newlogo.png" 
                alt="Kayal Meal Box" 
                width={150} 
                height={55} 
                className="object-contain h-14 w-auto" 
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 items-center">
            <div className="relative group">
              <Link href="#home" className="text-primary font-bold text-base transition-colors pb-1">
                Home
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-primary rounded-full" />
            </div>
            
            <Link href="#menu" className="text-text hover:text-primary font-bold text-base transition-colors pb-1">
              Our Menu
            </Link>
            
            <Link href="#subscribe" className="text-text hover:text-primary font-bold text-base transition-colors pb-1">
              Our Plans
            </Link>
            
            <Link href="/about" className="text-text hover:text-primary font-bold text-base transition-colors pb-1">
              About Us
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 h-12 flex items-center justify-center rounded-[12px] text-base font-bold hover:bg-primary-dark transition-all duration-200 active:scale-95 shadow-md gap-2"
            >
              {/* WhatsApp Icon */}
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.012 2C6.506 2 2.023 6.478 2.022 11.984C2.021 13.743 2.48 15.461 3.355 16.98L2 22L7.233 20.629C8.705 21.433 10.36 21.859 12.012 21.859H12.017C17.523 21.859 22.006 17.381 22.009 11.875C22.01 9.206 20.971 6.698 19.083 4.809C17.195 2.92 14.685 2.001 12.012 2ZM17.18 16.035C16.953 16.678 15.86 17.26 15.362 17.335C14.864 17.409 14.286 17.459 12.14 16.604C9.394 15.505 7.627 12.704 7.491 12.521C7.355 12.338 6.386 11.051 6.386 9.718C6.386 8.385 7.081 7.728 7.329 7.463C7.577 7.198 7.872 7.132 8.053 7.132L8.575 7.134C8.743 7.137 8.969 7.068 9.191 7.611C9.418 8.167 9.967 9.504 10.035 9.643C10.103 9.782 10.148 9.942 10.055 10.127C9.962 10.313 9.86 10.425 9.737 10.567C9.616 10.71 9.48 10.885 9.372 10.995C9.251 11.117 9.115 11.247 9.255 11.488C9.394 11.729 9.876 12.51 10.588 13.146C11.505 13.965 12.279 14.221 12.518 14.34C12.757 14.459 12.896 14.44 13.036 14.285C13.175 14.129 13.637 13.585 13.797 13.346C13.956 13.107 14.115 13.148 14.342 13.232C14.569 13.317 15.788 13.914 16.037 14.04C16.286 14.166 16.452 14.23 16.515 14.337C16.577 14.445 16.577 14.958 16.35 15.601L17.18 16.035Z" />
              </svg>
              Get in touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-primary-dark focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-primary/10 shadow-lg absolute w-full left-0 z-40 transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="#home" className="block px-3 py-3 text-primary font-bold hover:bg-primary/5 rounded-lg" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#menu" className="block px-3 py-3 text-primary font-bold hover:bg-primary/5 rounded-lg" onClick={() => setIsOpen(false)}>Our Menu</Link>
            <Link href="#subscribe" className="block px-3 py-3 text-primary font-bold hover:bg-primary/5 rounded-lg" onClick={() => setIsOpen(false)}>Our Plans</Link>
            <Link href="#about" className="block px-3 py-3 text-primary font-bold hover:bg-primary/5 rounded-lg" onClick={() => setIsOpen(false)}>About Us</Link>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-4 bg-primary text-white px-6 py-3.5 rounded-full text-[15px] font-bold hover:bg-primary-dark transition-all"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.012 2C6.506 2 2.023 6.478 2.022 11.984C2.021 13.743 2.48 15.461 3.355 16.98L2 22L7.233 20.629C8.705 21.433 10.36 21.859 12.012 21.859H12.017C17.523 21.859 22.006 17.381 22.009 11.875C22.01 9.206 20.971 6.698 19.083 4.809C17.195 2.92 14.685 2.001 12.012 2ZM17.18 16.035C16.953 16.678 15.86 17.26 15.362 17.335C14.864 17.409 14.286 17.459 12.14 16.604C9.394 15.505 7.627 12.704 7.491 12.521C7.355 12.338 6.386 11.051 6.386 9.718C6.386 8.385 7.081 7.728 7.329 7.463C7.577 7.198 7.872 7.132 8.053 7.132L8.575 7.134C8.743 7.137 8.969 7.068 9.191 7.611C9.418 8.167 9.967 9.504 10.035 9.643C10.103 9.782 10.148 9.942 10.055 10.127C9.962 10.313 9.86 10.425 9.737 10.567C9.616 10.71 9.48 10.885 9.372 10.995C9.251 11.117 9.115 11.247 9.255 11.488C9.394 11.729 9.876 12.51 10.588 13.146C11.505 13.965 12.279 14.221 12.518 14.34C12.757 14.459 12.896 14.44 13.036 14.285C13.175 14.129 13.637 13.585 13.797 13.346C13.956 13.107 14.115 13.148 14.342 13.232C14.569 13.317 15.788 13.914 16.037 14.04C16.286 14.166 16.452 14.23 16.515 14.337C16.577 14.445 16.577 14.958 16.35 15.601L17.18 16.035Z" />
              </svg>
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
