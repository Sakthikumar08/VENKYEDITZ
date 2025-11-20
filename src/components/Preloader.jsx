"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      pointerEvents="none"
    >
      {/* Background HUD elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 border border-cyan-500/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute w-64 h-64 border border-orange-500/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="text-center relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block px-4 py-2 rounded-lg border border-cyan-500/50 bg-cyan-500/10 mb-6 backdrop-blur-sm">
          <motion.span
            className="text-cyan-400 font-mono text-xs tracking-widest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            INITIALIZING SYSTEM
          </motion.span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 font-mono">
          <span className="text-cyan-400">VENKY</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">EDITS</span>
        </h1>

        <motion.div
          className="mt-8 flex justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-8 bg-gradient-to-t from-cyan-500 to-transparent rounded-full"
              animate={{ height: [8, 32, 8] }}
              transition={{ duration: 0.8, delay: i * 0.15, repeat: Number.POSITIVE_INFINITY }}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-slate-400 font-mono text-xs mt-8 tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        >
          LOADING_EXPERIENCE.EXE
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default Preloader
