"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView(0.9, "About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="container flex max-w-screen-md scroll-mt-52 flex-col items-center px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 leading-8 text-gray-700 dark:text-white/80">
        After graduating, I decided to pursue my passion for designing and
        programming. The only way that can do both is through web developer. I
        have experience in designing UI for my start-up website. I love when
        designing something that is structured but not outdated.
      </p>
      <p className="mb-3 leading-8 text-gray-700 dark:text-white/80">
        I have interest in a career as Front-end Developer with React. I am a
        fast learner and self-taught. I have learned a lot in the past year by
        myself on the internet. I would love to learn another tech stack, even
        learning Back-end and that is what I'm still doing right now.
      </p>
    </motion.section>
  );
}
