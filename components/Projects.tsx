"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView(0.2, "Projects");

  return (
    <section
      id="projects"
      ref={ref}
      className="container flex max-w-screen-md scroll-mt-48 flex-col items-center px-4"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
