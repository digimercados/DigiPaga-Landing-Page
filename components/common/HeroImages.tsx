"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function FullPageMouseFollow() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse position (0 to 1 normalized)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Update mouse values on global mouse move
  useEffect(() => {
    function onMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX / window.innerWidth);
      mouseY.set(event.clientY / window.innerHeight);
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [mouseX, mouseY]);

  // Motion value for scroll-based scaling
  const scrollY = useMotionValue(0);
  useEffect(() => {
    function onScroll() {
      animate(scrollY, window.scrollY, { type: "spring", stiffness: 50, damping: 20 });
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);

  const scale = useTransform(scrollY, [0, 500], [1, 1.05]);

  // Parallax settings for SVG paths
  const parallaxSettings = [
    { xMult: 30, yMult: 20, rotateMult: 6 },
    { xMult: -20, yMult: 25, rotateMult: -4 },
    { xMult: 15, yMult: -15, rotateMult: 3 },
    { xMult: -12, yMult: 18, rotateMult: -5 },
    { xMult: 20, yMult: -10, rotateMult: 4 },
    { xMult: -15, yMult: 22, rotateMult: -3 },
    { xMult: 18, yMult: 14, rotateMult: 5 },
    { xMult: -22, yMult: 18, rotateMult: -6 },
  ];

  // Create motion transforms for each path
  const pathMotions = parallaxSettings.map(({ xMult, yMult, rotateMult }) => ({
    x: useTransform(mouseX, [0, 1], [-xMult, xMult]),
    y: useTransform(mouseY, [0, 1], [-yMult, yMult]),
    rotate: useTransform(mouseX, [0, 1], [-rotateMult, rotateMult]),
  }));

  // Front image parallax (subtle)
  const imgX = useTransform(mouseX, [0, 1], [-20, 20]);
  const imgY = useTransform(mouseY, [0, 1], [-15, 15]);
  const imgRotate = useTransform(mouseX, [0, 1], [-5, 5]);

  return (
    <section
      ref={containerRef}
      className="  md:h-[700px]   w-full  py-12 overflow-visible bg-white flex items-center justify-center"
      style={{ perspective: 600 }}
    >
      {/* Background SVG */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 700"
        className="absolute inset-0 w-full h-full top-0  overflow-visible right-0 select-none pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M483.842 309.696C560.461 264.575 612.027 210.09 599.018 187.999C586.009 165.908 513.351 184.577 436.732 229.698C360.112 274.818 308.546 329.304 321.555 351.394C334.564 373.485 407.222 354.816 483.842 309.696Z"
          fill="#0D1004"
          style={{
            x: pathMotions[0].x,
            y: pathMotions[0].y,
            rotate: pathMotions[0].rotate,
            transformOrigin: "50% 50%",
          }}
        />
        <motion.path
          d="M109 284L110.167 287.153C111.483 290.711 114.289 293.517 117.847 294.833L121 296L117.847 297.167C114.289 298.483 111.483 301.289 110.167 304.847L109 308L107.833 304.847C106.517 301.289 103.711 298.483 100.153 297.167L97 296L100.153 294.833C103.711 293.517 106.517 290.711 107.833 287.153L109 284Z"
          fill="#296253"
          opacity={0.4}
          style={{
            x: pathMotions[1].x,
            y: pathMotions[1].y,
            rotate: pathMotions[1].rotate,
            transformOrigin: "50% 50%",
          }}
        />
        <motion.path
          d="M586 0H526C519.373 0 514 5.37258 514 12V76C514 82.6274 519.373 88 526 88H586C592.627 88 598 82.6274 598 76V12C598 5.37258 592.627 0 586 0Z"
          fill="#B7DF30"
          style={{
            x: pathMotions[2].x,
            y: pathMotions[2].y,
            rotate: pathMotions[2].rotate,
            transformOrigin: "50% 50%",
          }}
        />
        <motion.path
          d="M546 94H505C501.686 94 499 96.6863 499 100V141C499 144.314 501.686 147 505 147H546C549.314 147 552 144.314 552 141V100C552 96.6863 549.314 94 546 94Z"
          fill="#B7DF30"
          style={{
            x: pathMotions[3].x,
            y: pathMotions[3].y,
            rotate: pathMotions[3].rotate,
            transformOrigin: "50% 50%",
          }}
        />
        <motion.path
          d="M19 124H88.4833C95.663 124 101.483 129.82 101.483 137V194C101.483 201.18 107.304 207 114.483 207H166"
          stroke="#296253"
          fill="none"
          strokeWidth={2}
          style={{
            x: pathMotions[4].x,
            y: pathMotions[4].y,
            rotate: pathMotions[4].rotate,
            transformOrigin: "50% 50%",
          }}
        />
        <motion.path
          d="M722.099 331.932C726.632 327.534 732.881 325.805 738.767 326.752L738.778 326.753L738.789 326.755C742.354 327.165 745.805 328.696 748.537 331.347L772.656 354.746C779.114 361.011 779.114 371.163 772.656 377.428L748.537 400.827C741.674 407.485 741.674 418.286 748.537 424.943L760.597 436.644C767.054 442.908 767.054 453.059 760.597 459.324L742.507 476.874C735.644 483.532 735.644 494.333 742.507 500.991L760.597 518.54C767.055 524.805 767.054 534.956 760.597 541.222L736.477 564.621C730.01 570.895 719.52 570.895 713.054 564.621L688.935 541.222C682.477 534.956 682.477 524.805 688.935 518.54L707.023 500.991C713.886 494.333 713.886 483.532 707.023 476.874L688.935 459.325V459.324C686.031 456.507 684.435 452.908 684.141 449.23L684.056 448.174L683.294 448.911L551.003 577.067C543.538 584.31 531.427 584.311 523.962 577.068L510.093 563.613C502.636 556.379 502.635 544.656 510.092 537.422L510.093 537.423L646.522 405.251L647.087 404.704L646.352 404.425C644.291 403.641 642.36 402.442 640.695 400.827L622.605 383.277C615.751 376.628 604.643 376.628 597.789 383.277L579.699 400.827C573.233 407.1 562.742 407.1 556.276 400.827L532.157 377.428C525.8 371.261 525.7 361.328 531.858 355.043L532.157 354.746L556.276 331.347C562.742 325.074 573.233 325.074 579.699 331.347L597.789 348.896C604.643 355.546 615.751 355.546 622.605 348.896L640.695 331.347C647.162 325.074 657.652 325.074 664.118 331.347L682.208 348.896C687.123 353.664 694.219 355.01 700.365 352.947L700.474 352.911L700.555 352.832L722.099 331.932Z"
          stroke="#B7DF30"
          opacity={0.3}
          fill="none"
          strokeWidth={2}
          style={{
            x: pathMotions[5].x,
            y: pathMotions[5].y,
            rotate: pathMotions[5].rotate,
            transformOrigin: "50% 50%",
          }}
        />
        <motion.path
          d="M97 45L98.1666 48.1528C99.4833 51.7111 102.289 54.5167 105.847 55.8334L109 57L105.847 58.1666C102.289 59.4833 99.4833 62.2889 98.1666 65.8472L97 69L95.8334 65.8472C94.5167 62.2889 91.7111 59.4833 88.1528 58.1666L85 57L88.1528 55.8334C91.7111 54.5167 94.5167 51.7111 95.8334 48.1528L97 45Z"
          fill="#296253"
          opacity={0.4}
          style={{
            x: pathMotions[6].x,
            y: pathMotions[6].y,
            rotate: pathMotions[6].rotate,
            transformOrigin: "50% 50%",
          }}
        />
        <motion.path
          d="M12 112L13.1666 115.153C14.4833 118.711 17.2889 121.517 20.8472 122.833L24 124L20.8472 125.167C17.2889 126.483 14.4833 129.289 13.1666 132.847L12 136L10.8334 132.847C9.51666 129.289 6.71112 126.483 3.15277 125.167L0 124L3.15277 122.833C6.71112 121.517 9.51666 118.711 10.8334 115.153L12 112Z"
          fill="#296253"
          style={{
            x: pathMotions[7].x,
            y: pathMotions[7].y,
            rotate: pathMotions[7].rotate,
            transformOrigin: "50% 50%",
          }}
        />
      </motion.svg>

      {/* Front Image with parallax and scale */}
      <motion.img
        src="/h.png"
        alt="Mobile App Interface"
        className="relative z-10 max-w-[450px]  w-full md:w-[70%] lg:w-full object-contain select-none"
        style={{ scale, x: imgX, y: imgY, rotate: imgRotate, transformOrigin: "50% 50%" }}
        draggable={false}
        loading="eager"
      />
    </section>
  );
}
