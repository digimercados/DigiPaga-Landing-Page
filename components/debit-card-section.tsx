"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from "next/image"
import AnimatedImage from "./common/AnimatedArrow"
import AnimatedRotatingImage from "./common/Animatedflower"
import Container from "@/app/Container"
import AnimatedButton from "./common/ArrowButton"

export default function DebitCardSection() {
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
    "Globally Accepted.",
    "Track Expenses",
    "No Minimum Balance",
  ]

  return (
   <Container>
     <motion.section
      className="relative w-full py-12 md:py-24 lg:py-32 px-2 md:px-8 lg:px-16 bg-white flex flex-col items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="debit-card-heading"
    >
      

      {/* Heading */}
      <motion.h2 id="debit-card-heading" className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight z-10 text-center will-change-transform" variants={itemVariants}>
        Instant <span className="text-[#B7DF30]">Multi-currency</span> Debit Card
      </motion.h2>

     
      {/* Main Grid */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-3 items-center mt-12">
        {/* Left Side - Two Overlapping Cards */}

         <AnimatedRotatingImage
                         src="/flower.svg"
                         className="left-4 top-14 md:left-12 "
                       />
        <motion.div
          className="relative flex justify-center group lg:justify-center items-center h-[400px] md:h-[500px] lg:h-[500px] will-change-transform"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* front Card */}
      
            <Image
            src="/card.svg"
            alt="Debit Card Back"
            width={400}
            height={600}
            className="absolute top-0 
             group-hover:rotate-[-10deg] transition-all duration-300 right-0 z-40 w-full   drop-shadow-lg"
        
          />
       
          {/* back Card */}
          <Image
            src="/card2.svg"
            alt="Debit Card Front"
            width={400}
            height={600}
            className=" left-0 right-0 bottom-0 m-auto max-w-[350px] group-hover:rotate-12 duration-300  w-full  drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Right Side */}
        <div className="flex flex-col gap-4  z-50 justify-start md:space-y-6 text-center lg:text-left">
          <motion.div
            className="inline-flex items-center justify-center  border border-[#DFE2D4] lg:justify-start bg-[#EDF0E3] text-[#296253] text-sm font-medium px-4 py-2 rounded-full self-center lg:self-start will-change-transform"
            variants={itemVariants}
          >
            Virtual Debit Card
          </motion.div>

          <motion.p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 will-change-transform" variants={itemVariants}>
            Enjoy the flexibility of a Paymint card. Spend anytime, anywhere around the world.
          </motion.p>

          <ul className="md:space-y-3 text-left self-center lg:self-start" role="list">
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
        text="Learn more"
        link="https://example.com"
        ariaLabel="Read more about currency conversion"
      />
        </div>
        
      </div>
    </motion.section>
   </Container>
  )
}
