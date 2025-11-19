import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Stats & Title */}
          <div>
            <div className="mb-8">
               <span className="text-[#C9FD74] font-mono text-xs uppercase tracking-widest mb-4 block">/// WHO I AM</span>
               <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                 EAGER TO LEARN,<br/>
                 READY TO <br/>
                 <span className="text-outline">BUILD.</span>
               </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
               <div>
                 <span className="block text-5xl font-bold text-white mb-2">2022</span>
                 <span className="text-gray-500 text-xs uppercase tracking-widest">Started BS IT</span>
               </div>
               <div>
                 <span className="block text-5xl font-bold text-white mb-2">6+</span>
                 <span className="text-gray-500 text-xs uppercase tracking-widest">Certifications</span>
               </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              I am currently a student at <strong className="text-white">National University Fairview</strong>, pursuing a Bachelor of Science in Information Technology with a specialization in Mobile and Internet Technology.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              I am seeking an internship to leverage my skills in software development. I am adaptable, computer literate, and committed to contributing to impactful projects while expanding my practical knowledge in <strong className="text-white">Next.js, React, and Cloud Technologies</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
               {['Web Development', 'QA Testing', 'AI Engineering', 'Teamwork'].map((item, i) => (
                 <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-400 uppercase hover:border-[#C9FD74] hover:text-[#C9FD74] transition-colors cursor-default">
                   {item}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;