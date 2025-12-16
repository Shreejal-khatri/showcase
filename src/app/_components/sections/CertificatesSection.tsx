"use client";

import React, { useState } from 'react';
import { Award, X } from 'lucide-react';

export default function CertificatesSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="certificates" className="py-32 px-6 lg:px-12 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-sm tracking-widest text-stone-500 mb-4">VERIFIED CREDENTIALS</p>
          <h2 className="text-5xl lg:text-6xl font-light text-stone-900 mb-4">Professional Certification</h2>
          <p className="text-lg text-stone-600">Validated credentials showcasing expertise in cutting-edge web development technologies.</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-sm p-8 lg:p-12 transform transition-all duration-500 hover:shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Award className="text-stone-900" size={24} />
                <span className="text-xs tracking-widest text-green-600 bg-green-50 px-3 py-1 rounded-full">VERIFIED</span>
              </div>
              <h3 className="text-3xl font-light text-stone-900 mb-2">MERN Stack Training</h3>
              <p className="text-lg text-stone-600 mb-1">Mindrisers Technology</p>
              <p className="text-sm text-stone-500">Putalisadak, Kathmandu, Nepal</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-stone-500 mb-1">Certificate ID</p>
              <p className="text-stone-900 font-mono">MR-82009-MS</p>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed mb-6">
            Successfully completed comprehensive MERN Stack training covering MongoDB, Express.js, React, and Node.js with hands-on project development.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["MongoDB", "Express.js", "React", "Node.js", "Full-Stack Development"].map((tech, i) => (
              <span 
                key={i} 
                className="text-xs tracking-wider text-stone-500 border border-stone-300 px-3 py-1 rounded-full hover:border-stone-900 hover:text-stone-900 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-stone-200">
            <div className="flex items-center space-x-8">
              <div>
                <p className="text-xs text-stone-500 mb-1">Duration</p>
                <p className="text-sm text-stone-900">3 months</p>
              </div>
              <div>
                <p className="text-xs text-stone-500 mb-1">Issued Date</p>
                <p className="text-sm text-stone-900">October 5, 2025</p>
              </div>
            </div>
            <button 
              onClick={() => setShowModal(true)}
              className="text-sm text-stone-900 border border-stone-900 px-4 py-2 rounded-sm hover:bg-stone-900 hover:text-white transition-colors duration-300"
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-6xl w-full bg-white rounded-sm shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-stone-900 bg-white rounded-full p-2 hover:bg-stone-100 transition-colors shadow-lg"
            >
              <X size={24} />
            </button>
            <img 
              src="https://res.cloudinary.com/dzrfxgqb6/image/upload/v1760517826/certificate_1_pqwbbl.png"
              alt="MERN Stack Training Certificate"
              className="w-full h-auto rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}