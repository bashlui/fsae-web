'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import Image from 'next/image';
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
  MdTrackChanges,
  MdStars,
  MdEngineering,
  MdPlayArrow
} from "react-icons/md";

export default function Home() {
  const { t } = useLanguage();
  const router = useRouter();

  const subsystems = [
    { 
      name: t('team.subsystems.aerodynamics'), 
      description: t('home.subsystems.aerodynamics.description'), 
      features: t('home.subsystems.aerodynamics.features'),
      icon: <MdAir />,
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-900/20 to-blue-800/30',
      learnMore: t('home.subsystems.aerodynamics.learnMore')
    },
    { 
      name: t('team.subsystems.chassis'), 
      description: t('home.subsystems.chassis.description'), 
      features: t('home.subsystems.chassis.features'),
      icon: <MdDirectionsCar />,
      color: 'from-gray-500 to-gray-600',
      bgGradient: 'from-gray-800/20 to-gray-700/30',
      learnMore: t('home.subsystems.chassis.learnMore')
    },
    { 
      name: t('team.subsystems.powertrain'), 
      description: t('home.subsystems.powertrain.description'), 
      features: t('home.subsystems.powertrain.features'),
      icon: <MdSpeed />,
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-900/20 to-orange-800/30',
      learnMore: t('home.subsystems.powertrain.learnMore')
    },
    { 
      name: t('team.subsystems.electronics'), 
      description: t('home.subsystems.electronics.description'), 
      features: t('home.subsystems.electronics.features'),
      icon: <MdElectricBolt />,
      color: 'from-yellow-500 to-yellow-600',
      bgGradient: 'from-yellow-900/20 to-yellow-800/30',
      learnMore: t('home.subsystems.electronics.learnMore')
    },
    { 
      name: t('team.subsystems.suspension'), 
      description: t('home.subsystems.suspension.description'), 
      features: t('home.subsystems.suspension.features'),
      icon: <MdSettings />,
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-900/20 to-green-800/30',
      learnMore: t('home.subsystems.suspension.learnMore')
    },
  ];

  const adminTeam = [
    { 
      name: t('home.admin.planning.name'), 
      description: t('home.admin.planning.description'), 
      responsibilities: t('home.admin.planning.responsibilities'),
      icon: <MdAssignment />,
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-900/20 to-purple-800/30'
    },
    { 
      name: t('home.admin.marketing.name'), 
      description: t('home.admin.marketing.description'), 
      responsibilities: t('home.admin.marketing.responsibilities'),
      icon: <MdCampaign />,
      color: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-900/20 to-pink-800/30'
    },
    { 
      name: t('home.admin.costAnalysis.name'), 
      description: t('home.admin.costAnalysis.description'), 
      responsibilities: t('home.admin.costAnalysis.responsibilities'),
      icon: <MdAttachMoney />,
      color: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-900/20 to-emerald-800/30'
    },
    { 
      name: t('home.admin.safety.name'), 
      description: t('home.admin.safety.description'), 
      responsibilities: t('home.admin.safety.responsibilities'),
      icon: <MdSecurity />,
      color: 'from-red-500 to-red-600',
      bgGradient: 'from-red-900/20 to-red-800/30'
    },
    { 
      name: t('home.admin.projectManagement.name'), 
      description: t('home.admin.projectManagement.description'), 
      responsibilities: t('home.admin.projectManagement.responsibilities'),
      icon: <MdTrackChanges />,
      color: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-900/20 to-indigo-800/30'
    },
  ];

  return (
    <>
      <Hero />

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              {t('home.about.title')}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('home.about.description')}
            </p>
          </div>
        </div>
        {/* FSAE Image */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <Image
              width={1600}
              height={900}
              src="/fsae_.png" 
              alt="FSAE Car" 
              className="max-w-4xl w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Team Roles Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              {t('team.roles.title')}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('team.description')}
            </p>
          </div>

          {/* Technical Subsystems */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4">{t('home.technical.title')}</h3>
              <div className="w-12 h-px bg-gradient-to-r from-red-400 to-red-500 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">{t('home.technical.description')}</p>
              
              {/* Stats */}
              <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MdEngineering className="text-red-500" />
                  <span>{t('home.technical.stats')}</span>
                </div>
                <span>•</span>
                <span>{t('home.technical.achievements')}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subsystems.map((subsystem) => (
                <div key={subsystem.name} className="group">
                  <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/20 hover:border-gray-500/40 transform hover:-translate-y-2">
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${subsystem.color} shadow-lg mr-4`}>
                          <span className="text-2xl text-white">{subsystem.icon}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-medium text-white mb-2">
                        {subsystem.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-300 leading-relaxed mb-4">
                        {subsystem.description}
                      </CardDescription>
                      
                      {/* Features List */}
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">Key Features</div>
                        <div className="text-sm text-gray-300 bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                          {subsystem.features}
                        </div>
                      </div>
                      
                      {/* Hover Effect Indicator */}
                      <button 
                        onClick={() => router.push('/our-team')}
                        className="mt-4 flex items-center text-xs text-gray-500 group-hover:text-red-400 transition-colors duration-300 hover:text-red-300 cursor-pointer"
                      >
                        <MdPlayArrow className="mr-1" />
                        {subsystem.learnMore}
                      </button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Administration Team */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4">{t('home.admin.title')}</h3>
              <div className="w-12 h-px bg-gradient-to-r from-red-400 to-red-500 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">{t('home.admin.description')}</p>
              
              {/* Stats */}
              <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MdStars className="text-red-500" />
                  <span>{t('home.admin.stats')}</span>
                </div>
                <span>•</span>
                <span>{t('home.admin.achievements')}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adminTeam.map((team) => (
                <div key={team.name} className="group">
                  <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/20 hover:border-gray-500/40 transform hover:-translate-y-2">
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${team.color} shadow-lg mr-4`}>
                          <span className="text-2xl text-white">{team.icon}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-medium text-white mb-2">
                        {team.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-300 leading-relaxed mb-4">
                        {team.description}
                      </CardDescription>
                      
                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">Core Responsibilities</div>
                        <div className="text-sm text-gray-300 bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                          {team.responsibilities}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto shadow-xl bg-gradient-to-r from-red-900/30 to-red-800/30 backdrop-blur-sm border border-red-700/30">
              <CardContent className="p-8 md:p-12">
                <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed">
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
