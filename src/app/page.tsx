"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';
import HeroSection from './_components/sections/HeroSection';
import AboutSection from './_components/sections/AboutSection';
import SkillsSection from './_components/sections/SkillsSection';
import ProjectsSection from './_components/sections/ProjectsSection';
import CertificatesSection from './_components/sections/CertificatesSection';
import EducationExperienceSection from './_components/sections/EducationExperienceSection';
import ContactSection from './_components/sections/ContactSection';
import { 
  Code2, Server, Database as MongoIcon, Terminal, FileCode, Code, 
  Coffee, Cpu, Layout, GitBranch, Globe, Palette, Database,
  Smartphone, Wifi
} from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

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

interface Stat {
  value: string;
  label: string;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [animatedProgress, setAnimatedProgress] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Initialize styles as a string constant
  const globalStyles = `
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.1; }
      50% { opacity: 0.2; }
    }
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
  `;

  useEffect(() => {
    // Add global styles to document head
    const styleElement = document.createElement('style');
    styleElement.innerHTML = globalStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      Object.keys(sectionRefs.current).forEach((key: string) => {
        const element = sectionRefs.current[key];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            if (key.startsWith('progress-')) {
              const skillName = key.replace('progress-', '');
              if (!animatedProgress[skillName]) {
                setAnimatedProgress(prev => ({
                  ...prev,
                  [skillName]: true
                }));
              }
            }
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedProgress]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  const projects: Project[] = [
    {
      title: "KhatriShops",
      category: "MERN Stack",
      description: "A full-stack e-commerce platform for online clothing retail featuring secure authentication, eSewa payment integration, product exchange functionality, and comprehensive inventory management.",
      tech: ["MongoDB", "Express", "React", "Node.js", "eSewa API"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Electronic Store",
      category: "MERN Stack",
      description: "A full-stack electronic store platform built with the MERN stack, featuring comprehensive inventory management, real-time product tracking, and an intuitive admin dashboard.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Course Management System",
      category: "Java Desktop Application",
      description: "A desktop application with Java Swing GUI enabling streamlined course creation, student registration, and academic record management.",
      tech: ["Java", "MySQL", "JDBC", "Java Swing"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Game AI with Unity",
      category: "Game Development",
      description: "An intelligent game system implementing Ant Colony Optimization algorithms for dynamic enemy pathfinding and strategic behavior.",
      tech: ["Unity", "C#", "ACO Algorithm"],
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const technologies: Technology[] = [
    { name: "React", level: 95, icon: <Code2 size={16} />, color: "bg-blue-500", description: "Advanced" },
    { name: "Node.js", level: 90, icon: <Server size={16} />, color: "bg-green-500", description: "Advanced" },
    { name: "MongoDB", level: 85, icon: <MongoIcon size={16} />, color: "bg-green-400", description: "Proficient" },
    { name: "Express.js", level: 88, icon: <Terminal size={16} />, color: "bg-gray-600", description: "Proficient" },
    { name: "JavaScript", level: 92, icon: <FileCode size={16} />, color: "bg-yellow-500", description: "Advanced" },
    { name: "TypeScript", level: 80, icon: <Code size={16} />, color: "bg-blue-600", description: "Intermediate" },
    { name: "Java", level: 85, icon: <Coffee size={16} />, color: "bg-red-500", description: "Proficient" },
    { name: "Python", level: 78, icon: <Cpu size={16} />, color: "bg-blue-400", description: "Intermediate" },
    { name: "HTML/CSS", level: 95, icon: <Layout size={16} />, color: "bg-orange-500", description: "Advanced" },
    { name: "Git", level: 90, icon: <GitBranch size={16} />, color: "bg-orange-600", description: "Advanced" },
    { name: "REST APIs", level: 88, icon: <Globe size={16} />, color: "bg-indigo-500", description: "Proficient" },
    { name: "UI/UX Design", level: 75, icon: <Palette size={16} />, color: "bg-pink-500", description: "Intermediate" }
  ];

  const skills: SkillCategory = {
    "Programming Languages": [
      { name: "Java", icon: <Coffee size={18} className="text-red-500" /> },
      { name: "Python", icon: <Cpu size={18} className="text-blue-500" /> },
      { name: "C Programming", icon: <Terminal size={18} className="text-gray-600" /> },
      { name: "JavaScript", icon: <FileCode size={18} className="text-yellow-500" /> }
    ],
    "Web Development": [
      { name: "Node.js", icon: <Server size={18} className="text-green-500" /> },
      { name: "Express.js", icon: <Terminal size={18} className="text-gray-700" /> },
      { name: "React", icon: <Code2 size={18} className="text-blue-400" /> },
      { name: "MongoDB", icon: <Database size={18} className="text-green-400" /> }
    ],
    "Design & Database": [
      { name: "SQL", icon: <Database size={18} className="text-blue-600" /> },
      { name: "Figma", icon: <Palette size={18} className="text-pink-500" /> },
      { name: "UI/UX Design", icon: <Layout size={18} className="text-purple-500" /> }
    ],
    "Professional Skills": [
      { name: "Team Collaboration", icon: <Smartphone size={18} className="text-indigo-500" /> },
      { name: "Technical Writing", icon: <FileCode size={18} className="text-gray-600" /> },
      { name: "Problem Solving", icon: <Wifi size={18} className="text-green-600" /> }
    ]
  };

  const education: Education[] = [
    {
      year: "2022 - 2025",
      degree: "Bsc(Hons) in Computer Science",
      school: "University of Wolverhampton",
      description: "Graduated with honors in Computing, with a strong focus on web application development, graphic design, and problem-solving"
    },
    {
      year: "2023-2024",
      degree: "Web Application Bootcamp",
      school: "Herald College Kathmandu",
      description: "Intensive 5-month program covering modern web technologies and best practices, including hands-on training in front-end and back-end development."
    }
  ];

  const experience: Experience[] = [
    {
      year: "Nov 2025 - Present",
      title: "Full-Stack Developer Intern",
      company: "Mindrisers Institute of Technology",
      description: "Currently interning as a Full-Stack Developer, working on real-world projects using MERN stack, implementing REST APIs, and collaborating with senior developers on production code."
    },

    {
      year: "2025 - Present",
      title: "Fresher Full-Stack Developer",
      company: "Freelance",
      description: "Professionally developed full-stack web applications using the MERN Stack, tailored to meet specific client requirements. Built scalable, responsive, and user-friendly interfaces."
    },
    {
      year: "2024-2025",
      title: "Created KhatriShops",
      company: "MERN Stack Project",
      description: "Professionally created a clothing website with MERN Stack according to client demand. The project highlights the development of a full-stack web application for an online clothing store."
    }
  ];

  const stats: Stat[] = [
    { value: "10+", label: "Projects" },
    { value: "12+", label: "Technologies" },
    { value: "100%", label: "Dedication" }
  ];

  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden w-full max-w-[100vw]">
      <div className="w-full max-w-[100vw] overflow-hidden">
        <Navbar 
          scrolled={scrolled} 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          scrollToSection={scrollToSection} 
        />
        
        <HeroSection 
          stats={stats} 
          scrollToSection={scrollToSection} 
        />
        
        <AboutSection />
        
        <SkillsSection 
          technologies={technologies} 
          skills={skills} 
          sectionRefs={sectionRefs} 
          animatedProgress={animatedProgress} 
        />
        
        <ProjectsSection projects={projects} />
        
        <CertificatesSection />
        
        <EducationExperienceSection 
          education={education} 
          experience={experience} 
        />
        
        <ContactSection />
        
        <Footer />
      </div>
    </div>
  );
}