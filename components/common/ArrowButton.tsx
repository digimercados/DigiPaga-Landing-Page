// components/AnimatedButton.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react"; // or your custom arrow icon

interface AnimatedButtonProps {
  text: string;
  link: string;
  arrowImageSrc?: string; // optional additional animated image
  className?: string; // optional extra classNames
  ariaLabel?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  link,
  arrowImageSrc,
  className = "",
  ariaLabel,
}) => {
  return (
    <motion.div
      className={`mt-8 flex flex-col z-40 items-center lg:items-start will-change-transform ${className}`}
      variants={itemVariants}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#296253] group hover:bg-[#19433a] text-[#F8F9F4] rounded-full px-6 py-2 inline-flex items-center transition-colors"
        aria-label={ariaLabel || text}
      >
        <span>{text}</span>
        <ArrowRight className="ml-2 group-hover:-rotate-45 transition-all duration-200 h-4 w-4" />
      </a>

    
    </motion.div>
  );
};

export default AnimatedButton;
