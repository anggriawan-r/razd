"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999] flex justify-center">
      <motion.div
        className="fixed top-0 flex h-[4.5rem] w-full items-center justify-center rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-max sm:rounded-full sm:px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex items-center justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-4">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="relative flex items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-2 py-1 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300 sm:px-4 sm:py-1",
                    {
                      "text-gray-950 dark:text-gray-300 dark:hover:text-gray-100":
                        activeSection === link.name,
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-gray-200 dark:bg-gray-700"
                      layoutId="active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
