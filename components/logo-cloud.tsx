"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Container from "@/app/Container"

const logos = [
  { name: "Celo", src: "/cl1.png", url: "https://celo.org" },
  { name: "Mento", src: "/mento.png", url: "https://mento.org" },
  { name: "Self", src: "/cl4.png", url: "https://self.xyz" },
  { name: "Stylized Logo", src: "/cl3.png", url: "https://squidrouter.com" },
  { name: "Chainlink", src: "/cl2.png", url: "https://chain.link" },
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
    <Container>
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 px-2 md:px-8 lg:px-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        aria-label="Partner Logos"
      >
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <motion.a
              key={logo.name}
              variants={itemVariants}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="will-change-transform"
              whileHover={{
                scale: 1.4,
                rotate: [0, 10, -10, 10, 0],
                transition: { duration: 0.8, ease: "easeInOut" },
                filter: "grayscale(0%)",
              }}
              whileTap={{ scale: 1.2 }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={100}
                className="h-10 object-contain grayscale w-[80px] md:w-[150px] transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>
      </motion.section>
    </Container>
  )
}
