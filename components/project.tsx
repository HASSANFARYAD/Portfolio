"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaGithub } from "react-icons/fa";
import { techBadgeClass } from "@/lib/utils";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  category,
  imageUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] rounded-xl border border-slate-700/60 overflow-hidden sm:pr-8 relative sm:h-[20rem] transition hover:border-indigo-500 sm:group-even:pl-8 dark:bg-[#1e293b] dark:text-white dark:hover:border-indigo-500">
        <span className="absolute top-4 right-4 z-10 rounded-full border border-indigo-500/40 bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300">
          {category}
        </span>

        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub repository`}
            className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-800/70 px-3 py-1.5 text-sm text-gray-200 backdrop-blur transition hover:border-indigo-400 hover:text-indigo-300"
          >
            <FaGithub className="text-base" />
            Code
          </Link>
        )}

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className={`rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-wider ${techBadgeClass(tag)}`}
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
          />
        ) : (
          <div className="absolute hidden sm:flex top-8 -right-40 h-[15rem] w-[28.25rem] flex-col items-center justify-center gap-2 rounded-t-lg border border-slate-700 bg-gradient-to-br from-indigo-600/20 via-slate-800 to-slate-900 text-indigo-300 group-even:right-[initial] group-even:-left-40">
            <FaCode className="text-4xl" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {category}
            </span>
          </div>
        )}
      </section>
    </motion.div>
  );
}