"use client"

import { motion } from "framer-motion"

const WorkPage = () => {
  const projects = [
    {
      title: "NEBULA PROTOCOL",
      description: "Advanced video synthesis and editing suite with real-time processing capabilities",
      tech: ["React", "Canvas API", "FFmpeg"],
      accent: "cyan",
      details:
        "A comprehensive video editing platform designed for professionals seeking advanced synthesis options and real-time rendering capabilities.",
    },
    {
      title: "DIGITAL RESONANCE",
      description: "Immersive audio-visual experience platform with interactive elements",
      tech: ["WebGL", "Three.js", "Node.js"],
      accent: "orange",
      details:
        "An innovative platform combining audio and visual elements to create immersive interactive experiences.",
    },
    {
      title: "QUANTUM RENDER",
      description: "Real-time 4K video processing engine with GPU acceleration",
      tech: ["C++", "CUDA", "React"],
      accent: "cyan",
      details: "A powerful engine for processing 4K video in real-time using advanced GPU acceleration techniques.",
    },
    {
      title: "CHROMATIC SHIFT",
      description: "Advanced color grading and color science tool",
      tech: ["React", "Web Assembly", "Three.js"],
      accent: "orange",
      details:
        "Professional-grade color grading software with support for advanced color science and LUT implementation.",
    },
    {
      title: "FLUX DYNAMICS",
      description: "Motion graphics synthesis and animation engine",
      tech: ["WebGL", "Gsap", "Canvas API"],
      accent: "cyan",
      details: "A specialized engine for creating complex motion graphics and animations with intuitive controls.",
    },
    {
      title: "VOID DIMENSION",
      description: "Volumetric effects and particle simulation tool",
      tech: ["Three.js", "Glsl", "React"],
      accent: "orange",
      details: "Advanced tool for creating stunning volumetric effects and realistic particle simulations.",
    },
  ]

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4 font-mono">PORTFOLIO.EXECUTE()</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Showcasing a collection of projects spanning video editing, visual effects, and digital innovation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`p-8 rounded-xl border backdrop-blur-sm transition-all hover:shadow-lg group ${
                project.accent === "cyan"
                  ? "border-cyan-500/30 hover:border-cyan-400 hover:shadow-cyan-500/20 bg-cyan-500/5"
                  : "border-orange-500/30 hover:border-orange-400 hover:shadow-orange-500/20 bg-orange-500/5"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-2 h-2 mt-1.5 rounded-full ${project.accent === "cyan" ? "bg-cyan-500" : "bg-orange-500"}`}
                ></div>
                <h3
                  className={`text-2xl font-mono font-bold ${project.accent === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                >
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.details}</p>

              <div className="flex flex-wrap gap-2 mb-6">
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

              <motion.button
                className={`w-full py-2 px-4 rounded-lg border font-mono text-sm font-bold transition-all ${
                  project.accent === "cyan"
                    ? "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20"
                    : "border-orange-500/50 text-orange-400 hover:bg-orange-500/20"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                VIEW PROJECT
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkPage
