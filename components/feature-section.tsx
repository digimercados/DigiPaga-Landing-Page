"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedImage from "./common/AnimatedArrow"
import AnimatedRotatingImage from "./common/Animatedflower"
import Container from "@/app/Container"
import AnimatedButton from "./common/ArrowButton"

export default function FeatureSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,    // delay before children start animating
        staggerChildren: 0.35, // delay between each child animation
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 }, // start 40px below, invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const imageContainerVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0 },
    },
  }

  return (
    <Container>
    
      <motion.section
        ref={ref}
        className="relative svg w-full py-12  md:py-24 lg:py-32 md:px-8 lg:px-16 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        aria-labelledby="feature-heading"
      >

       
        
        
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-2 items-center">
          {/* Left Content */}
          <motion.div
            className="flex flex-col space-y-6 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center text-xs justify-center   border border-[#DFE2D4] lg:justify-start bg-[#EDF0E3] text-[#296253] md:text-sm font-medium px-4 py-2 rounded-full self-center lg:self-start will-change-transform"
              variants={itemVariants}
            >
              DigiPaga Conversions
              {/* <ArrowRight className="ml-2 group-hover:-rotate-45 duration-200 transition-all h-4 w-4" /> */}
            </motion.div>

            <motion.h2
              id="feature-heading"
              className="text-2xl md:text-4xl lg:text-4 xl font-semibold tracking-tight text-gray-900 leading-tight will-change-transform"
              variants={itemVariants}
            >
              <span className="text-[#B7DF30]">Instant convert 15 FIAT</span> currencies to crypto & viceversa at the
              lowest fees
            </motion.h2>

            <motion.p
              className="max-w-xl mx-auto lg:mx-0 text-[14px] md:text-xl text-gray-600 will-change-transform"
              variants={itemVariants}
            >
              Digi Mercados is your all-in-one super wallet designed for seamless navigation of the digital markets.
            </motion.p>

         
             <AnimatedButton
        text="Read more"
        link="https://example.com"
              ariaLabel="Read more about currency conversion"
      />
          </motion.div>

          {/* Right Image and Background Elements */}
          <motion.div
            className="relative  flex justify-center w-full lg:justify-end items-center mt-12 lg:mt-0 will-change-transform"
            variants={imageContainerVariants}
            style={{ y: imageY, scale: imageScale }}
          >
            

            <div className="relative z-10 md:p-4">
                   <AnimatedRotatingImage
                          src="/flower.svg"
                          className="right-0  z-40 md:right-0 -top-20 "
                        />
              <Image
                src="/img1.png"
                width={400}
                height={500}
                alt="Woman using mobile app"
                className="object-cover rounded-[1.5rem] hover:scale-105 duration-300 w-full h-full max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Container>
  )
}
