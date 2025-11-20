"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

const CloudinaryVideoPlayer = ({ videoUrl, title, thumbnail, autoplay = false, muted = true }) => {
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const videoRef = useRef(null)

  useEffect(() => {
    // Load Cloudinary script if not already loaded
    if (!window.cloudinary) {
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/cloudinary-core/2.13.0/cloudinary-core.min.js"
      script.onload = () => {
        if (window.cloudinary) {
          window.cloudinary.Cloudinary.new({ cloud_name: "db2orszux" })
        }
      }
      document.head.appendChild(script)
    }
  }, [])

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  // Convert local URL to Cloudinary CDN URL if needed
  // Format: https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/f_auto,q_auto/v{version}/{public_id}.mp4
  const optimizedVideoUrl = videoUrl.includes("res.cloudinary.com") ? videoUrl : videoUrl

  return (
    <div className="relative w-full h-full bg-gray-900">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={optimizedVideoUrl}
        poster={thumbnail}
        muted={muted}
        loop
        playsInline
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Play/Pause Button */}
      <motion.button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 hover:opacity-100 transition-opacity"
        onClick={togglePlayPause}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </motion.button>

      {/* Video Title Overlay */}
      {title && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 pointer-events-none">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
      )}
    </div>
  )
}

export default CloudinaryVideoPlayer
