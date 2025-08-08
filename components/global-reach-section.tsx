"use client"

import { motion } from "framer-motion"
import DottedWorldMap from "./dotted-world-map"
import AppIconCard from "./app-icon-card"
import Image from "next/image"

const appIcons = [
  { name: "Telegram", src: "/sl22.png" },
  { name: "WhatsApp", src: "/wa.png" },
  { name: "Gmail", src: "/26.png" },
  { name: "Chat", src: "/msg.png" },
]

export default function GlobalReachSection() {
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
    <motion.section
      className="relative w-full py-0 md:py-0 lg:py-32 px-4 md:px-8 lg:px-16 bg-white flex flex-col items-center text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="global-reach-heading"
    >
      {/* Top Arc Background */}
      <div className="  absolute -top-[100px] left-1/2 -translate-x-1/2 w-[300px] h-[150px] md:w-[500px] md:h-[500px] rounded-b-full bg-transparent opacity-50 z-0" >
      <Image
                    src="/wifi.png"
                    width={500}
                    height={500}
                    alt="Mobile App Interface showing financial dashboard"
                    className="object-contain -z-10   top-[125px] -right-10
                      absolute w-full h-full max-w-[500px] md:max-w-[500] lg:max-w-[500]"
                  />
      </div>

      {/* Blue Star */}
      {/* <motion.svg
        className="absolute top-16 right-8 md:right-16 w-16 h-16 md:w-24 md:h-24 text-indigo-500 opacity-70 will-change-transform"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={starVariants}
        initial="initial"
        animate="animate"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" transform="rotate(45 12 12)" />
      </motion.svg> */}

      {/* Heading */}
      <motion.h2 id="global-reach-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight mt-16 md:mt-24 z-10 will-change-transform" variants={itemVariants}>
        Access cash in <span className="text-lime-500">350,000 locations</span> in 180 countries
      </motion.h2>
      

      {/* Dotted World Map */} 
       <motion.div className="w-full max-w-5xl mx-auto mt-8 mb-16 z-10 will-change-transform" variants={itemVariants}>
        <DottedWorldMap />
      </motion.div>

      {/* Instant Crypto Section */}
      <motion.h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mt-16 z-10 will-change-transform" variants={itemVariants}>
        Instant <span className="text-lime-500">Crypto</span>
      </motion.h3>
      <motion.p className="text-lg md:text-xl text-gray-600 mt-2 mb-8 z-10 will-change-transform" variants={itemVariants}>
        Buy, Sell, Send and Receive using your Favourite Apps
      </motion.p>

      {/* App Icons */}
      <div className="relative cursor-pointer flex justify-center items-center gap-6 md:gap-12 lg:gap-16 mt-8 z-10">
        {appIcons.map((app, index) => (
          <AppIconCard key={app.name} name={app.name} src={app.src} index={index} />
        ))}
        {/* Green curved lines */}
        <motion.svg
          className="absolute -bottom-12 left-0 w-24 h-24 text-lime-400 opacity-70 z-0 will-change-transform"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <path d="M 10 90 C 30 70, 70 70, 90 90" />
        </motion.svg>
        <motion.svg
          className="absolute -bottom-12 right-0 w-24 h-24 text-lime-400 opacity-70 z-0 will-change-transform"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
        >
          <path d="M 90 90 C 70 70, 30 70, 10 90" />
        </motion.svg>
      </div>
    </motion.section>
  )
}
