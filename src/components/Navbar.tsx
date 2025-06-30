'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/our-cars', label: 'Our Cars' },
    { href: '/about-fsae', label: 'About FSAE' },
    { href: '/our-team', label: 'Our Team' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-black backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-light text-white/90 hover:text-red-600 transition-colors duration-200">
              FSAE TEC
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Button 
                  variant="ghost"
                  asChild
                  className="text-white/90 hover:text-red-600 hover:bg-white/10 transition-colors duration-200 font-light"
                >
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 hover:bg-red-50"
            >
              <div>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-1 border-t border-gray-100">
            {navItems.map((item) => (
              <div key={item.href}>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start text-gray-700 hover:text-red-600 hover:bg-red-50 font-light"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}