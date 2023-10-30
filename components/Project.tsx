import React from "react";
import SectionHeading from "./SectionHeading";

export default function Project() {
  return (
    <section
      id="projects"
      className="flex scroll-mt-28 flex-col items-center px-4 sm:max-w-[45rem]"
    >
      <SectionHeading>My Projects</SectionHeading>
      <section className="max-w-[45rem] overflow-hidden border border-black/5 bg-gray-100 p-4 hover:bg-gray-200 sm:px-8 sm:py-8">
        <h3 className="text-2xl font-semibold">blogin</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          A blog web app. User can post blogs here, and give comments to other
          blog created by other user. Currently work in progress. Stay tuned.
          You can visit the repository{" "}
          <a
            href="https://github.com/anggriawan-r/blogin"
            className="font-semibold underline"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          <li className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white">
            JavaScript
          </li>
          <li className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white">
            CSS
          </li>
          <li className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white">
            React
          </li>
          <li className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white">
            Next.js
          </li>
          <li className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white">
            MongoDB
          </li>
          <li className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white">
            Firebase
          </li>
          <li className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white">
            Prisma
          </li>
        </ul>
      </section>
    </section>
  );
}
