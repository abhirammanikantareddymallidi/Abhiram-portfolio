'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 z-50 flex items-center justify-between px-6 md:px-16 backdrop-blur-xl bg-black/20 border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
          A
        </div>
        <span className="hidden sm:block text-white font-semibold tracking-tight text-lg">Abhiram<span className="text-blue-500">.</span></span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <motion.a
          href="/Abhiram_Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors shadow-xl shadow-white/5"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download Resume</span>
          <span className="sm:hidden">Resume</span>
        </motion.a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 bg-black/95 border-b border-white/5 backdrop-blur-2xl px-8 py-10 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-350 hover:text-white transition-all py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
