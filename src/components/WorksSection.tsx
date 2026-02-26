"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Work } from "@/lib/cms";

interface Props {
  works: Work[];
  displayMode?: "list" | "gallery";
}

function WorkListItem({ work, index }: { work: Work; index: number }) {
  const isExternal = !!work.url;
  const linkProps = isExternal
    ? { href: work.url!, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href: `/works/${work.id}` };

  const Wrapper = isExternal ? "a" : Link;

  return (
    <motion.div
      key={work.id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Wrapper
        {...linkProps}
        className="group flex items-start gap-6 py-6 border-b border-[#333333]/8 hover:border-[#333333]/20 transition-colors"
      >
        {work.thumbnail && (
          <div className="w-24 h-16 md:w-32 md:h-20 shrink-0 overflow-hidden bg-[#f5f5f5]">
            <img
              src={work.thumbnail}
              alt={work.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <time className="text-[11px] text-[#333333]/30 tracking-[0.15em]">
            {work.publishedAt
              ? new Date(work.publishedAt).toLocaleDateString("ja-JP")
              : ""}
          </time>
          <h3 className="mt-1 text-[#333333]/80 text-base font-medium leading-relaxed group-hover:text-[#333333] transition-colors">
            {work.title}
          </h3>
          {work.description && (
            <p className="mt-1 text-[#333333]/40 text-sm leading-relaxed line-clamp-2">
              {work.description}
            </p>
          )}
          {work.tags && work.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
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
        </div>

        <ArrowUpRight className="w-4 h-4 text-[#333333]/20 group-hover:text-[#333333]/60 transition-colors shrink-0 mt-2" />
      </Wrapper>
    </motion.div>
  );
}

function WorkGalleryItem({ work, index }: { work: Work; index: number }) {
  const isExternal = !!work.url;
  const linkProps = isExternal
    ? { href: work.url!, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href: `/works/${work.id}` };

  const Wrapper = isExternal ? "a" : Link;

  return (
    <motion.div
      key={work.id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Wrapper
        {...linkProps}
        className="group block overflow-hidden"
      >
        <div className="mb-3">
          <h3 className="text-[#333333]/80 text-sm font-medium leading-relaxed group-hover:text-[#333333] transition-colors">
            {work.title}
          </h3>
          <time className="text-[11px] text-[#333333]/30 tracking-[0.15em]">
            {work.publishedAt
              ? new Date(work.publishedAt).toLocaleDateString("ja-JP")
              : ""}
          </time>
        </div>
        <div className="aspect-[4/3] overflow-hidden bg-[#f5f5f5] rounded">
          {work.thumbnail ? (
            <img
              src={work.thumbnail}
              alt={work.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#333333]/20">
              <ArrowUpRight className="w-8 h-8" />
            </div>
          )}
        </div>
        {work.description && (
          <p className="mt-3 text-[#333333]/40 text-xs leading-relaxed line-clamp-2">
            {work.description}
          </p>
        )}
        {work.tags && work.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.1em] text-[#333333]/30 border border-[#333333]/10 px-1.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Wrapper>
    </motion.div>
  );
}

export default function WorksSection({ works, displayMode = "list" }: Props) {
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

        {works.length === 0 ? (
          <p className="text-[#333333]/30 text-sm">作品を準備中です</p>
        ) : displayMode === "gallery" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {works.map((work, i) => (
              <WorkGalleryItem key={work.id} work={work} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col">
            {works.map((work, i) => (
              <WorkListItem key={work.id} work={work} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
