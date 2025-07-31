'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { MdDirectionsCar, 
         MdElectricBolt, 
         MdWaves, 
         MdTornado, 
         MdBatteryFull, 
         MdFormatPaint, 
         MdLaptop, 
         MdOutlinePrecisionManufacturing, 
         MdSchema, 
         MdSportsScore,
         MdPsychology } from "react-icons/md";

export default function OurCars() {
    const { t } = useLanguage();
    const subsystems = [
        {
            name: t('team.subsystems.chassis'),
            description: t('cars.subsystems.chassis.description'),
            icon: <MdDirectionsCar />,
            details: [
                t('cars.subsystems.chassis.detail1'),
                t('cars.subsystems.chassis.detail2'),
                t('cars.subsystems.chassis.detail3'),
                t('cars.subsystems.chassis.detail4')
            ],
            color: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/20 dark:text-gray-300 dark:border-gray-700',
            accentColor: 'text-gray-600 dark:text-gray-400'
        },
        {
            name: t('team.subsystems.aerodynamics'),
            description: t('cars.subsystems.aerodynamics.description'),
            icon: <MdWaves />,
            details: [
                t('cars.subsystems.aerodynamics.detail1'),
                t('cars.subsystems.aerodynamics.detail2'),
                t('cars.subsystems.aerodynamics.detail3'),
                t('cars.subsystems.aerodynamics.detail4')
            ],
            color: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800',
            accentColor: 'text-blue-600 dark:text-blue-400'
        },
        {
            name: t('team.subsystems.suspension'),
            description: t('cars.subsystems.suspension.description'),
            icon: <MdTornado />,
            details: [
                t('cars.subsystems.suspension.detail1'),
                t('cars.subsystems.suspension.detail2'),
                t('cars.subsystems.suspension.detail3'),
                t('cars.subsystems.suspension.detail4')
            ],
            color: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800',
            accentColor: 'text-green-600 dark:text-green-400'
        },
        {
            name: t('team.subsystems.powertrain'),
            description: t('cars.subsystems.powertrain.description'),
            icon: <MdBatteryFull />,
            details: [
                t('cars.subsystems.powertrain.detail1'),
                t('cars.subsystems.powertrain.detail2'),
                t('cars.subsystems.powertrain.detail3'),
                t('cars.subsystems.powertrain.detail4')
            ],
            color: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800',
            accentColor: 'text-orange-600 dark:text-orange-400'
        },
        {
            name: t('team.subsystems.electronics'),
            description: t('cars.subsystems.electronics.description'),
            icon: <MdElectricBolt />,
            details: [
                t('cars.subsystems.electronics.detail1'),
                t('cars.subsystems.electronics.detail2'),
                t('cars.subsystems.electronics.detail3'),
                t('cars.subsystems.electronics.detail4')
            ],
            color: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800',
            accentColor: 'text-yellow-600 dark:text-yellow-400'
        }
    ];

    const developmentPhases = [
        {
            phase: t('cars.phases.design.name'),
            description: t('cars.phases.design.description'),
            icon: <MdFormatPaint />,
            status: t('cars.status.complete')
        },
        {
            phase: t('cars.phases.simulate.name'),
            description: t('cars.phases.simulate.description'),
            icon: <MdLaptop />,
            status: t('cars.status.complete')
        },
        {
            phase: t('cars.phases.manufacture.name'),
            description: t('cars.phases.manufacture.description'),
            icon: <MdOutlinePrecisionManufacturing />,
            status: t('cars.status.inProgress')
        },
        {
            phase: t('cars.phases.assemble.name'),
            description: t('cars.phases.assemble.description'),
            icon: <MdSchema />,
            status: t('cars.status.upcoming')
        },
        {
            phase: t('cars.phases.test.name'),
            description: t('cars.phases.test.description'),
            icon: <MdSportsScore />,
            status: t('cars.status.upcoming')
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                        {t('cars.title')}
                    </h2>
                    <div className="w-16 h-px bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        {t('cars.description')}
                    </p>
                    
                    {/* Hero Car Image Placeholder */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl aspect-video flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="text-6xl mb-4">🏎️</div>
                                <p className="text-xl font-light">FSAE TEC Racing Car 2025</p>
                                <p className="text-sm text-gray-300 mt-2">Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subsystems */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-light text-white mb-4">{t('cars.development.engineering.title')}</h3>
                        <div className="w-12 h-px bg-gradient-to-r from-red-400 to-red-500 mx-auto mb-4"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto">{t('cars.development.engineering.description')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subsystems.map((subsystem) => (
                            <Card key={subsystem.name} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/20 overflow-hidden">
                                {/* Red Cool Line */}
                                <div className="relative h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/50 to-transparent animate-pulse"></div>
                                    <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                </div>
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-3xl text-red-500">{subsystem.icon}</span>
                                    </div>
                                    <CardTitle className="text-xl font-medium text-white">
                                        {subsystem.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <CardDescription className="text-gray-300 leading-relaxed mb-4">
                                        {subsystem.description}
                                    </CardDescription>
                                    <div className="space-y-2">
                                        {subsystem.details.map((detail, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 ${subsystem.accentColor.replace('text-', 'bg-')}`}></div>
                                                <span className="text-sm text-gray-300 leading-relaxed">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Development Process */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-light text-white mb-4">{t('cars.development.title')}</h3>
                        <div className="w-12 h-px bg-gradient-to-r from-red-400 to-red-500 mx-auto mb-4"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto">{t('cars.development.description')}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {developmentPhases.map((phase, index) => (
                            <div key={phase.phase} className="relative">
                                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/20">
                                    <CardContent className="p-6 flex flex-col items-center">
                                        <div className="text-5xl text-red-500 mb-4">{phase.icon}</div>
                                        <h4 className="text-lg font-medium text-white mb-2 text-center">{phase.phase}</h4>
                                        <p className="text-sm text-gray-300 mb-4 text-center">{phase.description}</p>
                                    </CardContent>
                                </Card>
                                {index < developmentPhases.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                        <div className="w-6 h-0.5 bg-gray-600"></div>
                                        <div className="absolute -right-1.5 -top-1 w-3 h-3 bg-gray-500 transform rotate-45"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Innovation Statement */}
                <div className="text-center">
                    <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-to-r from-red-900/30 to-red-800/30 backdrop-blur-sm border border-red-700/30">
                        <CardContent className="p-8 md:p-12">
                            <div className="flex justify-center">
                                <div className="text-6xl mb-6 text-center text-red-500"><MdPsychology /></div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-light text-gray-200 mb-4">
                                {t('cars.innovation.title')}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                {t('cars.innovation.description')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
    );
}
