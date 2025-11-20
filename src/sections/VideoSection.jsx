"use client"

import { motion } from "framer-motion"
import VideoCard from "../components/VideoCard"
import { videoData } from "../data/portfolioData"

const VideoSection = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 font-mono">REELS.STREAM()</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500"></div>
          <p className="text-slate-400 mt-4 text-lg">Short-form content optimized for maximum impact</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videoData.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="inline-block px-8 py-3 border-2 border-orange-500 text-orange-400 font-mono font-bold rounded-lg hover:bg-orange-500/20 transition-all uppercase tracking-widest"
          >
            View Archive
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection
