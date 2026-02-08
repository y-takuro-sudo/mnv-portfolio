"use client";

import { motion } from "framer-motion";

export default function WorksSection() {
  return (
    <section className="min-h-screen pt-28 pb-32 bg-white">
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-[#333333]/40 mb-16"
        >
          Works
        </motion.h2>

        <p className="text-[#333333]/40 text-sm">
          Coming soon...
        </p>
      </div>
    </section>
  );
}
