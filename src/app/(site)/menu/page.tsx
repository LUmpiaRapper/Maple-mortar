"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Coffee } from "lucide-react";
import { fullMenu } from "@/lib/menu-data";

const badgeStyles: Record<string, string> = {
  V: "bg-green-900/30 text-green-400 border-green-700/40",
  GF: "bg-amber-900/30 text-amber-400 border-amber-700/40",
  N: "bg-red-900/30 text-red-400 border-red-700/40",
};

const steamPositions = [
  { left: "22%", delay: "0s", duration: 10 },
  { left: "38%", delay: "2.8s", duration: 11 },
  { left: "52%", delay: "5.5s", duration: 9 },
  { left: "68%", delay: "1.2s", duration: 12 },
  { left: "82%", delay: "4s", duration: 10.5 },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.06 },
  }),
};

export default function MenuPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <>
      <section ref={heroRef} className="relative py-24 md:py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={shouldAnimate ? { y: imageY } : undefined}
        >
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/95 to-bg-primary/85" />
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            className="eyebrow mb-4"
            initial={shouldAnimate ? { opacity: 0, y: 16 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Handcrafted Daily
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-4"
            initial={shouldAnimate ? { opacity: 0, y: 24 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            className="text-body text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={shouldAnimate ? { opacity: 0, y: 16 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Every drink and pastry made to order with the finest ingredients.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {fullMenu.map((category) => (
            <motion.div
              key={category.id}
              id={category.id}
              className="mb-16 last:mb-0 scroll-mt-24"
              initial={shouldAnimate ? "hidden" : undefined}
              whileInView={shouldAnimate ? "visible" : undefined}
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionVariants}
            >
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="w-5 h-5 text-accent" />
                <h2 className="font-serif text-2xl md:text-3xl text-heading">
                  {category.name}
                </h2>
              </div>
              <p className="text-body-muted text-sm mb-8 ml-8">
                {category.description}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.id}
                    custom={itemIdx}
                    initial={shouldAnimate ? "hidden" : undefined}
                    whileInView={shouldAnimate ? "visible" : undefined}
                    viewport={{ once: true, margin: "-40px" }}
                    variants={cardVariants}
                    className="bg-bg-card rounded-card border border-border/50 p-4 flex gap-4 hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0 bg-bg-secondary">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-sm text-heading truncate">
                          {item.name}
                        </h3>
                        <span className="text-accent font-semibold text-sm flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-body-muted text-xs mt-1 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        {item.badges?.map((badge) => (
                          <span
                            key={badge}
                            className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border ${badgeStyles[badge] || "bg-bg-secondary text-body-muted border-border"}`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
