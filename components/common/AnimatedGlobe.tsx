"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { parse } from "svgson";

export default function AnimatedMap() {
  const [paths, setPaths] = useState<{ d: string }[]>([]);

  useEffect(() => {
    fetch("/map.svg")
      .then((res) => res.text())
      .then(async (svgText) => {
        const json = await parse(svgText);
        const allPaths: { d: string }[] = [];
        function walk(node: any) {
          if (node.name === "path" && node.attributes?.d) {
            allPaths.push({ d: node.attributes.d });
          }
          if (node.children) node.children.forEach(walk);
        }
        walk(json);
        setPaths(allPaths);
      });
  }, []);

  return (
    <svg
      viewBox="0 0 1235 452"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          fill="#888"
          whileHover={{
            scale: 2, // smooth hover animation
            fill: "#D1F701",
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 18,
              mass: 0.2,
            },
          }}
          onMouseEnter={(e) => {
            const svg = (e.target as SVGPathElement).ownerSVGElement!;
            const siblings = Array.from(svg.querySelectorAll("path"));
            // Highlight 10 neighboring dots instantly
            for (let offset = -15; offset <= 15; offset++) {
              if (offset === 0) continue; // skip main hovered dot (Framer handles it)
              const neighbor = siblings[i + offset] as SVGPathElement | undefined;
              if (neighbor) {
                neighbor.setAttribute("fill", "#D1F701");
                neighbor.setAttribute("r", "2"); // if using circle points
              }
            }
          }}
          onMouseLeave={(e) => {
            const svg = (e.target as SVGPathElement).ownerSVGElement!;
            const siblings = Array.from(svg.querySelectorAll("path"));
            // Reset neighbors
            for (let offset = -15; offset <= 15; offset++) {
              if (offset === 0) continue;
              const neighbor = siblings[i + offset] as SVGPathElement | undefined;
              if (neighbor) {
                neighbor.setAttribute("fill", "#888");
                neighbor.removeAttribute("r");
              }
            }
          }}
        />
      ))}
    </svg>
  );
}
