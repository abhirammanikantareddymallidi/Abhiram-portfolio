'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 z-50 flex items-center justify-between px-8 md:px-16 backdrop-blur-xl bg-black/20 border-b border-white/5">
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

      <motion.a
  href="/Abhiram_Resume.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors shadow-xl shadow-white/5"
>
  <Download className="w-4 h-4" />
  Download Resume
</motion.a>
    </nav>
  );
}
