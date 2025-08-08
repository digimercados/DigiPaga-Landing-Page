"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function DottedWorldMap() {
  const mapRef = useRef(null)

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    hover: { fill: "#84CC16", scale: 1.2, transition: { duration: 0.1 } }, // Lime-500
  }

  // Generate a grid of dots
  const dots = []
  const rows = 30
  const cols = 60
  const dotSize = 5
  const spacingX = (1000 - cols * dotSize) / (cols + 1)
  const spacingY = (500 - rows * dotSize) / (rows + 1)

  // for (let r = 0; r < rows; r++) {
  //   for (let c = 0; c < cols; c++) {
  //     const x = c * (dotSize + spacingX) + spacingX + dotSize / 2
  //     const y = r * (dotSize + spacingY) + spacingY + dotSize / 2
  //     dots.push(
  //       <motion.circle
  //         key={`${r}-${c}`}
  //         cx={x}
  //         cy={y}
  //         r={dotSize / 2}
  //         fill="#9CA3AF" // Gray-400 for inactive dots
  //         variants={dotVariants}
  //         initial="hidden"
  //         whileInView="visible"
  //         whileHover="hover"
  //         viewport={{ once: true, amount: 0.5 }}
  //         custom={r * cols + c} // Custom prop for staggered animation
  //         transition={{ delay: (r * cols + c) * 0.001, duration: 0.2 }}
  //         className="will-change-transform"
  //       />
  //     )
  //   }
  // }

  return (
    <div className="relative w-full aspect-[2/1] max-w-4xl mx-auto" ref={mapRef}>
      <Image
        src="/map.svg"
        alt="Dotted World Map"
        fill
        style={{ objectFit: 'contain' }}
        className="opacity-80"
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 500"
        className="absolute top-0 left-0 z-10"
        aria-hidden="true" // Decorative SVG
      >
        {/* Render the interactive dots */}
        {/* {dots} */}
      </svg>
    </div>
  )
}
