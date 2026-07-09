"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#FFC503] text-black pt-20 md:pt-[100px] lg:pt-[120px] pb-10 font-sans relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        
        {/* Top Header Row with Questions & Contacts */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10 pb-8 border-b border-black/10">
          <div>
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-extrabold tracking-tight leading-[1.2]">
              Have any Question?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 w-full lg:w-auto">
            {/* Email Us */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm text-black">Email Us</h4>
                <a href="mailto:kayalkeralarestaurant@gmail.com" className="text-sm opacity-90 hover:underline">
                  kayalkeralarestaurant@gmail.com
                </a>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm text-black">Call Us</h4>
                <a href="tel:+919121538113" className="text-sm opacity-90 hover:underline">
                  +91 91215 38113
                </a>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm text-black">Visit Us</h4>
                <p className="text-sm opacity-90 max-w-[200px] leading-tight">
                  1-100/5, Gopanpalle, Nallagandla, Hyderabad, Telangana 500046
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Central White Card Container */}
        <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-lg border border-black/5 mb-8 text-black">
          {/* Row 1: Brand Logo, Quick Links, Social Icons */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
            
            {/* Brand Logo */}
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Image 
                src="/newlogo.png" 
                alt="Kayal Meal Box" 
                width={160} 
                height={46} 
                className="object-contain h-12 w-auto" 
              />
            </Link>

            {/* Quick Links Menu */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-base font-semibold text-gray-800">
              <Link href="/" className="hover:text-[#FFC503] transition-colors">Home</Link>
              <span className="text-gray-300">|</span>
              <Link href="/about" className="hover:text-[#FFC503] transition-colors">About us</Link>
              <span className="text-gray-300">|</span>
              <a href="#subscribe" className="hover:text-[#FFC503] transition-colors">Meal Plans</a>
              <span className="text-gray-300">|</span>
              <a href="#menu" className="hover:text-[#FFC503] transition-colors">Our Menu</a>
            </div>

            {/* Social Icons (Yellow circles, dark icons) */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/kayalkeralarestaurant?igsh=MXBkbGhpY2ZmZWZobA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFC503] flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Map */}
              <a 
                href="https://maps.app.goo.gl/CdVf75ZbLhQhZ73DA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFC503] flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Map"
              >
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </a>
            </div>
          </div>

          <hr className="border-gray-200 my-6" />

          {/* Row 2: Policy Links, Payment Icons */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Policy Links */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs font-semibold text-gray-700">
              <Link href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC503] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC503] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/return-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC503] transition-colors">
                Return Policy
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC503] transition-colors">
                Refund Policy
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/delivery-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC503] transition-colors">
                Delivery Policy
              </Link>
            </div>

            {/* Payment Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* Google Pay */}
              <div className="h-7 px-3 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-bold text-gray-700 tracking-tight flex items-center gap-1">
                  <span className="text-blue-600">G</span> <span className="text-red-500">P</span><span className="text-yellow-500">a</span><span className="text-green-500">y</span>
                </span>
              </div>
              {/* PhonePe */}
              <div className="h-7 px-3 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-bold text-purple-700 tracking-tight flex items-center gap-1">
                  PhonePe
                </span>
              </div>
              {/* UPI */}
              <div className="h-7 px-3 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-extrabold italic text-emerald-600 tracking-widest">
                  UPI
                </span>
              </div>
              {/* Mastercard */}
              <div className="h-7 px-3 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-bold text-orange-600 tracking-tight">
                  Mastercard
                </span>
              </div>
              {/* RuPay */}
              <div className="h-7 px-3 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-bold text-blue-800 italic">
                  RuPay
                </span>
              </div>
              {/* VISA */}
              <div className="h-7 px-3 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-extrabold text-blue-900 tracking-wider">
                  VISA
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center text-xs font-semibold text-black/70">
          Kayal Meal Box &copy; Copyright 2026 | All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}
