"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface Card3DProps {
  children: ReactNode
  className?: string
}

export default function Card3D({ children, className = "" }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse tracking with springs
  const springConfig = { damping: 20, stiffness: 300 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  // Transform mouse position into rotation values
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-15deg", "15deg"])

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate normalized mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - centerX) / rect.width
    const normalizedY = (e.clientY - centerY) / rect.height

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }

  // Pre-calculate the opacity and background position for the reflection effect
  const opacity = useTransform(smoothMouseY, [-0.5, 0.5], [0.1, 0.3])
  const backgroundPosition = useTransform(smoothMouseX, [-0.5, 0.5], ["0% 0%", "100% 100%"])

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        transformStyle: "preserve-3d",
        rotateX: hovering ? rotateX : "0deg",
        rotateY: hovering ? rotateY : "0deg",
        transition: "transform 0.1s ease",
      }}
    >
      {children}

      {/* Reflection/Glare Effect */}
      {hovering && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none"
          style={{
            opacity: opacity,
            backgroundPosition: backgroundPosition,
          }}
        />
      )}
    </motion.div>
  )
}

