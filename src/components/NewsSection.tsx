"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { NoteArticle } from "@/lib/note";

interface Props {
  articles: NoteArticle[];
}

export default function NewsSection({ articles }: Props) {
  return (
    <section className="min-h-screen pt-28 pb-32 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-[#333333]/40 mb-16"
        >
          News / Journal
        </motion.h2>

        {articles.length === 0 ? (
          <p className="text-[#333333]/30 text-sm">記事の取得に失敗しました。</p>
        ) : (
          <div className="flex flex-col">
            {articles.map((article, i) => (
              <motion.a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-start justify-between gap-6 py-6 border-b border-[#333333]/8 hover:border-[#333333]/20 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <time className="text-[11px] text-[#333333]/30 tracking-[0.15em]">
                    {article.pubDate
                      ? new Date(article.pubDate).toLocaleDateString("ja-JP")
                      : ""}
                  </time>
                  <h3 className="mt-2 text-[#333333]/80 text-base font-medium leading-relaxed group-hover:text-[#333333] transition-colors">
                    {article.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#333333]/20 group-hover:text-[#333333]/60 transition-colors shrink-0 mt-2" />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
