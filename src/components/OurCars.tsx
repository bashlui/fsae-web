'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
    const subsystems = [
        {
            name: 'Chassis',
            description: 'Our chassis is built from lightweight materials like aluminum and carbon fiber to ensure strength and performance.',
            icon: <MdDirectionsCar />,
            details: [
                'Lightweight aluminum space frame construction',
                'Carbon fiber components for weight reduction',
                'Optimized for torsional rigidity',
                'FEA-validated design for safety compliance'
            ],
            color: 'bg-gray-50 text-gray-700 border-gray-200',
            accentColor: 'text-gray-600'
        },
        {
            name: 'Aerodynamics',
            description: 'We design custom wings, diffusers, and body panels to generate downforce and reduce drag.',
            icon: <MdWaves />,
            details: [
                'Custom front and rear wing assemblies',
                'Undertray and diffuser for ground effect',
                'CFD-optimized body panels',
                'Adjustable aerodynamic elements'
            ],
            color: 'bg-blue-50 text-blue-700 border-blue-200',
            accentColor: 'text-blue-600'
        },
        {
            name: 'Suspension',
            description: 'Tuned for performance and adjustability to suit different tracks.',
            icon: <MdTornado />,
            details: [
                'Double wishbone front and rear',
                'Adjustable dampers and anti-roll bars',
                'Custom upright and hub assemblies',
                'Kinematic optimization for handling'
            ],
            color: 'bg-green-50 text-green-700 border-green-200',
            accentColor: 'text-green-600'
        },
        {
            name: 'Powertrain',
            description: 'Whether combustion or electric, our drivetrain is optimized for acceleration, efficiency, and control.',
            icon: <MdBatteryFull />,
            details: [
                'High-performance engine management',
                'Custom intake and exhaust systems',
                'Optimized gear ratios and differential',
                'Advanced fuel injection and ignition'
            ],
            color: 'bg-orange-50 text-orange-700 border-orange-200',
            accentColor: 'text-orange-600'
        },
        {
            name: 'Electronics',
            description: 'We integrate sensors and custom ECUs for precision data logging and control systems.',
            icon: <MdElectricBolt />,
            details: [
                'Custom ECU programming and calibration',
                'Advanced sensor integration',
                'Real-time telemetry and data logging',
                'Driver display and control interfaces'
            ],
            color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
            accentColor: 'text-yellow-600'
        }
    ];

    const developmentPhases = [
        {
            phase: 'Design',
            description: 'CAD modeling and simulation',
            icon: <MdFormatPaint />,
            status: 'Complete'
        },
        {
            phase: 'Simulate',
            description: 'FEA, CFD, and performance analysis',
            icon: <MdLaptop />,
            status: 'Complete'
        },
        {
            phase: 'Manufacture',
            description: 'Precision machining and fabrication',
            icon: <MdOutlinePrecisionManufacturing />,
            status: 'In Progress'
        },
        {
            phase: 'Assemble',
            description: 'Component integration and assembly',
            icon: <MdSchema />,
            status: 'Upcoming'
        },
        {
            phase: 'Test',
            description: 'Track testing and optimization',
            icon: <MdSportsScore />,
            status: 'Upcoming'
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-100 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                        Our <span className="font-semibold text-red-600">Cars</span>
                    </h2>
                    <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                        At <span className="font-medium text-red-600">FSAE TEC Racing</span>, our car is the product of countless hours of engineering, testing, and teamwork. Each subsystem is developed by specialists who push innovation to the limit.
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
                        <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Engineering Excellence</h3>
                        <div className="w-12 h-px bg-gray-400 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">Every component is meticulously designed and optimized for peak performance</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subsystems.map((subsystem) => (
                            <Card key={subsystem.name} className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-black backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-5xl text-red-500">{subsystem.icon}</span>
                                        <Badge variant="outline" className={subsystem.color}>
                                            Subsystem
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl font-medium text-white">
                                        {subsystem.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <CardDescription className="text-white/80 leading-relaxed mb-4">
                                        {subsystem.description}
                                    </CardDescription>
                                    <div className="space-y-2">
                                        {subsystem.details.map((detail, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 ${subsystem.accentColor.replace('text-', 'bg-')}`}></div>
                                                <span className="text-sm text-white/80 leading-relaxed">{detail}</span>
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
                        <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Development Process</h3>
                        <div className="w-12 h-px bg-gray-400 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">We take pride in designing, simulating, manufacturing, assembling, and testing every component ourselves</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {developmentPhases.map((phase, index) => (
                            <div key={phase.phase} className="relative">
                                <Card className="text-center border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-black backdrop-blur-sm">
                                    <CardContent className="p-6 flex flex-col items-center">
                                        <div className="text-5xl text-red-500 mb-4">{phase.icon}</div>
                                        <h4 className="text-lg font-medium text-white mb-2 text-center">{phase.phase}</h4>
                                        <p className="text-sm text-gray-400 mb-4 text-center">{phase.description}</p>
                                    </CardContent>
                                </Card>
                                {index < developmentPhases.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                        <div className="w-6 h-0.5 bg-gray-700"></div>
                                        <div className="absolute -right-1.5 -top-1 w-3 h-3 bg-gray-900 transform rotate-45"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Innovation Statement */}
                <div className="text-center">
                    <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-red-50 to-red-100/50 backdrop-blur-sm">
                        <CardContent className="p-8 md:p-12">
                            <div className="flex justify-center">
                                <div className="text-6xl mb-6 text-center"><MdPsychology /></div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
                                Innovation in <span className="font-semibold text-red-600">Motion</span>
                            </h3>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Every bolt, every line of code, every weld represents our commitment to pushing the boundaries of what&apos;s possible in Formula SAE racing.
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
    );
}
