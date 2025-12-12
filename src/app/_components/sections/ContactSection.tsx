"use client";

import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-widest text-stone-500 mb-6">GET IN TOUCH</p>
        <h2 className="text-5xl lg:text-6xl font-light text-stone-900 mb-8">Let's Work Together</h2>
        <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a 
          href="mailto:shreejalkhatri123@gmail.com" 
          className="inline-flex items-center space-x-2 text-stone-900 font-light text-lg group mb-8 hover:text-stone-700 transition-colors duration-300"
        >
          <span className="tracking-wider">SHREEJALKHATRI123@GMAIL.COM</span>
          <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
        </a>
        
        <div className="flex justify-center space-x-6 mt-8">
          <a 
            href="https://github.com/Shreejal-khatri" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-stone-300 rounded-sm flex items-center justify-center text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/shreejal-khatri-652b4526a" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-stone-300 rounded-sm flex items-center justify-center text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:shreejalkhatri123@gmail.com" 
            className="w-12 h-12 border border-stone-300 rounded-sm flex items-center justify-center text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}