"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.025 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView(1, "Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="container flex max-w-screen-md scroll-mt-96 flex-col items-center px-4 sm:px-0"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-gray-800 dark:text-white/80">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="borderBlack rounded-xl bg-white px-5 py-2 dark:bg-white/10"
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
