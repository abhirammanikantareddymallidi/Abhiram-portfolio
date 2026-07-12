'use client';

import { motion } from 'framer-motion';
import { Cpu, Terminal, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-28 pb-12 px-6 md:px-8 md:pt-20 md:pb-0 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">3rd Year B.Tech @ KL University </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] uppercase">
            MALLIDI ABHIRAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">MANIKANTA</span> <br />
            REDDY
          </h1>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Detail-oriented <span className="text-white font-medium">VLSI Engineer</span> with a strong foundation in digital electronics and integrated circuit design principles.
          </p>

          <div className="flex flex-col gap-2 text-sm font-mono text-slate-500">
             <div className="flex items-center gap-2">
               <span className="text-blue-500">TEL:</span> +91 8121548304
             </div>
             <div className="flex items-center gap-2">
               <span className="text-blue-500">LOC:</span> Vijayawada, India
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[420px] md:max-w-none md:w-[580px] md:h-[580px] aspect-square">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/5 shadow-2xl group">
               <img 
                 src="/profile.png" 
                 alt="Mallidi Abhiram Manikanta Reddy"
                 className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
