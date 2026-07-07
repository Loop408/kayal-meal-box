import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background bg-opacity-90 backdrop-blur-md shadow-soft z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Placeholder logo – replace with uploaded logo */}
          <img src="/illustrations/logo.svg" alt="Kayal Meal Box" className="h-10 w-10" />
          <span className="text-xl font-semibold text-primary">Kayal Meal Box</span>
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-text">
          <li><Link href="#hero" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
          <li><Link href="#menu" className="hover:text-primary transition-colors">Menu</Link></li>
          <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
          <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
          <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-3">
          <Link href="#pricing" className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">Subscribe Now</Link>
          <Link href="#menu" className="px-4 py-2 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-colors">View Menu</Link>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="h-6 w-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-background p-4 space-y-4">
          <ul className="flex flex-col space-y-2 text-text">
            <li><Link href="#hero" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="#features" onClick={() => setOpen(false)}>Features</Link></li>
            <li><Link href="#menu" onClick={() => setOpen(false)}>Menu</Link></li>
            <li><Link href="#pricing" onClick={() => setOpen(false)}>Pricing</Link></li>
            <li><Link href="#faq" onClick={() => setOpen(false)}>FAQ</Link></li>
            <li><Link href="#contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
          <div className="flex flex-col space-y-2">
            <Link href="#pricing" className="px-4 py-2 bg-primary text-white rounded-xl text-center" onClick={() => setOpen(false)}>Subscribe Now</Link>
            <Link href="#menu" className="px-4 py-2 border border-primary text-primary rounded-xl text-center" onClick={() => setOpen(false)}>View Menu</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
