"use client";

import React from 'react';

interface Education {
  year: string;
  degree: string;
  school: string;
  description: string;
}

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface EducationExperienceSectionProps {
  education: Education[];
  experience: Experience[];
}

export default function EducationExperienceSection({ education, experience }: EducationExperienceSectionProps) {
  return (
    <section id="education" className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-12">
              <p className="text-sm tracking-widest text-stone-500 mb-4">ACADEMIC BACKGROUND</p>
              <h2 className="text-4xl font-light text-stone-900">Education</h2>
            </div>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="border-l-2 border-stone-300 pl-6 hover:border-stone-900 transition-all duration-500 transform hover:translate-x-2 cursor-pointer"
                >
                  <p className="text-sm text-stone-500 mb-2">{edu.year}</p>
                  <h4 className="text-xl font-light text-stone-900 mb-2">{edu.degree}</h4>
                  <p className="text-stone-600 mb-3">{edu.school}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12">
              <p className="text-sm tracking-widest text-stone-500 mb-4">PROFESSIONAL JOURNEY</p>
              <h2 className="text-4xl font-light text-stone-900">Experience</h2>
            </div>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="border-l-2 border-stone-300 pl-6 hover:border-stone-900 transition-all duration-500 transform hover:translate-x-2 cursor-pointer"
                >
                  <p className="text-sm text-stone-500 mb-2">{exp.year}</p>
                  <h4 className="text-xl font-light text-stone-900 mb-2">{exp.title}</h4>
                  <p className="text-stone-600 mb-3">{exp.company}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}