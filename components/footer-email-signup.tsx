"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import { motion } from "framer-motion"

export default function FooterEmailSignup() {
  return (
    <motion.div
      className="flex flex-col gap-4 items-center space-x-2 w-full max-w-sm will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <div className="relative w-full flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
        <Input
          type="email"
          placeholder="Enter your email" // Updated placeholder text
          className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-lime-500 focus:border-lime-500 w-full bg-gray-100"
          aria-label="Email address for newsletter signup"
        />
      </div>
      <Button className="bg-green-700 w-full hover:bg-green-800 text-white rounded-full px-4 py-2 flex-shrink-0" aria-label="Sign up for newsletter">
        Sign Up
      </Button>
    </motion.div>
  )
}
