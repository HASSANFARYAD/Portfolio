"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const writingPosts = [
  {
    title: "Building Multi-Agent AI Systems with Semantic Kernel",
    url: "https://medium.com/@Has_San/building-multi-agent-ai-systems",
    date: "2025",
    tag: "AI / Architecture",
  },
  {
    title: "Architecting Scalable .NET Enterprise Applications",
    url: "https://medium.com/@Has_San/architecting-scalable-dotnet-applications",
    date: "2025",
    tag: ".NET",
  },
  {
    title: "React Performance Patterns for Production Apps",
    url: "https://medium.com/@Has_San/react-performance-patterns",
    date: "2024",
    tag: "React",
  },
];

export default function Blog() {
  const { ref } = useSectionInView("Writing", 0.2);

  return (
    <section
      ref={ref}
      id="writing"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center"
    >
      <SectionHeading>Writing</SectionHeading>

      <div className="flex flex-col gap-4">
        {writingPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
          >
            <Link
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-700/60 bg-slate-100 p-5 text-left transition hover:border-indigo-500 dark:bg-[#1e293b] dark:text-white/90 dark:hover:border-indigo-500"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="rounded-full bg-indigo-500/15 border border-indigo-500/40 px-2.5 py-0.5 text-[0.65rem] font-medium text-indigo-300">
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                </div>
                <FaExternalLinkAlt className="mt-1 flex-shrink-0 text-xs text-gray-400 transition group-hover:text-indigo-400" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-sm text-gray-500 dark:text-gray-400"
      >
        More on{" "}
        <Link
          href="https://medium.com/@Has_San"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
        >
          Medium
        </Link>
      </motion.p>
    </section>
  );
}