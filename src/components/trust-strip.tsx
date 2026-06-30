"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Truck, Coffee, ShieldCheck, Gift } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders over $15",
  },
  {
    icon: Coffee,
    title: "Fresh & Fast",
    description: "Roasted within 48 hours",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Safe & encrypted checkout",
  },
  {
    icon: Gift,
    title: "Loyalty Rewards",
    description: "Earn points every visit",
  },
];

export default function TrustStrip() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="relative bg-bg-strip border border-border/50 rounded-[20px] overflow-hidden"
          initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

          <div className="py-8 px-6 md:py-10 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isLast = index === features.length - 1;
                return (
                  <motion.div
                    key={feature.title}
                    className={`flex flex-col items-center text-center gap-3 group cursor-default ${!isLast ? "md:border-r md:border-border/40" : ""}`}
                    initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                    whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, ease: "easeOut" as const, delay: index * 0.12 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-b from-accent/[0.12] to-accent/[0.06] border border-accent/20 flex items-center justify-center shadow-lg shadow-accent/5 group-hover:shadow-accent/15 group-hover:border-accent/40 group-hover:from-accent/[0.18] group-hover:to-accent/[0.08] transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-heading text-sm font-medium group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-body-muted text-xs mt-1 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
