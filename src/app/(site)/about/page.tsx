"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Coffee, Heart, Users, Leaf } from "lucide-react";

const timeline = [
  { year: "2015", event: "Eleanor Hargrove opens Maple & Mortar in a converted hardware store on Maple Street." },
  { year: "2016", event: "Birchwood Brew cold brew becomes our first signature drink; featured in Hollow Hometown Living." },
  { year: "2018", event: "We start roasting our own beans in-house with single-origin sourcing from small farms." },
  { year: "2020", event: "Community pantry program launched — over 5,000 meals donated during the shutdown." },
  { year: "2022", event: "Second roastery opened; wholesale program begins supplying local cafes and bakeries." },
  { year: "2024", event: "Awarded Regional Roaster of the Year by the Northeast Coffee Collective." },
  { year: "2025", event: "Ten-year anniversary celebration with the release of our Anniversary Reserve blend." },
];

const values = [
  { icon: Coffee, title: "Craft", description: "Every drink is made by hand, one at a time. No shortcuts, no syrups from a bottle." },
  { icon: Leaf, title: "Sustainability", description: "Direct-trade beans, compostable packaging, and a zero-waste goal by 2030." },
  { icon: Heart, title: "Community", description: "We exist because of this town. Local events, local ingredients, local love." },
  { icon: Users, title: "Hospitality", description: "You are not a customer — you are a guest. Sit, stay, and feel at home." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

const timelineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

export default function AboutPage() {
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            className="eyebrow mb-4"
            initial={shouldAnimate ? { opacity: 0, y: 16 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-4"
            initial={shouldAnimate ? { opacity: 0, y: 24 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            About Maple &amp; Mortar
          </motion.h1>
          <motion.p
            className="text-body text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={shouldAnimate ? { opacity: 0, y: 16 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            A decade of craft, community, and really good coffee.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20"
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div
              className="relative"
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
            >
              <div className="relative aspect-[4/3] rounded-card overflow-hidden">
                <Image
                  src="/images/about-collage.jpg"
                  alt="Coffee brewing setup at Maple & Mortar"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-28 h-28 md:w-36 md:h-36 rounded-card overflow-hidden border-4 border-bg-primary shadow-xl"
                initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : undefined}
                whileInView={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-heading leading-tight mb-6">
                Born in{" "}
                <span className="text-accent">Birchwood Hollow</span>
              </h2>
              <div className="space-y-4 text-body leading-relaxed">
                <p>
                  In 2015, Eleanor &ldquo;Nell&rdquo; Hargrove walked past a dusty &ldquo;For Rent&rdquo;
                  sign on Maple Street and saw something no one else did: a place where
                  the town could slow down, catch up, and share a really good cup of
                  coffee. Six weeks later, Maple &amp; Mortar opened its doors in what was
                  once Hollow Hardware.
                </p>
                <p>
                  Nell learned coffee from her grandmother&rsquo;s percolator and refined
                  her craft during years spent in Portland&rsquo;s third-wave scene. She
                  brought back a philosophy: coffee should be treated with the same
                  respect as wine — sourced with care, roasted with intention, and
                  served with genuine warmth.
                </p>
                <p>
                  Ten years later, the shop has become Birchwood Hollow&rsquo;s living room.
                  We still roast in small batches, still know our regulars by name, and
                  still believe that a three-minute conversation at the counter can
                  change someone&rsquo;s day.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  custom={i}
                  variants={cardVariants}
                  className="bg-bg-card rounded-card p-6 border border-border/50 text-center hover:border-accent/25 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg text-heading mb-2">{v.title}</h3>
                  <p className="text-body-muted text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-heading text-center leading-tight mb-12">
              Our Timeline
            </h2>
            <div className="relative">
              <motion.div
                className="absolute left-4 top-0 bottom-0 w-px bg-accent/30 origin-top"
                initial={shouldAnimate ? { scaleY: 0 } : undefined}
                whileInView={shouldAnimate ? { scaleY: 1 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <div className="space-y-8">
                {timeline.map((entry, i) => (
                  <motion.div
                    key={entry.year}
                    custom={i}
                    initial={shouldAnimate ? "hidden" : undefined}
                    whileInView={shouldAnimate ? "visible" : undefined}
                    viewport={{ once: true, margin: "-40px" }}
                    variants={timelineVariants}
                    className="relative pl-12"
                  >
                    <motion.div
                      className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg-primary"
                      initial={shouldAnimate ? { scale: 0 } : undefined}
                      whileInView={shouldAnimate ? { scale: 1 } : undefined}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.12 + 0.2 }}
                    />
                    <span className="font-serif text-lg text-accent">{entry.year}</span>
                    <p className="text-body text-sm mt-1 leading-relaxed">{entry.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
