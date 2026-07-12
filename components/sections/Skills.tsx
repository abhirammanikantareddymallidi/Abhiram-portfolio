'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Hard Skills & Languages",
      skills: ["Verilog", "C", "C++", "Python", "HTML"]
    },
    {
      title: "VLSI Tools",
      skills: ["Siemens EDA", "LTspice", "Vivado"]
    },
    {
      title: "Development Tools",
      skills: ["Pycharm", "Google Collab", "VS Code", "Google Analytics", "GitHub"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Attention to Detail", "Communication", "Collaboration", "Time Management", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.4em] mb-4 text-center">Toolkit</h2>
          <h3 className="text-6xl font-bold text-center italic uppercase">ENGINEERING STACK<span className="text-blue-500">.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h4 className="text-lg font-bold text-slate-500 font-mono flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-500/50" /> {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm font-medium text-slate-300 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
