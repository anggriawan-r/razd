"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView(0.5, "Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="container flex max-w-screen-md scroll-mt-[100rem] flex-col justify-center gap-8 p-4"
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
              quality={98}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        className="text-center text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to my website!{" "}
        <span className="font-semibold">I'm Anggriawan</span>, a passionate
        <span className="font-semibold"> Front-End Developer</span> based in
        Indonesia. Feel free to contact me!
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
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          href="/CV.pdf"
          className="borderBlack flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 transition hover:scale-105 dark:bg-white/10 sm:w-[10rem] sm:hover:scale-110"
          download
        >
          Download CV <HiDownload />
        </a>

        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/anggriawanr/"
            target="_blank"
            rel="noreferrer noopener"
            className="borderBlack flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white text-2xl transition hover:scale-[1.15] dark:bg-white/10 dark:text-white/60 sm:px-1"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/anggriawan-r"
            target="_blank"
            rel="noreferrer noopener"
            className="borderBlack flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white text-2xl transition hover:scale-[1.15] dark:bg-white/10 dark:text-white/60 sm:px-1"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
