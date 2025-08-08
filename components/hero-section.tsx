"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import EmailSignup from "@/components/email-signup"
import { useRef } from "react"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const phoneVariants = {
    hidden: { opacity: 0, x: 100, rotate: 10 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
  }

  const backgroundShapeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.8 + i * 0.1 },
    }),
  }

  return (
    <motion.section
      ref={ref}
      className="relative w-full py-12 md:py-24 lg:py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <motion.div
            className="inline-flex items-center justify-center lg:justify-start bg-lime-500/20 text-[#296253] text-sm font-medium px-4 py-2 hover:bg-lime-500/90 hover:text-white group hover:cursor-pointer rounded-full self-center lg:self-start will-change-transform"
            variants={itemVariants}
          >
            Access your Dashboard
            <ArrowRight className="ml-2 group-hover:-rotate-45 duration-200 transition-all h-4 w-4" />
          </motion.div>

          <motion.h1 className="text-4xl md:text-5xl lg:text-[65px] font-[600] tracking-tight text-gray-900 leading-tight will-change-transform" variants={itemVariants}>
            Control <span className="text-lime-500">your Finances</span> using Stablecoins on{" "}
            <span className="text-lime-500">Celo Network</span>
          </motion.h1>

          <motion.p className="max-w-xl mx-auto  font-[400] lg:mx-0 text-[20px] md:text-xl text-gray-600 will-change-transform" variants={itemVariants}>
            DigiPaga allows you to pay utility bills, convert fiat into crypto, and manage invoices from your same
            Dashboard.
          </motion.p>

          <motion.div className="mt-8 will-change-transform" variants={itemVariants}>
            <EmailSignup />
          </motion.div>
        </div>

        {/* Right Image and Background Elements */}
        <div className="relative  flex justify-center lg:justify-end items-center h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0">
          {/* Background Shapes */}
          {/* <motion.div
            className="absolute bg-lime-400 rounded-full w-24 h-24 -top-8 left-1/4 lg:left-1/3 opacity-70 will-change-transform"
            variants={backgroundShapeVariants}
            custom={0}
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-gray-200 rounded-lg w-16 h-16 bottom-1/4 right-1/4 lg:right-1/3 rotate-45 opacity-70 will-change-transform"
            variants={backgroundShapeVariants}
            custom={1}
            animate={{ y: [0, 10, 0], rotate: [45, 55, 45] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute bg-lime-400 rounded-lg w-20 h-20 bottom-1/3 right-1/2 lg:right-1/4 rotate-12 opacity-70 will-change-transform"
            variants={backgroundShapeVariants}
            custom={2}
            animate={{ x: [0, 10, 0], rotate: [12, 22, 12] }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bg-gray-200 rounded-full w-12 h-12 top-1/3 left-1/3 lg:left-1/4 opacity-70 will-change-transform"
            variants={backgroundShapeVariants}
            custom={3}
            animate={{ x: [0, -10, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
          /> */}

          {/* Connecting Lines/Stars */}
          {/* <motion.div
            className="absolute w-2 h-2 bg-lime-400 rounded-full top-1/4 left-1/4 lg:left-1/3 will-change-transform"
            variants={backgroundShapeVariants}
            custom={4}
          /> */}
          {/* <motion.div
            className="absolute w-2 h-2 bg-gray-400 rounded-full bottom-1/4 right-1/4 lg:right-1/3 will-change-transform"
            variants={backgroundShapeVariants}
            custom={5}
          /> */}
          {/* <motion.div
            className="absolute w-px h-24 bg-gray-300 rotate-45 top-1/4 left-1/4 lg:left-1/3 origin-top-left will-change-transform"
            variants={backgroundShapeVariants}
            custom={6}
          /> */}
          {/* <motion.div
            className="absolute w-px h-32 bg-gray-300 -rotate-45 bottom-1/4 right-1/4 lg:right-1/3 origin-bottom-right will-change-transform"
            variants={backgroundShapeVariants}
            custom={7}
          /> */}

          {/* Phone Image */}
          <motion.div
            className="relative  w-full   will-change-transform"
            variants={phoneVariants}
            style={{  scale }}
            // Removed whileInView and viewport to ensure animation on reload
          >
            <Image
              src="/h.png"
              width={300}
              height={600}
              alt="Mobile App Interface showing relative financial dashboard"
              className="object-contain w-full   z-10  h-full max-w-[500px] md:max-w-[688px] lg:max-w-[680px]"
            />


            {/* background image */}
            
<Image
              src="/hbg1.png"
              width={300}
              height={600}
              alt="Mobile App Interface showing financial dashboard"
              className="object-contain -z-10   top-[125px] -right-10
                absolute w-full h-full max-w-[500px] md:max-w-[688px] lg:max-w-[680px]"
            />
            
          </motion.div>
          


        </div>
      </div>
    </motion.section>
  )
}
