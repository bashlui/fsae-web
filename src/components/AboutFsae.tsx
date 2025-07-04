'use client';
import { MdPublic, MdSchool, MdEngineering, MdOutlineGroup } from 'react-icons/md';



export default function AboutFsae() {
    return (
        <>
            <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
                            About <span className="font-semibold text-red-600">FSAE</span>
                        </h2>
                        <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Formula SAE (FSAE) is an international competition where students design, build, and race formula-style cars, gaining hands-on engineering and teamwork experience.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
                            Students work in multidisciplinary teams that include mechanical, electrical, computer, industrial, and business backgrounds. These teams are responsible for the entire lifecycle of the car, from initial concept and design to manufacturing, testing, and racing.
                        </p>
                    </div>

                    {/* Objective */}
                    <div className="text-center mb-16">
                        <MdEngineering className="text-red-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Objective</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            FSAE challenges students to innovate and build formula-style cars, fostering creativity and practical engineering skills essential for success in the field.
                        </p>
                    </div>

                    {/* Competition & Team Development */}
                    <div className="text-center mb-16">
                        <MdOutlineGroup className="text-red-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Competition & Team Development</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Events include static (design, cost, business) and dynamic (acceleration, endurance) challenges. Teams manage powertrain, aerodynamics, and business functions.
                        </p>
                    </div>

                    {/* Educational Impact */}
                    <div className="text-center mb-16">
                        <MdSchool className="text-red-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Educational Impact</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Students apply classroom concepts to real-world challenges, develop soft skills, and gain exposure to industry tools and experts, preparing them for careers in top companies.
                        </p>
                    </div>

                    {/* Global Reach & Career Impact */}
                    <div className="text-center mb-16">
                        <MdPublic className="text-red-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Global Reach & Career Impact</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Held worldwide in locations like the USA, Germany, and India, FSAE fosters critical skills and connects students with top companies like Tesla, Red Bull Racing, and Bosch.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
