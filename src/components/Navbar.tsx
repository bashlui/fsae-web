'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
            
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-white/90 hover:text-red-600 hover:bg-white/10 transition-colors duration-200 ml-4"
            >
              {theme === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
            </Button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-white/90 hover:text-red-600 hover:bg-white/10"
            >
              {theme === 'light' ? <MdDarkMode size={18} /> : <MdLightMode size={18} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-red-600 hover:bg-white/10"
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
          <div className="py-4 space-y-1 border-t border-white/20">
            {navItems.map((item) => (
              <div key={item.href}>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start text-white/90 hover:text-red-600 hover:bg-white/10 font-light"
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