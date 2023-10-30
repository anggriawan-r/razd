"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDiv() {
  return (
    <motion.div
      className="my-16 hidden h-16 w-1 rounded-full bg-gray-200 sm:block"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.125 }}
    ></motion.div>
  );
}
