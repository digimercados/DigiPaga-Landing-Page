"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedImage from "./common/AnimatedArrow"
import Container from "@/app/Container"

export default function CashAccessSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const illustrationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  }

  return (
    // <Container>
      <section className="relative w-full bg-[#296253] py-12 md:py-24 lg:py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center overflow-hidden" aria-labelledby="cash-access-heading">
      <motion.div
        className="container mx-auto text-[#F8F9F4]  p-8 md:p-12 shadow-xl flex flex-col md:flex-col items-center justify-between text-center md:text-left will-change-transform"
        // Custom shape using clip-path for a more complex rounded look
        style={{
          clipPath: 'polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left Text Column */}
        <motion.div className=" mb-8 md:mb-0 md:pr-8 will-change-transform" variants={itemVariants}>
          <h2 id="cash-access-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            Take Control of Your Finances Today
          </h2>
        </motion.div>

        {/* Right Illustration Column */}
          <motion.div className="mt-8 will-change-transform" variants={itemVariants}>
            <Button className="bg-[#B7DF30] group hover:bg-[#C4FE00] text-black rounded-full px-8 py-6 hover:scale-105 duration-200 flex items-center self-center lg:self-start" aria-label="Learn more about the debit card">
              Learn more
             
                            <ArrowRight className="ml-2 group-hover:-rotate-45 duration-200 transition-all h-4 w-4" />

            </Button>
            
          </motion.div>
      </motion.div>
                                    <AnimatedImage src="/arrowL.svg" className="bottom-0 left-[50%] " />
    </section>
    // </Container>
  )
}
