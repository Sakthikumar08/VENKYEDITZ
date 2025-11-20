"use client"

import { useEffect, useRef } from "react"

const InstagramEmbed = ({ url, title }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (window.instgrm) {
      // Script already loaded, process the embed
      window.instgrm.Embeds.process()
    } else {
      // Load the Instagram embed script
      const script = document.createElement("script")
      script.src = "https://www.instagram.com/embed.js"
      script.async = true
      script.onload = () => {
        // After script loads, process embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      }
      document.body.appendChild(script)
    }

    return () => {
      // Reprocess embeds when URL changes
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }
  }, [url])

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center bg-gray-800">
      <blockquote
        className="instagram-media w-full"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "100%",
          minWidth: "100%",
          padding: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </blockquote>
    </div>
  )
}

export default InstagramEmbed
