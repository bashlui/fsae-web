'use client';

import Image from 'next/image';

export default function AboutUs() {

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            About <span className="font-semibold text-red-600">Us</span>
          </h2>
          <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are <span className="font-medium text-red-600">FSAE TEC RACING</span>, a passionate team of engineers and innovators building the future of motorsport.
          </p>
          <Image src="/team_fsae.JPG" alt="FSAE Team" width={600} height={400} className="mx-auto mt-8 rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}