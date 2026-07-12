'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Smart Attendance System",
      category: "Hardware-Based",
      description:
        "Developed a Smart Attendance System to automatically record and manage student attendance. Reduced manual effort and improved accuracy by implementing automated real-time attendance tracking.",
      tags: ["Hardware", "Automation", "Real-time"],
      stats: { coverage: "98%", status: "Completed" },
      github: "https://github.com/abhirammanikantareddymallidi/ATTENDANCE-LIST-USING-RFID.git",
      live: "https://github.com/abhirammanikantareddymallidi/ATTENDANCE-LIST-USING-RFID.git",
    },
    {
      title: "Job Tracker",
      category: "Web Application",
      description:
        "A modern and beginner-friendly web application designed to help students and job seekers efficiently manage their internship and job applications in one place.",
      tags: ["HTML","CSS","JavaScript"],
      stats: { coverage: "92%", status: "Completed" },
      github:
        "https://github.com/abhirammanikantareddymallidi/Job_Tracker.git",
      live: "https://github.com/abhirammanikantareddymallidi/Job_Tracker.git",
    },
    {
      title: "smart cloths remover using moister senser",
      category: "Hardware-Based",
      description:
        "Developed a Smart Clothes Remover System using a moisture sensor and automation techniques to protect clothes from rain. The system detects moisture in real time and automatically moves clothes to a sheltered area, improving convenience, reducing manual intervention, and preventing clothes from getting wet during sudden weather changes",
      tags: ["Hardware", "Management", "Detection"],
      stats: { coverage: "98%", status: "Completed" },
      github: "https://github.com/abhirammanikantareddymallidi/smart_cloths_remover_using_moister_senser.git",
      live: "https://github.com/abhirammanikantareddymallidi/smart_cloths_remover_using_moister_senser.git",
    },
    {
      title: "Smart Agricultural Marketplace",
      category: "Web Application",
      description:
        "Developed a web-based Smart Agricultural Value-Added Marketplace using Django to help farmers sell value-added agricultural products directly to buyers without middlemen. Implemented features like product listing, inventory management, order tracking, and feedback system.",
      tags: ["Django", "Python", "E-commerce"],
      stats: { coverage: "92%", status: "Completed" },
      github:
        "https://github.com/abhirammanikantareddymallidi/Smart_Agricultural_Value-Added_Marketplace.git",
      live: "https://github.com/abhirammanikantareddymallidi/Smart_Agricultural_Value-Added_Marketplace.git",
    },
    {
      title: "Student-Registration-Management-System",
      category: "Web Application",
      description:
        "A web-based Student Registration Management System built using Django that simplifies the management of student registration information.",
      tags: ["Django", "Python", "E-commerce"],
      stats: { coverage: "98%", status: "Completed" },
      github:
        "https://github.com/abhirammanikantareddymallidi/Student-Registration-Management-System.git",
      live: "https://github.com/abhirammanikantareddymallidi/Student-Registration-Management-System.git",
    },
  ];

  return (
    <section id="projects" className="py-32 px-8 bg-neutral-950/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.4em] mb-4">
              Portfolio
            </h2>
            <h3 className="text-6xl font-bold italic uppercase leading-tight">
              SELECTED <br />
              PROJECTS<span className="text-blue-500">.</span>
            </h3>
          </div>

          <p className="text-slate-500 max-w-sm mb-4">
            Exploring the limits of digital design through comprehensive
            projects in RTL, verification, and system architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 flex flex-col group hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Top Section */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-blue-400" />
                </div>

                <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest leading-none">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-slate-500 border border-slate-800 rounded px-2 py-1 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-4 items-center">
                    {/* GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-blue-500 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>

                    {/* Live Demo Link */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-[10px] text-right font-mono">
                      <div className="text-slate-500">COVERAGE</div>
                      <div className="text-blue-400">
                        {project.stats.coverage}
                      </div>
                    </div>

                    <div className="text-[10px] text-right font-mono">
                      <div className="text-slate-500">STATUS</div>
                      <div className="text-blue-400">
                        {project.stats.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/abhirammanikantareddymallidi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}