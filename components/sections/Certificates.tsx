'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Calendar, X } from "lucide-react";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = [
  {
    title: "Artificial Intelligence & Machine Learning Using Python",
    issuer: "Taras Systems and Solutions",
    date: "2026",
    image: "/aiml.jpg",
    skills: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
      "Industrial Automation",
      "Data Analysis"
    ],
    description:
      "Successfully completed certification training in Artificial Intelligence and Machine Learning Using Python (Industrial Automation - L1), authorized by Koneru Lakshmaiah Education Foundation.",
    credentialId: "TSS12731"
  },
  {
    title: "FPGA VLSI Summer Internship",
    issuer: "Sense Semiconductor & IT Solutions Pvt. Ltd.",
    date: "2026",
    image: "/fpga.jpg",
    //verify:.................................................. ,*/
    skills: [
      "Verilog HDL",
      "FPGA Design",
      "RTL Design",
      "Digital Logic Design",
      "VLSI Fundamentals"
    ],
    description:
      "Successfully completed the Summer Internship Program in the Foundation Course: FPGA VLSI. Gained practical knowledge in Verilog HDL, RTL design, FPGA implementation, and digital circuit design.",
    credentialId: "SSIT-2026-1420"
  },
];

  return (
    <>
      <section id="certificates" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.4em] mb-4">
              Credentials
            </h2>

            <h3 className="text-5xl font-bold italic">
              CERTIFICATIONS
              <span className="text-blue-500">.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg"
              >
                {/* Clickable Image */}
                <div
                  className="cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-400" />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold">
                      {cert.title}
                    </h4>

                    <p className="text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    Verify Credential
                    <ExternalLink className="w-4 h-4" />
                  </a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Large Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Certificate"
                width={1200}
                height={900}
                className="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}