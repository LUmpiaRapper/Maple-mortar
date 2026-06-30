"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Carousel from "./carousel";
import { popularPicks } from "@/lib/menu-data";

export default function PopularPicks() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  return (
    <section id="menu" className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <p className="eyebrow mb-4">Our Signature</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-heading leading-tight">
            Popular Picks
          </h2>
        </motion.div>

        <Carousel itemWidth={280} gap={24}>
          {popularPicks.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-bg-card rounded-card p-5 border border-border/50 h-full flex flex-col hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: index * 0.12 }}
            >
              <div className="aspect-square rounded-sm bg-bg-secondary flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-serif text-lg text-heading mb-1">
                  {item.name}
                </h3>
                <p className="text-body-muted text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <span className="text-accent font-semibold text-lg">
                  {item.price}
                </span>
                <button
                  className="w-9 h-9 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center text-accent hover:bg-accent hover:text-bg-primary transition-all duration-200"
                  aria-label={`Add ${item.name} to cart`}
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
