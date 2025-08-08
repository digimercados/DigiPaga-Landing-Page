"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function DottedWorldMap() {
  const mapRef = useRef<SVGSVGElement>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (mapRef.current) {
      const svgRect = mapRef.current.getBoundingClientRect()
      // Scale mouse coordinates to the SVG's viewBox (1000x500)
      const x = (event.clientX - svgRect.left) / svgRect.width * 1000
      const y = (event.clientY - svgRect.top) / svgRect.height * 500
      setMousePosition({ x, y })
    }
  }

  const handleMouseLeave = () => {
    setMousePosition(null) // Reset mouse position to disable effect
  }

  // Generate a grid of dots
  const dots = []
  const rows = 30
  const cols = 60
  const dotSize = 5
  const spacingX = (1000 - cols * dotSize) / (cols + 1)
  const spacingY = (500 - rows * dotSize) / (rows + 1)

  const maxEffectDistance = 150; // Maximum distance for the ripple effect

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * (dotSize + spacingX) + spacingX + dotSize / 2
      const y = r * (dotSize + spacingY) + spacingY + dotSize / 2

      // Calculate distance from mouse
      const distance = mousePosition
        ? Math.sqrt(Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2))
        : Infinity;

      // Normalize distance (0 to 1) within the effect radius
      const normalizedDistance = Math.min(distance, maxEffectDistance) / maxEffectDistance;

      // Calculate dynamic scale and opacity based on normalized distance
      // Closer to mouse (normalizedDistance -> 0) means larger scale and higher opacity
      // Further from mouse (normalizedDistance -> 1) means base scale and opacity
      const targetScale = mousePosition ? 1 + (1 - normalizedDistance) * 0.5 : 1; // Scales from 1 to 1.5
      const targetOpacity = mousePosition ? 0.5 + (1 - normalizedDistance) * 0.5 : 1; // Opacity from 0.5 to 1

      // Determine fill color
      const dynamicFill = mousePosition && distance < maxEffectDistance ? "#84CC16" : "#9CA3AF"; // Lime-500 or Gray-400

      dots.push(
        <motion.circle
          key={`${r}-${c}`}
          cx={x}
          cy={y}
          r={dotSize / 2}
          fill={dynamicFill}
          animate={{
            scale: targetScale,
            opacity: targetOpacity,
            fill: dynamicFill, // Animate fill color as well
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.5, // Added mass for a slightly more natural spring
          }}
          className="will-change-transform"
        />
      )
    }
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 500"
      className="absolute top-0 left-0 z-10" // Positioned absolutely to overlay the base map
      aria-hidden="true" // Decorative SVG
      ref={mapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Render the interactive dots */}
      {dots}
    </svg>
  )
}
