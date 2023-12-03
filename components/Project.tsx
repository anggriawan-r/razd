"use client";

import React, { useRef } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  url,
  imageUrl,
}: ProjectProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "1.05 end"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group"
    >
      <section className="flex w-full flex-col-reverse gap-8 overflow-hidden border border-black/5 bg-gray-100 p-4 transition hover:bg-gray-200 dark:border-white/5 dark:bg-white/10 dark:hover:bg-white/20 sm:h-max sm:flex-row sm:gap-16 sm:px-8 sm:py-8">
        <div className="flex flex-col sm:flex-[3]">
          <h3 className="text-2xl font-semibold">
            <Link href={url}>{title}</Link>
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {parse(description)}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:relative sm:flex-[2] sm:group-even:-order-1">
          <Image
            src={imageUrl}
            alt="My Project #1"
            quality={95}
            className="w-full max-w-none rounded-lg
              shadow-2xl
              sm:absolute
              sm:left-0 
              sm:w-[26rem]
              sm:transition 
              sm:group-even:left-[initial] 
              sm:group-even:right-0 sm:group-hover:-translate-x-3 
              sm:group-hover:translate-y-3 
              sm:group-hover:-rotate-2 
              sm:group-even:group-hover:translate-x-3 
              sm:group-even:group-hover:rotate-2"
          />
        </div>
      </section>
    </motion.div>
  );
}
