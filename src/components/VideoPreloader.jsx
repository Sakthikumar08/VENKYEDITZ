"use client"

import { useEffect, useState } from "react"

/**
 * Preload video resources for better performance
 * Hints the browser to preload video metadata and first frame
 */
const VideoPreloader = ({ videos = [] }) => {
  const [preloadedVideos, setPreloadedVideos] = useState(0)

  useEffect(() => {
    if (!Array.isArray(videos) || videos.length === 0) return

    // Preload video metadata
    videos.forEach((video) => {
      if (video.type === "local" && video.videoUrl) {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.as = "fetch"
        link.href = video.videoUrl
        link.type = "video/mp4"
        document.head.appendChild(link)

        // Also preload thumbnail
        if (video.thumbnail) {
          const thumbLink = document.createElement("link")
          thumbLink.rel = "prefetch"
          thumbLink.as = "image"
          thumbLink.href = video.thumbnail
          document.head.appendChild(thumbLink)
        }
      }
    })

    // Track preload progress
    const loadedCount = videos.filter((v) => v.type !== "local").length
    setPreloadedVideos(loadedCount)
  }, [videos])

  return null // This component only handles preloading, no UI
}

export default VideoPreloader
