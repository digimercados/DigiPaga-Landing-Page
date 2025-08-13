"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedImage from "./common/AnimatedArrow"
import Container from "@/app/Container"
import AnimatedButton from "./common/ArrowButton"

export default function PaymentGateway() {
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


    const featureItems = [
    "Enable QR Code and get paid",
    "Easy to Implement for any SME",
    "Instant transactions",
  ]

  return (
    <Container>
      <motion.section
      className="relative w-full py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16  flex flex-col items-center text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="payment-control-heading"
    >


       {/* Heading */}
      <motion.h2 id="debit-card-heading" className="text-2xl w-full md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight z-10 text-center will-change-transform" variants={itemVariants}>
     Grow Your Sales With <span className="text-[#B7DF30]">DigiPaga Payment </span>Gateway
      </motion.h2>
     
  


      {/* Main Content Grid */}
      <div className="container  justify-center w-full grid lg:grid-cols-2 gap-6 items-center ">
        {/* Left Image Column */}
         <motion.div
          className="relative flex justify-center lg:justify-start items-center h-auto md:h-[500px] lg:h-[600px] will-change-transform"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10  md:p-4 ">
            <Image
              src="/pg.png"
              width={400}
              height={500}
              alt="Woman using mobile app on couch"
              className="object-cover rounded-[1.5rem] hover:scale-105 duration-300 w-full h-full max-w-[350px] md:max-w-[300px] lg:max-w-[400px]"
            />
            
          
           
          </div>
        </motion.div>
       

        {/* Right Content Column */}
        <div className="flex flex-col   md:px-6 py-10  rounded-xl space-y-6 text-center items-center md:items-start lg:text-left">
          <motion.div
            className="inline-flex items-center justify-cente text-xs  border border-[#DFE2D4] lg:justify-start bg-[#EDF0E3] text-[#296253] md:text-sm font-medium px-4 py-2 rounded-full self-center lg:self-start will-change-transform"
            variants={itemVariants}
          >
           DigiPaga QR System
          </motion.div>

          <motion.p className="max-w-xl mx-auto lg:mx-0 w-full text-2xl md:text-4xl text-black will-change-transform" variants={itemVariants}>
           DigiPaga PayCode
          </motion.p>

          <ul className="space-y-3 text-left self-center lg:self-start" role="list">
            {featureItems.map((item, index) => (
              <motion.li
                key={item}
                className="flex items-center text-gray-700 text-lg will-change-transform"
                variants={itemVariants}
                custom={index}
                role="listitem"
              >
                <CheckCircle2 className="h-6 w-6 text-[#B7DF30] mr-3 flex-shrink-0" aria-hidden="true" />
                {item}
              </motion.li>
            ))}
          </ul>

        <AnimatedButton
        text="Read more"
        link="https://example.com"
        ariaLabel="Read more about currency conversion"
      />
        </div>
        
      </div>
    </motion.section>
    </Container>
  )
}
