import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId, Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'BETTERBEE',
    description: 'Gamified habit tracking dashboard. Track daily habits, earn points, and connect with the community.',
    techStack: ['React', 'Caffeine.ai', 'Internet Identity'],
    imageUrl: '/assets/betterbee.png',
    link: 'https://betterbee-m7n.caffeine.xyz/'
  },
  {
    id: '2',
    title: "OLLIE'S RENT A CAR",
    description: 'IoT Enabled Car Rental Management System. Manage fleet, bookings, and track vehicle availability (PathLink).',
    techStack: ['Next.js 15+', 'React 19', 'Supabase', 'PostgreSQL'],
    imageUrl: '/assets/pathlink.png',
    link: 'https://olliesrentalcar.pathlinkio.app/'
  },
  {
    id: '3',
    title: 'RIZAL EXHIBITION',
    description: 'Interactive historical narrative. "To the Young Women of Malolos" - a visual journey through Rizal\'s legacy.',
    techStack: ['React', 'Framer Motion', 'Typography'],
    imageUrl: '/assets/malolos.png',
    link: 'https://rizal-the-virtual-exhibition.pages.dev/'
  },
  {
    id: '4',
    title: 'ASCENT',
    description: 'Digital agency portfolio. Elevating brand vision through exceptional digital experiences and innovative design.',
    techStack: ['Three.js', 'React', 'GSAP'],
    imageUrl: '/assets/ascent.png',
    link: 'https://ascent-dfh.pages.dev/'
  }
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section 
      id={SectionId.PROJECTS} 
      className="py-32 bg-[#050505] relative" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
          <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            SELECTED<br/><span className="text-outline">WORK</span>
          </h2>
          <span className="hidden md:block text-gray-500 text-sm font-mono uppercase">
            (Recent Projects)
          </span>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border-b border-white/10 py-12 cursor-pointer relative z-10 transition-colors hover:bg-white/5"
              onMouseEnter={() => setHoveredProject(project.imageUrl)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between px-4">
                <h3 className="text-3xl md:text-5xl font-bold text-gray-400 group-hover:text-white transition-colors tracking-tight">
                  <span className="text-sm text-[#C9FD74] font-mono mr-6 align-top opacity-0 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  {project.title}
                </h3>
                <div className="flex items-center mt-4 md:mt-0 space-x-8">
                   <p className="text-gray-500 text-sm md:text-base max-w-xs hidden md:block group-hover:text-gray-300 transition-colors">
                     {project.description}
                   </p>
                   <div className="flex space-x-2">
                     {project.techStack.map(tech => (
                       <span key={tech} className="text-xs border border-white/10 px-2 py-1 rounded-full text-gray-500 uppercase">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Reveal */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: mousePos.x - 200, // Center the image on mouse
              y: mousePos.y - 150 
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="fixed top-0 left-0 pointer-events-none z-20 w-[400px] h-[300px] rounded-lg overflow-hidden hidden lg:block"
            style={{ position: 'absolute' }}
          >
            <img 
              src={hoveredProject} 
              alt="Project Preview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#C9FD74] mix-blend-multiply opacity-20"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-16">
        <a href="#" className="inline-block px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-sm">
          View All Archive
        </a>
      </div>
    </section>
  );
};

export default Projects;