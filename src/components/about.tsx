"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const highlights = [
  "Sustainably Sourced Beans",
  "Ethically Traded",
  "Freshly Roasted",
  "Barista Crafted",
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            className="relative"
            initial={shouldAnimate ? { opacity: 0, x: -60 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <div className="relative aspect-[4/3] rounded-card overflow-hidden">
              <Image
                src="/images/about-collage.jpg"
                alt="Coffee brewing equipment and beans on rustic wood table"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 rounded-card overflow-hidden border-4 border-bg-primary shadow-xl"
              initial={shouldAnimate ? { opacity: 0, scale: 0.85 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.3 }}
            >
              <Image
                src="/images/about-inset.jpg"
                alt="Freshly roasted coffee beans"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 60 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.15 }}
          >
            <p className="eyebrow mb-4">About Us</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              <span className="text-heading">More Than Just a </span>
              <span className="text-accent">Coffee</span>
            </h2>
            <p className="text-body text-base leading-relaxed mb-8">
              Born in the heart of Birchwood Hollow, Maple & Mortar is where
              community and craft converge. Every bean is carefully selected,
              every roast is a labor of love, and every cup is served with a
              story. From our vintage armchairs to the warmth of the fireplace,
              we welcome you home.
            </p>

            <motion.div
              className="space-y-3 mb-8"
              initial={shouldAnimate ? "hidden" : undefined}
              whileInView={shouldAnimate ? "visible" : undefined}
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-body text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-bg-primary font-medium rounded-full hover:bg-accent-light transition-all duration-200 text-base active:scale-[0.97]"
              initial={shouldAnimate ? { opacity: 0, y: 15 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.4 }}
            >
              Learn More
              <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-96 opacity-[0.04] pointer-events-none animate-float"
        initial={shouldAnimate ? { opacity: 0 } : undefined}
        whileInView={shouldAnimate ? { opacity: 0.04 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M90 20C60 40 30 60 20 100C10 140 30 170 50 190C35 170 25 140 35 105C45 70 65 50 90 20Z"
            fill="#cb8f3f"
          />
          <path
            d="M60 0C40 20 15 45 10 80C5 115 20 145 40 160C28 140 18 115 25 85C32 55 48 30 60 0Z"
            fill="#d9a85c"
          />
        </svg>
      </motion.div>
    </section>
  );
}
