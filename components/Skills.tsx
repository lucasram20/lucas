import React from 'react';
import { motion } from 'framer-motion';
import { SectionId, Skill } from '../types';

const skills: Skill[] = [
  { name: 'Next.js 15+', level: 90, category: 'Frontend', icon: '▲' },
  { name: 'React 19', level: 90, category: 'Frontend', icon: '⚛️' },
  { name: 'Vue.js', level: 85, category: 'Frontend', icon: 'V' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', icon: 'CSS' },
  { name: 'Node.js', level: 85, category: 'Backend', icon: 'JS' },
  { name: 'Supabase', level: 80, category: 'Backend', icon: 'SB' },
  { name: 'PostgreSQL', level: 75, category: 'Backend', icon: 'SQL' },
  { name: 'Git & Github', level: 85, category: 'Tools', icon: 'git' },
];

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <h2 className="text-4xl font-bold text-white tracking-tighter">
             TECHNICAL<br/>SKILLS
           </h2>
           <p className="text-gray-500 max-w-md text-right mt-4 md:mt-0">
             Proficient in modern JavaScript frameworks, full-stack development, and AI prompt engineering.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-800">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border-r border-b border-gray-800 p-8 hover:bg-white/5 transition-colors group cursor-default"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-gray-600 font-mono text-xs">0{index + 1}</span>
                <span className="text-gray-600 group-hover:text-[#C9FD74] transition-colors">{skill.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">{skill.name}</h3>
              <p className="text-gray-500 text-sm">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;