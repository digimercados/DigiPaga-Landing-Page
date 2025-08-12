"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from 'lucide-react'
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
    "your Finances",
    "your Crypto Conversions",
    "your Utility Bills",
    "your Invoices",
    "your Remittances",
  ]

  return (
    <Container>
      <motion.section
        ref={ref}
        className="relative w-full py-12 md:py-24 lg:py-16 px-4 bg-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto grid lg:grid-cols-2 md:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <motion.div
              className="inline-flex items-center justify-center lg:justify-start bg-[#B7DF30] text-white text-xs font-medium px-2 py-2 hover:bg-lime-500/90 hover:text-white group hover:cursor-pointer rounded-full self-center lg:self-start will-change-transform"
              variants={itemVariants}
            >
              Access your Dashboard
              <ArrowRight className="ml-2 group-hover:-rotate-45 duration-200 transition-all h-4 w-4" />
            </motion.div>

            <motion.h1
              className="text-3xl flex-col flex md:text-5xl lg:text-[50px] font-[600] tracking-tight text-gray-900 leading-tight will-change-transform"
              variants={itemVariants}
            >
              <span>
                Control <span className="text-[#B7DF30]"><SimpleTyping texts={phrases} /></span>
              </span>{" "}
              using Stablecoins on <br />
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
          <div className="relative flex justify-center lg:justify-end items-center h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0">
            {/* Phone Image */}
            {/* <motion.div
              className="relative w-full z-50 will-change-transform"
              variants={phoneVariants}
              style={{ scale }}
            >
              <Image
                src="/h.png"
                width={300}
                height={600}
                alt="Mobile App Interface showing relative financial dashboard"
                className="object-contain w-full z-40 h-full max-w-[500px] md:max-w-[688px] lg:max-w-[680px]"
              />

              {/* Background Image with scroll + hover animation */}
              <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                style={{
                  x: bgXScroll,
                  y: bgYScroll,
                  translateX: bgXHover,
                  translateY: bgYHover,
                }}
                className="absolute -z-10 bottom-0 -right-12 w-[600px] cursor-pointer"
              >
                <Image
                  src="/hbg1.png"
                  width={1000}
                  height={1000}
                  alt="Mobile App Interface showing financial dashboard"
                  className="object-cover"
                />
              </motion.div>
            {/* </motion.div> */} 
            <AnimatedPhone/>
          </div>
        </div>
      </motion.section>
    </Container>
  )
}
