"use client"

import { motion } from "framer-motion"

const GalleryPage = () => {
  const galleryItems = [
    { id: 1, title: "Neural Network", category: "Motion Design", accent: "cyan" },
    { id: 2, title: "Cyber Flow", category: "VFX", accent: "orange" },
    { id: 3, title: "Digital Aurora", category: "Color Grade", accent: "cyan" },
    { id: 4, title: "Quantum Leap", category: "Animation", accent: "orange" },
    { id: 5, title: "Nexus Portal", category: "Compositing", accent: "cyan" },
    { id: 6, title: "Synthetic Dream", category: "Motion Design", accent: "orange" },
    { id: 7, title: "Ethereal Waves", category: "VFX", accent: "cyan" },
    { id: 8, title: "Cosmic Drift", category: "Color Grade", accent: "orange" },
    { id: 9, title: "Neon Pulse", category: "Animation", accent: "cyan" },
  ]

  return (
    <section className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="mb-12 sm:mb-16 md:mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cyan-400 mb-4 font-mono">GALLERY.RENDER()</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            A curated collection of visual masterpieces showcasing motion design, VFX, and color grading expertise
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className={`group relative h-64 sm:h-80 rounded-xl overflow-hidden border backdrop-blur-sm hover:shadow-lg transition-all cursor-pointer ${
                item.accent === "cyan"
                  ? "border-cyan-500/30 hover:border-cyan-400 hover:shadow-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-slate-900/30"
                  : "border-orange-500/30 hover:border-orange-400 hover:shadow-orange-500/20 bg-gradient-to-b from-orange-500/10 to-slate-900/30"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  item.accent === "cyan" ? "from-cyan-600/40 to-slate-900" : "from-orange-600/40 to-slate-900"
                } group-hover:opacity-80 transition-opacity`}
              ></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h3
                    className={`text-xl sm:text-2xl font-mono font-bold mb-2 ${
                      item.accent === "cyan" ? "text-cyan-300" : "text-orange-300"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-widest">{item.category}</p>
                </motion.div>
              </div>

              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${item.accent === "cyan" ? "via-cyan-500" : "via-orange-500"} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryPage
