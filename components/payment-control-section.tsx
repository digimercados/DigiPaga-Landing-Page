"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from 'lucide-react'

export default function PaymentControlSection() {
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
      className="relative w-full py-6 md:py-8 lg:py-14 px-4 md:px-8 lg:px-16 bg-white flex flex-col items-center text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="payment-control-heading"
    >
      {/* Top Heading */}
      <motion.h2 id="payment-control-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight z-10 will-change-transform" variants={itemVariants}>
       Grow Your Sales With <span className="text-lime-500">DigiPaga Payment </span> Gateway
      </motion.h2>
      <div className="flex space-x-8 mt-2 mb-16 z-10">
        <motion.svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-lime-500"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          aria-hidden="true"
        >
          <path
            d="M15 25 V 5 M10 10 L15 5 L20 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        <motion.svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-lime-500"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          aria-hidden="true"
        >
          <path
            d="M15 25 V 5 M10 10 L15 5 L20 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      {/* Blue Star (left) */}
      <motion.svg
        className="absolute top-16 left-8 md:left-16 w-16 h-16 md:w-24 md:h-24 text-indigo-500 opacity-70 z-0 will-change-transform"
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

      {/* Purple Circle (right) */}
      <motion.div
        className="absolute top-24 right-8 md:right-16 w-8 h-8 rounded-full bg-purple-500 opacity-70 z-0 will-change-transform"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* Main Content Grid */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-6 items-center mt-12">
        {/* Left Image Column */}
        <motion.div
          className="relative flex justify-center lg:justify-start items-center h-[400px] md:h-[500px] lg:h-[600px] will-change-transform"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10  p-4 ">
            <Image
              src="/img3.png"
              width={400}
              height={500}
              alt="Woman using mobile app on couch"
              className="object-cover rounded-[1.5rem] w-full h-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
            />
            
          
           
          </div>
        </motion.div>

        {/* Right Content Column */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <motion.div
            className="inline-flex items-center justify-center lg:justify-start bg-lime-500/20 text-[#296253] text-sm font-medium px-4 py-2 rounded-full self-center lg:self-start will-change-transform"
            variants={itemVariants}
          >
            DigiPaga Virtual Debit card
          </motion.div>

          <motion.h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 leading-tight will-change-transform" variants={itemVariants}>
            Pay your Utility Bills <span className="text-lime-500">securely and instantly</span>
          </motion.h3>

          <motion.p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 will-change-transform" variants={itemVariants}>
            Digi Mercados is your all-in-one super wallet designed for seamless navigation of the digital markets.
            Secure, fast, and feature-packed, it empowers you to trade, invest, & manage assets effortlessly—all in
            one place.
          </motion.p>

          <motion.div className="mt-8 will-change-transform" variants={itemVariants}>
            <Button className="bg-green-700 hover:bg-green-800 text-white rounded-full px-6 py-2" aria-label="Learn more about utility bill payments">
              Read more
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
