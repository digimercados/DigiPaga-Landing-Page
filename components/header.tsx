"use client"

import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Wallet, CreditCard, Bitcoin, LandPlot, Menu, X, ScrollText, Smile, ClipboardList, Coins, CircleDollarSign } from 'lucide-react'
import { useState } from "react"
import LocaleSwitcher from "./locale-switcher"
import Image from "next/image"
import Container from "@/app/Container"

const navItems = [
  { icon: ScrollText, text: "Utility Bills" },
  { icon: CircleDollarSign, text: "Convert Crypto" },
  { icon:ClipboardList , text: " Invoices" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  }

  return (
    // <Container>
      <motion.nav
      className="relative z-50 max-w-[1200px] mx-auto w-full px-4 py-4 md:px-2 lg:px-4 flex items-center justify-between will-change-transform"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      {/* Logo */}
      <Link href="#" className="flex items-center space-x-2" aria-label="DigiPaga Home">
        <motion.div
        
          
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 200 }}
        >
        </motion.div>
        <motion.span
          className="text-2xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
                    <Image alt="logo" src="/logo.png" className=" max-w-[200px] w-[200px] " width={150} height={50}/>
        </motion.span> 
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Navigation Items (Desktop) */}
      <div className="hidden md:flex items-center  gap-6 ">
        {navItems.map((item, index) => (
          <motion.div key={item.text} variants={navItemVariants} initial="hidden" animate="visible" custom={index}>
            <Link
              href="#"
              className={buttonVariants({ variant: "outline", size: "sm" }) + " hover:bg-[#296253] group hover:text-[#F8F9F4] rounded-full px-4 py-2"}
              aria-label={item.text}
            > 
            {item.text}
              <item.icon className="h-4 w-4 mr-2" /> 
             
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Connect Wallet & Globe (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <motion.div variants={navItemVariants} initial="hidden" animate="visible" custom={navItems.length}>
          <Button className="bg-[#296253] group hover:bg-[#19433a] text-[#F8F9F4] rounded-lg px-4 py-2 flex items-center" aria-label="Connect Wallet">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </motion.div>
        <motion.div variants={navItemVariants} initial="hidden" animate="visible" custom={navItems.length + 1}>
          <LocaleSwitcher />
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-4 space-y-4 border-t border-gray-100"
          >
            {navItems.map((item) => (
              <Link
                key={item.text}
                href="#"
                className={buttonVariants({ variant: "outline", size: "lg" }) + "  w-11/12 rounded-full"}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={item.text}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.text}
              </Link>
            ))}
            <Button
              className=" bg-[#296253] group hover:bg-[#19433a] text-[#F8F9F4] rounded-xl px-6 py-3 flex items-center w-11/12"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Connect Wallet"
            >
              <Wallet className="h-5 w-5 mr-2" />
              Connect Wallet
            </Button>
            <LocaleSwitcher isMobile={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    // </Container>
  )
}
