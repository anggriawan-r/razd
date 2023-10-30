"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="flex scroll-mt-28 flex-col items-center px-4 sm:max-w-[45rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 leading-8 text-gray-700">
        After graduating with a Science Degree, I decided to pursue my passion
        for designing and programming. The only way that can do both is through
        web developer. Previously, I had designed the UI for my start-up website
        for a year. That's where I found my passion. I love when designing
        something that is structured but not outdated, and then applying it to
        something that can be used. That something is website!
      </p>
      <p className="mb-3 leading-8 text-gray-700">
        Therefore, I'm an enthusiastic full-stack web developer with an
        addiction for discovering new front-end perspectives. Oh, and my core
        stack is React, Next.js, and MongoDB.
      </p>
    </motion.section>
  );
}
