"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface CurrencyIconProps {
  code: string
  color: string
  symbolQuery: string
  index: number
}

export default function CurrencyIcon({ code, color, symbolQuery, index }: CurrencyIconProps) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: index * 0.05 } },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-2 will-change-transform"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.8 }}
      role="listitem"
    >
      <Image
        src={`/placeholder.svg?height=64&width=64&query=circular icon with ${symbolQuery} on ${color} background`}
        alt={`${code} currency icon`}
        width={64}
        height={64}
        className="object-contain w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="mt-2 text-sm md:text-base text-white font-medium">{code}</span>
    </motion.div>
  )
}
