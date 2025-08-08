"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import IncomeCard from "./income-card"

export default function InvoiceManagementSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const starVariants = {
    initial: { rotate: 0, opacity: 0, scale: 0.5 },
    animate: { rotate: 360, opacity: 1, scale: 1, transition: { duration: 10, repeat: Infinity, ease: "linear" } },
  }

  return (
    <motion.section
      className="relative w-full py-12 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-white flex flex-col items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="invoice-management-heading"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Card */}
        <motion.div
          className="relative bg-lime-50 rounded-[2rem] p-8 md:p-12 flex flex-col space-y-6 text-center lg:text-left shadow-lg will-change-transform"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center justify-center lg:justify-start bg-lime-100 text-lime-700 text-sm font-medium px-4 py-2 rounded-full self-center lg:self-start"
            variants={itemVariants}
          >
            DigiPaga Virtual Debit card
          </div>

          <h3 id="invoice-management-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight" >
            Manage you Invoices in <span className="text-lime-500">15 different currencies</span>
          </h3>

          <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600" >
            Digi Mercados is your all-in-one super wallet designed for seamless navigation of the digital markets.
            Secure, fast, and feature-packed, it empowers you to trade, invest, & manage assets effortlessly—all in
            one place.
          </p>

          <div className="mt-8" >
            <Button className="bg-green-700 hover:bg-green-800 text-white rounded-full px-6 py-2" aria-label="Read more about invoice management">
              Read more
            </Button>
          </div>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          className="relative flex justify-center lg:justify-end items-center h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0 will-change-transform"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10 bg-white rounded-[2rem] p-4 shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=400"
              width={400}
              height={500}
              alt="Woman working at desk"
              className="object-cover rounded-[1.5rem] w-full h-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
            />
            {/* Green star on image frame */}
            <motion.svg
              className="absolute -bottom-2 -left-2 w-12 h-12 text-lime-500 opacity-70 will-change-transform"
              viewBox="0 0 24 24"
              fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              aria-hidden="true"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </motion.svg>
          </div>

          {/* Blue Star (top right) */}
          <motion.svg
            className="absolute -top-8 right-1/4 lg:right-1/3 w-24 h-24 text-indigo-500 opacity-70 will-change-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={starVariants}
            initial="initial"
            animate="animate"
            aria-hidden="true"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" transform="rotate(45 12 12)" />
          </motion.svg>

          {/* Total Income Card Overlay */}
          <IncomeCard />

          {/* Money Illustration */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 z-0 will-change-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/placeholder.svg?height=128&width=128"
              width={128}
              height={128}
              alt="Money illustration"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
