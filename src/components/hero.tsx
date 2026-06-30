"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Coffee, Medal, Leaf } from "lucide-react";
import Logo from "./logo";

const trustBadges = [
  { icon: Medal, label: "Premium Quality Beans" },
  { icon: Leaf, label: "Expertly Roasted" },
  { icon: Coffee, label: "Made With Love" },
];

const steamPositions = [
  { left: "18%", delay: "0s", duration: 10 },
  { left: "30%", delay: "2.8s", duration: 11 },
  { left: "48%", delay: "5.5s", duration: 9 },
  { left: "62%", delay: "1.2s", duration: 12 },
  { left: "76%", delay: "4s", duration: 10.5 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const animProps = shouldAnimate
    ? { initial: "hidden", animate: "visible", variants: containerVariants }
    : {};

  const parallaxStyle = shouldAnimate
    ? { y: imageY, scale: imageScale }
    : {};

  return (
    <section ref={sectionRef} className="relative min-h-dvh flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={parallaxStyle}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Steaming latte art coffee cup on wood slab"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/95 via-bg-primary/85 to-bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
      </motion.div>

      {shouldAnimate && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
          {steamPositions.map((pos, i) => (
            <div
              key={i}
              className="steam-wisp"
              style={{
                left: pos.left,
                width: `${50 + (i % 3) * 18}px`,
                height: `${70 + (i % 2) * 35}px`,
                animationDuration: `${pos.duration}s`,
                animationDelay: pos.delay,
              }}
            />
          ))}
        </div>
      )}

      <motion.div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32" {...animProps}>
        <Logo className="mb-14" />
        <div className="max-w-2xl">
          <motion.p className="eyebrow mb-4" variants={itemVariants}>
            Rich. Smooth. Perfect.
          </motion.p>

          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
            variants={itemVariants}
          >
            <span className="text-heading">Experience Coffee </span>
            <span className="text-heading">Like Never </span>
            <span className="text-accent">Before</span>
          </motion.h1>

          <motion.p
            className="text-body text-base md:text-lg max-w-lg mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Handcrafted small-batch coffee roasted to perfection. Every cup
            tells a story of tradition, quality, and the warm embrace of
            community.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={itemVariants}
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-bg-primary font-medium rounded-full hover:bg-accent-light transition-all duration-200 text-base active:scale-[0.97]"
            >
              Explore Menu
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-accent/40 text-heading font-medium rounded-full hover:bg-accent/10 hover:border-accent/60 transition-all duration-200 text-base active:scale-[0.97]"
            >
              Our Story
              <span aria-hidden="true" className="text-accent">
                &#9654;
              </span>
            </a>
          </motion.div>

          <motion.div className="flex flex-wrap gap-6 md:gap-8" variants={itemVariants}>
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full border border-accent/25 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-body">{badge.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none z-[6]" />
    </section>
  );
}
