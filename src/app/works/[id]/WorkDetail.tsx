"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Work } from "@/lib/cms";

interface Props {
  work: Work;
}

export default function WorkDetail({ work }: Props) {
  return (
    <section className="min-h-screen pt-28 pb-32 bg-white">
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-[#333333]/40 text-xs tracking-[0.15em] hover:text-[#333333]/70 transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            Works
          </Link>
        </motion.div>

        {work.thumbnail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full aspect-video overflow-hidden bg-[#f5f5f5] mb-10"
          >
            <img
              src={work.thumbnail}
              alt={work.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <time className="text-[11px] text-[#333333]/30 tracking-[0.15em]">
            {work.publishedAt
              ? new Date(work.publishedAt).toLocaleDateString("ja-JP")
              : ""}
          </time>

          <h1 className="mt-3 text-2xl md:text-3xl font-medium text-[#333333]/90 leading-relaxed">
            {work.title}
          </h1>

          {work.tags && work.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.1em] text-[#333333]/30 border border-[#333333]/10 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 border-t border-[#333333]/8 pt-10"
        >
          <p className="text-[#333333]/70 text-base leading-[2] whitespace-pre-wrap">
            {work.description}
          </p>
        </motion.div>

        {work.url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#333333]/60 border border-[#333333]/15 px-6 py-3 hover:text-[#333333] hover:border-[#333333]/40 transition-colors"
            >
              サイトを見る
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
