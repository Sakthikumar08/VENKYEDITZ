"use client"

import { motion } from "framer-motion"

const AboutSection = () => {
  const skills = [
    { name: "Video Editing", level: 95 },
    { name: "Color Grading", level: 90 },
    { name: "Motion Graphics", level: 85 },
    { name: "VFX & Compositing", level: 88 },
    { name: "Audio Design", level: 82 },
    { name: "Storytelling", level: 92 },
  ]

  const tools = ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Figma", "Blender"]

  return (
    <section id="about" className="relative min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 font-mono">SYSTEM.ABOUT()</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-mono font-bold text-cyan-400 mb-4">PROFILE</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm a passionate video editor and visual storyteller with{" "}
              <span className="text-orange-400 font-semibold">5+ years</span> of experience crafting cinematic
              experiences. Specializing in fast-paced editing, color grading, and immersive motion graphics that elevate
              brands and captivate audiences.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My approach combines <span className="text-cyan-400 font-semibold">technical precision</span> with{" "}
              <span className="text-orange-400 font-semibold">artistic vision</span>, transforming raw footage into
              compelling narratives across film, advertising, and digital platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm">
              <h4 className="text-lg font-mono font-bold text-orange-400 mb-4">TOOLKIT</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-sm rounded-full border border-orange-500/50 text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <h4 className="text-lg font-mono font-bold text-cyan-400 mb-4">EXPERTISE</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Cinematic Editing & Storytelling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  Advanced Color Grading
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Motion Graphics Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  VFX & Compositing
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Skills bars */}
        <motion.div
          className="mt-16 p-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-mono font-bold text-cyan-400 mb-8">PROFICIENCY.MATRIX()</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-cyan-400 font-mono">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
