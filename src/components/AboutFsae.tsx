'use client';

export default function AboutFsae() {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
                            About <span className="font-semibold text-red-600">FSAE</span>
                        </h2>
                        <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            Formula SAE (FSAE) is an international engineering design competition organized by SAE International. It challenges university students to design, build, and test a small-scale formula-style race car. The goal is to provide participants with hands-on experience in engineering, teamwork, and project management by simulating the environment of a real-world motorsport development team.
                        </p>

                        {/* Space for Image */}
                        <div className="relative max-w-4xl mx-auto">
                            <div className="bg-gray-200 dark:bg-gray-700 rounded-xl shadow-md aspect-video flex items-center justify-center">
                                <p className="text-gray-500 dark:text-gray-400">Image Placeholder</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-20">
                        <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            Students work in multidisciplinary teams that include mechanical, electrical, computer, industrial, and business backgrounds.
                            These teams are responsible for the entire lifecycle of the car, from initial concept and design to manufacturing, testing, and racing.
                        </p>
                    </div>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
                            Our <span className="font-semibold text-red-600">Objective</span>
                        </h2>
                        <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            The objective of FSAE is to provide students with a realistic engineering experience by challenging them to design and build a formula-style race car.
                            This project-based learning approach fosters innovation, creativity, and practical skills that are essential for success in the engineering field.
                        </p>
                    </div>
                    <div className="text-center mb-20">
                        <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
                            <span className="font-semibold text-red-600">Competition</span> and <span className="font-semibold text-red-600">Team Development</span> 
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            The competition includes both <strong>static events</strong> (such as design, cost & manufacturing, and business presentations)
                            and <strong>dynamic events</strong> (such as acceleration, skidpad, autocross, and endurance).
                            Teams cover extensive technical and organizational domains, from powertrain development,
                            chassis design, and aerodynamics to embedded systems, energy management, data acquisition, and essential business functions
                            like marketing and finance.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
