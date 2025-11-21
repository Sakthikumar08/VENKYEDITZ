"use client"

import { motion } from "framer-motion"
import VideoCard from "../components/VideoCard"
import { videoData } from "../data/portfolioData"

const ReelsPage = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 font-mono">REELS.SHOWCASE()</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-orange-500"></div>
          <p className="text-slate-400 mt-4 text-lg">Curated collection of short-form video content</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videoData.map((video, index) => (
            <VideoCard key={`${video.id}-${index}`} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReelsPage