"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import useMediaLoader from "../hooks/useMediaLoader"
import { optimizeVideoLoad } from "../utils/videoUtils"
import InstagramEmbed from "./InstagramEmbed"
import CloudinaryVideoPlayer from "./CloudinaryVideoPlayer"

const VideoCard = ({ video, index }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const [setRef, isIntersecting] = useIntersectionObserver({ threshold: 0.5 })
  const { mediaSrc: thumbnailSrc, isLoading, isError } = useMediaLoader(video.thumbnail)

  const isIframe = video.type === "instagram" || video.type === "youtube"
  const isCloudinary = video.type === "cloudinary"

  useEffect(() => {
    if (!videoRef.current || isIframe || isCloudinary) return

    optimizeVideoLoad(videoRef.current, {
      muted: true,
      playsInline: true,
      loop: true,
    })

    if (isIntersecting && !isPlaying) {
      videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e))
    } else if (!isIntersecting && isPlaying) {
      videoRef.current.pause()
    }
  }, [isIntersecting, isPlaying, isIframe, isCloudinary])

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  if (isCloudinary) {
    return (
      <motion.div
        ref={setRef}
        className="relative group overflow-hidden rounded-xl bg-gray-800 aspect-[9/16] border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
      >
        <CloudinaryVideoPlayer videoUrl={video.videoUrl} title={video.title} thumbnail={video.thumbnail} muted={true} />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-semibold text-lg">{video.title}</h3>
          <p className="text-gray-300 text-sm">{video.category}</p>
        </div>
      </motion.div>
    )
  }

  if (isIframe) {
    return (
      <motion.div
        ref={setRef}
        className="relative group overflow-hidden rounded-xl bg-gray-800 aspect-[9/16] border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
      >
        <div className="w-full h-full overflow-hidden">
          {video.type === "instagram" ? (
            <InstagramEmbed url={video.embedUrl} title={video.title} />
          ) : (
            <iframe
              src={video.embedUrl}
              className="w-full h-full"
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 pointer-events-none">
          <h3 className="text-white font-semibold text-lg">{video.title}</h3>
          <p className="text-gray-300 text-sm">{video.category}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={setRef}
      className="relative group overflow-hidden rounded-xl bg-gray-800 aspect-[9/16] border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* Thumbnail/Video */}
      <div className="relative w-full h-full">
        {isLoading ? (
          <div className="w-full h-full bg-gray-700 animate-pulse" />
        ) : (
          <>
            {!isPlaying && (
              <img src={thumbnailSrc || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />
            )}
            <video
              ref={videoRef}
              src={video.videoUrl}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover ${isPlaying ? "block" : "hidden"}`}
              onEnded={handleVideoEnd}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-lg">{video.title}</h3>
        <p className="text-gray-300 text-sm">{video.category}</p>
      </div>

      {/* Play/Pause Button */}
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => {
          if (videoRef.current) {
            if (isPlaying) {
              videoRef.current.pause()
            } else {
              videoRef.current.play()
            }
          }
        }}
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
      </button>
    </motion.div>
  )
}

export default VideoCard
