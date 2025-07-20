'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';

export default function TeamRoles() {
    const { t } = useLanguage();
    const subsystems = [
        { 
            name: t('team.subsystems.aerodynamics'), 
            description: 'Designing wings and bodywork to cut through the air with precision', 
            icon: '🌪️',
        },
        { 
            name: t('team.subsystems.chassis'), 
            description: 'Crafting a lightweight and rigid structure', 
            icon: '🏗️',
        },
        { 
            name: t('team.subsystems.powertrain'), 
            description: 'Developing high-performance propulsion systems', 
            icon: '⚙️',
        },
        { 
            name: t('team.subsystems.electronics'), 
            description: 'Managing the energy that drives our machine', 
            icon: '⚡',
        },
        { 
            name: t('team.subsystems.suspension'), 
            description: 'Optimizing grip, balance, and handling', 
            icon: '🔧',
        },
    ];

    const adminTeam = [
        { 
            name: 'Planning', 
            description: 'Structuring every stage of development', 
            icon: '📋',
        },
        { 
            name: 'Marketing', 
            description: 'Showing the world who we are', 
            icon: '📢',
        },
        { 
            name: 'Cost Analysis', 
            description: 'Keeping our performance on budget', 
            icon: '💰',
        },
        { 
            name: 'Safety', 
            description: 'Ensuring every step is secure and compliant', 
            icon: '🛡️',
        },
        { 
            name: 'Project Management', 
            description: 'Turning ideas into real, working cars', 
            icon: '🎯',
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-100 to-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                        {t('team.roles.title')}
                    </h2>
                    <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t('team.description')}
                    </p>
                </div>

                {/* Technical Subsystems */}
                <div className="mb-20">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{t('home.technical.title')}</h3>
                    <div className="w-12 h-px bg-gray-400 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">{t('home.technical.description')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subsystems.map((subsystem) => (
                        <div key={subsystem.name}>
                            <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center mb-3">
                                        <span className="text-3xl text-red-500 mr-3">{subsystem.icon}</span>
                                    </div>
                                    <CardTitle className="text-xl font-medium text-gray-900">
                                        {subsystem.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <CardDescription className="text-gray-600 leading-relaxed">
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
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{t('home.admin.title')}</h3>
                    <div className="w-12 h-px bg-gray-400 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">{t('home.admin.description')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {adminTeam.map((team) => (
                        <div key={team.name}>
                            <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center mb-3">
                                        <span className="text-3xl text-red-500 mr-3">{team.icon}</span>
                                    </div>
                                    <CardTitle className="text-xl font-medium text-gray-900">
                                        {team.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <CardDescription className="text-gray-600 leading-relaxed">
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
                    <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-red-50 to-red-100/50 backdrop-blur-sm">
                        <CardContent className="p-8 md:p-12">
                            <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed">
                                {t('home.closing.message')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}