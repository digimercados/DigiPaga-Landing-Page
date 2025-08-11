"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedRotatingImage from "./common/Animatedflower"
import Container from "@/app/Container"
import { ImageContent } from "./common/ImageContent"

export default function PaymentControlSection2() {
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
    "Generate QR Code and get Paid.",
    "Easy to Implement for any SME ",
    "No Minimum Balance",
  ]

  return (
    <Container>
      <motion.section
      className="relative w-full py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 gap-6  md:gap-12 flex flex-col items-center text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="payment-control-heading"
    >


      
     
  


      {/* Main Content Grid */}
      
      <ImageContent
  badgeText="DigiPaga Invoice Management"
  title="Manage your Invoices in"
  highlight="15 different currencies"
  description="Issue invoices, request payment, control your invoices, payrolls and recurring expenses with the help of AI."
  buttonText="Read more"
  imageSrc="/img2.png"
  overlayImage="/a.png"
  rotatingImage="/flower.svg"
  reverseLayout={true}
/>
    </motion.section>
    </Container>
  )
}
