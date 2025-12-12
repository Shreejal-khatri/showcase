"use client";

import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-light text-stone-900 mb-4 tracking-wide">SHREEJAL KHATRI</h3>
            <div className="space-y-3 text-sm text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Nepal</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:shreejalkhatri@email.com" className="hover:text-stone-900 transition-colors">
                  shreejalkhatri123@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+9779800000000" className="hover:text-stone-900 transition-colors">
                  +977 98XXXXXXXX
                </a>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm text-stone-600 mb-2">
                <Clock size={16} />
                <span className="font-medium">Available</span>
              </div>
              <div className="text-xs text-stone-500 space-y-1">
                <p>Monday - Friday: 9:00 - 18:00</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-4 tracking-widest">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li><a href="#home" className="hover:text-stone-900 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-stone-900 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-stone-900 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-stone-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-4 tracking-widest">SERVICES</h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li><a href="#" className="hover:text-stone-900 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Full-Stack Solutions</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-4 tracking-widest">CONNECT</h4>
            <p className="text-sm text-stone-600 mb-4">
              Let's work together on your next project
            </p>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-stone-300 rounded-sm flex items-center justify-center text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-stone-300 rounded-sm flex items-center justify-center text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:shreejalkhatri123@gmail.com"
                className="w-10 h-10 border border-stone-300 rounded-sm flex items-center justify-center text-stone-600 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-500">
              © {currentYear} Shreejal Khatri. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-stone-500">
              <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Cookies</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}