"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MapPin, Clock, Coffee, Wifi, Car, Music } from "lucide-react";
import MapIllustration from "@/components/map-illustration";

const features = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Music, label: "Live Music Fridays" },
  { icon: Car, label: "Street Parking" },
  { icon: Coffee, label: "Bean Counter Tours" },
];

const hours = [
  { day: "Monday — Friday", time: "6:30 AM — 7:00 PM" },
  { day: "Saturday", time: "7:00 AM — 8:00 PM" },
  { day: "Sunday", time: "7:30 AM — 5:00 PM" },
];

const holidayHours = [
  { day: "Thanksgiving", time: "Closed" },
  { day: "Christmas Eve", time: "7:30 AM — 1:00 PM" },
  { day: "Christmas Day", time: "Closed" },
  { day: "New Year&rsquo;s Day", time: "9:00 AM — 3:00 PM" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const featureCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

const hoursVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

export default function LocationsPage() {
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
            src="/images/about-collage.jpg"
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
            Find Us
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-4"
            initial={shouldAnimate ? { opacity: 0, y: 24 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Our Location
          </motion.h1>
          <motion.p
            className="text-body text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={shouldAnimate ? { opacity: 0, y: 16 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            One cozy shop in the heart of Birchwood Hollow. Same address, same
            warm welcome, every day.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <motion.div
              className="md:col-span-3"
              initial={shouldAnimate ? "hidden" : undefined}
              whileInView={shouldAnimate ? "visible" : undefined}
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <motion.div
                className="aspect-[16/9] rounded-card overflow-hidden bg-bg-card border border-border/50 mb-6"
                whileHover={shouldAnimate ? { borderColor: "rgba(203, 143, 63, 0.3)" } : undefined}
                transition={{ duration: 0.3 }}
              >
                <MapIllustration className="h-full" />
              </motion.div>

              <h2 className="font-serif text-2xl text-heading mb-4">
                Maple &amp; Mortar Coffee House
              </h2>
              <motion.p
                className="flex items-start gap-3 text-body-muted text-sm mb-6"
                initial={shouldAnimate ? { opacity: 0, x: -10 } : undefined}
                whileInView={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                42 Maple Street, Birchwood Hollow, NH 03456
              </motion.p>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                initial={shouldAnimate ? "hidden" : undefined}
                whileInView={shouldAnimate ? "visible" : undefined}
                viewport={{ once: true, margin: "-40px" }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.label}
                      custom={i}
                      variants={featureCardVariants}
                      className="bg-bg-card rounded-card p-4 border border-border/50 text-center hover:border-accent/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                      <span className="text-body-muted text-xs">{f.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              className="md:col-span-2 space-y-8"
              initial={shouldAnimate ? "hidden" : undefined}
              whileInView={shouldAnimate ? "visible" : undefined}
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <h3 className="font-serif text-lg text-heading mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  Regular Hours
                </h3>
                <div className="space-y-2">
                  {hours.map((entry, i) => (
                    <motion.div
                      key={entry.day}
                      custom={i}
                      initial={shouldAnimate ? "hidden" : undefined}
                      whileInView={shouldAnimate ? "visible" : undefined}
                      viewport={{ once: true }}
                      variants={hoursVariants}
                      className="flex justify-between text-sm py-1.5 border-b border-border/30 last:border-0"
                    >
                      <span className="text-heading">{entry.day}</span>
                      <span className="text-body-muted">{entry.time}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
              >
                <h3 className="font-serif text-lg text-heading mb-4">
                  Holiday Hours
                </h3>
                <div className="space-y-2">
                  {holidayHours.map((entry, i) => (
                    <motion.div
                      key={entry.day}
                      custom={i + hours.length}
                      initial={shouldAnimate ? "hidden" : undefined}
                      whileInView={shouldAnimate ? "visible" : undefined}
                      viewport={{ once: true }}
                      variants={hoursVariants}
                      className="flex justify-between text-sm py-1.5 border-b border-border/30 last:border-0"
                    >
                      <span className="text-heading">{entry.day}</span>
                      <span className="text-body-muted">{entry.time}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-bg-card rounded-card p-5 border border-border/50 hover:border-accent/20 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.35 } },
                }}
              >
                <h3 className="font-serif text-base text-heading mb-2">
                  Coming Soon
                </h3>
                <p className="text-body-muted text-xs leading-relaxed">
                  We&rsquo;re scouting a second location in West Hollow for 2027.
                  Know a spot?{" "}
                  <a href="/contact" className="text-accent hover:underline transition-colors">
                    Let us know.
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
