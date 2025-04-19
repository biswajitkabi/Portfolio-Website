"use client";
import { motion, useAnimationFrame } from "framer-motion";
import data from "@/data";
import Image from "next/image";
import { useState, useRef } from "react";

const Links = () => {
  const containerRef = useRef(null);
  const [offsetX, setOffsetX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Total width calculation for infinite loop
  const totalItems = data.links.length * 2;
  const itemWidth = 35;
  const gapSize = 56;
  const totalWidth = totalItems * itemWidth + (totalItems - 1) * gapSize;

  useAnimationFrame((time, delta) => {
    if (!isPaused) {
      setOffsetX((prev) => (prev - delta * 0.04) % (totalWidth / 2));
    }
  });

  return (
    <div
      className="w-full bg-primary h-10 md:h-17 flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={containerRef}
    >
      <motion.div
        className="flex gap-10 md:gap-56 items-center"
        style={{ x: offsetX }}
      >
        {data.links.map((link) => (
          <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer">
            <Image src={link.icon} alt={link.name} width={35} height={35} className="min-w-[35px]" />
          </a>
        ))}
        {data.links.map((link) => (
          <a href={link.url} key={`duplicate-${link.name}`} target="_blank" rel="noopener noreferrer">
            <Image src={link.icon} alt={link.name} width={35} height={35} className="min-w-[35px]" />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Links;
