"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { currentlyBuildingData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function CurrentlyBuilding() {
  const { ref } = useSectionInView("CurrentlyBuilding", 0.2);

  return (
    <section
      ref={ref}
      id="currently-building"
      className="mb-28 max-w-[42rem] scroll-mt-28"
    >
      <SectionHeading>Currently building</SectionHeading>

      <div className="flex flex-col gap-6">
        {currentlyBuildingData.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-xl border border-slate-700/60 bg-slate-100 p-5 dark:bg-[#1e293b] dark:text-white/90"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="rounded-full bg-indigo-500/15 border border-indigo-500/40 px-2.5 py-0.5 text-xs font-medium text-indigo-300">
                    {item.language}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/60">
                  {item.description}
                </p>
              </div>
              {item.url && (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} repository`}
                  className="mt-1 flex-shrink-0 rounded-full border border-slate-600/60 bg-slate-800/70 p-2 text-gray-400 transition hover:border-indigo-400 hover:text-indigo-300"
                >
                  <FaGithub className="text-lg" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}