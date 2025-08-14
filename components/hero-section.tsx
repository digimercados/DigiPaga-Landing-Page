"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronLeft } from 'lucide-react'
import EmailSignup from "@/components/email-signup"
import { useRef, useState } from "react"
import Container from "@/app/Container"
import SimpleTyping from "./common/SimpleTyping"
import AnimatedImage from "./common/AnimatedArrow"
import AnimatedPhone from "./common/HeroImages"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Scroll based transforms for background image
  const bgXScroll = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const bgYScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  // Phone scale on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  // Hover state for background image
  const [isHovered, setIsHovered] = useState(false)

  // Hover movement offsets
  const bgXHover = isHovered ? 20 : 0 // px
  const bgYHover = isHovered ? -10 : 0 // px

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
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  }

  const phrases = [
    "Finances",
    "Crypto Conversions",
    "Utility Bills",
    "Invoices",
    "Remittances",
  ]

  return (
    <Container>
      <motion.section
        ref={ref}
        className="relative w-full py-12 md:py-24 lg:py-16  bg-white overflow-visible"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto gap-4 grid lg:grid-cols-2 md:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-4 z-10 md:space-y-6 text-center lg:text-left">
            <motion.div
              className="inline-flex items-center justify-center border border-[#DFE2D4] lg:justify-start bg-[#EDF0E3] text-[#296253] text-xs font-medium px-2 py-2 hover:bg-lime-500/90 hover:text-white group hover:cursor-pointer rounded-full self-center lg:self-start will-change-transform"
              variants={itemVariants}
            >
              Access your Dashboard
              <ArrowRight className="ml-2 group-hover:-rotate-45 duration-200 transition-all h-4 w-4" />
            </motion.div>

            <motion.h1
              className="text-3xl flex-col my-3 flex md:text-5xl lg:text-[40px] font-[600] tracking-tight text-gray-900 leading-tight will-change-transform"
              variants={itemVariants}
            >
              <span className=" flex items-center justify-start">
                Control Your <br /> 
              </span>
              <span className="text-[#B7DF30] h-16 md:h-12"><SimpleTyping texts={phrases} /></span>
              using Stablecoins on 
              <span className="text-[#B7DF30]"> Celo Network</span>
            </motion.h1>

            <motion.p
              className="max-w-xl mx-auto font-[400] lg:mx-0 text-[16px] md:text-xl text-gray-600 will-change-transform"
              variants={itemVariants}
            >
              DigiPaga allows you to pay utility bills, convert fiat into crypto, and manage invoices from your same
              Dashboard.
            </motion.p>

            <motion.div className="mt-8 will-change-transform" variants={itemVariants}>
              <EmailSignup />
              <AnimatedImage src="/arrowL.svg" className="top-12 right-0" />
            </motion.div>
          </div>

          {/* Right Image and Background Elements */}
          <div className="relative flex justify-center overflow-visible  md:w-[800px]   z-40  items-center     md:mt-12 lg:mt-0">
            
            <AnimatedPhone/>
          </div>
        </div>
      </motion.section>
    </Container>
  )
}
