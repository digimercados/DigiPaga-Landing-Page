"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function PaymentGatewaySection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const featureItems = [
    "Accept payments with Qr Code",
    "Solicitate NFC Terminal",
    "Print QR Code and get Paid",
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-green-800 flex flex-col items-center overflow-hidden" aria-labelledby="payment-gateway-heading">
      <motion.div
        className="container mx-auto bg-lime-100 rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col items-center text-center will-change-transform"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 id="payment-gateway-heading" className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-8 will-change-transform" variants={itemVariants}>
          Grow your sales with <span className="text-lime-500">DigiPaga Payment gateway</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left Image Column */}
          <motion.div
            className="relative flex justify-center md:justify-start will-change-transform"
            variants={itemVariants}
          >
            <Image
              src="/placeholder.svg?height=300&width=400"
              width={400}
              height={300}
              alt="Person paying with phone at terminal"
              className="object-cover rounded-xl w-full max-w-md"
            />
          </motion.div>

          {/* Right Content Column */}
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <motion.h3 className="text-2xl md:text-3xl font-bold text-gray-900 will-change-transform" variants={itemVariants}>
              One-Stop Payment
            </motion.h3>

            <ul className="space-y-3 text-left self-center md:self-start" role="list">
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

            <Button className="bg-green-700 group hover:bg-green-800 text-white rounded-full px-6 py-2 flex items-center self-center lg:self-start" aria-label="Learn more about the debit card">
              Learn more
             
                            <ArrowRight className="ml-2 group-hover:-rotate-45 duration-200 transition-all h-4 w-4" />

            </Button>
          </div>
        </div>
      </motion.div>

      {/* Small green arrow at bottom right */}
      <motion.svg
        width="50"
        height="30"
        viewBox="0 0 50 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-8 right-8 text-lime-500 z-0"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        aria-hidden="true"
      >
        <path
          d="M5 15 H 45 M40 10 L45 15 L40 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </section>
  )
}
