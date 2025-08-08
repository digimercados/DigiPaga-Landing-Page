"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import { motion } from "framer-motion"

export default function EmailSignup() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md mx-auto lg:mx-0 will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
    >
      <div className="relative flex-1 w-full sm:w-auto">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="email"
          placeholder="Type your email here"
          className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-lime-500 focus:border-lime-500 w-full"
          aria-label="Email address"
        />
      </div>
      <Button className="bg-green-700 md:absolute right-0 hover:bg-green-800 text-white rounded-full px-6 py-2 w-full sm:w-auto" aria-label="Register for updates">
        Register
      </Button>
    </motion.div>
  )
}
