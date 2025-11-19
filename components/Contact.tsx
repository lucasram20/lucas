import React from 'react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-32 bg-[#050505] relative border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-[#C9FD74] font-mono text-sm uppercase tracking-widest mb-6">
            What's Next?
          </span>
          <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-12">
            LET'S WORK<br/><span className="text-outline">TOGETHER</span>
          </h2>
          
          <a 
            href="mailto:lucasemmanuelramirez56@gmail.com" 
            className="inline-block px-12 py-6 bg-[#C9FD74] text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 mb-16"
          >
            Get in Touch
          </a>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 uppercase text-xs font-bold tracking-widest">
            <a 
              href="https://www.linkedin.com/in/lucas-emmanuel-ramirez-69588637b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/lucasram20" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;