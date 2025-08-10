"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedFlower from "./ui/AnimatedFlower"
import AnimatedArrow from "./common/AnimatedArrow"
import AnimatedImage from "./common/AnimatedArrow"
import AnimatedRotatingImage from "./common/Animatedflower"
import Container from "@/app/Container"

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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants:any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const imageContainerVariants:any = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  }

  const starVariants = {
    initial: { rotate: 0, opacity: 0, scale: 0.5 },
    animate: { rotate: 360, opacity: 1, scale: 1, transition: { duration: 10, repeat: Infinity, ease: "linear" } },
  }

  return (
    <Container>
      <motion.section
      ref={ref}
      className="relative svg w-full py-12 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="feature-heading"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-2 items-center">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
           <motion.div
            className="inline-flex items-center justify-center lg:justify-start bg-lime-500/20 text-[#296253] text-sm font-medium px-4 py-2 hover:bg-lime-500/90 hover:text-white group hover:cursor-pointer rounded-full self-center lg:self-start will-change-transform"
            variants={itemVariants}
          >
            DigiPaga Conversions
            <ArrowRight className="ml-2 group-hover:-rotate-45 duration-200 transition-all h-4 w-4" />
          </motion.div>
          <motion.h2 id="feature-heading" className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight will-change-transform" variants={itemVariants}>
            <span className="text-lime-500">Instant convert 15 FIAT</span> currencies to crypto & viceversa at the
            lowest fees
          </motion.h2>
          <motion.p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 will-change-transform" variants={itemVariants}>
            Digi Mercados is your all-in-one super wallet designed for seamless navigation of the digital markets.
          </motion.p>
          <motion.div className="mt-8 flex flex-col items-center lg:items-start will-change-transform" variants={itemVariants}>
            <Button className="bg-green-700 group hover:bg-green-800 text-white rounded-full px-6 py-2" aria-label="Read more about currency conversion">
              Read more
              <ArrowRight className="ml-2 group-hover:-rotate-45 duration-200 transition-all h-4 w-4" />
            </Button>
            
            <AnimatedImage src="/arrowL.svg" className="top-24 left-24 " />
          </motion.div>
        </div>

        {/* Right Image and Background Elements */}
        <motion.div
          className="relative flex justify-center w-full lg:justify-end items-center h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0 will-change-transform"
          variants={imageContainerVariants}
          style={{ y: imageY, scale: imageScale }}
        >
          <AnimatedRotatingImage
                 src="/flower.svg"
                 className="right-0 top-0 md:right-0-16 h-16"
               />

          {/* Image of person with phone */}
          <div className="relative z-10  p-4">
            <Image
              src="/img1.png"
              width={400}
              height={500}
              alt="Woman using mobile app"
              className="object-cover rounded-[1.5rem] w-full h-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
    </Container>
  )
}
