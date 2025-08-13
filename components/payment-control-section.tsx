"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from 'lucide-react'
import RotatingSVG from "./common/Animatedflower"
import AnimatedImage from "./common/AnimatedArrow"
import AnimatedRotatingImage from "./common/Animatedflower"
import Container from "@/app/Container"
import { ImageContent } from "./common/ImageContent"

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
    <Container>
      <motion.section
      className="relative w-full py-6 md:py-8 lg:py-14  md:px-8 lg:px-16 bg-white flex flex-col items-center text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="payment-control-heading"
    >
      {/* Top Heading */}
      <motion.h2 id="payment-control-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight z-10 will-change-transform" variants={itemVariants}>
        Control your  <span className="text-[#B7DF30]">Payments  </span>   in multiple currencies
       <AnimatedImage src="/arrowl.svg" className="top-0 left-[30%]" />
                <AnimatedImage src="/arrowl.svg" className="top-20  scale-x-[-1]   right-[30%]" />
      </motion.h2>
      <div className="flex space-x-8 mt-2 mb-16 z-10">
       

      
      </div>

      {/* green Star (left) */}
     
      

     

      
        <ImageContent
  badgeText="DigiPaga Bill Pay"
  title="Pay your Utility Bills "
  highlightText="securely and instantly"
  description="DigiPada allows you to pay utility bills in 15 different countries."
  buttonText="Read more"
  buttonLink="/learn-more"
  imageSrc="/img3.png"
  imageAlt="Woman using mobile app"
  rotatingImageSrc="/flower.svg"
  rotatingImageClass="-top-20 left-0 w-16 "
  reverseLayout={false}
/>
      {/* </div> */}
    </motion.section>
    </Container>
  )
}
