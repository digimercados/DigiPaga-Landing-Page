"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface SocialIconProps {
  icon: LucideIcon
  name: string
  color: string // Tailwind background color class
  index: number
}

export default function SocialIcon({ icon: Icon, name, color, index }: SocialIconProps) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: index * 0.1, ease: "easeOut" } },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10 } },
  }

  return (
    <motion.div
      className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#296253] group hover:bg-[#19433a] text-[#F8F9F4] will-change-transform`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.5 }}
      role="listitem"
    >
      <Link href="#" aria-label={`Follow us on ${name}`}>
        <Icon className="h-5 w-5" />
      </Link>
    </motion.div>
  )
}
