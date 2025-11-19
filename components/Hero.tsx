import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out"
      })
      .from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
      }, "-=1")
      .from(".hero-meta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1
      }, "-=0.5");

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id={SectionId.HERO}
      ref={componentRef}
      className="relative min-h-screen pt-32 pb-12 flex flex-col justify-between overflow-hidden bg-[#050505]"
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Massive Typography */}
          <div className="lg:col-span-8">
            <h1 ref={titleRef} className="flex flex-col font-bold leading-[0.85] tracking-tighter">
              <div className="overflow-hidden">
                <span className="hero-line block text-[13vw] md:text-[11vw] lg:text-[10vw] text-white">
                  ASPIRING
                </span>
              </div>
              <div className="overflow-hidden">
                 {/* Outlined Text */}
                <span className="hero-line block text-[13vw] md:text-[11vw] lg:text-[10vw] text-outline hover:text-[#C9FD74] transition-colors duration-500 cursor-default">
                  WEB
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-line block text-[13vw] md:text-[11vw] lg:text-[10vw] text-white">
                  DEVELOPER
                </span>
              </div>
            </h1>
          </div>

          {/* Right: Image and Intro */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end mt-8 lg:mt-4">
            <div className="hero-image relative w-full max-w-xs aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden mb-8 border border-gray-800 group">
               <img 
                 src="/assets/profile/Ram_3.png" 
                 alt="Portrait" 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
               />
               {/* Corner Accents */}
               <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9FD74]"></div>
               <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9FD74]"></div>
            </div>

            <div className="hero-meta max-w-xs text-gray-400 text-sm md:text-base leading-relaxed lg:text-right">
              <p className="mb-6">
                BS IT Student at National University Fairview. 
                Specializing in Mobile and Internet Technology.
                Committed to expanding practical knowledge through impactful projects.
              </p>
              <a 
                href={`#${SectionId.PROJECTS}`} 
                className="inline-flex items-center text-white font-bold hover:text-[#C9FD74] uppercase tracking-widest group"
              >
                See My Projects
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="w-full overflow-hidden border-t border-b border-white/10 py-4 mt-auto bg-[#050505] relative z-20">
        <div className="whitespace-nowrap flex animate-ticker">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-xl md:text-2xl text-gray-500 font-bold uppercase tracking-wider mx-8">
                Next.js 15+
              </span>
              <span className="text-[#C9FD74]">✦</span>
              <span className="text-xl md:text-2xl text-gray-500 font-bold uppercase tracking-wider mx-8">
                React 19
              </span>
              <span className="text-[#C9FD74]">✦</span>
              <span className="text-xl md:text-2xl text-gray-500 font-bold uppercase tracking-wider mx-8">
                AI Prompt Engineering
              </span>
              <span className="text-[#C9FD74]">✦</span>
              <span className="text-xl md:text-2xl text-gray-500 font-bold uppercase tracking-wider mx-8">
                Full Stack
              </span>
              <span className="text-[#C9FD74]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;