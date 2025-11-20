"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)

  const videoRef = useRef(null)

  const videoSrc = project.videoPreview || project.video || null
  const imageSrc = project.imageUrl

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      const vid = videoRef.current
      vid.muted = true
      vid.playsInline = true
      vid.loop = false
    }
  }, [videoSrc])

  const handlePlayPause = () => {
    const vid = videoRef.current
    if (!vid) return

    if (!isPlaying) {
      vid
        .play()
        .then(() => {
          setIsPlaying(true)
          vid.muted = false
        })
        .catch((err) => console.log("play failed:", err.message))
    } else {
      vid.pause()
      setIsPlaying(false)
    }
  }

  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl bg-black aspect-video"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (videoRef.current) videoRef.current.pause()
        setIsPlaying(false)
      }}
    >
      {/* Media Wrapper */}
      <div className="relative w-full h-full">

        {/* Image preview */}
        <img
          src={imageSrc}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 
          ${isPlaying || isLoaded ? "opacity-0" : "opacity-100"}`}
        />

        {/* Video */}
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
            ${isPlaying ? "opacity-100" : "opacity-0"}`}
            onLoadedMetadata={(e) => {
              setDuration(e.target.duration)
              setIsLoaded(true)
            }}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onEnded={() => setIsPlaying(false)}
            playsInline
          />
        )}
      </div>

      {/* Bottom Info Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 pointer-events-none">
        <h3 className="text-white font-semibold text-xl">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.description}</p>
      </div>

      {/* Controls when playing */}
      {isHovered && isPlaying && videoSrc && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-md">

          {/* Slim Progress Bar */}
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              const t = Number(e.target.value)
              setCurrentTime(t)
              videoRef.current.currentTime = t
            }}
            className="w-full cursor-pointer h-[3px] accent-[#a970ff]"
          />

          {/* Controls Row */}
          <div className="flex items-center justify-between mt-2 text-white text-xs">

            {/* Play/Pause */}
            <button
              onClick={handlePlayPause}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            {/* Volume */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => {
                setVolume(Number(e.target.value))
                videoRef.current.volume = Number(e.target.value)
              }}
              className="w-24 h-[3px] accent-[#a970ff]"
            />

            {/* Time */}
            <span className="opacity-80">
              {Math.floor(currentTime / 60)}:
              {(Math.floor(currentTime % 60) + "").padStart(2, "0")} /
              {Math.floor(duration / 60)}:
              {(Math.floor(duration % 60) + "").padStart(2, "0")}
            </span>
          </div>
        </div>
      )}

      {/* Play Button Before Start */}
      {isHovered && !isPlaying && videoSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <button
            onClick={handlePlayPause}
            className="p-5 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard
