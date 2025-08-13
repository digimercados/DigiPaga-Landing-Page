"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface AppIconCardProps {
  name: string
  src: string
  index: number
}

export default function AppIconCard({ name, src, index }: AppIconCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: index * 0.1 } },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10 } },
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center md:p-2 will-change-transform"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={`${name} app icon`}
        width={80}
        height={80}
        className="object-contain w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
      />
      <span className="sr-only">{name}</span>
    </motion.div>
  )
}
