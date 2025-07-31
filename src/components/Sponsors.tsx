'use client';

import { useState } from 'react';
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
      logo: '/logo-placeholder.png',
      website: '#',
      description: t('sponsors.herramientasCumbres.description')
    },
    {
      name: 'Autodromo Virtual Rio Grande',
      logo: '/logo-placeholder.png',
      website: '#',
      description: t('sponsors.autrodromoVirtual.description')
    },
    {
      name: 'Tacos Melany',
      logo: '/logo-placeholder.png',
      website: '#',
      description: t('sponsors.tacosMelany.description')
    },
    {
      name: 'puul',
      logo: '/logo-placeholder.png',
      website: '#',
      description: t('sponsors.puul.description')
    },
    {
      name: 'Buusch',
      logo: '/logo-placeholder.png',
      website: '#',
      description: t('sponsors.buusch.description')
    },
    {
      name: 'Ansys',
      logo: '/logo-placeholder.png',
      website: 'https://www.ansys.com',
      description: t('sponsors.ansys.description')
    },
    {
      name: 'Altair',
      logo: '/logo-placeholder.png',
      website: 'https://www.altair.com',
      description: t('sponsors.altair.description')
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
                className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-400">Logo</span>
                    </div>
                    
                    <h3 className="text-lg font-medium text-white">
                      {sponsor.name}
                    </h3>
                    
                    <p className="text-sm text-gray-300">
                      {sponsor.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-gray-300 border-gray-600 hover:text-white hover:border-red-500"
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
