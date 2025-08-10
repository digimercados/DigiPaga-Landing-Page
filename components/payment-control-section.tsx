"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from 'lucide-react'
import RotatingSVG from "./common/Animatedflower"
import AnimatedImage from "./common/AnimatedArrow"
import AnimatedRotatingImage from "./common/Animatedflower"
import Container from "@/app/Container"

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
      className="relative w-full py-6 md:py-8 lg:py-14 px-4 md:px-8 lg:px-16 bg-white flex flex-col items-center text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="payment-control-heading"
    >
      {/* Top Heading */}
      <motion.h2 id="payment-control-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight z-10 will-change-transform" variants={itemVariants}>
        Control your  <span className="text-lime-500">Payments  </span>   in multiple currencies
       <AnimatedImage src="/arrowl.svg" className="top-20  left-[30%]" />
                <AnimatedImage src="/arrowl.svg" className="top-20  scale-x-[-1]   right-[30%]" />
      </motion.h2>
      <div className="flex space-x-8 mt-2 mb-16 z-10">
       

      
      </div>

      {/* green Star (left) */}
     
      

     

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
           <AnimatedRotatingImage
        src="/flower.svg"
        className="-top-6 left-0 md:left-0 w-16 h-16 md:w-24 md:h-24"
      />
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
        <div className="flex flex-col bg-[#F8F9F4] px-6 py-2 rounded-lg md:px-8 md:py-12 space-y-6 text-center lg:text-left">
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
    </Container>
  )
}
