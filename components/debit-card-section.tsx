"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from "next/image"

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
    <motion.section
      className="relative w-full py-12 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-white flex flex-col items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="debit-card-heading"
    >
      {/* Blue Star */}
      {/* <motion.svg
        className="absolute top-16 left-8 md:left-16 w-16 h-16 md:w-24 md:h-24 text-indigo-500 opacity-70 z-0 will-change-transform"
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
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          transform="rotate(45 12 12)"
        />
      </motion.svg> */}

      {/* Heading */}
      <motion.h2 id="debit-card-heading" className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight z-10 text-center will-change-transform" variants={itemVariants}>
        Instant <span className="text-lime-500">Multi-currency</span> Debit Card
      </motion.h2>

      {/* Arrows */}
      {/* <div className="flex space-x-8 mt-2 mb-16 z-10">
        {[0.5, 0.7].map((delay, i) => (
          <motion.svg
            key={i}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-lime-500"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay, ease: "easeOut" }}
          >
            <path
              d="M15 25 V 5 M10 10 L15 5 L20 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        ))}
      </div> */}

      {/* Main Grid */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center mt-12">
        {/* Left Side - Two Overlapping Cards */}
        <motion.div
          className="relative flex justify-center group lg:justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] will-change-transform"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* front Card */}
          <Image
            src="/card.svg"
            alt="Debit Card Back"
            width={200}
            height={500}
            className="absolute top-0 bottom-0 m-auto left-0 max-w-[600px] w-[400px] md:w-[600px] group-hover:rotate-[-10deg] transition-all duration-300 right-0 z-10  drop-shadow-lg"
            priority
          />
          {/* back Card */}
          <Image
            src="/card2.svg"
            alt="Debit Card Front"
            width={200}
            height={500}
            className=" absolute left-0 right-0 bottom-0 mx-auto max-w-[400px] group-hover:rotate-12 duration-300  w-[200px] md:w-[400px]  drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Right Side */}
        <div className="flex flex-col justify-center md:justify-start space-y-6 text-center lg:text-left">
          <motion.div
            className="inline-flex items-center justify-center lg:justify-start bg-lime-500/20 text-[#296253] text-sm font-medium px-4 py-2 rounded-full self-center lg:self-start will-change-transform"
            variants={itemVariants}
          >
            Payment Card
          </motion.div>

          <motion.p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 will-change-transform" variants={itemVariants}>
            Enjoy the flexibility of a Paymint card. Spend anytime, anywhere around the world.
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
                <CheckCircle2 className="h-6 w-6 text-lime-500 mr-3 flex-shrink-0" aria-hidden="true" />
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.div className="mt-8 w-full flex justify-center md:justify-start will-change-transform" variants={itemVariants}>
            <Button className="bg-green-700 group hover:bg-green-800 text-white rounded-full px-6 py-2 flex items-center self-center lg:self-start" aria-label="Learn more about the debit card">
              Learn more
             
                            <ArrowRight className="ml-2 group-hover:-rotate-45 duration-200 transition-all h-4 w-4" />

            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
