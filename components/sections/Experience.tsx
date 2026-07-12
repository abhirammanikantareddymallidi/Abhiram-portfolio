'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "FPGA VLSI Intern",
      company: "Sense Semiconductor & IT Solutions Pvt. Ltd",
      period: "May 2026 — June 2026",
      location: "Remote",
      description: "Successfully completed the FPGA VLSI Foundation Course conducted by Sense Semiconductor & IT Solutions Pvt. Ltd. The training covered Verilog HDL, FPGA architecture, RTL design, digital logic design, simulation, and VLSI fundamentals through practical exercises and hands-on projects.",
      achievements: [
         "Designed and simulated digital circuits using Verilog HDL for FPGA-based applications.",
         "Developed and verified RTL modules through simulation and functional debugging.",
         "Gained practical experience with FPGA design flow, digital logic design, and VLSI fundamentals."
    ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-8 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.4em] mb-4">Journey</h2>
          <h3 className="text-5xl font-bold italic uppercase">PROFESSIONAL EXPERIENCE<span className="text-blue-500">.</span></h3>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 border border-white/5 rounded-[2rem] p-8 md:p-12 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold group-hover:text-blue-400 transition-colors uppercase italic">{exp.role}</h4>
                    <p className="text-blue-500 font-medium text-lg">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2 text-slate-500 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-slate-400 leading-relaxed text-lg mb-6">
                    {exp.description}
                  </p>
                </div>
                <div className="space-y-4">
                  {exp.achievements.map((achievement, aIdx) => (
                    <div key={aIdx} className="flex gap-4 group/item">
                      <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform" />
                      <p className="text-slate-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-xs font-bold text-blue-500 cursor-pointer"
                >
                 <a className="w-4 h-4" href="https://www.linkedin.com/posts/mallidi-abhiram-manikanta-reddy_fpga-vlsi-veriloghdl-share-7475501764591493120-dAUt/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFjX1icBMnAtqNg-2VBpmCf5H9m997IuDLU" target="_blank"> Details </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
