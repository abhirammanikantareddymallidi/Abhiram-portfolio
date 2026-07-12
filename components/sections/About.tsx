'use client';

import { motion } from 'framer-motion';
import { User, BookOpen, Target, Award } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: BookOpen,
      title: "Strong Foundation",
      description: "Deep understanding of CMOS VLSI Design, Verilog HDL, and Computer Architecture."
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on developing high-performance, area-efficient, and power-optimized digital systems."
    },
    {
      icon: Award,
      title: "Quality Driven",
      description: "Experienced in RTL design, functional verification, and physical design flows."
    }
  ];

  return (
    <section id="about" className="py-32 px-8 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.4em] mb-4">Discovery</h2>
            <h3 className="text-5xl font-bold mb-8 italic">ABOUT<br />ME<span className="text-blue-600">.</span></h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I am a passionate Hardware Design Engineer with a mission to push the boundaries of semiconductor technology. My work bridges the gap between complex architectural concepts and efficient silicon implementation.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 gap-12">
            <div className="bg-white/5 border border-white/5 rounded-[2rem] p-12 hover:border-blue-500/30 transition-all group">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <User className="text-blue-500" /> Career Objective
              </h4>
              <p className="text-lg text-slate-300 leading-relaxed italic">
                "I am a detail-oriented VLSI Engineer with a strong foundation in digital electronics, semiconductor technology, and integrated circuit design principles. I have experience with hardware description languages such as Verilog and VHDL... I am eager to apply my technical skills and problem-solving abilities to develop innovative semiconductor systems."
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-[2rem] p-12 hover:border-blue-500/30 transition-all group">
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="text-blue-500" /> Education History
              </h4>
              <div className="space-y-12">
                <div className="relative pl-8 border-l border-blue-500/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-xl font-bold">B.Tech in Electrical and Electronics Engineering</h5>
                    <span className="text-xs font-mono text-slate-500">2024 — Present</span>
                  </div>
                  <p className="text-blue-400 font-medium">KL University | CGPA: 9.26 / 10</p>
                </div>

                <div className="relative pl-8 border-l border-blue-500/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-700" />
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-xl font-bold">Senior Secondary Education (Class XII)</h5>
                    <span className="text-xs font-mono text-slate-500">2022 — 2024</span>
                  </div>
                  <p className="text-slate-400">Adity Junior College | Score: 903 / 1000</p>
                </div>

                <div className="relative pl-8 border-l border-blue-500/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-700" />
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-xl font-bold">Secondary Education (Class X)</h5>
                    <span className="text-xs font-mono text-slate-500">2021 — 2022</span>
                  </div>
                  <p className="text-slate-400">Bhashyam High Schools | Score: 461 / 600</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
