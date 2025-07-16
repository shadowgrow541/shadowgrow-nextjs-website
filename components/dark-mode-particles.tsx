"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export function DarkModeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Only run on client side
  useEffect(() => {
    setMounted(true)

    // Set initial dimensions
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Cleanup animation on unmount
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Handle resize without event listeners
  useEffect(() => {
    if (!mounted) return

    // Safe resize handler that doesn't use addEventListener
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    // Use a polling approach instead of event listeners
    const resizeInterval = setInterval(handleResize, 1000)

    return () => {
      clearInterval(resizeInterval)
    }
  }, [mounted])

  // Animation effect
  useEffect(() => {
    if (!mounted || !canvasRef.current || theme !== "dark" || dimensions.width === 0) {
      return
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = `hsla(217, 100%, ${60 + Math.random() * 20}%, ${0.1 + Math.random() * 0.2})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(30, Math.floor((canvas.width * canvas.height) / 30000))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles
      connectParticles()

      animationRef.current = requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = () => {
      if (!ctx) return
      const maxDistance = 150

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `hsla(217, 100%, 65%, ${opacity * 0.15})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [theme, mounted, dimensions])

  // Don't render anything on server or if theme is not dark
  if (!mounted || theme !== "dark") return null

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" aria-hidden="true" />
}
