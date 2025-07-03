'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TeamRoles() {
    const subsystems = [
        { 
            name: 'Aerodynamics', 
            description: 'Designing wings and bodywork to cut through the air with precision', 
            icon: '🌪️',
            color: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        { 
            name: 'Chassis', 
            description: 'Crafting a lightweight and rigid structure', 
            icon: '🏗️',
            color: 'bg-gray-50 text-gray-700 border-gray-200'
        },
        { 
            name: 'Powertrain', 
            description: 'Developing high-performance propulsion systems', 
            icon: '⚙️',
            color: 'bg-orange-50 text-orange-700 border-orange-200'
        },
        { 
            name: 'Electric', 
            description: 'Managing the energy that drives our machine', 
            icon: '⚡',
            color: 'bg-yellow-50 text-yellow-700 border-yellow-200'
        },
        { 
            name: 'Suspension', 
            description: 'Optimizing grip, balance, and handling', 
            icon: '🔧',
            color: 'bg-green-50 text-green-700 border-green-200'
        },
    ];

    const adminTeam = [
        { 
            name: 'Planning', 
            description: 'Structuring every stage of development', 
            icon: '📋',
            priority: 'High'
        },
        { 
            name: 'Marketing', 
            description: 'Showing the world who we are', 
            icon: '📢',
            priority: 'Medium'
        },
        { 
            name: 'Cost Analysis', 
            description: 'Keeping our performance on budget', 
            icon: '💰',
            priority: 'High'
        },
        { 
            name: 'Safety', 
            description: 'Ensuring every step is secure and compliant', 
            icon: '🛡️',
            priority: 'Critical'
        },
        { 
            name: 'Project Management', 
            description: 'Turning ideas into real, working cars', 
            icon: '🎯',
            priority: 'High'
        },
    ];

    const getPriorityVariant = (priority: string) => {
        switch (priority) {
            case 'Critical':
                return 'destructive';
            case 'High':
                return 'default';
            case 'Medium':
                return 'secondary';
            default:
                return 'outline';
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-100 to-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                        Team <span className="font-semibold text-red-600">Roles</span>
                    </h2>
                    <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our diverse team brings together technical excellence and strategic leadership to build championship-winning vehicles.
                    </p>
                </div>

                {/* Technical Subsystems */}
                <div className="mb-20">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Technical Subsystems</h3>
                    <div className="w-12 h-px bg-gray-400 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Our engineering expertise spans multiple disciplines</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subsystems.map((subsystem) => (
                        <div key={subsystem.name}>
                            <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-3xl">{subsystem.icon}</span>
                                        <Badge variant="outline" className={subsystem.color}>
                                            Technical
                                        </Badge>
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
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Administration Team</h3>
                    <div className="w-12 h-px bg-gray-400 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Strategic leadership driving our success</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {adminTeam.map((team) => (
                        <div key={team.name}>
                            <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-3xl">{team.icon}</span>
                                        <Badge variant={getPriorityVariant(team.priority)}>
                                            {team.priority}
                                        </Badge>
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
                                Together, we are more than just a student team — we are a 
                                <span className="font-medium text-red-600"> racing family </span>
                                building engineering legends.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}