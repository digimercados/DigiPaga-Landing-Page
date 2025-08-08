"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'
import SocialIcon from "./social-icon"
import FooterEmailSignup from "./footer-email-signup"
import Image from "next/image"

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const linkItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    hover: { x: 5, color: "#84CC16" }, // Lime-500 for hover
  }

  const socialIcons = [
    { icon: Facebook, name: "Facebook", color: "bg-green-700" },
    { icon: Instagram, name: "Instagram", color: "bg-green-700" },
    { icon: Twitter, name: "Twitter", color: "bg-green-700" },
    { icon: Linkedin, name: "LinkedIn", color: "bg-green-700" },
    { icon: Send, name: "Telegram", color: "bg-green-700" },
  ]

  return (
    <motion.footer
      className="relative w-full py-12 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-white text-gray-700 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      aria-labelledby="footer-heading"
    >
      {/* Background Watermark */}
      

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 z-10 relative">
        {/* Column 1: Logo, Email Signup, Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left col-span-1 lg:col-span-1">
          <Link href="#" className="flex items-center space-x-2 mb-6" aria-label="DigiMercados Home">
            <Image
                          src="/logo.png"
                          width={400}
                          height={500}
                          alt="logo"
                          className="object-cover rounded-[1.5rem] w-full h-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
                        />
            
          </Link>
          <FooterEmailSignup />
          <p className="mt-6 text-sm text-gray-500">© 2025 Reserved</p>
        </div>

        {/* Column 2: Exchange */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-gray-900 mb-4">Exchange</h4>
          <ul className="space-y-2" role="list">
            {["Talk to an Expert", "Security", "Custom Chainlinks", "Press Inquiries", "Legal"].map((item, index) => (
              <motion.li key={item} variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
                <Link href="#" className="text-gray-700 hover:text-lime-500 transition-colors duration-200">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
          <ul className="space-y-2" role="list">
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700">Herengracht 2134</span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700">Amsterdam</span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700">The Netherlands</span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700">000 000 0000</span>
            </motion.li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
          <ul className="space-y-2" role="list">
            {["Whitepaper", "Case Studies", "Tech Talks", "Economics 2.0", "What is DeFi?"].map((item, index) => (
              <motion.li key={item} variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
                <Link href="#" className="text-gray-700 hover:text-lime-500 transition-colors duration-200">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 5: Follow Us, Policy */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
          <div className="flex space-x-2 mb-6" role="list">
            {socialIcons.map((social, index) => (
              <SocialIcon key={social.name} icon={social.icon} name={social.name} color={social.color} index={index} />
            ))}
            {/* Three small dots for more icons */}
            <div className="flex space-x-1" aria-hidden="true">
              {[0, 1, 2].map(dotIndex => (
                <motion.div
                  key={dotIndex}
                  className="w-2 h-2 rounded-full bg-green-700 will-change-transform"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: socialIcons.length * 0.1 + dotIndex * 0.1 }}
                />
              ))}
            </div>
          </div>
          {/* Policy links directly under social icons */}
          <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform mt-2" role="listitem"> {/* Added mt-2 for spacing */}
            <Link href="#" className="text-gray-700 hover:text-lime-500 transition-colors duration-200">
              Privacy Policy
            </Link>
          </motion.li>
          <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
            <Link href="#" className="text-gray-700 hover:text-lime-500 transition-colors duration-200">
              Terms & Condition
            </Link>
          </motion.li>
        </div>
      </div>
<div className=" inset-0 flex items-start    justify-start pointer-events-none z-0">
        <motion.span
          className="text-[#F3F3F5] font-bold text-7xl md:text-9xl lg:text-[15rem] select-none will-change-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          aria-hidden="true"
        >
          DigiPaga
        </motion.span>
      </div>
 
    </motion.footer>
  )
}
