'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.ourCars': 'Our Cars',
        'nav.aboutFsae': 'About FSAE',
        'nav.ourTeam': 'Our Team',
        'nav.sponsors': 'Sponsors',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.subtitle': 'Engineering Excellence. Racing Innovation. Future Leaders.',
        'hero.welcome.message': 'Welcome to the official site of FSAE TEC Racing.',
        'hero.welcome.tagline': 'We build, race, and innovate.',
        
        // Home Page
        'home.hero.title': 'FSAE Racing Team',
        'home.hero.subtitle': 'Engineering Excellence in Motion',
        'home.hero.description': 'Designing and building formula-style race cars with passion and precision',
        'home.hero.cta': 'Learn More',
        'home.about.title': 'About Us',
        'home.about.description': 'We are a passionate team of engineering students dedicated to designing and building formula-style race cars that compete in international competitions.',
        'home.welcome.title': 'Welcome to FSAE TEC',
        'home.welcome.description': 'Where innovation meets competition',
        'home.stats.cars': 'Cars Built',
        'home.stats.competitions': 'Competitions',
        'home.stats.awards': 'Awards Won',
        'home.stats.members': 'Team Members',
        'home.technical.title': 'Technical Subsystems',
        'home.technical.description': 'Our engineering expertise spans multiple disciplines, combining innovation with precision to create championship-winning race cars',
        'home.technical.stats': 'Engineering Excellence',
        'home.technical.achievements': '5 Subsystems • 40+ Engineers • 1000+ Hours',
        'home.admin.title': 'Administration Team', 
        'home.admin.description': 'Strategic leadership driving our success through meticulous planning and professional execution',
        'home.admin.stats': 'Leadership Excellence',
        'home.admin.achievements': '5 Core Areas • Strategic Planning • Professional Growth',
        'home.closing.message': 'Together, we are more than just a student team — we are a racing family building engineering legends.',
        
        // Technical Subsystems Descriptions
        'home.subsystems.aerodynamics.description': 'Designing wings and bodywork that slice through air with surgical precision, optimizing downforce and minimizing drag for maximum track performance',
        'home.subsystems.aerodynamics.features': 'CFD Analysis • Wind Tunnel Testing • Carbon Fiber Construction',
        'home.subsystems.chassis.description': 'Engineering a lightweight yet rigid structure that serves as the backbone of our race car, balancing strength with weight optimization',
        'home.subsystems.chassis.features': 'Steel Spaceframe • FEA Analysis • Safety Integration',
        'home.subsystems.powertrain.description': 'Developing high-performance propulsion systems that deliver raw power with exceptional reliability and efficiency on the track',
        'home.subsystems.powertrain.features': 'Engine Tuning • Transmission • Fuel Systems',
        'home.subsystems.electronics.description': 'Managing complex electrical systems that control everything from engine management to data acquisition and driver safety',
        'home.subsystems.electronics.features': 'ECU Programming • Data Logging • Sensor Integration',
        'home.subsystems.suspension.description': 'Fine-tuning suspension geometry and components to achieve optimal grip, balance, and handling characteristics for competitive racing',
        'home.subsystems.suspension.features': 'Geometry Optimization • Damper Tuning • Testing & Validation',
        
        // Administration Team
        'home.admin.planning.name': 'Strategic Planning',
        'home.admin.planning.description': 'Orchestrating comprehensive project timelines, resource allocation, and milestone tracking to ensure seamless execution of our racing program',
        'home.admin.planning.responsibilities': 'Timeline Management • Resource Planning • Risk Assessment',
        'home.admin.marketing.name': 'Marketing & Outreach',
        'home.admin.marketing.description': 'Building our brand presence, managing sponsor relationships, and showcasing our achievements to the automotive engineering community',
        'home.admin.marketing.responsibilities': 'Brand Development • Sponsor Relations • Social Media',
        'home.admin.costAnalysis.name': 'Financial Analysis',
        'home.admin.costAnalysis.description': 'Optimizing budget allocation, tracking expenses, and ensuring cost-effective solutions while maintaining our competitive edge',
        'home.admin.costAnalysis.responsibilities': 'Budget Planning • Cost Tracking • Financial Reporting',
        'home.admin.safety.name': 'Safety & Compliance',
        'home.admin.safety.description': 'Maintaining the highest safety standards, ensuring regulatory compliance, and protecting our team members in all activities',
        'home.admin.safety.responsibilities': 'Safety Protocols • Compliance Audits • Training Programs',
        'home.admin.projectManagement.name': 'Project Management',
        'home.admin.projectManagement.description': 'Coordinating cross-functional teams, managing deliverables, and ensuring our innovative concepts become championship-ready race cars',
        'home.admin.projectManagement.responsibilities': 'Team Coordination • Quality Control • Delivery Management',
        
        // Our Cars Page
        'cars.title': 'Our Cars',
        'cars.subtitle': 'Engineering Innovation Through the Years',
        'cars.description': 'Explore our journey of automotive engineering excellence',
        'cars.current.title': 'Current Car',
        'cars.current.description': 'Our latest engineering achievement',
        'cars.previous.title': 'Previous Cars',
        'cars.specifications': 'Specifications',
        'cars.performance': 'Performance',
        'cars.features': 'Key Features',
        'cars.engine': 'Engine',
        'cars.weight': 'Weight',
        'cars.power': 'Power',
        'cars.topSpeed': 'Top Speed',
        'cars.subsystem.responsibilities': 'Key Responsibilities',
        'cars.subsystem.technologies': 'Technologies & Tools',
        'cars.subsystem.teamSize': 'Team Size',
        'cars.subsystem.members': 'Members',
        
        // Car Subsystems Details
        'cars.subsystems.chassis.description': 'Our chassis is built from lightweight materials like aluminum and carbon fiber to ensure strength and performance.',
        'cars.subsystems.chassis.detail1': 'Lightweight aluminum space frame construction',
        'cars.subsystems.chassis.detail2': 'Carbon fiber components for weight reduction',
        'cars.subsystems.chassis.detail3': 'Optimized for torsional rigidity',
        'cars.subsystems.chassis.detail4': 'FEA-validated design for safety compliance',
        
        'cars.subsystems.aerodynamics.description': 'We design custom wings, diffusers, and body panels to generate downforce and reduce drag.',
        'cars.subsystems.aerodynamics.detail1': 'Custom front and rear wing assemblies',
        'cars.subsystems.aerodynamics.detail2': 'Undertray and diffuser for ground effect',
        'cars.subsystems.aerodynamics.detail3': 'CFD-optimized body panels',
        'cars.subsystems.aerodynamics.detail4': 'Adjustable aerodynamic elements',
        
        'cars.subsystems.suspension.description': 'Tuned for performance and adjustability to suit different tracks.',
        'cars.subsystems.suspension.detail1': 'Double wishbone front and rear',
        'cars.subsystems.suspension.detail2': 'Adjustable dampers and anti-roll bars',
        'cars.subsystems.suspension.detail3': 'Custom upright and hub assemblies',
        'cars.subsystems.suspension.detail4': 'Kinematic optimization for handling',
        
        'cars.subsystems.powertrain.description': 'Whether combustion or electric, our drivetrain is optimized for acceleration, efficiency, and control.',
        'cars.subsystems.powertrain.detail1': 'High-performance engine management',
        'cars.subsystems.powertrain.detail2': 'Custom intake and exhaust systems',
        'cars.subsystems.powertrain.detail3': 'Optimized gear ratios and differential',
        'cars.subsystems.powertrain.detail4': 'Advanced fuel injection and ignition',
        
        'cars.subsystems.electronics.description': 'We integrate sensors and custom ECUs for precision data logging and control systems.',
        'cars.subsystems.electronics.detail1': 'Custom ECU programming and calibration',
        'cars.subsystems.electronics.detail2': 'Advanced sensor integration',
        'cars.subsystems.electronics.detail3': 'Real-time telemetry and data logging',
        'cars.subsystems.electronics.detail4': 'Driver display and control interfaces',
        
        // Development Phases
        'cars.development.title': 'Development Process',
        'cars.development.description': 'We take pride in designing, simulating, manufacturing, assembling, and testing every component ourselves',
        'cars.development.engineering.title': 'Engineering Excellence',
        'cars.development.engineering.description': 'Every component is meticulously designed and optimized for peak performance',
        
        'cars.phases.design.name': 'Design',
        'cars.phases.design.description': 'CAD modeling and simulation',
        'cars.phases.simulate.name': 'Simulate',
        'cars.phases.simulate.description': 'FEA, CFD, and performance analysis',
        'cars.phases.manufacture.name': 'Manufacture',
        'cars.phases.manufacture.description': 'Precision machining and fabrication',
        'cars.phases.assemble.name': 'Assemble',
        'cars.phases.assemble.description': 'Component integration and assembly',
        'cars.phases.test.name': 'Test',
        'cars.phases.test.description': 'Track testing and optimization',
        
        // Status
        'cars.status.complete': 'Complete',
        'cars.status.inProgress': 'In Progress',
        'cars.status.upcoming': 'Upcoming',
        
        // Innovation Section
        'cars.innovation.title': 'Innovation in Motion',
        'cars.innovation.description': 'Every bolt, every line of code, every weld represents our commitment to pushing the boundaries of what\'s possible in Formula SAE racing.',
        'cars.badge.subsystem': 'Subsystem',
        
        // About FSAE Page
        'fsae.title': 'About FSAE',
        'fsae.subtitle': 'Formula Society of Automotive Engineers',
        'fsae.description': 'FSAE is an international design competition where university students design, build, and race small formula-style cars.',
        'fsae.mission.title': 'Our Mission',
        'fsae.mission.description': 'To provide students with hands-on experience in automotive engineering and design',
        'fsae.competition.title': 'Competition Events',
        'fsae.competition.acceleration': 'Acceleration',
        'fsae.competition.skidpad': 'Skid Pad',
        'fsae.competition.autocross': 'Autocross',
        'fsae.competition.endurance': 'Endurance',
        'fsae.competition.design': 'Design Event',
        'fsae.rules.title': 'Rules & Regulations',
        'fsae.history.title': 'Our History',
        'fsae.history.description': 'Learn about our journey in FSAE competitions',
        
        // About FSAE Additional Content
        'fsae.mission.extended': 'FSAE challenges students to innovate and build formula-style cars, fostering creativity and practical engineering skills essential for success in the field.',
        'fsae.competition.description': 'Events include static (design, cost, business) and dynamic (acceleration, endurance) challenges. Teams manage powertrain, aerodynamics, and business functions.',
        'fsae.education.title': 'Educational Impact',
        'fsae.education.description': 'Students apply classroom concepts to real-world challenges, develop soft skills, and gain exposure to industry tools and experts, preparing them for careers in top companies.',
        'fsae.global.title': 'Global Reach & Career Impact',
        'fsae.global.description': 'Held worldwide in locations like the USA, Germany, and India, FSAE fosters critical skills and connects students with top companies like Tesla, Red Bull Racing, and Bosch.',
        
        // Our Team Page
        'team.title': 'Our Team',
        'team.subtitle': 'Meet the Engineers Behind the Machine',
        'team.description': 'Our diverse team of passionate engineers working together',
        'team.leadership.title': 'Leadership',
        'team.subsystems.title': 'Subsystem Teams',
        'team.subsystems.chassis': 'Chassis',
        'team.subsystems.powertrain': 'Powertrain',
        'team.subsystems.suspension': 'Suspension',
        'team.subsystems.aerodynamics': 'Aerodynamics',
        'team.subsystems.electronics': 'Electronics',
        'team.subsystems.manufacturing': 'Manufacturing',
        'team.roles.title': 'Team Roles',
        'team.join.title': 'Join Our Team',
        'team.join.description': 'Interested in joining? We welcome passionate students from all engineering disciplines.',
        'team.alumni.title': 'Alumni',
        'team.alumni.description': 'Our former members making impact in the industry',
        'team.clickToLearn': 'Click to learn more',
        
        // Main Team Information
        'team.main.name': 'FSAE TEC RACING TEAM',
        'team.main.description': 'FSAE TEC Racing is a multidisciplinary student organization at Tecnológico de Monterrey dedicated to designing, building, and racing formula-style vehicles. Our team brings together passionate students from engineering, business, and other disciplines to compete in Formula SAE competitions worldwide.',
        'team.main.mission': 'To provide students with hands-on engineering experience while fostering innovation, teamwork, and excellence in automotive design. We aim to bridge the gap between academic theory and real-world application, preparing our members for successful careers in the automotive and motorsports industries.',
        'team.main.values.0': 'Innovation and continuous improvement in all aspects of vehicle design',
        'team.main.values.1': 'Collaboration and teamwork across multiple engineering disciplines',
        'team.main.values.2': 'Excellence in execution and attention to detail',
        'team.main.values.3': 'Safety as our top priority in all activities',
        'team.main.values.4': 'Sustainability and responsible engineering practices',
        'team.main.values.5': 'Knowledge sharing and mentorship within the team',
        'team.main.values.6': 'Representing Tecnológico de Monterrey with pride and professionalism',
        'team.main.achievements.0': '2023 Formula SAE Michigan - Top 15 Overall Finish',
        'team.main.achievements.1': '2023 Best Presentation Award - Business Event',
        'team.main.achievements.2': '2022 Innovation Award - Aerodynamics Package',
        'team.main.achievements.3': '2022 Formula SAE Lincoln - Top 20 Dynamic Events',
        'team.main.achievements.4': '2021 Virtual Competition - 3rd Place Cost Event',
        'team.main.achievements.5': 'Multiple Dean List academic achievements by team members',
        'team.main.achievements.6': 'Partnership with leading automotive industry sponsors',
        
        // Modal Labels
        'team.modal.about': 'About Our Team',
        'team.modal.aboutTeam': 'About Our Team',
        'team.modal.mission': 'Our Mission',
        'team.modal.values': 'Our Values',
        'team.modal.achievements': 'Recent Achievements',
        'team.modal.totalMembers': 'Total Members',
        'team.modal.founded': 'Founded',
        'team.modal.students': 'Students',
        'team.modal.responsibilities': 'Key Responsibilities',
        'team.modal.technologies': 'Technologies & Tools',
        'team.modal.members': 'Team Members',
        
        // Sub Teams
                // Sub Teams
        'team.powertrain.description': 'The Powertrain team is responsible for the heart of our race car - the engine and transmission systems. We focus on maximizing power while ensuring reliability and efficiency throughout the competition.',
        'team.electrical.description': 'Our Electrical team designs and implements all electrical systems in the vehicle, from basic wiring harnesses to advanced control systems that monitor and optimize vehicle performance.',
        'team.suspension.description': 'The Suspension team develops the critical systems that connect our car to the road. We design suspension geometry and components that provide optimal handling, comfort, and performance.',
        'team.chassis.description': 'The Chassis team creates the structural foundation of our race car. We design a lightweight yet strong frame that protects the driver while providing optimal weight distribution and component mounting.',
        'team.aerodynamics.description': 'Our Aerodynamics team harnesses the power of airflow to enhance vehicle performance. We design wings, diffusers, and body panels that generate downforce while minimizing drag.',
        'team.vehicleDynamics.description': 'The Vehicle Dynamics team focuses on how all systems work together to create optimal vehicle behavior. We analyze and optimize the car handling characteristics and overall performance.',
        'team.embedded.description': 'The Embedded Systems team develops the intelligent software and hardware that brings our car to life. We create the digital brain that monitors, controls, and optimizes vehicle systems.',
        'team.admin.description': 'Our Admin and Finance team ensures the smooth operation of our organization. We manage budgets, coordinate logistics, and maintain relationships with sponsors and university administration.',
        'team.marketing.description': 'The Marketing team builds our brand and connects with the community. We create engaging content, manage social media presence, and develop materials that showcase our team achievements.',

        // Sub Teams Details
        'team.subTeams.powertrain.name': 'Powertrain',
        'team.subTeams.powertrain.description': 'The Powertrain team is responsible for the heart of our race car - the engine and transmission systems. We focus on maximizing power while ensuring reliability and efficiency throughout the competition.',
        'team.subTeams.powertrain.responsibilities.0': 'Engine selection, tuning and optimization',
        'team.subTeams.powertrain.responsibilities.1': 'Fuel injection system design and calibration',
        'team.subTeams.powertrain.responsibilities.2': 'Intake and exhaust system development',
        'team.subTeams.powertrain.responsibilities.3': 'Cooling system design and implementation',
        'team.subTeams.powertrain.responsibilities.4': 'Drivetrain design and differential setup',
        'team.subTeams.powertrain.responsibilities.5': 'Engine management system programming',
        
        'team.subTeams.electrical.name': 'Electrical',
        'team.subTeams.electrical.description': 'Our Electrical team designs and implements all electrical systems in the vehicle, from basic wiring harnesses to advanced control systems that monitor and optimize vehicle performance.',
        'team.subTeams.electrical.responsibilities.0': 'Wiring harness design and manufacturing',
        'team.subTeams.electrical.responsibilities.1': 'PCB design and component selection',
        'team.subTeams.electrical.responsibilities.2': 'Sensor integration and data acquisition',
        'team.subTeams.electrical.responsibilities.3': 'Power distribution system design',
        'team.subTeams.electrical.responsibilities.4': 'Dashboard and display systems',
        'team.subTeams.electrical.responsibilities.5': 'Safety system implementation',
        
        'team.subTeams.suspension.name': 'Suspension',
        'team.subTeams.suspension.description': 'The Suspension team develops the critical systems that connect our car to the road. We design suspension geometry and components that provide optimal handling, comfort, and performance.',
        'team.subTeams.suspension.responsibilities.0': 'Suspension geometry design and optimization',
        'team.subTeams.suspension.responsibilities.1': 'Shock absorber selection and tuning',
        'team.subTeams.suspension.responsibilities.2': 'Anti-roll bar design and implementation',
        'team.subTeams.suspension.responsibilities.3': 'Wheel and tire selection',
        'team.subTeams.suspension.responsibilities.4': 'Kinematic and compliance testing',
        'team.subTeams.suspension.responsibilities.5': 'Steering system design',
        
        'team.subTeams.chassis.name': 'Chassis',
        'team.subTeams.chassis.description': 'The Chassis team creates the structural foundation of our race car. We design a lightweight yet strong frame that protects the driver while providing optimal weight distribution and component mounting.',
        'team.subTeams.chassis.responsibilities.0': 'Space frame design and analysis',
        'team.subTeams.chassis.responsibilities.1': 'Material selection and optimization',
        'team.subTeams.chassis.responsibilities.2': 'Welding and fabrication processes',
        'team.subTeams.chassis.responsibilities.3': 'Safety structure implementation',
        'team.subTeams.chassis.responsibilities.4': 'Component mounting and integration',
        'team.subTeams.chassis.responsibilities.5': 'Weight distribution optimization',
        
        'team.subTeams.aerodynamics.name': 'Aerodynamics',
        'team.subTeams.aerodynamics.description': 'Our Aerodynamics team harnesses the power of airflow to enhance vehicle performance. We design wings, diffusers, and body panels that generate downforce while minimizing drag.',
        'team.subTeams.aerodynamics.responsibilities.0': 'Front and rear wing design',
        'team.subTeams.aerodynamics.responsibilities.1': 'Undertray and diffuser development',
        'team.subTeams.aerodynamics.responsibilities.2': 'Body panel optimization',
        'team.subTeams.aerodynamics.responsibilities.3': 'CFD analysis and simulation',
        'team.subTeams.aerodynamics.responsibilities.4': 'Wind tunnel testing',
        'team.subTeams.aerodynamics.responsibilities.5': 'Composite manufacturing',
        
        'team.subTeams.vehicleDynamics.name': 'Vehicle Dynamics',
        'team.subTeams.vehicleDynamics.description': 'The Vehicle Dynamics team focuses on how all systems work together to create optimal vehicle behavior. We analyze and optimize the car handling characteristics and overall performance.',
        'team.subTeams.vehicleDynamics.responsibilities.0': 'Vehicle simulation and modeling',
        'team.subTeams.vehicleDynamics.responsibilities.1': 'Tire testing and characterization',
        'team.subTeams.vehicleDynamics.responsibilities.2': 'Setup optimization for different events',
        'team.subTeams.vehicleDynamics.responsibilities.3': 'Data analysis and interpretation',
        'team.subTeams.vehicleDynamics.responsibilities.4': 'Driver feedback integration',
        'team.subTeams.vehicleDynamics.responsibilities.5': 'Performance prediction and validation',
        
        'team.subTeams.embedded.name': 'Embedded Systems',
        'team.subTeams.embedded.description': 'The Embedded Systems team develops the intelligent software and hardware that brings our car to life. We create the digital brain that monitors, controls, and optimizes vehicle systems.',
        'team.subTeams.embedded.responsibilities.0': 'Real-time system development',
        'team.subTeams.embedded.responsibilities.1': 'CAN bus communication protocols',
        'team.subTeams.embedded.responsibilities.2': 'Data logging system implementation',
        'team.subTeams.embedded.responsibilities.3': 'Telemetry system development',
        'team.subTeams.embedded.responsibilities.4': 'Driver interface programming',
        'team.subTeams.embedded.responsibilities.5': 'System integration and testing',
        
        'team.subTeams.admin.name': 'Administration',
        'team.subTeams.admin.description': 'Our Admin and Finance team ensures the smooth operation of our organization. We manage budgets, coordinate logistics, and maintain relationships with sponsors and university administration.',
        'team.subTeams.admin.responsibilities.0': 'Budget planning and financial management',
        'team.subTeams.admin.responsibilities.1': 'Sponsorship acquisition and management',
        'team.subTeams.admin.responsibilities.2': 'Competition logistics coordination',
        'team.subTeams.admin.responsibilities.3': 'Documentation and reporting',
        'team.subTeams.admin.responsibilities.4': 'Meeting planning and coordination',
        'team.subTeams.admin.responsibilities.5': 'University liaison and compliance',
        
        'team.subTeams.marketing.name': 'Marketing',
        'team.subTeams.marketing.description': 'The Marketing team builds our brand and connects with the community. We create engaging content, manage social media presence, and develop materials that showcase our team achievements.',
        'team.subTeams.marketing.responsibilities.0': 'Social media content creation and management',
        'team.subTeams.marketing.responsibilities.1': 'Photography and videography',
        'team.subTeams.marketing.responsibilities.2': 'Website development and maintenance',
        'team.subTeams.marketing.responsibilities.3': 'Sponsor presentation materials',
        'team.subTeams.marketing.responsibilities.4': 'Event documentation and promotion',
        'team.subTeams.marketing.responsibilities.5': 'Brand identity and merchandise design',
        
        // Common/General
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'common.readMore': 'Read More',
        'common.learnMore': 'Learn More',
        'common.viewMore': 'View More',
        'common.seeAll': 'See All',
        'common.back': 'Back',
        'common.next': 'Next',
        'common.previous': 'Previous',
        'common.submit': 'Submit',
        'common.cancel': 'Cancel',
        'common.close': 'Close',
        'common.open': 'Open',
        'common.save': 'Save',
        
        // Footer
        'footer.copyright': '© 2024 FSAE TEC. All rights reserved.',
        'footer.follow': 'Follow Us',
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contact Info',
        
        // Contact Modal
        'contact.modal.title': 'Get in Touch',
        'contact.modal.description': 'Have a question or want to learn more about our team? Send us a message and we\'ll get back to you soon.',
        'contact.info.title': 'Contact Information',
        'contact.info.email': 'Email Address',
        'contact.info.phone': 'Phone Number',
        'contact.info.office': 'Office Hours',
        'contact.info.location': 'Location',
        'contact.info.officeHours': 'Monday - Friday: 9:00 AM - 6:00 PM',
        'contact.info.response': 'We typically respond within 24 hours',
        'contact.form.name': 'Full Name',
        'contact.form.namePlaceholder': 'Enter your full name',
        'contact.form.email': 'Email Address',
        'contact.form.emailPlaceholder': 'Enter your email address',
        'contact.form.subject': 'Subject',
        'contact.form.subjectPlaceholder': 'What is this about?',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Tell us more about your inquiry...',
        'contact.form.send': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Message sent successfully! We\'ll get back to you soon.',
        'contact.form.error': 'Failed to send message. Please try again or contact us directly.',
        'contact.form.cancel': 'Cancel',
        
        // Sponsors Page
        'sponsors.title': 'Our Sponsors',
        'sponsors.subtitle': 'Partnering with industry leaders to drive innovation and excellence in Formula SAE racing.',
        'sponsors.partnership.title': 'Partner With Us',
        'sponsors.partnership.description': 'Join our mission to develop the next generation of automotive engineers. Your support helps us push the boundaries of innovation in Formula SAE racing.',
        'sponsors.partnership.cta': 'Become a Sponsor',
        'sponsors.visitWebsite': 'Visit Website',
        'sponsors.benefits.title': 'Partnership Benefits',
        'sponsors.benefits.description': 'Discover the value of partnering with FSAE TEC Racing.',
        'sponsors.benefits.branding': 'Brand Visibility',
        'sponsors.benefits.brandingDescription': 'Logo placement on our race car and team merchandise',
        'sponsors.benefits.networking': 'Networking',
        'sponsors.benefits.networkingDescription': 'Connect with future engineering talent',
        'sponsors.benefits.recruitment': 'Recruitment',
        'sponsors.benefits.recruitmentDescription': 'Access to skilled engineering students',
        'sponsors.benefits.innovation': 'Innovation',
        'sponsors.benefits.innovationDescription': 'Support cutting-edge automotive research',
        'sponsors.cta.title': 'Ready to Join Our Team?',
        'sponsors.cta.description': 'Partner with FSAE TEC Racing and be part of the future of automotive engineering.',
        'sponsors.cta.contact': 'Contact Us',
        'sponsors.cta.email': 'Send Email',
        
        // Individual Sponsors
        'sponsors.partners.title': 'Our Partners',
        'sponsors.partners.description': 'We are proud to work with these industry-leading companies that support our mission.',
        'sponsors.herramientasCumbres.description': 'Leading tool and equipment supplier supporting our technical operations.',
        'sponsors.autrodromoVirtual.description': 'Virtual racing circuit providing advanced simulation environments.',
        'sponsors.tacosMelany.description': 'Local food partner supporting our team during long engineering sessions.',
        'sponsors.puul.description': 'Innovative technology company providing cutting-edge solutions.',
        'sponsors.buusch.description': 'Technical equipment and parts supplier for racing applications.',
        'sponsors.ansys.description': 'Engineering simulation software for testing and optimization.',
        'sponsors.altair.description': 'Simulation and design technology company for advanced engineering.',
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.ourCars': 'Nuestros Autos',
        'nav.aboutFsae': 'Acerca de FSAE',
        'nav.ourTeam': 'Nuestro Equipo',
        'nav.sponsors': 'Patrocinadores',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.subtitle': 'Excelencia en Ingeniería. Innovación en Carreras. Líderes del Futuro.',
        'hero.welcome.message': 'Bienvenido al sitio oficial de FSAE TEC Racing.',
        'hero.welcome.tagline': 'Construimos, corremos e innovamos.',
        
        // Home Page
        'home.hero.title': 'Equipo de Carreras FSAE',
        'home.hero.subtitle': 'Excelencia en Ingeniería en Movimiento',
        'home.hero.description': 'Diseñando y construyendo autos de carreras estilo fórmula con pasión y precisión',
        'home.hero.cta': 'Conoce Más',
        'home.about.title': 'Acerca de Nosotros',
        'home.about.description': 'Somos un equipo apasionado de estudiantes de ingeniería dedicados a diseñar y construir autos de carreras estilo fórmula que compiten en competencias internacionales.',
        'home.welcome.title': 'Bienvenido a FSAE TEC',
        'home.welcome.description': 'Donde la innovación se encuentra con la competencia',
        'home.stats.cars': 'Autos Construidos',
        'home.stats.competitions': 'Competencias',
        'home.stats.awards': 'Premios Ganados',
        'home.stats.members': 'Miembros del Equipo',
        'home.technical.title': 'Subsistemas Técnicos',
        'home.technical.description': 'Nuestra experiencia en ingeniería abarca múltiples disciplinas, combinando innovación con precisión para crear autos de carrera ganadores de campeonatos',
        'home.technical.stats': 'Excelencia en Ingeniería',
        'home.technical.achievements': '5 Subsistemas • 40+ Ingenieros • 1000+ Horas',
        'home.admin.title': 'Equipo Administrativo',
        'home.admin.description': 'Liderazgo estratégico impulsando nuestro éxito a través de planificación meticulosa y ejecución profesional',
        'home.admin.stats': 'Excelencia en Liderazgo',
        'home.admin.achievements': '5 Áreas Centrales • Planificación Estratégica • Crecimiento Profesional',
        'home.closing.message': 'Juntos, somos más que un equipo estudiantil — somos una familia de carreras construyendo leyendas de ingeniería.',
        
        // Technical Subsystems Descriptions
        'home.subsystems.aerodynamics.description': 'Diseñando alas y carrocería que cortan el aire con precisión quirúrgica, optimizando carga aerodinámica y minimizando resistencia para máximo rendimiento en pista',
        'home.subsystems.aerodynamics.features': 'Análisis CFD • Pruebas en Túnel de Viento • Construcción de Fibra de Carbono',
        'home.subsystems.chassis.description': 'Diseñando una estructura liviana pero rígida que sirve como columna vertebral de nuestro auto de carrera, equilibrando resistencia con optimización de peso',
        'home.subsystems.chassis.features': 'Marco Espacial de Acero • Análisis FEA • Integración de Seguridad',
        'home.subsystems.powertrain.description': 'Desarrollando sistemas de propulsión de alto rendimiento que entregan potencia bruta con confiabilidad excepcional y eficiencia en pista',
        'home.subsystems.powertrain.features': 'Afinación de Motor • Transmisión • Sistemas de Combustible',
        'home.subsystems.electronics.description': 'Gestionando sistemas eléctricos complejos que controlan todo desde gestión del motor hasta adquisición de datos y seguridad del piloto',
        'home.subsystems.electronics.features': 'Programación ECU • Registro de Datos • Integración de Sensores',
        'home.subsystems.suspension.description': 'Ajustando finamente la geometría de suspensión y componentes para lograr características óptimas de agarre, equilibrio y manejo para carreras competitivas',
        'home.subsystems.suspension.features': 'Optimización de Geometría • Afinación de Amortiguadores • Pruebas y Validación',
        
        // Administration Team
        'home.admin.planning.name': 'Planificación Estratégica',
        'home.admin.planning.description': 'Orquestando cronogramas integrales de proyecto, asignación de recursos y seguimiento de hitos para asegurar ejecución fluida de nuestro programa de carreras',
        'home.admin.planning.responsibilities': 'Gestión de Cronogramas • Planificación de Recursos • Evaluación de Riesgos',
        'home.admin.marketing.name': 'Marketing y Alcance',
        'home.admin.marketing.description': 'Construyendo presencia de marca, gestionando relaciones con patrocinadores y mostrando nuestros logros a la comunidad de ingeniería automotriz',
        'home.admin.marketing.responsibilities': 'Desarrollo de Marca • Relaciones con Patrocinadores • Redes Sociales',
        'home.admin.costAnalysis.name': 'Análisis Financiero',
        'home.admin.costAnalysis.description': 'Optimizando asignación de presupuesto, rastreando gastos y asegurando soluciones costo-efectivas mientras mantenemos nuestra ventaja competitiva',
        'home.admin.costAnalysis.responsibilities': 'Planificación de Presupuesto • Seguimiento de Costos • Reportes Financieros',
        'home.admin.safety.name': 'Seguridad y Cumplimiento',
        'home.admin.safety.description': 'Manteniendo los más altos estándares de seguridad, asegurando cumplimiento regulatorio y protegiendo a nuestros miembros en todas las actividades',
        'home.admin.safety.responsibilities': 'Protocolos de Seguridad • Auditorías de Cumplimiento • Programas de Entrenamiento',
        'home.admin.projectManagement.name': 'Gestión de Proyectos',
        'home.admin.projectManagement.description': 'Coordinando equipos multifuncionales, gestionando entregables y asegurando que nuestros conceptos innovadores se conviertan en autos de carrera listos para campeonatos',
        'home.admin.projectManagement.responsibilities': 'Coordinación de Equipos • Control de Calidad • Gestión de Entregas',
        
        // Our Cars Page
        'cars.title': 'Nuestros Autos',
        'cars.subtitle': 'Innovación en Ingeniería a Través de los Años',
        'cars.description': 'Explora nuestro viaje de excelencia en ingeniería automotriz',
        'cars.current.title': 'Auto Actual',
        'cars.current.description': 'Nuestro último logro en ingeniería',
        'cars.previous.title': 'Autos Anteriores',
        'cars.specifications': 'Especificaciones',
        'cars.performance': 'Rendimiento',
        'cars.features': 'Características Principales',
        'cars.engine': 'Motor',
        'cars.weight': 'Peso',
        'cars.power': 'Potencia',
        'cars.topSpeed': 'Velocidad Máxima',
        'cars.subsystem.responsibilities': 'Responsabilidades Clave',
        'cars.subsystem.technologies': 'Tecnologías y Herramientas',
        'cars.subsystem.teamSize': 'Tamaño del Equipo',
        'cars.subsystem.members': 'Miembros',
        
        // Car Subsystems Details
        'cars.subsystems.chassis.description': 'Nuestro chasis está construido con materiales ligeros como aluminio y fibra de carbono para garantizar resistencia y rendimiento.',
        'cars.subsystems.chassis.detail1': 'Construcción de marco espacial de aluminio ligero',
        'cars.subsystems.chassis.detail2': 'Componentes de fibra de carbono para reducción de peso',
        'cars.subsystems.chassis.detail3': 'Optimizado para rigidez torsional',
        'cars.subsystems.chassis.detail4': 'Diseño validado por FEA para cumplimiento de seguridad',
        
        'cars.subsystems.aerodynamics.description': 'Diseñamos alas, difusores y paneles de carrocería personalizados para generar carga aerodinámica y reducir la resistencia.',
        'cars.subsystems.aerodynamics.detail1': 'Ensambles de alas delanteras y traseras personalizadas',
        'cars.subsystems.aerodynamics.detail2': 'Bandeja inferior y difusor para efecto suelo',
        'cars.subsystems.aerodynamics.detail3': 'Paneles de carrocería optimizados por CFD',
        'cars.subsystems.aerodynamics.detail4': 'Elementos aerodinámicos ajustables',
        
        'cars.subsystems.suspension.description': 'Ajustada para rendimiento y capacidad de ajuste para adaptarse a diferentes pistas.',
        'cars.subsystems.suspension.detail1': 'Doble horquilla delantera y trasera',
        'cars.subsystems.suspension.detail2': 'Amortiguadores y barras estabilizadoras ajustables',
        'cars.subsystems.suspension.detail3': 'Ensambles de montante y cubo personalizados',
        'cars.subsystems.suspension.detail4': 'Optimización cinemática para manejo',
        
        'cars.subsystems.powertrain.description': 'Ya sea de combustión o eléctrico, nuestro tren motriz está optimizado para aceleración, eficiencia y control.',
        'cars.subsystems.powertrain.detail1': 'Gestión de motor de alto rendimiento',
        'cars.subsystems.powertrain.detail2': 'Sistemas de admisión y escape personalizados',
        'cars.subsystems.powertrain.detail3': 'Relaciones de engranajes y diferencial optimizados',
        'cars.subsystems.powertrain.detail4': 'Inyección de combustible e ignición avanzadas',
        
        'cars.subsystems.electronics.description': 'Integramos sensores y ECUs personalizadas para registro de datos de precisión y sistemas de control.',
        'cars.subsystems.electronics.detail1': 'Programación y calibración de ECU personalizada',
        'cars.subsystems.electronics.detail2': 'Integración avanzada de sensores',
        'cars.subsystems.electronics.detail3': 'Telemetría en tiempo real y registro de datos',
        'cars.subsystems.electronics.detail4': 'Interfaces de pantalla y control del conductor',
        
        // Development Phases
        'cars.development.title': 'Proceso de Desarrollo',
        'cars.development.description': 'Nos enorgullecemos de diseñar, simular, fabricar, ensamblar y probar cada componente nosotros mismos',
        'cars.development.engineering.title': 'Excelencia en Ingeniería',
        'cars.development.engineering.description': 'Cada componente está meticulosamente diseñado y optimizado para el máximo rendimiento',
        
        'cars.phases.design.name': 'Diseño',
        'cars.phases.design.description': 'Modelado CAD y simulación',
        'cars.phases.simulate.name': 'Simular',
        'cars.phases.simulate.description': 'Análisis FEA, CFD y de rendimiento',
        'cars.phases.manufacture.name': 'Fabricar',
        'cars.phases.manufacture.description': 'Mecanizado de precisión y fabricación',
        'cars.phases.assemble.name': 'Ensamblar',
        'cars.phases.assemble.description': 'Integración y ensamblaje de componentes',
        'cars.phases.test.name': 'Probar',
        'cars.phases.test.description': 'Pruebas en pista y optimización',
        
        // Status
        'cars.status.complete': 'Completo',
        'cars.status.inProgress': 'En Progreso',
        'cars.status.upcoming': 'Próximo',
        
        // Innovation Section
        'cars.innovation.title': 'Innovación en Movimiento',
        'cars.innovation.description': 'Cada perno, cada línea de código, cada soldadura representa nuestro compromiso de empujar los límites de lo que es posible en las carreras de Formula SAE.',
        'cars.badge.subsystem': 'Subsistema',
        
        // About FSAE Page
        'fsae.title': 'Acerca de FSAE',
        'fsae.subtitle': 'Sociedad de Fórmula de Ingenieros Automotrices',
        'fsae.description': 'FSAE es una competencia internacional de diseño donde estudiantes universitarios diseñan, construyen y corren pequeños autos estilo fórmula.',
        'fsae.mission.title': 'Nuestra Misión',
        'fsae.mission.description': 'Brindar a los estudiantes experiencia práctica en ingeniería y diseño automotriz',
        'fsae.competition.title': 'Eventos de Competencia',
        'fsae.competition.acceleration': 'Aceleración',
        'fsae.competition.skidpad': 'Skid Pad',
        'fsae.competition.autocross': 'Autocross',
        'fsae.competition.endurance': 'Resistencia',
        'fsae.competition.design': 'Evento de Diseño',
        'fsae.rules.title': 'Reglas y Regulaciones',
        'fsae.history.title': 'Nuestra Historia',
        'fsae.history.description': 'Conoce nuestro viaje en las competencias FSAE',
        
        // About FSAE Additional Content
        'fsae.mission.extended': 'FSAE desafía a los estudiantes a innovar y construir autos estilo fórmula, fomentando la creatividad y habilidades prácticas de ingeniería esenciales para el éxito en el campo.',
        'fsae.competition.description': 'Los eventos incluyen desafíos estáticos (diseño, costo, negocios) y dinámicos (aceleración, resistencia). Los equipos gestionan tren motriz, aerodinámica y funciones de negocios.',
        'fsae.education.title': 'Impacto Educativo',
        'fsae.education.description': 'Los estudiantes aplican conceptos de aula a desafíos del mundo real, desarrollan habilidades blandas y obtienen exposición a herramientas y expertos de la industria, preparándolos para carreras en empresas destacadas.',
        'fsae.global.title': 'Alcance Global e Impacto en Carrera',
        'fsae.global.description': 'Celebrado mundialmente en ubicaciones como EE.UU., Alemania e India, FSAE fomenta habilidades críticas y conecta estudiantes con empresas destacadas como Tesla, Red Bull Racing y Bosch.',
        
        // Our Team Page
        'team.title': 'Nuestro Equipo',
        'team.subtitle': 'Conoce a los Ingenieros Detrás de la Máquina',
        'team.description': 'Nuestro diverso equipo de ingenieros apasionados trabajando juntos',
        'team.leadership.title': 'Liderazgo',
        'team.subsystems.title': 'Equipos de Subsistemas',
        'team.subsystems.chassis': 'Chasis',
        'team.subsystems.powertrain': 'Tren Motriz',
        'team.subsystems.suspension': 'Suspensión',
        'team.subsystems.aerodynamics': 'Aerodinámica',
        'team.subsystems.electronics': 'Electrónica',
        'team.subsystems.manufacturing': 'Manufactura',
        'team.roles.title': 'Roles del Equipo',
        'team.join.title': 'Únete a Nuestro Equipo',
        'team.join.description': '¿Interesado en unirte? Damos la bienvenida a estudiantes apasionados de todas las disciplinas de ingeniería.',
        'team.alumni.title': 'Egresados',
        'team.alumni.description': 'Nuestros ex miembros causando impacto en la industria',
        'team.clickToLearn': 'Haz clic para conocer más',
        
        // Main Team Information
        'team.main.name': 'EQUIPO DE CARRERAS FSAE TEC',
        'team.main.description': 'FSAE TEC Racing es una organización estudiantil multidisciplinaria en el Tecnológico de Monterrey dedicada a diseñar, construir y correr vehículos estilo fórmula. Nuestro equipo reúne estudiantes apasionados de ingeniería, negocios y otras disciplinas para competir en competencias Formula SAE mundialmente.',
        'team.main.mission': 'Brindar a los estudiantes experiencia práctica en ingeniería mientras fomentamos la innovación, trabajo en equipo y excelencia en diseño automotriz. Buscamos cerrar la brecha entre la teoría académica y la aplicación del mundo real, preparando a nuestros miembros para carreras exitosas en las industrias automotriz y de deportes motorizados.',
        'team.main.values.0': 'Innovación y mejora continua en todos los aspectos del diseño vehicular',
        'team.main.values.1': 'Colaboración y trabajo en equipo a través de múltiples disciplinas de ingeniería',
        'team.main.values.2': 'Excelencia en ejecución y atención al detalle',
        'team.main.values.3': 'Seguridad como nuestra máxima prioridad en todas las actividades',
        'team.main.values.4': 'Sostenibilidad y prácticas de ingeniería responsables',
        'team.main.values.5': 'Compartir conocimiento y mentoría dentro del equipo',
        'team.main.values.6': 'Representar al Tecnológico de Monterrey con orgullo y profesionalismo',
        'team.main.achievements.0': '2023 Formula SAE Michigan - Top 15 Posición General',
        'team.main.achievements.1': '2023 Premio Mejor Presentación - Evento de Negocios',
        'team.main.achievements.2': '2022 Premio de Innovación - Paquete Aerodinámico',
        'team.main.achievements.3': '2022 Formula SAE Lincoln - Top 20 Eventos Dinámicos',
        'team.main.achievements.4': '2021 Competencia Virtual - 3er Lugar Evento de Costos',
        'team.main.achievements.5': 'Múltiples logros académicos en Lista del Decano por miembros del equipo',
        'team.main.achievements.6': 'Asociación con patrocinadores líderes de la industria automotriz',
        
        // Modal Labels
        'team.modal.about': 'Acerca de Nuestro Equipo',
        'team.modal.aboutTeam': 'Acerca de Nuestro Equipo',
        'team.modal.mission': 'Nuestra Misión',
        'team.modal.values': 'Nuestros Valores',
        'team.modal.achievements': 'Logros Recientes',
        'team.modal.totalMembers': 'Total de Miembros',
        'team.modal.founded': 'Fundado',
        'team.modal.students': 'Estudiantes',
        'team.modal.responsibilities': 'Responsabilidades Clave',
        'team.modal.technologies': 'Tecnologías y Herramientas',
        'team.modal.members': 'Miembros del Equipo',
        
        // Sub Teams
        'team.powertrain.description': 'El equipo de Tren Motriz es responsable del corazón de nuestro auto de carreras - el motor y sistemas de transmisión. Nos enfocamos en maximizar la potencia mientras aseguramos confiabilidad y eficiencia durante toda la competencia.',
        'team.electrical.description': 'Nuestro equipo Eléctrico diseña e implementa todos los sistemas eléctricos del vehículo, desde arneses de cableado básicos hasta sistemas de control avanzados que monitorean y optimizan el rendimiento del vehículo.',
        'team.suspension.description': 'El equipo de Suspensión desarrolla los sistemas críticos que conectan nuestro auto al camino. Diseñamos geometría de suspensión y componentes que proporcionan manejo, comodidad y rendimiento óptimos.',
        'team.chassis.description': 'El equipo de Chasis crea la base estructural de nuestro auto de carreras. Diseñamos un marco ligero pero fuerte que protege al conductor mientras proporciona distribución óptima de peso y montaje de componentes.',
        'team.aerodynamics.description': 'Nuestro equipo de Aerodinámica aprovecha el poder del flujo de aire para mejorar el rendimiento del vehículo. Diseñamos alas, difusores y paneles de carrocería que generan carga aerodinámica mientras minimizan la resistencia.',
        'team.vehicleDynamics.description': 'El equipo de Dinámica Vehicular se enfoca en cómo todos los sistemas trabajan juntos para crear comportamiento vehicular óptimo. Analizamos y optimizamos las características de manejo y rendimiento general del auto.',
        'team.embedded.description': 'El equipo de Sistemas Embebidos desarrolla el software y hardware inteligente que da vida a nuestro auto. Creamos el cerebro digital que monitorea, controla y optimiza los sistemas del vehículo.',
        'team.admin.description': 'Nuestro equipo Administrativo y de Finanzas asegura el funcionamiento fluido de nuestra organización. Gestionamos presupuestos, coordinamos logística y mantenemos relaciones con patrocinadores y administración universitaria.',
        'team.marketing.description': 'El equipo de Marketing construye nuestra marca y se conecta con la comunidad. Creamos contenido atractivo, gestionamos presencia en redes sociales y desarrollamos materiales que muestran los logros de nuestro equipo.',

        // Sub Teams Details - Spanish
        'team.subTeams.powertrain.name': 'Tren Motriz',
        'team.subTeams.powertrain.description': 'El equipo de Tren Motriz es responsable del corazón de nuestro auto de carreras - el motor y sistemas de transmisión. Nos enfocamos en maximizar la potencia mientras aseguramos confiabilidad y eficiencia durante toda la competencia.',
        'team.subTeams.powertrain.responsibilities.0': 'Selección, afinación y optimización del motor',
        'team.subTeams.powertrain.responsibilities.1': 'Diseño y calibración del sistema de inyección de combustible',
        'team.subTeams.powertrain.responsibilities.2': 'Desarrollo de sistemas de admisión y escape',
        'team.subTeams.powertrain.responsibilities.3': 'Diseño e implementación del sistema de enfriamiento',
        'team.subTeams.powertrain.responsibilities.4': 'Diseño del tren motriz y configuración del diferencial',
        'team.subTeams.powertrain.responsibilities.5': 'Programación del sistema de gestión del motor',
        
        'team.subTeams.electrical.name': 'Eléctrico',
        'team.subTeams.electrical.description': 'Nuestro equipo Eléctrico diseña e implementa todos los sistemas eléctricos del vehículo, desde arneses de cableado básicos hasta sistemas de control avanzados que monitorean y optimizan el rendimiento del vehículo.',
        'team.subTeams.electrical.responsibilities.0': 'Diseño y fabricación de arneses de cableado',
        'team.subTeams.electrical.responsibilities.1': 'Diseño de PCB y selección de componentes',
        'team.subTeams.electrical.responsibilities.2': 'Integración de sensores y adquisición de datos',
        'team.subTeams.electrical.responsibilities.3': 'Diseño del sistema de distribución de energía',
        'team.subTeams.electrical.responsibilities.4': 'Sistemas de tablero y visualización',
        'team.subTeams.electrical.responsibilities.5': 'Implementación de sistemas de seguridad',
        
        'team.subTeams.suspension.name': 'Suspensión',
        'team.subTeams.suspension.description': 'El equipo de Suspensión desarrolla los sistemas críticos que conectan nuestro auto al camino. Diseñamos geometría de suspensión y componentes que proporcionan manejo, comodidad y rendimiento óptimos.',
        'team.subTeams.suspension.responsibilities.0': 'Diseño y optimización de geometría de suspensión',
        'team.subTeams.suspension.responsibilities.1': 'Selección y afinación de amortiguadores',
        'team.subTeams.suspension.responsibilities.2': 'Diseño e implementación de barras estabilizadoras',
        'team.subTeams.suspension.responsibilities.3': 'Selección de ruedas y neumáticos',
        'team.subTeams.suspension.responsibilities.4': 'Pruebas cinemáticas y de conformidad',
        'team.subTeams.suspension.responsibilities.5': 'Diseño del sistema de dirección',
        
        'team.subTeams.chassis.name': 'Chasis',
        'team.subTeams.chassis.description': 'El equipo de Chasis crea la base estructural de nuestro auto de carreras. Diseñamos un marco liviano pero fuerte que protege al conductor mientras proporciona distribución óptima de peso y montaje de componentes.',
        'team.subTeams.chassis.responsibilities.0': 'Diseño y análisis de marco espacial',
        'team.subTeams.chassis.responsibilities.1': 'Selección y optimización de materiales',
        'team.subTeams.chassis.responsibilities.2': 'Procesos de soldadura y fabricación',
        'team.subTeams.chassis.responsibilities.3': 'Implementación de estructura de seguridad',
        'team.subTeams.chassis.responsibilities.4': 'Montaje e integración de componentes',
        'team.subTeams.chassis.responsibilities.5': 'Optimización de distribución de peso',
        
        'team.subTeams.aerodynamics.name': 'Aerodinámica',
        'team.subTeams.aerodynamics.description': 'Nuestro equipo de Aerodinámica aprovecha el poder del flujo de aire para mejorar el rendimiento del vehículo. Diseñamos alas, difusores y paneles de carrocería que generan carga aerodinámica mientras minimizan la resistencia.',
        'team.subTeams.aerodynamics.responsibilities.0': 'Diseño de alas delanteras y traseras',
        'team.subTeams.aerodynamics.responsibilities.1': 'Desarrollo de bandeja inferior y difusor',
        'team.subTeams.aerodynamics.responsibilities.2': 'Optimización de paneles de carrocería',
        'team.subTeams.aerodynamics.responsibilities.3': 'Análisis y simulación CFD',
        'team.subTeams.aerodynamics.responsibilities.4': 'Pruebas en túnel de viento',
        'team.subTeams.aerodynamics.responsibilities.5': 'Manufactura de compuestos',
        
        'team.subTeams.vehicleDynamics.name': 'Dinámica Vehicular',
        'team.subTeams.vehicleDynamics.description': 'El equipo de Dinámica Vehicular se enfoca en cómo todos los sistemas trabajan juntos para crear comportamiento vehicular óptimo. Analizamos y optimizamos las características de manejo y rendimiento general del auto.',
        'team.subTeams.vehicleDynamics.responsibilities.0': 'Simulación y modelado vehicular',
        'team.subTeams.vehicleDynamics.responsibilities.1': 'Pruebas y caracterización de neumáticos',
        'team.subTeams.vehicleDynamics.responsibilities.2': 'Optimización de configuración para diferentes eventos',
        'team.subTeams.vehicleDynamics.responsibilities.3': 'Análisis e interpretación de datos',
        'team.subTeams.vehicleDynamics.responsibilities.4': 'Integración de retroalimentación del piloto',
        'team.subTeams.vehicleDynamics.responsibilities.5': 'Predicción y validación de rendimiento',
        
        'team.subTeams.embedded.name': 'Sistemas Embebidos',
        'team.subTeams.embedded.description': 'El equipo de Sistemas Embebidos desarrolla el software y hardware inteligente que da vida a nuestro auto. Creamos el cerebro digital que monitorea, controla y optimiza los sistemas del vehículo.',
        'team.subTeams.embedded.responsibilities.0': 'Desarrollo de sistemas en tiempo real',
        'team.subTeams.embedded.responsibilities.1': 'Protocolos de comunicación CAN bus',
        'team.subTeams.embedded.responsibilities.2': 'Implementación de sistema de registro de datos',
        'team.subTeams.embedded.responsibilities.3': 'Desarrollo de sistema de telemetría',
        'team.subTeams.embedded.responsibilities.4': 'Programación de interfaz del conductor',
        'team.subTeams.embedded.responsibilities.5': 'Integración y pruebas de sistemas',
        
        'team.subTeams.admin.name': 'Administración',
        'team.subTeams.admin.description': 'Nuestro equipo Administrativo y de Finanzas asegura el funcionamiento fluido de nuestra organización. Gestionamos presupuestos, coordinamos logística y mantenemos relaciones con patrocinadores y administración universitaria.',
        'team.subTeams.admin.responsibilities.0': 'Planificación presupuestaria y gestión financiera',
        'team.subTeams.admin.responsibilities.1': 'Adquisición y gestión de patrocinios',
        'team.subTeams.admin.responsibilities.2': 'Coordinación de logística de competencias',
        'team.subTeams.admin.responsibilities.3': 'Documentación y reportes',
        'team.subTeams.admin.responsibilities.4': 'Planificación y coordinación de reuniones',
        'team.subTeams.admin.responsibilities.5': 'Enlace universitario y cumplimiento',
        
        'team.subTeams.marketing.name': 'Marketing',
        'team.subTeams.marketing.description': 'El equipo de Marketing construye nuestra marca y se conecta con la comunidad. Creamos contenido atractivo, gestionamos presencia en redes sociales y desarrollamos materiales que muestran los logros de nuestro equipo.',
        'team.subTeams.marketing.responsibilities.0': 'Creación y gestión de contenido para redes sociales',
        'team.subTeams.marketing.responsibilities.1': 'Fotografía y videografía',
        'team.subTeams.marketing.responsibilities.2': 'Desarrollo y mantenimiento del sitio web',
        'team.subTeams.marketing.responsibilities.3': 'Materiales de presentación para patrocinadores',
        'team.subTeams.marketing.responsibilities.4': 'Documentación y promoción de eventos',
        'team.subTeams.marketing.responsibilities.5': 'Diseño de identidad de marca y mercancía',
        
        // Common/General
        'common.loading': 'Cargando...',
        'common.error': 'Error',
        'common.readMore': 'Leer Más',
        'common.learnMore': 'Conoce Más',
        'common.viewMore': 'Ver Más',
        'common.seeAll': 'Ver Todo',
        'common.back': 'Atrás',
        'common.next': 'Siguiente',
        'common.previous': 'Anterior',
        'common.submit': 'Enviar',
        'common.cancel': 'Cancelar',
        'common.close': 'Cerrar',
        'common.open': 'Abrir',
        'common.save': 'Guardar',
        
        // Footer
        'footer.copyright': '© 2024 FSAE TEC. Todos los derechos reservados.',
        'footer.follow': 'Síguenos',
        'footer.quickLinks': 'Enlaces Rápidos',
        'footer.contact': 'Información de Contacto',
        
        // Contact Modal
        'contact.modal.title': 'Contáctanos',
        'contact.modal.description': '¿Tienes una pregunta o quieres saber más sobre nuestro equipo? Envíanos un mensaje y te responderemos pronto.',
        'contact.info.title': 'Información de Contacto',
        'contact.info.email': 'Correo Electrónico',
        'contact.info.phone': 'Número de Teléfono',
        'contact.info.office': 'Horario de Oficina',
        'contact.info.location': 'Ubicación',
        'contact.info.officeHours': 'Lunes - Viernes: 9:00 AM - 6:00 PM',
        'contact.info.response': 'Normalmente respondemos en 24 horas',
        'contact.form.name': 'Nombre Completo',
        'contact.form.namePlaceholder': 'Ingresa tu nombre completo',
        'contact.form.email': 'Correo Electrónico',
        'contact.form.emailPlaceholder': 'Ingresa tu correo electrónico',
        'contact.form.subject': 'Asunto',
        'contact.form.subjectPlaceholder': '¿De qué se trata?',
        'contact.form.message': 'Mensaje',
        'contact.form.messagePlaceholder': 'Cuéntanos más sobre tu consulta...',
        'contact.form.send': 'Enviar Mensaje',
        'contact.form.sending': 'Enviando...',
        'contact.form.success': 'Mensaje enviado exitosamente! Te contactaremos pronto.',
        'contact.form.error': 'Error al enviar mensaje. Inténtalo de nuevo o contáctanos directamente.',
        'contact.form.cancel': 'Cancelar',
        
        // Sponsors Page
        'sponsors.title': 'Nuestros Patrocinadores',
        'sponsors.subtitle': 'Colaborando con líderes de la industria para impulsar la innovación y excelencia en las carreras de Formula SAE.',
        'sponsors.partnership.title': 'Asóciate con Nosotros',
        'sponsors.partnership.description': 'Únete a nuestra misión de desarrollar la próxima generación de ingenieros automotrices. Tu apoyo nos ayuda a empujar los límites de la innovación en las carreras de Formula SAE.',
        'sponsors.partnership.cta': 'Conviértete en Patrocinador',
        'sponsors.visitWebsite': 'Visitar Sitio Web',
        'sponsors.benefits.title': 'Beneficios de la Asociación',
        'sponsors.benefits.description': 'Descubre el valor de asociarte con FSAE TEC Racing.',
        'sponsors.benefits.branding': 'Visibilidad de Marca',
        'sponsors.benefits.brandingDescription': 'Colocación de logo en nuestro auto de carreras y mercancía del equipo',
        'sponsors.benefits.networking': 'Networking',
        'sponsors.benefits.networkingDescription': 'Conecta con futuros talentos de ingeniería',
        'sponsors.benefits.recruitment': 'Reclutamiento',
        'sponsors.benefits.recruitmentDescription': 'Acceso a estudiantes de ingeniería capacitados',
        'sponsors.benefits.innovation': 'Innovación',
        'sponsors.benefits.innovationDescription': 'Apoya la investigación automotriz de vanguardia',
        'sponsors.cta.title': '¿Listo para Unirte a Nuestro Equipo?',
        'sponsors.cta.description': 'Asóciate con FSAE TEC Racing y sé parte del futuro de la ingeniería automotriz.',
        'sponsors.cta.contact': 'Contáctanos',
        'sponsors.cta.email': 'Enviar Email',
        
        // Individual Sponsors
        'sponsors.partners.title': 'Nuestros Socios',
        'sponsors.partners.description': 'Estamos orgullosos de trabajar con estas empresas líderes en la industria que apoyan nuestra misión.',
        'sponsors.herramientasCumbres.description': 'Proveedor líder de herramientas y equipos que apoya nuestras operaciones técnicas.',
        'sponsors.autrodromoVirtual.description': 'Circuito de carreras virtual que proporciona entornos de simulación avanzados.',
        'sponsors.tacosMelany.description': 'Socio alimentario local que apoya a nuestro equipo durante largas sesiones de ingeniería.',
        'sponsors.puul.description': 'Empresa de tecnología innovadora que proporciona soluciones de vanguardia.',
        'sponsors.buusch.description': 'Proveedor de equipos técnicos y piezas para aplicaciones de carreras.',
        'sponsors.ansys.description': 'Software de simulación de ingeniería para pruebas y optimización.',
        'sponsors.altair.description': 'Empresa de tecnología de simulación y diseño para ingeniería avanzada.',
    },
};

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>('en');

    // Function that saves language preference to localStorage
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
            setLanguage(savedLanguage);
        }
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'es' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage); // Save to localStorage
    };

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['en']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
