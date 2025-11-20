"use client"

import { motion } from "framer-motion"

const GallerySection = () => {
  const galleryItems = [
    { id: 1, title: "Neural Network", category: "Motion Design" },
    { id: 2, title: "Cyber Flow", category: "VFX" },
    { id: 3, title: "Digital Aurora", category: "Color Grade" },
    { id: 4, title: "Quantum Leap", category: "Animation" },
    { id: 5, title: "Nexus Portal", category: "Compositing" },
    { id: 6, title: "Synthetic Dream", category: "Motion Design" },
  ]

  return (
    <section id="gallery" className="relative min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 font-mono">GALLERY.RENDER()</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative h-80 rounded-xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-slate-900/30 backdrop-blur-sm hover:border-orange-500/50 transition-all"
            >
              {/* Placeholder gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index % 2 === 0 ? "from-cyan-600/40 to-slate-900" : "from-orange-600/40 to-slate-900"
                } group-hover:opacity-80 transition-opacity`}
              ></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <h3
                    className={`text-2xl font-mono font-bold mb-2 ${
                      index % 2 === 0 ? "text-cyan-300" : "text-orange-300"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm uppercase tracking-widest">{item.category}</p>
                </motion.div>
              </div>

              {/* Hover overlay line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
