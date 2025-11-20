"use client"

import { motion } from "framer-motion"

const WorkSection = () => {
  const projects = [
    {
      title: "NEBULA PROTOCOL",
      description: "Advanced video synthesis and editing suite",
      tech: ["React", "Canvas API", "FFmpeg"],
      accent: "cyan",
    },
    {
      title: "DIGITAL RESONANCE",
      description: "Immersive audio-visual experience platform",
      tech: ["WebGL", "Three.js", "Node.js"],
      accent: "orange",
    },
    {
      title: "QUANTUM RENDER",
      description: "Real-time 4K video processing engine",
      tech: ["C++", "CUDA", "React"],
      accent: "cyan",
    },
  ]

  return (
    <section id="work" className="relative min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 font-mono">PORTFOLIO.EXECUTE()</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`p-6 rounded-xl border backdrop-blur-sm transition-all hover:shadow-lg group ${
                project.accent === "cyan"
                  ? "border-cyan-500/30 hover:border-cyan-400 hover:shadow-cyan-500/20 bg-cyan-500/5"
                  : "border-orange-500/30 hover:border-orange-400 hover:shadow-orange-500/20 bg-orange-500/5"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <h3
                className={`text-xl font-mono font-bold mb-2 ${project.accent === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
              >
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full border ${
                      project.accent === "cyan"
                        ? "border-cyan-500/50 text-cyan-300 bg-cyan-500/10"
                        : "border-orange-500/50 text-orange-300 bg-orange-500/10"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
