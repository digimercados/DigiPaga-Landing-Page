"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function PaymentGateSec() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  }

  const starVariants = {
    initial: { rotate: 0, opacity: 0, scale: 0.5 },
    animate: { rotate: 360, opacity: 1, scale: 1, transition: { duration: 10, repeat: Infinity, ease: "linear" } },
  }

  return (
    <motion.section
      ref={ref}
      className="relative w-full py-12 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="feature-heading"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-2 items-center">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <motion.p className="text-sm font-medium text-gray-500 will-change-transform" variants={itemVariants}>
            DigiPaga
          </motion.p>
          <motion.h2 id="feature-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight will-change-transform" variants={itemVariants}>
           Grow Your Sales With  <span className="text-lime-500">DigiPaga Payment </span> Gateway
          </motion.h2>
          <motion.p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 will-change-transform" variants={itemVariants}>
            Digi Mercados is your all-in-one super wallet designed for seamless navigation of the digital markets.
          </motion.p>
          <motion.div className="mt-8 flex flex-col items-center lg:items-start will-change-transform" variants={itemVariants}>
            <Button className="bg-green-700 hover:bg-green-800 text-white rounded-full px-6 py-2" aria-label="Read more about currency conversion">
              Read more
            </Button>
           
          </motion.div>
        </div>

        {/* Right Image and Background Elements */}
        <motion.div
          className="relative flex justify-center w-full lg:justify-end items-center h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0 will-change-transform"
          variants={imageContainerVariants}
          style={{ y: imageY, scale: imageScale }}
        >
          {/* Blue Star */}
        

          {/* Curved Green Line */}
          
            {/* <div className="  absolute top-0  bg-red-800 right-0"><div className=" w-50 h-50"></div> </div> */}

          {/* Image of person with phone */}
          <div className="relative z-10  p-4">
            <Image
              src="/pg.png"
              width={400}
              height={500}
              alt="Woman using mobile app"
              className="object-cover rounded-[1.5rem] w-full h-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
