'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  MdEngineering, 
  MdElectricBolt, 
  MdSpeed, 
  MdBuild, 
  MdAir,
  MdScience,
  MdComputer,
  MdAccountBalance,
  MdCampaign,
  MdGroup,
  MdClose
} from 'react-icons/md';

interface SubTeam {
  name: string;
  image: string;
  route: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  icon: React.ElementType;
}

interface MainTeam {
  name: string;
  image: string;
  description: string;
  mission: string;
  values: string[];
  totalMembers: number;
  founded: string;
  icon: React.ElementType;
}

interface TeamModalProps {
  team: SubTeam | null;
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

interface MainTeamModalProps {
  team: MainTeam | null;
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

function MainTeamModal({ team, isOpen, onClose, t }: MainTeamModalProps) {
  if (!isOpen || !team) return null;

  const IconComponent = team.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
        >
          <MdClose className="text-xl" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <IconComponent className="text-red-600 text-6xl mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {team.name}
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>

          {/* Team Image */}
          <div className="mb-8">
            <Image
              src={team.image}
              alt={team.name}
              width={1000}
              height={500}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>

          {/* Team Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">{t('team.modal.aboutTeam')}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {team.description}
            </p>
          </div>

          {/* Mission */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">{t('team.modal.mission')}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {team.mission}
            </p>
          </div>

          {/* Values */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">{t('team.modal.values')}</h3>
            <ul className="space-y-2">
              {team.values.map((value, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-600 font-semibold">{t('team.modal.totalMembers')}</p>
                <p className="text-gray-900 dark:text-white text-2xl font-bold">{team.totalMembers}+ {t('team.modal.students')}</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-600 font-semibold">{t('team.modal.founded')}</p>
                <p className="text-gray-900 dark:text-white text-2xl font-bold">{team.founded}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamModal({ team, isOpen, onClose, t }: TeamModalProps) {
  if (!isOpen || !team) return null;

  const IconComponent = team.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
        >
          <MdClose className="text-xl" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <IconComponent className="text-red-600 text-6xl mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {team.name}
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>

          {/* Team Image */}
          <div className="mb-8">
            <Image
              src={team.image}
              alt={team.name}
              width={800}
              height={400}
              className="w-full h-64 md:h-80 object-cover rounded-xl"
            />
          </div>

          {/* Team Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">{t('team.modal.about')} {team.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {team.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">{t('team.modal.responsibilities')}</h3>
            <ul className="space-y-2">
              {team.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">{t('team.modal.technologies')}</h3>
            <div className="flex flex-wrap gap-2">
              {team.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-red-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const { t } = useLanguage();
  const [selectedTeam, setSelectedTeam] = useState<SubTeam | null>(null);
  const [selectedMainTeam, setSelectedMainTeam] = useState<MainTeam | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMainTeamModalOpen, setIsMainTeamModalOpen] = useState(false);

  const mainTeamData: MainTeam = {
    name: t('team.main.name'),
    image: '/team_fsae.JPG',
    icon: MdGroup,
    description: t('team.main.description'),
    mission: t('team.main.mission'),
    values: [
      t('team.main.values.0'),
      t('team.main.values.1'),
      t('team.main.values.2'),
      t('team.main.values.3'),
      t('team.main.values.4'),
      t('team.main.values.5'),
      t('team.main.values.6')
    ],
    totalMembers: 60,
    founded: '2018'
  };

  const subTeams: SubTeam[] = [
    {
      name: t('team.subTeams.powertrain.name'),
      image: '/team_fsae.JPG',
      route: '/our-team/powertrain',
      icon: MdEngineering,
      description: t('team.subTeams.powertrain.description'),
      responsibilities: [
        t('team.subTeams.powertrain.responsibilities.0'),
        t('team.subTeams.powertrain.responsibilities.1'),
        t('team.subTeams.powertrain.responsibilities.2'),
        t('team.subTeams.powertrain.responsibilities.3'),
        t('team.subTeams.powertrain.responsibilities.4'),
        t('team.subTeams.powertrain.responsibilities.5')
      ],
      technologies: ['Engine Dyno', 'CAD Design', 'MATLAB/Simulink', 'Data Acquisition', 'Fuel Injection Systems']
    },
    {
      name: t('team.subTeams.electrical.name'),
      image: '/team_fsae.JPG',
      route: '/our-team/electrical',
      icon: MdElectricBolt,
      description: t('team.subTeams.electrical.description'),
      responsibilities: [
        t('team.subTeams.electrical.responsibilities.0'),
        t('team.subTeams.electrical.responsibilities.1'),
        t('team.subTeams.electrical.responsibilities.2'),
        t('team.subTeams.electrical.responsibilities.3'),
        t('team.subTeams.electrical.responsibilities.4'),
        t('team.subTeams.electrical.responsibilities.5')
      ],
      technologies: ['Altium Designer', 'Arduino/Microcontrollers', 'CAN Bus', 'LabVIEW', 'Oscilloscopes', 'Multimeters']
    },
    {
      name: t('team.subTeams.suspension.name'),
      image: '/chassis.JPG',
      route: '/our-team/suspension',
      icon: MdSpeed,
      description: t('team.subTeams.suspension.description'),
      responsibilities: [
        t('team.subTeams.suspension.responsibilities.0'),
        t('team.subTeams.suspension.responsibilities.1'),
        t('team.subTeams.suspension.responsibilities.2'),
        t('team.subTeams.suspension.responsibilities.3'),
        t('team.subTeams.suspension.responsibilities.4'),
        t('team.subTeams.suspension.responsibilities.5')
      ],
      technologies: ['ANSYS', 'SolidWorks', 'OptimumK', 'Vehicle Dynamics Simulation', 'Data Acquisition']
    },
    {
      name: t('team.subTeams.chassis.name'),
      image: '/chassis.JPG',
      route: '/our-team/chassis',
      icon: MdBuild,
      description: t('team.subTeams.chassis.description'),
      responsibilities: [
        t('team.subTeams.chassis.responsibilities.0'),
        t('team.subTeams.chassis.responsibilities.1'),
        t('team.subTeams.chassis.responsibilities.2'),
        t('team.subTeams.chassis.responsibilities.3'),
        t('team.subTeams.chassis.responsibilities.4'),
        t('team.subTeams.chassis.responsibilities.5')
      ],
      technologies: ['SolidWorks', 'ANSYS Structural', 'Welding Equipment', 'Tube Bending', 'FEA Analysis']
    },
    {
      name: t('team.subTeams.aerodynamics.name'),
      image: '/team_fsae.JPG',
      route: '/our-team/aerodynamics',
      icon: MdAir,
      description: t('team.subTeams.aerodynamics.description'),
      responsibilities: [
        t('team.subTeams.aerodynamics.responsibilities.0'),
        t('team.subTeams.aerodynamics.responsibilities.1'),
        t('team.subTeams.aerodynamics.responsibilities.2'),
        t('team.subTeams.aerodynamics.responsibilities.3'),
        t('team.subTeams.aerodynamics.responsibilities.4'),
        t('team.subTeams.aerodynamics.responsibilities.5')
      ],
      technologies: ['ANSYS Fluent', 'SolidWorks Flow Simulation', 'Wind Tunnel', 'CFD Analysis', 'Composite Manufacturing']
    },
    {
      name: t('team.subTeams.vehicleDynamics.name'),
      image: '/chassis.JPG',
      route: '/our-team/vehicle-dynamics',
      icon: MdScience,
      description: t('team.subTeams.vehicleDynamics.description'),
      responsibilities: [
        t('team.subTeams.vehicleDynamics.responsibilities.0'),
        t('team.subTeams.vehicleDynamics.responsibilities.1'),
        t('team.subTeams.vehicleDynamics.responsibilities.2'),
        t('team.subTeams.vehicleDynamics.responsibilities.3'),
        t('team.subTeams.vehicleDynamics.responsibilities.4'),
        t('team.subTeams.vehicleDynamics.responsibilities.5')
      ],
      technologies: ['MATLAB/Simulink', 'OptimumLap', 'Tire Testing Equipment', 'Data Acquisition', 'Vehicle Simulation']
    },
    {
      name: t('team.subTeams.embedded.name'),
      image: '/team_fsae.JPG',
      route: '/our-team/embedded',
      icon: MdComputer,
      description: t('team.subTeams.embedded.description'),
      responsibilities: [
        t('team.subTeams.embedded.responsibilities.0'),
        t('team.subTeams.embedded.responsibilities.1'),
        t('team.subTeams.embedded.responsibilities.2'),
        t('team.subTeams.embedded.responsibilities.3'),
        t('team.subTeams.embedded.responsibilities.4'),
        t('team.subTeams.embedded.responsibilities.5')
      ],
      technologies: ['C/C++', 'Python', 'Real-time Systems', 'CAN Communication', 'Embedded Linux', 'Microcontrollers']
    },
    {
      name: t('team.subTeams.admin.name'),
      image: '/team_fsae.JPG',
      route: '/our-team/admin',
      icon: MdAccountBalance,
      description: t('team.subTeams.admin.description'),
      responsibilities: [
        t('team.subTeams.admin.responsibilities.0'),
        t('team.subTeams.admin.responsibilities.1'),
        t('team.subTeams.admin.responsibilities.2'),
        t('team.subTeams.admin.responsibilities.3'),
        t('team.subTeams.admin.responsibilities.4'),
        t('team.subTeams.admin.responsibilities.5')
      ],
      technologies: ['Excel/Spreadsheets', 'Project Management Tools', 'Financial Software', 'Database Management']
    },
    {
      name: t('team.subTeams.marketing.name'),
      image: '/team_fsae.JPG',
      route: '/our-team/marketing',
      icon: MdCampaign,
      description: t('team.subTeams.marketing.description'),
      responsibilities: [
        t('team.subTeams.marketing.responsibilities.0'),
        t('team.subTeams.marketing.responsibilities.1'),
        t('team.subTeams.marketing.responsibilities.2'),
        t('team.subTeams.marketing.responsibilities.3'),
        t('team.subTeams.marketing.responsibilities.4'),
        t('team.subTeams.marketing.responsibilities.5')
      ],
      technologies: ['Adobe Creative Suite', 'Social Media Platforms', 'Web Development', 'Photography Equipment', 'Video Editing']
    }
  ];

  const handleMainTeamClick = () => {
    setSelectedMainTeam(mainTeamData);
    setIsMainTeamModalOpen(true);
  };

  const handleSubTeamClick = (team: SubTeam) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(null);
  };

  const closeMainTeamModal = () => {
    setIsMainTeamModalOpen(false);
    setSelectedMainTeam(null);
  };

  return (
    <>
      {/* Main Team Modal */}
      <MainTeamModal 
        team={selectedMainTeam} 
        isOpen={isMainTeamModalOpen} 
        onClose={closeMainTeamModal}
        t={t}
      />
      
      {/* Sub Team Modal */}
      <TeamModal 
        team={selectedTeam} 
        isOpen={isModalOpen} 
        onClose={closeModal}
        t={t}
      />
      
      <section className={`bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-20 transition-all duration-300 ${(isModalOpen || isMainTeamModalOpen) ? 'blur-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-20">
            <MdGroup className="text-red-500 text-6xl mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              {t('team.title')}
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              {t('team.subtitle')}
            </p>
          </div>
        
        {/* Main Team Section */}
        <div className="w-full max-w-6xl mx-auto mb-20">
          <div 
            className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
            onClick={handleMainTeamClick}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-gray-200/20">
              
              {/* Main Image */}
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src="/team_fsae.JPG"
                  alt="Full Team Photo"
                  width={1200}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-red-900/30 group-hover:from-red-800/40 group-hover:to-red-800/40 transition-all duration-500"></div>
                
                {/* Floating Stats */}
                <div className="absolute top-6 right-6 space-y-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                    <div className="text-white text-sm font-medium">Founded</div>
                    <div className="text-white text-lg font-bold">2018</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                    <div className="text-white text-sm font-medium">Members</div>
                    <div className="text-white text-lg font-bold">60+</div>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-4xl">
                    <h2 className="text-white text-4xl md:text-6xl font-light mb-4 group-hover:text-red-300 transition-colors duration-300">
                      {t('team.main.name')}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mb-6 group-hover:w-32 transition-all duration-500"></div>
                    <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-6 max-w-2xl">
                      {mainTeamData.description.substring(0, 150)}...
                    </p>
                    
                    {/* Action Button */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600/80 hover:bg-red-500/90 backdrop-blur-sm rounded-xl px-6 py-3 border border-red-500/30 group-hover:border-red-400/50 transition-all duration-300">
                        <span className="text-white font-medium flex items-center">
                          <MdGroup className="mr-2" />
                          {t('team.clickToLearn')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-red-500/20 to-transparent rounded-tl-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {subTeams.map((team, index) => {
            const IconComponent = team.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-500 hover:-translate-y-3"
                onClick={() => handleSubTeamClick(team)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm border border-gray-600/30 shadow-xl hover:shadow-2xl hover:border-red-500/40 transition-all duration-500">
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={team.image}
                      alt={team.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/60 to-gray-700/40"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-80 flex flex-col">
                    
                    {/* Header with Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-xl shadow-lg group-hover:shadow-red-500/30 transition-all duration-300">
                        <IconComponent className="text-white text-2xl" />
                      </div>
                    </div>
                    
                    {/* Team Name */}
                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-red-300 transition-colors duration-300">
                      {team.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                      {team.description.substring(0, 120)}...
                    </p>
                    
                    {/* Technology Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {team.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-gray-700/60 text-gray-300 px-2 py-1 rounded-full border border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {team.technologies.length > 3 && (
                          <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded-full border border-red-700/50">
                            +{team.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Call to Action */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-px bg-gradient-to-r from-red-500 to-transparent group-hover:from-red-400 transition-colors duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl shadow-lg shadow-red-500/20"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-600/30">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              {t('team.subsystems.title')}
            </h3>
            <div className="w-16 h-px bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              {t('team.description')}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">9</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Teams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">60+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">5</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Subsystems</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">2018</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Founded</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}