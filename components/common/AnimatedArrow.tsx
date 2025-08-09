"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedImage({ src, className = "" }:any) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { y: 100, opacity: 0 }, // start from bottom
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={wrapperRef} className={`absolute pointer-events-none ${className}`}>
      <Image
        src="/ar.svg"
        alt=""
        width={80}
        height={80}
        className="object-contain max-w-[80px] w-[40px]  md:w-[80px]"
      />
    </div>
  );
}
