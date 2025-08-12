import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedRotatingImage from "./Animatedflower";
import AnimatedImage from "./AnimatedArrow";

interface ImageContentProps {
  badgeText?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  rotatingImageSrc?: string;
  rotatingImageClass?: string;
  reverseLayout?: boolean;
  hasBackground?: boolean; // ✅ New prop
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ImageContent: React.FC<ImageContentProps> = ({
  badgeText = "Badge Text",
  title = "Default Title",
  highlightText = "Highlight",
  description = "Default description here.",
  buttonText = "Read more",
  buttonLink = "#",
  imageSrc = "/img3.png",
  imageAlt = "Default alt text",
  rotatingImageSrc = "/flower.svg",
  rotatingImageClass = "",
  reverseLayout = false,
  hasBackground = true, // ✅ Default to true
}) => {
  return (
    <div
      className={`container mx-auto grid lg:grid-cols-2 gap-6 items-center mt-12 ${
        reverseLayout ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Left Image Column */}
      <motion.div
        className="relative flex justify-center lg:justify-start items-center h-[400px] md:h-[500px] lg:h-[600px] will-change-transform"
        initial={{ opacity: 0, x: reverseLayout ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {rotatingImageSrc && (
          <AnimatedRotatingImage
            src={rotatingImageSrc}
            className={
              rotatingImageClass || "-top-6 left-0 w-16 h-16 md:w-24 md:h-24"
            }
          />
        )}

        <div className="relative z-10 p-4">
          <Image
            src={imageSrc}
            width={400}
            height={500}
            alt={imageAlt}
            className="object-cover rounded-[1.5rem] hover:scale-105 duration-300 w-full h-full max-w-[350px] md:max-w-[300px] lg:max-w-[400px]"
          />
        </div>
        
      </motion.div>

      {/* Right Content Column */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={`flex flex-col px-6 py-2 md:px-8 md:py-12 space-y-6 text-center lg:text-left rounded-lg ${
          hasBackground ? "bg-[#F8F9F4]" : ""
        }`} // ✅ Conditionally add background
      >
        <motion.div
          className="inline-flex  justify-center lg:justify-start bg-[#B7DF30]  text-white text-sm font-medium px-4 py-2 rounded-full self-center lg:self-start will-change-transform"
          variants={itemVariants}
        >
          {badgeText}
        </motion.div>

        <motion.h3
          className="text-3xl md:text-4xl lg:text-[40px] tracking-tight text-gray-900 leading-tight will-change-transform"
          variants={itemVariants}
        >
          {title} <span className="text-[#B7DF30]">{highlightText}</span>
        </motion.h3>

        <motion.p
          className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 will-change-transform"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        {buttonText && (
          <motion.div
            className="mt-8 will-change-transform"
            variants={itemVariants}
          >
            <Button
              asChild
              className="bg-green-700 hover:bg-green-800 text-white rounded-full px-6 py-2"
            >
              <a href={buttonLink} aria-label={buttonText}>
                {buttonText}
                
              </a>
              
            </Button>

            
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
