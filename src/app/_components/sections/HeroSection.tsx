"use client";

import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

interface HeroSectionProps {
  stats: Stat[];
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ stats, scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 lg:px-12 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-widest text-stone-500 mb-6">FULL-STACK DEVELOPER</p>
            <h1 className="text-6xl lg:text-8xl font-light text-stone-900 mb-6 leading-tight">
              Shreejal<br />
              Khatri
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-md leading-relaxed">
              I craft exceptional digital experiences with cutting-edge technologies. From innovative concepts to seamless deployment, I transform ideas into reality.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="text-3xl font-light text-stone-900 mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="text-xs tracking-wider text-stone-500 group-hover:text-stone-700 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="group flex items-center space-x-2 px-6 py-3 bg-stone-900 text-white rounded-sm hover:bg-stone-800 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95">
                <Download size={18} />
                <span className="tracking-wider text-sm">DOWNLOAD RESUME</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="group flex items-center space-x-2 text-stone-900 font-light hover:text-stone-700 transition-colors duration-300"
              >
                <span className="tracking-wider text-sm">GET IN TOUCH</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="https://res.cloudinary.com/dzrfxgqb6/image/upload/v1765534057/Showcaseimage_u2eeez.png" 
                alt="Shreejal Khatri"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-stone-900/5 to-stone-900/10 rounded-sm -z-10 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}