"use client"

import { motion } from "framer-motion"
import CurrencyIcon from "@/components/common/currency-icon"
import { useRef, useEffect, useState } from "react"

const currencies = [
  { code: "cAUD", color: "#00BCD4", symbolQuery: "currency symbol A" }, // Teal
  { code: "cCAD", color: "#00BCD4", symbolQuery: "currency symbol C" }, // Light Blue
  { code: "cCHF", color: "#8A2BE2", symbolQuery: "currency symbol F" }, // Purple
  { code: "cCOP", color: "#00BCD4", symbolQuery: "currency symbol P" }, // Light Blue
  { code: "cEUR", color: "#8BC34A", symbolQuery: "currency symbol E" }, // Green
  { code: "cGBP", color: "#FF9800", symbolQuery: "currency symbol B" }, // Orange (simplified from image)
  { code: "cGHS", color: "#8A2BE2", symbolQuery: "currency symbol G" }, // Purple
  { code: "cJPY", color: "#8A2BE2", symbolQuery: "currency symbol J" }, // Purple
  { code: "cKES", color: "#8A2BE2", symbolQuery: "currency symbol K" }, // Purple
  { code: "cNGN", color: "#8A2BE2", symbolQuery: "currency symbol N" }, // Purple
  { code: "cREAL", color: "#FF4081", symbolQuery: "currency symbol R" }, // Pink
  { code: "cUSD", color: "#8BC34A", symbolQuery: "currency symbol U" }, // Green
  { code: "cZAR", color: "#8BC34A", symbolQuery: "currency symbol Z" }, // Green
  { code: "eXOF", color: "#FF4081", symbolQuery: "currency symbol X" }, // Pink
  { code: "PUSD", color: "#FFC107", symbolQuery: "currency symbol P" }, // Yellow
]

// Duplicate currencies for a seamless loop effect
const loopedCurrencies = [...currencies, ...currencies, ...currencies];

export default function CurrencySliderSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let animationFrameId: number;
    const scrollContainer = scrollRef.current;
    const scrollSpeed = 1; // Increased scroll speed for a smoother, more dynamic feel

    if (!scrollContainer) return;

    const animateScroll = () => {
      const oneSetWidth = scrollContainer.scrollWidth / 3; // Assuming 3 copies

      if (scrollContainer.scrollLeft >= 2 * oneSetWidth) {
        // If we've scrolled past the second copy (into the third copy),
        // instantly jump back to the start of the second copy.
        scrollContainer.scrollLeft = oneSetWidth;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }

      if (!isHovered) {
        animationFrameId = requestAnimationFrame(animateScroll);
      }
    };

    if (!isHovered) {
      animationFrameId = requestAnimationFrame(animateScroll);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Stagger children for a nice scroll-in effect
      },
    },
  }

  return (
    <motion.section
      className="w-full py-8 md:py-12 lg:py-16 bg-black overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      aria-label="Supported Currencies Slider"
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto pb-4 px-4 md:px-8 lg:px-16 no-scrollbar will-change-scroll" // Removed snap-x snap-mandatory
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
        aria-live="off" // Content changes but not critical for screen readers to announce constantly
      >
        {loopedCurrencies.map((currency, index) => (
          <div key={`${currency.code}-${index}`} className="flex-shrink-0 pr-6 md:pr-8 lg:pr-10"> {/* Removed snap-start */}
            <CurrencyIcon
              code={currency.code}
              color={currency.color}
              symbolQuery={currency.symbolQuery}
              index={index}
            />
          </div>
        ))}
      </div>
    </motion.section>
  )
}
