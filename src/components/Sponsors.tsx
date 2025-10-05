'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';

export default function Sponsors() {
  const { t } = useLanguage();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const sponsors = [
    {
      name: 'Herramientas Cumbres',
      logo: '/sponsors/herramientas_cumbres_sponsor.png',
      website: 'https://www.herramientascumbres.com/',
      description: t('sponsors.herramientasCumbres.description'),
      gradient: 'from-blue-600/20 to-blue-800/20',
      borderColor: 'border-blue-500/30',
      hoverColor: 'hover:border-blue-400/50'
    },
    {
      name: 'Autodromo Virtual Rio Grande',
      logo: '/sponsors/autodromo_sponsor.png',
      website: 'http://www.autodromovirtual.com.ar/',
      description: t('sponsors.autrodromoVirtual.description'),
      gradient: 'from-green-600/20 to-green-800/20',
      borderColor: 'border-green-500/30',
      hoverColor: 'hover:border-green-400/50'
    },
    {
      name: 'Tacos Melany',
      logo: '/sponsors/tacos_melany_sponsor.png',
      website: 'https://www.facebook.com/p/Trompo-Tacos-Melany-100044762846464/',
      description: t('sponsors.tacosMelany.description'),
      gradient: 'from-yellow-600/20 to-orange-800/20',
      borderColor: 'border-yellow-500/30',
      hoverColor: 'hover:border-yellow-400/50'
    },
    {
      name: 'puul',
      logo: '/sponsors/puul_sponsor.png',
      website: 'https://www.puul.co/',
      description: t('sponsors.puul.description'),
      gradient: 'from-lime-600/20 to-green-800/20',
      borderColor: 'border-lime-500/30',
      hoverColor: 'hover:border-lime-400/50'
    },
    {
      name: 'Busch',
      logo: '/sponsors/busch_sponsor.png',
      website: 'https://www.buschvacuum.com/mx/es/',
      description: t('sponsors.busch.description'),
      gradient: 'from-red-600/20 to-red-800/20',
      borderColor: 'border-red-500/30',
      hoverColor: 'hover:border-red-400/50'
    },
    {
      name: 'Ansys',
      logo: '/sponsors/ansys_sponsor.png',
      website: 'https://www.ansys.com',
      description: t('sponsors.ansys.description'),
      gradient: 'from-blue-600/20 to-cyan-800/20',
      borderColor: 'border-cyan-500/30',
      hoverColor: 'hover:border-cyan-400/50'
    },
    {
      name: 'Altair',
      logo: '/sponsors/altair_background.png',
      website: 'https://www.altair.com',
      description: t('sponsors.altair.description'),
      gradient: 'from-gray-600/20 to-slate-800/20',
      borderColor: 'border-gray-500/30',
      hoverColor: 'hover:border-gray-400/50'
    },
    {
      name: 'Applied Intuition',
      logo: '/sponsors/applied_intuition.png',
      website: 'https://www.appliedintuition.com/',
      description: t('sponsors.appliedIntuition.description'),
      gradient: 'from-purple-600/20 to-indigo-800/20',
      borderColor: 'border-purple-500/30',
      hoverColor: 'hover:border-purple-400/50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            {t('sponsors.title')}
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
            {t('sponsors.subtitle')}
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Partnership Info */}
        <div className="mb-16">
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <div className="text-center">
              <h2 className="text-2xl font-light text-white mb-4">
                {t('sponsors.partnership.title')}
              </h2>
              <p className="text-gray-300 mb-6 max-w-4xl mx-auto">
                {t('sponsors.partnership.description')}
              </p>
              <Button
                onClick={openContactModal}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {t('sponsors.partnership.cta')}
              </Button>
            </div>
          </Card>
        </div>

        {/* Sponsors Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">
              {t('sponsors.partners.title')}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t('sponsors.partners.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sponsors.map((sponsor) => (
              <Card 
                key={sponsor.name}
                className={`bg-gradient-to-br ${sponsor.gradient} backdrop-blur-sm border ${sponsor.borderColor} ${sponsor.hoverColor} transition-all duration-300 hover:shadow-xl hover:scale-105`}
              >
                <div className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Logo */}
                    <div className="w-32 h-32 bg-white/10 rounded-xl flex items-center justify-center p-4 backdrop-blur-sm border border-white/20">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={120}
                        height={120}
                        className="w-full h-full object-contain filter drop-shadow-sm"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center">
                        <span className="text-xs text-gray-400">Logo</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium text-white">
                      {sponsor.name}
                    </h3>
                    
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {sponsor.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-gray-200 border-white/30 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                    >
                      <Link 
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('sponsors.visitWebsite')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">
              {t('sponsors.benefits.title')}
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {t('sponsors.benefits.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">B</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {t('sponsors.benefits.branding')}
                </h3>
                <p className="text-sm text-gray-300">
                  {t('sponsors.benefits.brandingDescription')}
                </p>
              </div>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">N</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {t('sponsors.benefits.networking')}
                </h3>
                <p className="text-sm text-gray-300">
                  {t('sponsors.benefits.networkingDescription')}
                </p>
              </div>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">R</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {t('sponsors.benefits.recruitment')}
                </h3>
                <p className="text-sm text-gray-300">
                  {t('sponsors.benefits.recruitmentDescription')}
                </p>
              </div>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">I</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {t('sponsors.benefits.innovation')}
                </h3>
                <p className="text-sm text-gray-300">
                  {t('sponsors.benefits.innovationDescription')}
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-red-900/20 to-red-800/20 border-red-500/30 p-8">
            <h2 className="text-2xl font-light text-white mb-4">
              {t('sponsors.cta.title')}
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('sponsors.cta.description')}
            </p>
            <div className="flex justify-center">
              <Button
                onClick={openContactModal}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {t('sponsors.cta.contact')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </div>
  );
}
