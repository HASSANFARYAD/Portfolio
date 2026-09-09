"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsSun, BsMoon, BsList, BsX } from "react-icons/bs";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        {/* Desktop nav */}
        <ul className="hidden sm:flex w-[initial] flex-nowrap items-center gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
          <li className="h-3/4 flex items-center justify-center">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <BsMoon /> : <BsSun />}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger + theme toggle */}
        <div className="flex sm:hidden items-center justify-between w-[22rem] px-4">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <BsMoon /> : <BsSun />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <BsX className="text-xl" /> : <BsList className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[4.5rem] left-1/2 -translate-x-1/2 w-[20rem] rounded-xl border border-white/20 bg-white/90 shadow-xl backdrop-blur-md dark:bg-gray-950/90 dark:border-black/40 sm:hidden z-[999]"
          >
            <ul className="flex flex-col py-3">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    className={clsx(
                      "block px-6 py-2.5 text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800",
                      {
                        "text-gray-950 dark:text-gray-200 bg-gray-100/60 dark:bg-gray-800/60":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setMobileOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}