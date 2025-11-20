"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import { buildYouTubeEmbedUrl, getInstagramEmbedUrl } from "../utils/embedUtils"

const ReelStreamPlayer = ({ video, index }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [setRef, isIntersecting] = useIntersectionObserver({ threshold: 0.5 })
  const [showInstagramEmbed, setShowInstagramEmbed] = useState(false)

  useEffect(() => {
    if (!videoRef.current || video.type !== "local") return

    if (isIntersecting && !isPlaying) {
      videoRef.current.play().catch(() => console.log("Autoplay prevented"))
    } else if (!isIntersecting) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isIntersecting, isPlaying, video.type])

  useEffect(() => {
    if (video.type !== "instagram" || !isIntersecting) return

    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    } else {
      const script = document.createElement("script")
      script.src = "https://www.instagram.com/embed.js"
      script.async = true
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      }
      document.body.appendChild(script)
    }

    setShowInstagramEmbed(true)
  }, [isIntersecting, video.type])

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const handleFullscreen = () => {
    if (!containerRef.current) return

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  // Local Video Player
  if (video.type === "local") {
    return (
      <motion.div
        ref={setRef}
        className="relative group overflow-hidden rounded-xl bg-gray-900 aspect-[9/16] border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
      >
        <div ref={containerRef} className="w-full h-full relative">
          {/* Video Element */}
          <video
            ref={videoRef}
            src={video.videoUrl}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleVideoEnd}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-4 pointer-events-none group-hover:pointer-events-auto">
            {/* Top - Badge */}
            <div className="flex justify-between items-start">
              <span className="bg-cyan-500/80 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                {video.category}
              </span>
              <span className="bg-orange-500/80 text-white px-2 py-1 rounded-full text-xs font-mono">LOCAL</span>
            </div>

            {/* Bottom - Info & Controls */}
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{video.title}</h3>
                <p className="text-gray-300 text-xs mt-1">{video.description || "Short-form content"}</p>
              </div>
            </div>
          </div>

          {/* Play/Pause Button - Center */}
          <button
            onClick={() => {
              if (videoRef.current) {
                if (isPlaying) {
                  videoRef.current.pause()
                } else {
                  videoRef.current.play()
                }
              }
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
          >
            {isPlaying ? (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-2.5zm5.5 0a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-2.5z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            )}
          </button>

          {/* Fullscreen Button - Bottom Right */}
          <button
            onClick={handleFullscreen}
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm12 0a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L12.586 5H11a1 1 0 110-2h4zM3 16a1 1 0 01-1-1v-4a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414l-2.293 2.293V15a1 1 0 01-2 0zm14-1a1 1 0 001-1v-4a1 1 0 00-2 0v1.586l-2.293-2.293a1 1 0 00-1.414 1.414l2.293 2.293V15a1 1 0 001 1z" />
            </svg>
          </button>
        </div>
      </motion.div>
    )
  }

  // YouTube Embed
  if (video.type === "youtube") {
    const embedUrl = buildYouTubeEmbedUrl(video.embedUrl)

    return (
      <motion.div
        ref={setRef}
        className="relative group overflow-hidden rounded-xl bg-gray-900 aspect-[9/16] border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
      >
        <div className="w-full h-full relative">
          {embedUrl && (
            <iframe
              src={embedUrl}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
          <span className="bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
            YouTube
          </span>
          <h3 className="text-white font-bold text-lg mt-2">{video.title}</h3>
          <p className="text-gray-300 text-sm">{video.description || video.category}</p>
        </div>
      </motion.div>
    )
  }

  // Instagram Embed
  if (video.type === "instagram" && showInstagramEmbed) {
    const instagramUrl = getInstagramEmbedUrl(video.embedUrl)

    return (
      <motion.div
        ref={setRef}
        className="relative group overflow-hidden rounded-xl bg-gray-900 aspect-[9/16] border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
      >
        <div className="w-full h-full flex items-center justify-center bg-gray-800 overflow-hidden">
          <blockquote
            className="instagram-media w-full"
            data-instgrm-permalink={instagramUrl}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "0",
              maxWidth: "100%",
              minWidth: "100%",
              padding: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              {video.title}
            </a>
          </blockquote>
        </div>

        {/* Badge */}
        <div className="absolute top-4 right-4 bg-pink-500/80 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase z-10 pointer-events-none">
          Instagram
        </div>
      </motion.div>
    )
  }

  // Loading state for Instagram before embed is ready
  if (video.type === "instagram") {
    return (
      <motion.div
        ref={setRef}
        className="relative overflow-hidden rounded-xl bg-gray-900 aspect-[9/16] border-2 border-cyan-500/30 animate-pulse"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 text-cyan-400 mx-auto mb-2 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-gray-400 text-sm">Loading Instagram</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return null
}

export default ReelStreamPlayer
