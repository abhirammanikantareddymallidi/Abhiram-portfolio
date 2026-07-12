'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function SocialSidebar() {
  const socials = [
    { icon: Github, href: "https://github.com/abhirammanikantareddymallidi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mallidi-abhiram-manikanta-reddy/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:abhiram6345@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/mani_634_5/", label: "Instagram" },
  ];

  return (
    <div className="fixed md:left-8 md:top-1/2 md:-translate-y-1/2 bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-50 flex md:flex-col flex-row items-center gap-3 md:gap-5 bg-black/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-6 py-3 md:p-0 rounded-full md:rounded-none border border-white/10 md:border-none shadow-lg md:shadow-none">
      {socials.map((social, idx) => (
        <motion.a
          key={idx}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 shadow-lg"
          aria-label={social.label}
        >
          <social.icon size={22} />
        </motion.a>
      ))}

      <div className="w-[2px] h-24 bg-gradient-to-b from-blue-500 to-transparent mt-2 hidden md:block" />
    </div>
  );
}