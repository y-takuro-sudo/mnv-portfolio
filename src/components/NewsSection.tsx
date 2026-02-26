"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NoteArticle } from "@/lib/note";

interface Props {
  articles: NoteArticle[];
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function NewsSection({ articles }: Props) {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (dir: number) => {
      setCurrent(([prev]) => {
        const next = (prev + dir + articles.length) % articles.length;
        return [next, dir];
      });
    },
    [articles.length]
  );

  if (articles.length === 0) {
    return (
      <section className="pt-28 pb-32 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
          <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#333333]/40 mb-12">
            News / Journal
          </h2>
          <p className="text-[#333333]/30 text-sm">
            記事の取得に失敗しました。
          </p>
        </div>
      </section>
    );
  }

  const article = articles[current];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] py-20">
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-[#333333]/40 mb-12 text-center"
        >
          News / Journal
        </motion.h2>

        {/* Slide area */}
        <div className="relative">
          {/* Image */}
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-[16/9] overflow-hidden bg-[#e8e8e8] rounded-sm"
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={article.link}
                src={article.thumbnail}
                alt={article.title}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </a>

          {/* Prev / Next buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
            aria-label="前の記事"
          >
            <ChevronLeft className="w-5 h-5 text-[#333333]" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
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

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent([i, i > current ? 1 : -1])}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-[#333333]" : "bg-[#333333]/15"
              }`}
              aria-label={`記事 ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
