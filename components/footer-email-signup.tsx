"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import { motion } from "framer-motion"

export default function FooterEmailSignup() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md mx-auto lg:mx-0 will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
    >
      <div className="relative py-1 flex-1 w-full sm:w-auto">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="email"
          placeholder="Type email"
          className="pl-10  py-6 rounded-full border bg-[#EDF0E3] placeholder:text-xs border-[gray-300] focus:ring-lime-500 focus:border-lime-500 w-full"
          aria-label="Email address"
        />
      </div>
      <Button className="  text-xs font-normal h-8 absolute right-2 bg-[#296253] group hover:bg-[#19433a] text-[#F8F9F4] rounded-full px-4 " aria-label="Register for updates">
        Sign Up
      </Button>

    </motion.div>
  )
}
