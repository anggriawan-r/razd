"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState("home");

  return (
    <header className="relative z-[999] flex justify-center">
      <motion.div
        className="fixed top-0 flex h-[4.5rem] w-full items-center justify-center rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-max sm:rounded-full sm:px-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex items-center justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-3">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="flex items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className="flex w-full items-center justify-center px-4 py-1 transition hover:text-gray-950"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
