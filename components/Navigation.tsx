import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from '../types';

const Navigation: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: SectionId.PROJECTS, label: 'Work' },
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass-panel' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold tracking-tight cursor-pointer text-white mix-blend-difference"
          onClick={() => scrollToSection(SectionId.HERO)}
        >
          LUCAS<span className="text-[#C9FD74]">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-medium text-gray-300 hover:text-[#C9FD74] transition-colors uppercase tracking-widest"
            >
              [{link.label}]
            </motion.button>
          ))}
        </div>

        {/* Time & Status */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-mono text-gray-400">
          <span className="flex items-center space-x-2">
             <span className="w-1.5 h-1.5 bg-[#C9FD74] rounded-full animate-pulse"></span>
             <span>OPEN FOR INTERNSHIP</span>
          </span>
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1.5">
            <span className={`block w-8 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-[#050505] z-40 pt-24 px-6"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-5xl font-bold text-white hover:text-[#C9FD74] uppercase tracking-tighter"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="mt-12 border-t border-gray-800 pt-8">
                 <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Contact</p>
                 <a href="mailto:lucasemmanuelramirez56@gmail.com" className="text-xl text-white break-all">lucasemmanuelramirez56@gmail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;