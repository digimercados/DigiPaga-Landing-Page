"use client";

import Container from "@/app/Container";
import { motion } from "framer-motion";
import Image from "next/image";

// Your items
const items = [
  { name: "cAUD", image: "/sll/cAUD.png" },
  { name: "cCAD", image: "/sll/cCAD.png" },
  { name: "cCHF", image: "/sll/cCHF.png" },
  { name: "cCOP", image: "/sll/cCOP.png" },
  { name: "cEUR", image: "/sll/cEUR.png" },
  { name: "cGBP", image: "/sll/cGBP.png" },
  { name: "cGHS", image: "/sll/cGHS.png" },
  { name: "cJPY", image: "/sll/cJPY.png" },
  { name: "cKES", image: "/sll/cKES.png" },
  { name: "cNGN", image: "/sll/cNGN.png" },
  { name: "cREAL", image: "/sll/cREAL.png" },
  { name: "cUSD", image: "/sll/cUSD.png" },
  { name: "cZAR", image: "/sll/cZAR.png" },
  { name: "eXOF", image: "/sll/eXOF.png" },
  { name: "PUSD", image: "/sll/PUSO.png" },
  // Repeat a few to make loop look seamless
  { name: "cAUD", image: "/sll/cAUD.png" },
  { name: "cCAD", image: "/sll/cCAD.png" },
  { name: "cCHF", image: "/sll/cCHF.png" },
  { name: "cCOP", image: "/sll/cCOP.png" },
  { name: "cEUR", image: "/sll/cEUR.png" },
  { name: "cGBP", image: "/sll/cGBP.png" },
  { name: "cGHS", image: "/sll/cGHS.png" },
  { name: "cJPY", image: "/sll/cJPY.png" },
  { name: "cKES", image: "/sll/cKES.png" },
  { name: "cNGN", image: "/sll/cNGN.png" },
  { name: "cREAL", image: "/sll/cREAL.png" },
  { name: "cUSD", image: "/sll/cUSD.png" },
  { name: "cZAR", image: "/sll/cZAR.png" },
  { name: "eXOF", image: "/sll/eXOF.png" },
  { name: "PUSD", image: "/sll/PUSO.png" },
];

export default function SmoothLogoSlider() {
  return (
   <Container>
     <section className="w-full overflow-hidden bg-[#F8F9F4] py-6">
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-18">
            <div className="relative w-14 h-14 mb-2">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-gray-700 text-center">{item.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
   </Container>
  );
}
