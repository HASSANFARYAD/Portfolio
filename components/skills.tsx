"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsByCategory } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <div className="grid gap-10 text-left sm:grid-cols-2">
        {skillsByCategory.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm sm:text-base text-gray-800">
              {group.skills.map((skill, index) => (
                <motion.li
                  className="rounded-xl border border-slate-700/40 bg-gradient-to-r from-[#eee] to-[#C0C0C0] px-4 py-2 transition-colors hover:border-indigo-500 dark:from-[#171717] dark:to-[#404040] dark:text-white/80"
                  key={skill}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}