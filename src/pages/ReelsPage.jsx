"use client"

import { motion } from "framer-motion"
import VideoCard from "../components/VideoCard"
import { videoData } from "../data/portfolioData"

const ReelsPage = () => {
  return (
    <section className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-4 font-mono">REELS.SHOWCASE()</h1>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500"></div>
          <p className="text-slate-400 mt-3 sm:mt-4 text-base sm:text-lg">Curated collection of short-form video content</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {videoData.map((video, index) => (
            <VideoCard key={`${video.id}-${index}`} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReelsPage