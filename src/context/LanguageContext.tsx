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
        'home.technical.description': 'Our engineering expertise spans multiple disciplines',
        'home.admin.title': 'Administration Team',
        'home.admin.description': 'Strategic leadership driving our success',
        'home.closing.message': 'Together, we are more than just a student team — we are a racing family building engineering legends.',
        
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
        
        // Sponsors Page
        'sponsors.title': 'Our Sponsors',
        'sponsors.subtitle': 'Partners in Innovation',
        'sponsors.description': 'We are grateful for the support of our sponsors who make our racing dreams possible.',
        'sponsors.tiers.platinum': 'Platinum Sponsors',
        'sponsors.tiers.gold': 'Gold Sponsors',
        'sponsors.tiers.silver': 'Silver Sponsors',
        'sponsors.tiers.bronze': 'Bronze Sponsors',
        'sponsors.benefits.title': 'Sponsorship Benefits',
        'sponsors.become.title': 'Become a Sponsor',
        'sponsors.become.description': 'Partner with us to support the next generation of automotive engineers.',
        'sponsors.contact': 'Contact for Sponsorship',
        'sponsors.package.title': 'Sponsorship Packages',
        
        // Contact Page
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get in Touch',
        'contact.description': 'Have questions? We\'d love to hear from you.',
        'contact.info.title': 'Contact Information',
        'contact.info.address': 'Address',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Phone',
        'contact.form.title': 'Send us a Message',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.send': 'Send Message',
        'contact.social.title': 'Follow Us',
        'contact.location.title': 'Our Location',
        
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
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.ourCars': 'Nuestros Autos',
        'nav.aboutFsae': 'Acerca de FSAE',
        'nav.ourTeam': 'Nuestro Equipo',
        'nav.sponsors': 'Patrocinadores',
        'nav.contact': 'Contacto',
        
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
        'home.technical.description': 'Nuestra experiencia en ingeniería abarca múltiples disciplinas',
        'home.admin.title': 'Equipo Administrativo',
        'home.admin.description': 'Liderazgo estratégico impulsando nuestro éxito',
        'home.closing.message': 'Juntos, somos más que un equipo estudiantil — somos una familia de carreras construyendo leyendas de ingeniería.',
        
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
        
        // Sponsors Page
        'sponsors.title': 'Nuestros Patrocinadores',
        'sponsors.subtitle': 'Socios en Innovación',
        'sponsors.description': 'Estamos agradecidos por el apoyo de nuestros patrocinadores que hacen posibles nuestros sueños de carreras.',
        'sponsors.tiers.platinum': 'Patrocinadores Platino',
        'sponsors.tiers.gold': 'Patrocinadores Oro',
        'sponsors.tiers.silver': 'Patrocinadores Plata',
        'sponsors.tiers.bronze': 'Patrocinadores Bronce',
        'sponsors.benefits.title': 'Beneficios del Patrocinio',
        'sponsors.become.title': 'Conviértete en Patrocinador',
        'sponsors.become.description': 'Asóciate con nosotros para apoyar a la próxima generación de ingenieros automotrices.',
        'sponsors.contact': 'Contacto para Patrocinio',
        'sponsors.package.title': 'Paquetes de Patrocinio',
        
        // Contact Page
        'contact.title': 'Contáctanos',
        'contact.subtitle': 'Ponte en Contacto',
        'contact.description': '¿Tienes preguntas? Nos encantaría saber de ti.',
        'contact.info.title': 'Información de Contacto',
        'contact.info.address': 'Dirección',
        'contact.info.email': 'Correo Electrónico',
        'contact.info.phone': 'Teléfono',
        'contact.form.title': 'Envíanos un Mensaje',
        'contact.form.name': 'Nombre',
        'contact.form.email': 'Correo Electrónico',
        'contact.form.subject': 'Asunto',
        'contact.form.message': 'Mensaje',
        'contact.form.send': 'Enviar Mensaje',
        'contact.social.title': 'Síguenos',
        'contact.location.title': 'Nuestra Ubicación',
        
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
