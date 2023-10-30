import React from "react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 w-[45rem] scroll-mt-[16rem] px-4 text-center sm:mb-28 sm:px-0"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="mt-6 border border-black/5 bg-gray-100 px-12 py-8 text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:anggriawan.net@gmail.com" className="underline">
          anggriawan.net@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
