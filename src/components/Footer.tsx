'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/context/LanguageContext';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  const { t } = useLanguage();
  
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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-light text-white">
              FSAE <span className="text-red-500 font-medium">TEC RACING</span>
            </h3>
            <p className="text-sm text-gray-300 font-light">
              Tecnológico de Monterrey
            </p>
            <p className="text-xs text-gray-400">
              Engineering the future of motorsport
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-white">{t('footer.contact')}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MdEmail className="text-red-500 text-sm" />
                <a 
                  href="mailto:Fsaetec.mty@outlook.com"
                  className="text-xs text-gray-300 hover:text-red-500 transition-colors duration-200"
                >
                  Fsaetec.mty@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="text-red-500 text-sm" />
                <a 
                  href="tel:+528661425689"
                  className="text-xs text-gray-300 hover:text-red-500 transition-colors duration-200"
                >
                  +52 866 142 5689
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MdLocationOn className="text-red-500 text-sm mt-0.5" />
                <div className="text-xs text-gray-300">
                  <p>Campus Monterrey</p>
                  <p>Nuevo León, México</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-white">{t('footer.follow')}</h4>
            <div className="flex space-x-1">
              {socialLinks.map((social) => (
                <Button 
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-gray-300 hover:text-red-500 hover:bg-red-900/20 transition-colors duration-200"
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
            <p className="text-xs text-gray-400 font-light">
              {t('footer.copyright')}
            </p>          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-red-500"></div>
            <span className="text-xs text-red-500 font-light">Racing Forward</span>
            <div className="w-8 h-px bg-red-500"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}