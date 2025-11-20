"use client"

import { useEffect, useRef } from "react"

const HUDBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId
    let time = 0

    const drawTargetRings = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      for (let i = 0; i < 5; i++) {
        const radius = 50 + i * 40 + Math.sin(time * 0.001) * 10

        ctx.strokeStyle = `rgba(34, 211, 238, ${0.5 - i * 0.08})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Rotating inner rings
      ctx.strokeStyle = `rgba(34, 211, 238, 0.4)`
      ctx.lineWidth = 2
      for (let i = 0; i < 3; i++) {
        const angle = (time * 0.05 + (i * Math.PI) / 1.5) % (Math.PI * 2)
        const radius = 80
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, Math.PI * 0.5)
        ctx.stroke()
        ctx.restore()
      }

      // Central glowing point
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 30)
      gradient.addColorStop(0, "rgba(34, 211, 238, 0.8)")
      gradient.addColorStop(1, "rgba(34, 211, 238, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(centerX - 30, centerY - 30, 60, 60)
    }

    const drawGridPattern = () => {
      ctx.strokeStyle = "rgba(34, 211, 238, 0.05)"
      ctx.lineWidth = 1

      const spacing = 100
      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const drawParticles = () => {
      ctx.fillStyle = "rgba(34, 211, 238, 0.3)"
      const particleCount = 30
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * 0.0001 + i) + 1) * (canvas.width / 2)
        const y = (Math.cos(time * 0.0001 + i * 1.5) + 1) * (canvas.height / 2)
        const size = 2 + Math.sin(time * 0.001 + i) * 1
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawGridPattern()
      drawParticles()
      drawTargetRings()

      time++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
  )
}

export default HUDBackground
