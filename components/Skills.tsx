"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

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
          <li
            key={index}
            className="borderBlack rounded-xl bg-white px-5 py-2 dark:bg-white/10"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
