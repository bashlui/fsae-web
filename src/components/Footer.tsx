'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const socialLinks = [
    { 
      href: 'https://www.instagram.com/fsaetec', 
      label: 'Instagram', 
      icon: 'Instagram'
    },
    { 
      href: 'https://www.linkedin.com/company/fsaetec', 
      label: 'LinkedIn', 
      icon: 'LinkedIn'
    },
    { 
      href: 'https://www.facebook.com/fsaetec', 
      label: 'Facebook', 
      icon: 'Facebook'
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-light text-gray-900">
              FSAE <span className="text-red-600 font-medium">TEC RACING</span>
            </h3>
            <p className="text-sm text-gray-600 font-light">
              Tecnológico de Monterrey
            </p>
            <p className="text-xs text-gray-500">
              Engineering the future of motorsport
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-900">Contact</h4>
            <div className="space-y-2">
              <Button 
                variant="link" 
                asChild
                className="p-0 h-auto text-sm text-gray-600 hover:text-red-600 font-light"
              >
                <Link href="mailto:fsae@tec.mx">
                  fsae@tec.mx
                </Link>
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-900">Follow Us</h4>
            <div className="flex space-x-1">
              {socialLinks.map((social) => (
                <Button 
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <Link 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8">
          <Separator />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-xs text-gray-500 font-light">
            &copy; 2024 FSAE TEC RACING. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-red-500"></div>
            <span className="text-xs text-red-600 font-light">Racing Forward</span>
            <div className="w-8 h-px bg-red-500"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}