"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-sm tracking-widest text-stone-500 mb-4">FEATURED WORK</p>
          <h2 className="text-5xl lg:text-6xl font-light text-stone-900">Projects</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm overflow-hidden mb-6 relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-xs tracking-widest text-stone-500 mb-2">{project.category.toUpperCase()}</p>
              <h3 className="text-2xl font-light text-stone-900 mb-3">{project.title}</h3>
              <p className="text-stone-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs tracking-wider text-stone-500 border border-stone-300 px-3 py-1 rounded-full group-hover:border-stone-900 group-hover:text-stone-900 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-stone-900 font-light text-sm group-hover:space-x-3 transition-all duration-300"
              >
                <span className="tracking-wider">VIEW CODE</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}