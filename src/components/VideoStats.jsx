"use client"

import { motion } from "framer-motion"

const VideoStats = ({ videoData = [] }) => {
  const stats = {
    total: videoData.length,
    local: videoData.filter((v) => v.type === "local").length,
    youtube: videoData.filter((v) => v.type === "youtube").length,
    instagram: videoData.filter((v) => v.type === "instagram").length,
  }

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-center p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
        <div className="text-2xl font-bold text-cyan-400">{stats.total}</div>
        <div className="text-sm text-gray-400">Total Videos</div>
      </div>
      <div className="text-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
        <div className="text-2xl font-bold text-orange-400">{stats.local}</div>
        <div className="text-sm text-gray-400">Local Videos</div>
      </div>
      <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/30">
        <div className="text-2xl font-bold text-red-400">{stats.youtube}</div>
        <div className="text-sm text-gray-400">YouTube</div>
      </div>
      <div className="text-center p-4 bg-pink-500/10 rounded-lg border border-pink-500/30">
        <div className="text-2xl font-bold text-pink-400">{stats.instagram}</div>
        <div className="text-sm text-gray-400">Instagram</div>
      </div>
    </motion.div>
  )
}

export default VideoStats
