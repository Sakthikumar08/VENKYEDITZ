"use client"

import { motion } from "framer-motion"
import HUDBackground from "../components/HUD/HUDBackground"
import { useState } from "react"
import Profile from "../assets/venky-pic.png"

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HUDBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left side - Text content */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 backdrop-blur-md border-l-2 border-t-2 border-cyan-500/60 hover:border-cyan-400 transition-all group cursor-pointer">
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-cyan-400 opacity-60 group-hover:opacity-100"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-cyan-400 opacity-60 group-hover:opacity-100"></div>
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase">Hi, I am</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tighter"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white">VENKY</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
                EDITZ
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-cyan-300 max-w-2xl mb-10 font-light leading-relaxed"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From dreamscapes to webscapes, I craft digital realities from your wildest ideas.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crafting cinematic experiences through precision editing and futuristic visual storytelling.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#work"
                className="relative px-8 py-3 bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 backdrop-blur-md border-l-2 border-t-2 border-cyan-400 hover:border-cyan-300 transition-all group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative font-mono font-bold text-cyan-300 group-hover:text-cyan-100 transition-colors">
                  VIEW PORTFOLIO
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="relative px-8 py-3 bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-md border-l-2 border-t-2 border-orange-400 hover:border-orange-300 transition-all group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative font-mono font-bold text-orange-400 group-hover:text-orange-200 transition-colors">
                  GET IN TOUCH
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with exact 80x90px size */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative group">
              <motion.div
                className="relative overflow-hidden"
                animate={{ rotateY: isHovering ? 360 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ 
                  perspective: "1000px",
                  width: "400px",
                  height: "450px"
                }}
              >
                <div className="absolute inset-0 border-2 border-cyan-400/60 group-hover:border-cyan-300 transition-all">
                  {/* Scanning line effect */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-b from-cyan-400 to-transparent opacity-60"
                    style={{
                      animation: "scan 3s linear infinite",
                    }}
                  ></div>
                </div>

                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* Top-left corner accent */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
                  {/* Bottom-right corner accent */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-orange-400"></div>
                </div>

                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{
                    width: "400px",
                    height: "450px"
                  }}
                />
              </motion.div>

              <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-cyan-400/40 group-hover:border-cyan-400/80 transition-all"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-orange-400/30 group-hover:border-orange-400/70 transition-all"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="relative w-10 h-10 border-l-2 border-t-2 border-cyan-500/60 hover:border-cyan-400 transition-colors cursor-pointer">
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-500/60"></div>
            <svg className="w-6 h-6 text-cyan-400 mx-auto mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection