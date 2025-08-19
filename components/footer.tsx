"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'
import SocialIcon from "./social-icon"
import FooterEmailSignup from "./footer-email-signup"
import Image from "next/image"
import Container from "@/app/Container"

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const linkItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -5, color: "#84CC16" }, // Lime-500 for hover
  }

  const socialIcons = [
    { icon: Facebook,  link:" https://www.facebookcom/digimercados",name: "Facebook", color: "bg-green-700" },
    { icon: Instagram,  link:"https://www.instagram.com/digipaga ",name: "Instagram", color: "bg-green-700" },
    { icon: Twitter,  link:" https://www.x.com/digipaga",name: "Twitter", color: "bg-green-700" },
    { icon: Linkedin,  link:" https://www.linkedin.com/company/digimercados",name: "LinkedIn", color: "bg-green-700" },
    { icon: Send,  link:"https://t.me/digimercados ",name: "Telegram", color: "bg-green-700" },
  ]

  return (
    // <Container>
      <motion.footer
      className="relative max-w-[1280px]  mx-auto w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-white text-gray-700 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      aria-labelledby="footer-heading"
    >
      {/* Background Watermark */}
      

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-4 z-10 relative">
        {/* Column 1: Logo, Email Signup, Copyright */}
        
<div className="flex flex-col items-center md:items-start text-center md:text-left col-span-1 lg:col-span-1">
          <Link href="#" className="flex items-center space-x-2 mb-6" aria-label="DigiMercados Home">
            <Image
                          src="/logo.png"
                          width={140}
                          height={150}
                          alt="logo"
                          className="object-cover w-full h-full max-w-[200px] md:max-w-[100px] lg:max-w-[200px]"
                        />
            
          </Link>
          <FooterEmailSignup />

          
          <p className=" font-medium text-black mt-6 pl-4">©2025</p>
          
          
        </div>
        {/* Column 2: Exchange */}
         <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-medium text-gray-900 mb-4">Products</h4>
          <ul className="space-y-2" role="list">
            {["Utility Bills", "Crypto Conversions", "Invoice Management", "PayCode", "Business Account"].map((item, index) => (
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
          <h4 className="font-medium text-gray-900 mb-4">Company</h4>
          <ul className="space-y-2" role="list">
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700">Our Vision</span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700">Retail Solution</span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700">Partnerships</span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700">Virtual Debit Card</span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700">Careers</span>
            </motion.li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-medium text-gray-900 mb-4">For Businesses</h4>
          <ul className="space-y-2" role="list">
            {["Case Studies", "PoS", "Check out", "E-Commerce","Secure Transactions"].map((item, index) => (
              <motion.li key={item} variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
                <Link href="#" className="text-gray-700 hover:text-lime-500 transition-colors duration-200">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
          
          {/* Policy links directly under social icons */}
          <div className="flex  w-full items-center   justify-center py-4 space-x-1 mb-6" role="list">
            {socialIcons.map((social, index) => (
              <SocialIcon key={social.name} link={social.link} icon={social.icon} name={social.name} color={social.color} index={index} />
            ))}
            
          </div>
        </div>

        
        
      </div>
<div className=" inset-0 flex items-center    justify-center py-6 pointer-events-none z-0">
        <motion.span
          className="text-[#F3F3F5] text-center w-full font-bold text-[4rem] md:text-9xl lg:text-[15rem] select-none will-change-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          aria-hidden="true"
        >
          DigiPagav
        </motion.span>
      </div>

      <div className=" flex flex-row md:flex  md:flex-col  w-full py-12  items-center  justify-center text-center ">
          
          <ul className="  md:flex   gap-y-4  items-center w-full justify-center gap-8" role="list">
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700 mt-12 cursor-pointer">Terms of Use </span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700 mt-12 cursor-pointer">Privacy Policy</span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700 mt-12 cursor-pointer">Cookie Notice  </span>
            </motion.li>
            <motion.li variants={linkItemVariants} initial="visible" whileHover="hover" transition={{ duration: 0.1 }} className="will-change-transform" role="listitem">
              <span className="text-gray-700 mt-12 cursor-pointer"> Terms and Conditions</span>
            </motion.li>
            
          </ul> 
        </div>

    <div className=" w-full text-center font-semibold">
      <h2>DigiPaga: All rights reserved  </h2>
    </div>
 
    </motion.footer>
    // </Container>
  )
}
