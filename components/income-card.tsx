"use client"

import { motion } from "framer-motion"
import { Info, ArrowUp } from 'lucide-react'

export default function IncomeCard() {
  return (
    <motion.div
      className="absolute bottom-16 right-0 md:right-16 lg:right-24 bg-white rounded-xl p-4 shadow-lg flex flex-col items-start z-20 will-change-transform"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between w-full mb-2">
        <span className="text-sm text-gray-500">Total Income</span>
        <Info className="h-4 w-4 text-gray-400" aria-label="Total Income Information" />
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">
        $234.98K
      </div>
      <div className="flex items-center text-sm text-lime-600">
        <ArrowUp className="h-4 w-4 mr-1" aria-hidden="true" />
        234.45%
      </div>
    </motion.div>
  )
}
