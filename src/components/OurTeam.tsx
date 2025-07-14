'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  members?: number;
  icon: React.ElementType;
}

interface MainTeam {
  name: string;
  image: string;
  description: string;
  mission: string;
  values: string[];
  achievements: string[];
  totalMembers: number;
  founded: string;
  icon: React.ElementType;
}

interface TeamModalProps {
  team: SubTeam | null;
  isOpen: boolean;
  onClose: () => void;
}

interface MainTeamModalProps {
  team: MainTeam | null;
  isOpen: boolean;
  onClose: () => void;
}

function MainTeamModal({ team, isOpen, onClose }: MainTeamModalProps) {
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
            <h3 className="text-xl font-semibold text-red-600 mb-4">About Our Team</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {team.description}
            </p>
          </div>

          {/* Mission */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {team.mission}
            </p>
          </div>

          {/* Values */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Our Values</h3>
            <ul className="space-y-2">
              {team.values.map((value, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Recent Achievements</h3>
            <ul className="space-y-2">
              {team.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-3 mt-1">🏆</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-600 font-semibold">Total Members</p>
                <p className="text-gray-900 dark:text-white text-2xl font-bold">{team.totalMembers}+ Students</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-600 font-semibold">Founded</p>
                <p className="text-gray-900 dark:text-white text-2xl font-bold">{team.founded}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamModal({ team, isOpen, onClose }: TeamModalProps) {
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
            <h3 className="text-xl font-semibold text-red-600 mb-4">About {team.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {team.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Key Responsibilities</h3>
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
            <h3 className="text-xl font-semibold text-red-600 mb-4">Technologies & Tools</h3>
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

          {/* Members Count */}
          {team.members && (
            <div className="text-center">
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-600 font-semibold">Team Size</p>
                <p className="text-gray-900 dark:text-white text-2xl font-bold">{team.members} Members</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const [selectedTeam, setSelectedTeam] = useState<SubTeam | null>(null);
  const [selectedMainTeam, setSelectedMainTeam] = useState<MainTeam | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMainTeamModalOpen, setIsMainTeamModalOpen] = useState(false);

  const mainTeamData: MainTeam = {
    name: 'FSAE TEC RACING TEAM',
    image: '/team_fsae.JPG',
    icon: MdGroup,
    description: 'FSAE TEC Racing is a multidisciplinary student organization at Tecnológico de Monterrey dedicated to designing, building, and racing formula-style vehicles. Our team brings together passionate students from engineering, business, and other disciplines to compete in Formula SAE competitions worldwide.',
    mission: 'To provide students with hands-on engineering experience while fostering innovation, teamwork, and excellence in automotive design. We aim to bridge the gap between academic theory and real-world application, preparing our members for successful careers in the automotive and motorsports industries.',
    values: [
      'Innovation and continuous improvement in all aspects of vehicle design',
      'Collaboration and teamwork across multiple engineering disciplines',
      'Excellence in execution and attention to detail',
      'Safety as our top priority in all activities',
      'Sustainability and responsible engineering practices',
      'Knowledge sharing and mentorship within the team',
      'Representing Tecnológico de Monterrey with pride and professionalism'
    ],
    achievements: [
      '2023 Formula SAE Michigan - Top 15 Overall Finish',
      '2023 Best Presentation Award - Business Event',
      '2022 Innovation Award - Aerodynamics Package',
      '2022 Formula SAE Lincoln - Top 20 Dynamic Events',
      '2021 Virtual Competition - 3rd Place Cost Event',
      'Multiple Dean\'s List academic achievements by team members',
      'Partnership with leading automotive industry sponsors'
    ],
    totalMembers: 60,
    founded: '2018'
  };

  const subTeams: SubTeam[] = [
    {
      name: 'Powertrain',
      image: '/',
      route: '/our-team/powertrain',
      icon: MdEngineering,
      description: 'The Powertrain team is responsible for the heart of our race car - the engine and drivetrain systems. We focus on maximizing power output while ensuring reliability and efficiency throughout the competition.',
      responsibilities: [
        'Engine selection, tuning, and optimization',
        'Intake and exhaust system design',
        'Fuel system development',
        'Drivetrain component selection and integration',
        'Performance testing and data analysis',
        'Engine management system calibration'
      ],
      technologies: ['Engine Dyno', 'CAD Design', 'MATLAB/Simulink', 'Data Acquisition', 'Fuel Injection Systems'],
      members: 8
    },
    {
      name: 'Electrical',
      image: '/',
      route: '/our-team/electrical',
      icon: MdElectricBolt,
      description: 'Our Electrical team designs and implements all electrical systems in the vehicle, from basic wiring harnesses to advanced control systems that monitor and optimize vehicle performance.',
      responsibilities: [
        'Wiring harness design and manufacturing',
        'Battery management and charging systems',
        'Sensor integration and data collection',
        'Dashboard and driver interface development',
        'Safety system implementation',
        'Power distribution and protection'
      ],
      technologies: ['Altium Designer', 'Arduino/Microcontrollers', 'CAN Bus', 'LabVIEW', 'Oscilloscopes', 'Multimeters'],
      members: 6
    },
    {
      name: 'Suspension',
      image: '/',
      route: '/our-team/suspension',
      icon: MdSpeed,
      description: 'The Suspension team develops the critical systems that connect our car to the road. We design suspension geometry and components that provide optimal handling, comfort, and performance.',
      responsibilities: [
        'Suspension geometry design and optimization',
        'Spring and damper selection',
        'Anti-roll bar design',
        'Kinematic and compliance analysis',
        'Vehicle dynamics simulation',
        'Track testing and setup optimization'
      ],
      technologies: ['ANSYS', 'SolidWorks', 'OptimumK', 'Vehicle Dynamics Simulation', 'Data Acquisition'],
      members: 7
    },
    {
      name: 'Chassis',
      image: '/chassis.JPG',
      route: '/our-team/chassis',
      icon: MdBuild,
      description: 'The Chassis team creates the structural foundation of our race car. We design a lightweight yet strong frame that protects the driver while providing optimal weight distribution and component mounting.',
      responsibilities: [
        'Space frame design and analysis',
        'Structural optimization for weight and strength',
        'Safety cell and rollcage design',
        'Component mounting and integration',
        'Manufacturing process development',
        'Crash safety analysis'
      ],
      technologies: ['SolidWorks', 'ANSYS Structural', 'Welding Equipment', 'Tube Bending', 'FEA Analysis'],
      members: 9
    },
    {
      name: 'Aerodynamics',
      image: '/',
      route: '/our-team/aerodynamics',
      icon: MdAir,
      description: 'Our Aerodynamics team harnesses the power of airflow to enhance vehicle performance. We design wings, diffusers, and body panels that generate downforce while minimizing drag.',
      responsibilities: [
        'Aerodynamic package design and optimization',
        'CFD analysis and simulation',
        'Wind tunnel testing',
        'Downforce and drag balance optimization',
        'Cooling system airflow design',
        'Aerodynamic component manufacturing'
      ],
      technologies: ['ANSYS Fluent', 'SolidWorks Flow Simulation', 'Wind Tunnel', 'CFD Analysis', 'Composite Manufacturing'],
      members: 5
    },
    {
      name: 'Vehicle Dynamics',
      image: '/',
      route: '/our-team/vehicle-dynamics',
      icon: MdScience,
      description: 'The Vehicle Dynamics team focuses on how all systems work together to create optimal vehicle behavior. We analyze and optimize the car\'s handling characteristics and overall performance.',
      responsibilities: [
        'Vehicle simulation and modeling',
        'Lap time simulation and optimization',
        'Tire analysis and selection',
        'Setup optimization for different events',
        'Performance data analysis',
        'Driver feedback integration'
      ],
      technologies: ['MATLAB/Simulink', 'OptimumLap', 'Tire Testing Equipment', 'Data Acquisition', 'Vehicle Simulation'],
      members: 6
    },
    {
      name: 'Embedded',
      image: '/',
      route: '/our-team/embedded',
      icon: MdComputer,
      description: 'The Embedded Systems team develops the intelligent software and hardware that brings our car to life. We create the digital brain that monitors, controls, and optimizes vehicle systems.',
      responsibilities: [
        'ECU programming and calibration',
        'Real-time data acquisition systems',
        'Driver display and interface development',
        'Sensor fusion and filtering algorithms',
        'Telemetry and wireless communication',
        'System integration and testing'
      ],
      technologies: ['C/C++', 'Python', 'Real-time Systems', 'CAN Communication', 'Embedded Linux', 'Microcontrollers'],
      members: 7
    },
    {
      name: 'Admin / Finance',
      image: '/',
      route: '/our-team/admin',
      icon: MdAccountBalance,
      description: 'Our Admin and Finance team ensures the smooth operation of our organization. We manage budgets, coordinate logistics, and maintain relationships with sponsors and university administration.',
      responsibilities: [
        'Budget planning and financial management',
        'Sponsor relationship management',
        'Event logistics and travel coordination',
        'Team documentation and record keeping',
        'University liaison and compliance',
        'Resource allocation and procurement'
      ],
      technologies: ['Excel/Spreadsheets', 'Project Management Tools', 'Financial Software', 'Database Management'],
      members: 4
    },
    {
      name: 'Marketing',
      image: '/',
      route: '/our-team/marketing',
      icon: MdCampaign,
      description: 'The Marketing team builds our brand and connects with the community. We create engaging content, manage social media presence, and develop materials that showcase our team\'s achievements.',
      responsibilities: [
        'Social media management and content creation',
        'Website development and maintenance',
        'Promotional material design',
        'Photography and videography',
        'Public relations and media outreach',
        'Sponsor presentation development'
      ],
      technologies: ['Adobe Creative Suite', 'Social Media Platforms', 'Web Development', 'Photography Equipment', 'Video Editing'],
      members: 5
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
      />
      
      {/* Sub Team Modal */}
      <TeamModal 
        team={selectedTeam} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
      
      <section className={`bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-16 transition-all duration-300 ${(isModalOpen || isMainTeamModalOpen) ? 'blur-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <MdGroup className="text-red-600 text-6xl mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              Our <span className="font-semibold text-red-600">Team</span>
            </h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet the passionate engineers and innovators who make up FSAE TEC Racing. 
              Our multidisciplinary team brings together expertise from across engineering disciplines.
            </p>
          </div>
        
        {/* Main Team Section */}
        <div 
          className="w-full max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.01] border border-gray-200 dark:border-gray-700"
          onClick={handleMainTeamClick}
          style={{ boxShadow: '0 0 20px rgba(255, 26, 26, 0.3)' }}
        >
          <div className="relative">
            <Image
              src="/team_fsae.JPG"
              alt="Full Team Photo"
              width={1200}
              height={400}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="bg-red-600 p-8 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
              FSAE TEC RACING TEAM
            </h2>
            <p className="text-white text-lg md:text-xl font-medium">
              Click here to learn about our team structure, values, and what unites us.
            </p>
          </div>
        </div>

        {/* Sub Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {subTeams.map((team, index) => {
            const IconComponent = team.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                onClick={() => handleSubTeamClick(team)}
                style={{ boxShadow: '0 0 15px rgba(255, 26, 26, 0.2)' }}
              >
                <div className="relative">
                  <Image
                    src={team.image}
                    alt={team.name}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 bg-opacity-90 rounded-full p-2">
                    <IconComponent className="text-red-600 text-2xl" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-300">
                  <div className="p-4 text-center">
                    <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                      {team.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-300 mb-6">
            Our <span className="text-red-600 font-semibold">Specialized Teams</span>
          </h3>
          <div className="w-16 h-px bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Each sub-team brings unique expertise and passion to our Formula SAE project. 
            From designing cutting-edge powertrains to developing advanced aerodynamics, 
            our diverse teams work together to create a world-class racing vehicle.
          </p>
        </div>

      </div>
    </section>
    </>
  );
}