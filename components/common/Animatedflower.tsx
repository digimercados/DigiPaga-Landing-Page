"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedRotatingImage({ src, className = "" }) {
  const wrapperRef = useRef(null);
  const parentRef = useRef(null); // parent container

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { y: 100, opacity: 0, rotation: 0 },
      {
        y: 0,
        opacity: 1,
        rotation: 360,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: parentRef.current, // parent is now trigger
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={parentRef} className="absolute z-40 w-full h-full">
      <div ref={wrapperRef} className={`absolute pointer-events-none ${className}`}>
        <Image
          src={src}
          alt=""
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
}
