"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const ToolsScrollSection = () => {
  const scrollContainerRef = useRef(null)

  const tools = [
    { name: "After Effects", label: "AE", color: "from-purple-500 to-pink-500" },
    { name: "Premiere Pro", label: "PR", color: "from-blue-500 to-cyan-500" },
    { name: "DaVinci Resolve", label: "DR", color: "from-orange-500 to-red-500" },
    { name: "Cinema 4D", label: "C4D", color: "from-indigo-500 to-purple-500" },
    { name: "Blender", label: "BLD", color: "from-blue-600 to-blue-400" },
    { name: "Figma", label: "FGM", color: "from-pink-500 to-purple-500" },
    { name: "Adobe XD", label: "XD", color: "from-pink-600 to-red-500" },
    { name: "Photoshop", label: "PS", color: "from-blue-700 to-cyan-500" },
  ]

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 1

    const animate = () => {
      scrollPosition += scrollSpeed
      scrollContainer.scrollLeft = scrollPosition

      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-slate-900/30 to-slate-900/10 border-t border-b border-cyan-500/10">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 pointer-events-none z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-cyan-400 font-mono tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          [PROFESSIONAL TOOLS &amp; TECHNOLOGIES]
        </motion.h2>

        {/* Horizontal scrolling container with continuous scroll */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-hidden scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-4 sm:gap-6 pb-4 min-w-max px-4">
            {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
              <motion.div key={index} className="flex-shrink-0">
                <motion.div
                  className="relative w-24 h-32 sm:w-36 sm:h-44 group overflow-hidden"
                  whileHover={{ scale: 1.08, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Outer border frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-md border-l-2 border-t-2 border-cyan-500/50 group-hover:border-cyan-400 transition-all">
                    {/* Corner decorations */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-cyan-400/60 group-hover:border-cyan-400 transition-all"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-orange-400/40 group-hover:border-orange-400/80 transition-all"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-cyan-400/40 group-hover:border-cyan-400/80 transition-all"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-orange-400/60 group-hover:border-orange-400 transition-all"></div>

                    {/* Inner content */}
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4">
                      <motion.div
                        className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-br from-cyan-400 to-orange-400 bg-clip-text text-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        {tool.label}
                      </motion.div>
                      <div className="text-xs font-mono text-center text-cyan-300 group-hover:text-cyan-100 transition-colors">
                        {tool.name}
                      </div>

                      {/* Animated scan line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-500 to-orange-500"
              animate={{ scaleX: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Number.POSITIVE_INFINITY }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsScrollSection
