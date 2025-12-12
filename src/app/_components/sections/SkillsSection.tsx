"use client";

import React from 'react';
import { 
  Code2, Server, Database as MongoIcon, Terminal, FileCode, Code, 
  Coffee, Cpu, Layout, GitBranch, Globe, Palette, Database,
  Smartphone, Wifi
} from 'lucide-react';

interface Technology {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface SkillCategory {
  [key: string]: { name: string; icon: React.ReactNode }[];
}

interface SkillsSectionProps {
  technologies: Technology[];
  skills: SkillCategory;
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
  animatedProgress: Record<string, boolean>;
}

export default function SkillsSection({ technologies, skills, sectionRefs, animatedProgress }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-sm tracking-widest text-stone-500 mb-4">TECHNICAL EXPERTISE</p>
          <h2 className="text-5xl lg:text-6xl font-light text-stone-900">Skills & Technologies</h2>
        </div>

        <div className="mb-20">
          <p className="text-sm tracking-widest text-stone-500 mb-8">TECHNOLOGIES I WORK WITH</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group"
                ref={(el: HTMLDivElement | null) => { sectionRefs.current[`progress-${tech.name}`] = el; }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full ${tech.color} flex items-center justify-center text-white`}>
                      {tech.icon}
                    </div>
                    <span className="text-stone-900 font-light">{tech.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-stone-500">{tech.description}</span>
                    <span className="text-stone-900 font-medium">{tech.level}%</span>
                  </div>
                </div>
                <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${tech.color} transition-all duration-1000 ease-out ${animatedProgress[tech.name] ? 'w-full' : 'w-0'}`}
                    style={{ width: animatedProgress[tech.name] ? `${tech.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-20 border-t border-stone-200">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="group">
              <h3 className="text-sm tracking-widest text-stone-500 mb-6">{category.toUpperCase()}</h3>
              <div className="space-y-4">
                {items.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300 cursor-pointer p-3 hover:bg-white hover:shadow-sm rounded-sm"
                  >
                    <div className="p-2 bg-white border border-stone-200 rounded-sm group-hover:border-stone-300 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-stone-700 group-hover:text-stone-900 transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}