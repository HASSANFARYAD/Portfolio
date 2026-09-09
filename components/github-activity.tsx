"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { githubData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function GithubActivity() {
  const { ref } = useSectionInView("GithubActivity", 0.2);

  return (
    <section
      ref={ref}
      id="github-activity"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center"
    >
      <SectionHeading>GitHub activity</SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-slate-700/60 bg-slate-100 p-6 dark:bg-[#1e293b] dark:text-white/90"
      >
        {/* Green contribution grid bar */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex gap-[3px]">
            {githubData.contributionBars.map((count, i) => {
              const intensity =
                count === 0
                  ? "bg-slate-200 dark:bg-white/5"
                  : count <= 2
                  ? "bg-green-200 dark:bg-green-900/50"
                  : count <= 5
                  ? "bg-green-400 dark:bg-green-700/60"
                  : "bg-green-600 dark:bg-green-500";
              return (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-sm ${intensity}`}
                  title={`${count} contributions (week ${i + 1})`}
                />
              );
            })}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
            <span className="inline-block h-2 w-2 rounded-sm bg-green-400 dark:bg-green-700/60" />
            <span>= contribution</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {githubData.totalContributions.toLocaleString()}
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              contributions (last year)
            </p>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {githubData.streak.current}
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              day streak
            </p>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {githubData.topLanguages.length}
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              languages
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {githubData.topLanguages.map((lang) => (
            <span
              key={lang}
              className="rounded-full border border-slate-700/40 bg-gradient-to-r from-[#eee] to-[#C0C0C0] px-3 py-1 text-xs font-medium text-gray-800 dark:from-[#171717] dark:to-[#404040] dark:text-white/80"
            >
              {lang}
            </span>
          ))}
        </div>

        <Link
          href={githubData.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300 transition hover:bg-indigo-500/20"
        >
          View full profile
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      </motion.div>
    </section>
  );
}