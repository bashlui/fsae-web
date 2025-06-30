'use client';

import { Separator } from '@/components/ui/separator';

export default function Hero() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          
          {/* Main Title */}
          <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider mb-6">
          <span className="block text-gray-300">FSAE</span>
          <span className="block text-red-500 font-light">TEC RACING</span>
        </h1>
        
        <div className="flex justify-center mb-8">
          <Separator className="w-20 bg-red-500" />
        </div>
          </div>

          {/* Subtitle */}
          <div className="text-center max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
          Engineering Excellence. Racing Innovation. Future Leaders.
        </p>
          </div>

        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Welcome Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
            Welcome to the official site of FSAE TEC Racing. 
            <br className="hidden md:block" />
            <span className="text-red-600 font-medium">We build, race, and innovate.</span>
          </p>
        </div>
      </section>
    </>
  );
}