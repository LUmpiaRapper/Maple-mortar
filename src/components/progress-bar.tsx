"use client";

import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-dark via-accent to-accent-light z-[10000] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
