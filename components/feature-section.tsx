"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
            <motion.svg
              width="100"
              height="50"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-4 text-lime-500"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            >
              <path
                d="M10 40 C 30 20, 70 20, 90 40"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M90 40 L85 35 M90 40 L85 45"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Right Image and Background Elements */}
        <motion.div
          className="relative flex justify-center w-full lg:justify-end items-center h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0 will-change-transform"
          variants={imageContainerVariants}
          style={{ y: imageY, scale: imageScale }}
        >
          {/* Blue Star */}
          <motion.svg
            className="absolute  top-[-50px] right-0 z-20  h-30 text-white opacity-70 will-change-transform"
            // viewBox="0 0 24 24"
            fill="none"
            // stroke="currentColor"
            // strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            // variants={starVariants}
            initial="initial"
            animate="animate"
          >
            <path d="M55.0929 56.8739C55.0929 56.8739 65.8493 51.8031 75.571 41.9557C85.2927 32.1078 91.8865 22.8207 90.2986 21.212C88.7104 19.6034 79.5423 26.2828 69.8202 36.1302C60.0985 45.9781 55.0929 56.8739 55.0929 56.8739ZM55.0929 56.8739C55.0929 56.8739 59.1593 45.5841 59.1593 31.657C59.1593 17.7306 57.3388 6.44043 55.0929 6.44043C52.8474 6.44043 51.0266 17.7306 51.0266 31.657C51.0266 45.5841 55.0929 56.8739 55.0929 56.8739ZM55.0929 56.8739C55.0929 56.8739 59.1593 68.1637 59.1593 82.0904C59.1593 96.0171 57.3388 107.307 55.0929 107.307C52.8474 107.307 51.0266 96.0171 51.0266 82.0904C51.0266 68.1637 55.0929 56.8739 55.0929 56.8739ZM55.0929 56.8739C55.0929 56.8739 66.2384 60.9929 79.9871 60.9929C93.7357 60.9929 104.881 59.1486 104.881 56.8739C104.881 54.5988 93.7357 52.7548 79.9871 52.7548C66.2384 52.7548 55.0929 56.8739 55.0929 56.8739ZM55.0929 56.8739C55.0929 56.8739 43.9475 60.9929 30.1988 60.9929C16.4502 60.9929 5.30469 59.1486 5.30469 56.8739C5.30469 54.5988 16.4502 52.7548 30.1988 52.7548C43.9475 52.7548 55.0929 56.8739 55.0929 56.8739ZM55.0929 56.8739C55.0929 56.8739 50.0874 45.9781 40.3653 36.1302C30.6436 26.2828 21.4751 19.6034 19.8872 21.2124C18.299 22.8211 24.8928 32.1082 34.6145 41.956C44.3366 51.8035 55.0929 56.8739 55.0929 56.8739ZM55.0929 56.8739C55.0929 56.8739 65.8493 61.9442 75.571 71.7921C85.2927 81.6399 91.8865 90.9271 90.2986 92.5357C88.7104 94.1444 79.5423 87.465 69.8202 77.6175C60.0985 67.7697 55.0929 56.8739 55.0929 56.8739ZM55.0929 56.8739C55.0929 56.8739 50.0874 67.7697 40.3653 77.6175C30.6436 87.465 21.4751 94.144 19.8872 92.5357C18.299 90.9271 24.8928 81.6399 34.6145 71.7921C44.3366 61.9442 55.0929 56.8739 55.0929 56.8739Z" stroke="#2441BA" stroke-width="1.1366" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.8636 104.79C57.3997 106.403 58.0013 107.307 58.6367 107.307M55.0905 56.8735C55.0905 56.8735 53.6084 52.7583 52.4339 46.4323C50.1891 43.2184 47.3434 39.609 43.909 36.1302C34.1873 26.2824 25.0188 19.6034 23.4313 21.2116C23.2794 21.3655 23.2025 21.589 23.1953 21.8766C27.0514 23.9186 33.5724 29.2512 40.3628 36.1302C50.0849 45.9777 55.0905 56.8735 55.0905 56.8735Z" stroke="#2441BA" stroke-width="1.1366" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.0905 56.874C55.0905 56.874 50.0849 67.7698 40.3629 77.6177C33.5721 84.4964 27.0514 89.8293 23.1953 91.8713C23.2025 92.1585 23.2794 92.3824 23.431 92.5359C25.0192 94.1445 34.1873 87.4655 43.909 77.6177C47.3434 74.1389 50.1891 70.5291 52.4339 67.3156C53.6084 60.9893 55.0905 56.874 55.0905 56.874Z" stroke="#2441BA" stroke-width="1.1366" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.0938 56.874C55.0938 56.874 59.1601 68.1638 59.1601 82.0906C59.1601 92.0759 58.2243 100.705 56.8668 104.79C57.4029 106.403 58.0042 107.307 58.6399 107.307C60.8858 107.307 62.7063 96.0177 62.7063 82.0906C62.7063 76.5724 62.0679 71.4679 61.2969 67.3159C57.1877 61.4318 55.0938 56.874 55.0938 56.874Z" stroke="#2441BA" stroke-width="1.1366" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M58.6399 6.44043C58.0042 6.44043 57.4029 7.34478 56.8668 8.95761M55.0938 56.8739C55.0938 56.8739 65.8501 61.9442 75.5718 71.7921C84.3653 80.6996 90.5995 89.1483 90.5347 91.8708C92.1991 92.7525 93.3668 93.0207 93.8456 92.5357C95.4335 90.9271 88.8397 81.6399 79.118 71.7921C73.0061 65.601 66.4855 61.2983 62.4854 58.9561C57.9216 57.9188 55.0938 56.8739 55.0938 56.8739Z" stroke="#2441BA" stroke-width="1.1366" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82.1055 52.7697C94.863 52.9473 104.882 54.717 104.882 56.8739C104.882 59.0308 94.863 60.8005 82.1055 60.9785C82.5783 60.988 83.0549 60.9929 83.5346 60.9929C97.2832 60.9929 108.429 59.149 108.429 56.8739C108.429 54.5992 97.2832 52.7549 83.5346 52.7549C83.0549 52.7549 82.5783 52.7598 82.1055 52.7697Z" stroke="#2441BA" stroke-width="1.1366" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M62.4858 54.7912C66.4855 52.4491 73.0061 48.1463 79.118 41.9553C88.8397 32.1074 95.4335 22.8203 93.8456 21.2116C93.3668 20.7267 92.1991 20.9953 90.5347 21.8765C90.5995 24.5991 84.3653 33.0478 75.5718 41.9553C65.8501 51.8031 55.0938 56.8735 55.0938 56.8735C55.0938 56.8735 57.9216 55.8286 62.4858 54.7912Z" stroke="#2441BA" stroke-width="1.1366" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.0938 56.8739C55.0938 56.8739 57.1877 52.3161 61.2969 46.4323C62.0679 42.28 62.7063 37.1755 62.7063 31.657C62.7063 17.7306 60.8858 6.44043 58.6399 6.44043C58.0042 6.44043 57.4029 7.34478 56.8668 8.95761C58.2243 13.0425 59.1601 21.6723 59.1601 31.657C59.1601 45.5841 55.0938 56.8739 55.0938 56.8739Z" stroke="#2441BA" stroke-width="1.1366" stroke-linecap="round" stroke-linejoin="round"/>
          </motion.svg>

          {/* Curved Green Line */}
          <motion.svg
            className="absolute -bottom-20 left-1/4 lg:left-1/3 w-48 h-48 text-lime-400 opacity-70 will-change-transform"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          >
            <path d="M 10 100 C 50 20, 150 20, 190 100 S 150 180, 100 190" />
          </motion.svg>
            {/* <div className="  absolute top-0  bg-red-800 right-0"><div className=" w-50 h-50"></div> </div> */}

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
  )
}
