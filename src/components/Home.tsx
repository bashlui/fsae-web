'use client';

import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { 
  MdAir, 
  MdDirectionsCar, 
  MdElectricBolt, 
  MdSettings, 
  MdSpeed,
  MdAssignment,
  MdCampaign,
  MdAttachMoney,
  MdSecurity,
  MdTrackChanges
} from "react-icons/md";

export default function Home() {
  const { t } = useLanguage();

  const subsystems = [
    { 
      name: t('team.subsystems.aerodynamics'), 
      description: 'Designing wings and bodywork to cut through the air with precision', 
      icon: <MdAir />,
      color: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
    },
    { 
      name: t('team.subsystems.chassis'), 
      description: 'Crafting a lightweight and rigid structure', 
      icon: <MdDirectionsCar />,
      color: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/20 dark:text-gray-300 dark:border-gray-700'
    },
    { 
      name: t('team.subsystems.powertrain'), 
      description: 'Developing high-performance propulsion systems', 
      icon: <MdSpeed />,
      color: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800'
    },
    { 
      name: t('team.subsystems.electronics'), 
      description: 'Managing the energy that drives our machine', 
      icon: <MdElectricBolt />,
      color: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800'
    },
    { 
      name: t('team.subsystems.suspension'), 
      description: 'Optimizing grip, balance, and handling', 
      icon: <MdSettings />,
      color: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
    },
  ];

  const adminTeam = [
    { 
      name: 'Planning', 
      description: 'Structuring every stage of development', 
      icon: <MdAssignment />,
      priority: 'High'
    },
    { 
      name: 'Marketing', 
      description: 'Showing the world who we are', 
      icon: <MdCampaign />,
      priority: 'Medium'
    },
    { 
      name: 'Cost Analysis', 
      description: 'Keeping our performance on budget', 
      icon: <MdAttachMoney />,
      priority: 'High'
    },
    { 
      name: 'Safety', 
      description: 'Ensuring every step is secure and compliant', 
      icon: <MdSecurity />,
      priority: 'Critical'
    },
    { 
      name: 'Project Management', 
      description: 'Turning ideas into real, working cars', 
      icon: <MdTrackChanges />,
      priority: 'High'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider mb-6">
              <span className="block text-gray-300">FSAE</span>
              <span className="block text-red-500 font-light">TEC RACING</span>
            </h1>
            
            <div className="flex justify-center mb-8">
              <Separator className="w-20 bg-red-500" />
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
          </div>

        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Welcome Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
            {t('home.welcome.description')}
            <br className="hidden md:block" />
            <span className="text-red-600 font-medium">{t('home.hero.description')}</span>
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              {t('home.about.title')}
            </h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('home.about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Roles Section */}
      <section className="py-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              {t('team.roles.title')}
            </h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('team.description')}
            </p>
          </div>

          {/* Technical Subsystems */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">{t('home.technical.title')}</h3>
              <div className="w-12 h-px bg-gray-400 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('home.technical.description')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subsystems.map((subsystem) => (
                <div key={subsystem.name}>
                  <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-3">
                        <span className="text-3xl text-red-500 mr-3">{subsystem.icon}</span>
                      </div>
                      <CardTitle className="text-xl font-medium text-gray-900 dark:text-white">
                        {subsystem.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {subsystem.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Administration Team */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">{t('home.admin.title')}</h3>
              <div className="w-12 h-px bg-gray-400 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('home.admin.description')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adminTeam.map((team) => (
                <div key={team.name}>
                  <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-3">
                        <span className="text-3xl text-red-500 mr-3">{team.icon}</span>
                      </div>
                      <CardTitle className="text-xl font-medium text-gray-900 dark:text-white">
                        {team.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {team.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-900/20 dark:to-red-800/20 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <p className="text-xl md:text-2xl font-light text-gray-800 dark:text-gray-200 leading-relaxed">
                  {t('home.closing.message')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
