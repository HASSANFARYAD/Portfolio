import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <div className="flex items-center justify-center gap-5 mb-4">
        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/HASSANFARYAD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="text-xl" />
        </a>
        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/hassan-faryad-0250bb113/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://medium.com/@Has_San"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium className="text-xl" />
        </a>
      </div>
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Hassan Faryad. All rights reserved.
      </small>
      <p className="text-xs text-gray-400 dark:text-gray-600">
        Built with Next.js + Tailwind CSS
      </p>
    </footer>
  );
}