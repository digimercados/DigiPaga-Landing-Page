"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  { name: "Celo", src: "/cl1.png" },
   { name: "mento", src: "/mento.png" },
   { name: "Self", src: "/cl2.png" },
      { name: "Stylized Logo", src: "/cl4.png" },
    { name: "Chainlink", src: "/cl3.png" },
 
 
  
]

export default function LogoCloud() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.section
      className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-label="Partner Logos"
    >
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {logos.map((logo, index) => (
          <motion.div key={logo.name} variants={itemVariants} custom={index} className="will-change-transform">
            <Image
              src={logo.src}
              alt={logo.name}
              width={150}
              height={100}
              className="h-10  hover:scale-125 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
