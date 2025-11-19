import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white font-bold text-xl mb-4 md:mb-0">
          LUCAS<span className="text-[#C9FD74]">.</span>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;