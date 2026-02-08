"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="h-screen flex flex-col items-center justify-center bg-white relative"
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-[#333333] text-7xl md:text-[140px] font-bold tracking-[0.3em] select-none leading-none"
      >
        MNV
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-6 text-[#333333]/40 text-xs tracking-[0.5em] uppercase"
      >
        Portfolio
      </motion.p>
    </section>
  );
}
