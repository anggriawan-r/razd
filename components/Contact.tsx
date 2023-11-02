"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView(1, "Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="container my-56 flex max-w-screen-sm scroll-mt-[12rem] flex-col items-center px-4 sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="w-full text-center text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:anggriawan.net@gmail.com" className="underline">
          anggriawan.net@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent sucessfully!");
        }}
        className="mt-8 flex w-full flex-col items-center gap-4 dark:text-black/90"
      >
        <input
          type="email"
          placeholder="Your email"
          name="email"
          required
          maxLength={500}
          className="borderBlack w-full rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:placeholder-black/60 dark:outline-none dark:focus:bg-opacity-100"
        />
        <textarea
          placeholder="Your text"
          name="message"
          required
          maxLength={5000}
          className="borderBlack h-52 w-full rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:placeholder-black/60 dark:outline-none dark:focus:bg-opacity-100"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
