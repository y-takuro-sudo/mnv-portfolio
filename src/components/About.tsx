"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";

interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] text-[#333333]/40 uppercase tracking-[0.2em]">
        {label}
      </span>
      <span className="text-[#333333] text-base font-medium">{value}</span>
    </div>
  );
}

const socialLinks = [
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

export default function About() {
  return (
    <section className="min-h-screen pt-28 pb-32 bg-white">
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#333333]/40 mb-16">
            About
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <InfoItem label="Name" value="吉尾拓朗 / Takuro Yoshio" />
            <InfoItem label="Job" value="Student / Engineer" />
            <InfoItem
              label="Services"
              value="Webサイト制作 / ポートフォリオ / HP制作"
            />
            <InfoItem label="Skills" value="React / Next.js / MicroCMS" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 border-l-2 border-[#333333]/10 pl-6"
        >
          <p className="text-[#333333]/60 text-base leading-loose">
            学生でエンジニアをしています。予算に応じてWebサイト制作やHP制作、ポートフォリオの制作を行っております。
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-[#333333]/10"
        >
          <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#333333]/40 mb-8">
            Contact
          </h3>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
