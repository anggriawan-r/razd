"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section
      id="home"
      className="flex max-w-[50rem] scroll-mt-[100rem] flex-col justify-center gap-8 p-4"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            className="relative h-24 w-24"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpg"
              alt="My Portrait"
              fill
              className="rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="flex justify-center text-center text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to my website! I'm Anggriawan, a passionate Full-Stack Web
        Developer based in Indonesia. Looking for opportunities in the industry.
        Feel free to contact me!
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 py-3 text-white transition hover:scale-105 sm:w-[10rem] sm:hover:scale-110"
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          href="/CV.pdf"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white py-3 transition hover:scale-105 sm:w-[10rem] sm:hover:scale-110"
          download
        >
          Download CV <HiDownload />
        </a>

        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/anggriawanr/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-black/10 bg-white text-2xl transition hover:scale-[1.15] sm:px-1"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/anggriawan-r"
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-black/10 bg-white text-2xl transition hover:scale-[1.15] sm:px-1"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
