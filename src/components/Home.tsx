'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import Hero from '@/components/Hero';
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
      description: t('home.subsystems.aerodynamics.description'), 
      icon: <MdAir />,
      color: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
    },
    { 
      name: t('team.subsystems.chassis'), 
      description: t('home.subsystems.chassis.description'), 
      icon: <MdDirectionsCar />,
      color: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/20 dark:text-gray-300 dark:border-gray-700'
    },
    { 
      name: t('team.subsystems.powertrain'), 
      description: t('home.subsystems.powertrain.description'), 
      icon: <MdSpeed />,
      color: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800'
    },
    { 
      name: t('team.subsystems.electronics'), 
      description: t('home.subsystems.electronics.description'), 
      icon: <MdElectricBolt />,
      color: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800'
    },
    { 
      name: t('team.subsystems.suspension'), 
      description: t('home.subsystems.suspension.description'), 
      icon: <MdSettings />,
      color: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
    },
  ];

  const adminTeam = [
    { 
      name: t('home.admin.planning.name'), 
      description: t('home.admin.planning.description'), 
      icon: <MdAssignment />,
      priority: 'High'
    },
    { 
      name: t('home.admin.marketing.name'), 
      description: t('home.admin.marketing.description'), 
      icon: <MdCampaign />,
      priority: 'Medium'
    },
    { 
      name: t('home.admin.costAnalysis.name'), 
      description: t('home.admin.costAnalysis.description'), 
      icon: <MdAttachMoney />,
      priority: 'High'
    },
    { 
      name: t('home.admin.safety.name'), 
      description: t('home.admin.safety.description'), 
      icon: <MdSecurity />,
      priority: 'Critical'
    },
    { 
      name: t('home.admin.projectManagement.name'), 
      description: t('home.admin.projectManagement.description'), 
      icon: <MdTrackChanges />,
      priority: 'High'
    },
  ];

  return (
    <>
      <Hero />

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
