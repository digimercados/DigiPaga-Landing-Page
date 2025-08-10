"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedRotatingImage from "./common/Animatedflower"
import Container from "@/app/Container"

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
      className="relative w-full py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 bg-gray-50 gap-6  md:gap-12 flex flex-col items-center text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="payment-control-heading"
    >


      
     
  


      {/* Main Content Grid */}
      <div className="container  justify-center w-full grid lg:grid-cols-2 gap-6 items-center ">
        {/* Left Image Column */}
        
       <div className="flex flex-col bg-[#F8F9F4] px-2 py-6 rounded-lg md:px-8 md:py-16 space-y-6 text-center lg:text-left">
          <motion.div
            className="inline-flex items-center justify-center lg:justify-start bg-lime-500/20 text-[#296253] text-sm font-medium px-4 py-2 rounded-full self-center lg:self-start will-change-transform"
            variants={itemVariants}
          >
        DigiPaga Invoice Managment
          </motion.div>

          <motion.h3 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 leading-tight will-change-transform" variants={itemVariants}>
            Manage you Invoices in <span className="text-lime-500">15 different currencies</span>
          </motion.h3>

          <motion.p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 will-change-transform" variants={itemVariants}>
            Issue invoices, request payment, control your invoices, payrolls and recurring expenses with the help of AI.
          </motion.p>

          <motion.div className="mt-8 will-change-transform" variants={itemVariants}>
            <Button className="bg-green-700 hover:bg-green-800 text-white rounded-full px-6 py-2" aria-label="Learn more about utility bill payments">
              Read more
            </Button>
          </motion.div>
        </div>

        {/* Right Content Column */}
        

         <motion.div
          className="relative flex justify-center lg:justify-start items-center h-auto md:h-[500px] lg:h-[600px] will-change-transform"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

           <AnimatedRotatingImage
                  src="/flower.svg"
                  className="right-0 top-0 z-40 md:right-0 w-12 h-12 md:w-24 md:h-24"
                />
          
          <div className="relative z-10  md:p-4 ">
            <Image
              src="/img2.png"
              width={400}
              height={500}
              alt="Woman using mobile app on couch"
              className="object-cover rounded-[1.5rem] w-full h-full max-w-[350px] md:max-w-[400px] lg:max-w-[550px]"
            />
            
          
           
          <motion.div
          className="absolute flex justify-center -right-4 md:right-0 bottom-4 lg:justify-start items-center z-20 h-[100px] md:h-[200px] lg:h-[250px] will-change-transform"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
           <Image
              src="/a.png"
              width={400}
              height={500}
              alt="Woman using mobile app on couch"
              className="object-cover rounded-[1.5rem] w-full h-full max-w-[100px] md:max-w-[200px] lg:max-w-[250px]"
            />
        </motion.div>
          </div>
        </motion.div>
        
      </div>
    </motion.section>
    </Container>
  )
}
