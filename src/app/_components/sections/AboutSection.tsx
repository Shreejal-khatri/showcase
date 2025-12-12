"use client";

import React from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-stone-900" />
              <p className="text-sm tracking-widest text-stone-500">ABOUT ME</p>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6 leading-tight">
              Creating with <span className="italic text-stone-600">Purpose</span>
            </h2>
            
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-4">
              I'm a full-stack developer passionate about creating elegant solutions to complex problems. With hands-on experience in modern web technologies, I specialize in building scalable applications that combine beautiful design with robust functionality.
            </p>
            
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8">
              Currently expanding my expertise through professional internships while actively contributing to innovative projects that push technological boundaries.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-stone-500 tracking-wider hidden sm:block">CONNECT</span>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Shreejal-khatri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-stone-300 rounded-sm flex items-center justify-center text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shreejal-khatri-652b4526a" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-stone-300 rounded-sm flex items-center justify-center text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:shreejalkhatri123@gmail.com" 
                  className="w-11 h-11 border border-stone-300 rounded-sm flex items-center justify-center text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop" 
                alt="Developer workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-stone-900/5 to-transparent rounded-sm -z-10 transform rotate-12 group-hover:rotate-6 transition-transform duration-500" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-stone-900/5 to-transparent rounded-sm -z-10 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}