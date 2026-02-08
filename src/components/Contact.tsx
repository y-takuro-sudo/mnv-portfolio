"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/takuroyoshio_mnv?igsh=MWR3enFtcXVyODRnbA%3D%3D&utm_source=qr",
    icon: Instagram,
  },
  {
    label: "X",
    href: "https://twitter.com/mirainovalue?s=21",
    icon: Twitter,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CBN1PrbVC/?mibextid=wwXIfr",
    icon: Facebook,
  },
];

export default function Contact() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-[#333333]/40 mb-6"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[#333333]/50 text-sm mb-12"
        >
          お気軽にご連絡ください
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-[#333333]/10 hover:border-[#333333]/40 rounded-sm transition-colors"
            >
              <Icon className="w-4 h-4 text-[#333333]/50" strokeWidth={1.5} />
              <span className="text-sm font-medium tracking-[0.1em] text-[#333333]/70">
                {label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
