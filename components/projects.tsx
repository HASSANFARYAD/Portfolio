"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData, projectCategories } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

type Filter = (typeof projectCategories)[number];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [filter, setFilter] = useState<Filter>("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === cat
                ? "border-indigo-500 bg-indigo-500 text-white"
                : "border-slate-700 text-gray-500 hover:border-indigo-500/60 hover:text-gray-900 dark:text-gray-400 dark:hover:text-indigo-300"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div>
        <AnimatePresence initial={false}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <Project {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}