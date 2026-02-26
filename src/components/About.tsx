"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Twitter,
  Facebook,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { NoteArticle } from "@/lib/note";
import type { Work } from "@/lib/types";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/takuroyoshio_mnv",
    icon: Instagram,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/mirainovalue",
    icon: Twitter,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CBN1PrbVC",
    icon: Facebook,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

interface Props {
  articles: NoteArticle[];
  works: Work[];
}

export default function About({ articles, works }: Props) {
  const [[newsCurrent, newsDirection], setNewsCurrent] = useState([0, 0]);
  const [[worksCurrent, worksDirection], setWorksCurrent] = useState([0, 0]);

  const paginateNews = useCallback(
    (dir: number) => {
      setNewsCurrent(([prev]) => {
        const next = (prev + dir + articles.length) % articles.length;
        return [next, dir];
      });
    },
    [articles.length]
  );

  const paginateWorks = useCallback(
    (dir: number) => {
      setWorksCurrent(([prev]) => {
        const next = (prev + dir + works.length) % works.length;
        return [next, dir];
      });
    },
    [works.length]
  );

  const article = articles[newsCurrent];
  const work = works[worksCurrent];

  return (
    <>
      {/* ===== ABOUT ===== */}
      <section className="bg-white">
        {/* Hero - Name */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-16 pb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.05em] text-[#333333] leading-[1.1]"
          >
            Takuro Yoshio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-sm md:text-base tracking-[0.2em] uppercase text-[#333333]/50"
          >
            Student / Engineer
          </motion.p>
        </div>

        {/* Info grid */}
        <div className="px-6 md:px-16 lg:px-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[#333333]/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="py-8 md:py-10 md:pr-12 border-b border-[#333333]/10 md:border-r"
            >
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#333333]/30 font-semibold">
                Services
              </span>
              <p className="mt-3 text-lg md:text-xl lg:text-2xl font-medium text-[#333333]/80 leading-relaxed">
                Webサイト制作 / ポートフォリオ / HP制作
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="py-8 md:py-10 md:pl-12 border-b border-[#333333]/10"
            >
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#333333]/30 font-semibold">
                Skills
              </span>
              <p className="mt-3 text-lg md:text-xl lg:text-2xl font-medium text-[#333333]/80 leading-relaxed">
                React / Next.js / MicroCMS
              </p>
            </motion.div>
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="py-10 md:py-12 border-b border-[#333333]/10"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-[#333333]/60 leading-[2] max-w-3xl">
              学生でエンジニアをしています。予算に応じてWebサイト制作やHP制作、ポートフォリオの制作を行っております。
            </p>
          </motion.div>

          {/* Contact - URL embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="pt-10 md:pt-12"
          >
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#333333]/30 font-semibold">
              Contact
            </span>

            <div className="mt-6 flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-3 border-b border-[#333333]/8 hover:border-[#333333]/20 transition-colors"
                >
                  <Icon
                    className="w-5 h-5 text-[#333333]/40 group-hover:text-[#333333] transition-colors shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-medium text-[#333333]/70 group-hover:text-[#333333] transition-colors">
                    {label}
                  </span>
                  <span className="ml-auto text-xs text-[#333333]/30 group-hover:text-[#333333]/60 transition-colors truncate hidden sm:block">
                    {href}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      {articles.length > 0 && (
        <section className="bg-[#fafafa] py-16 md:py-20 flex justify-center">
          <div className="max-w-3xl w-full px-6 md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase text-[#333333]/40 mb-10 text-center"
            >
              News / Journal
            </motion.h2>

            {/* Slide area */}
            <div className="relative mx-auto">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/9] overflow-hidden bg-[#e8e8e8] rounded-sm"
              >
                <AnimatePresence initial={false} custom={newsDirection} mode="wait">
                  <motion.img
                    key={article.link}
                    src={article.thumbnail}
                    alt={article.title}
                    custom={newsDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </a>

              <button
                onClick={() => paginateNews(-1)}
                className="absolute -left-5 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
                aria-label="前の記事"
              >
                <ChevronLeft className="w-5 h-5 text-[#333333]" />
              </button>
              <button
                onClick={() => paginateNews(1)}
                className="absolute -right-5 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
                aria-label="次の記事"
              >
                <ChevronRight className="w-5 h-5 text-[#333333]" />
              </button>
            </div>

            {/* Article info */}
            <div className="mt-5 text-center">
              <time className="text-[11px] text-[#333333]/30 tracking-[0.15em]">
                {article.pubDate
                  ? new Date(article.pubDate).toLocaleDateString("ja-JP")
                  : ""}
              </time>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2"
              >
                <h3 className="text-[#333333]/80 text-lg font-medium leading-relaxed hover:text-[#333333] transition-colors">
                  {article.title}
                </h3>
              </a>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {articles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setNewsCurrent([i, i > newsCurrent ? 1 : -1])}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === newsCurrent ? "bg-[#333333]" : "bg-[#333333]/15"
                  }`}
                  aria-label={`記事 ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== WORKS ===== */}
      {works.length > 0 && (
        <section className="bg-white py-16 md:py-20 flex justify-center">
          <div className="max-w-3xl w-full px-6 md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase text-[#333333]/40 mb-10 text-center"
            >
              Works
            </motion.h2>

            {/* Slide area */}
            <div className="relative mx-auto">
              <a
                href={work.url || "#"}
                target={work.url ? "_blank" : undefined}
                rel={work.url ? "noopener noreferrer" : undefined}
                className="block relative aspect-[16/9] overflow-hidden bg-[#e8e8e8] rounded-sm"
              >
                <AnimatePresence initial={false} custom={worksDirection} mode="wait">
                  <motion.img
                    key={work.id}
                    src={work.thumbnail || ""}
                    alt={work.title}
                    custom={worksDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </a>

              {works.length > 1 && (
                <>
                  <button
                    onClick={() => paginateWorks(-1)}
                    className="absolute -left-5 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
                    aria-label="前の作品"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#333333]" />
                  </button>
                  <button
                    onClick={() => paginateWorks(1)}
                    className="absolute -right-5 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
                    aria-label="次の作品"
                  >
                    <ChevronRight className="w-5 h-5 text-[#333333]" />
                  </button>
                </>
              )}
            </div>

            {/* Work info */}
            <div className="mt-5 text-center">
              <time className="text-[11px] text-[#333333]/30 tracking-[0.15em]">
                {new Date(work.publishedAt).toLocaleDateString("ja-JP")}
              </time>
              {work.url ? (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2"
                >
                  <h3 className="text-[#333333]/80 text-lg font-medium leading-relaxed hover:text-[#333333] transition-colors">
                    {work.title}
                  </h3>
                </a>
              ) : (
                <h3 className="mt-2 text-[#333333]/80 text-lg font-medium leading-relaxed">
                  {work.title}
                </h3>
              )}
            </div>

            {/* Dots */}
            {works.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {works.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setWorksCurrent([i, i > worksCurrent ? 1 : -1])}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === worksCurrent ? "bg-[#333333]" : "bg-[#333333]/15"
                    }`}
                    aria-label={`作品 ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
