"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Send, Phone, MapPin, Camera, MessageCircle, MessageSquare } from "lucide-react";
import Logo from "./logo";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Careers", href: "#" },
  { label: "Locations", href: "#" },
];

const customerCare = [
  { label: "Contact Us", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Shipping Policy", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Facebook" },
  { icon: MessageSquare, href: "#", label: "Twitter" },
];

const colVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  return (
    <footer className="relative border-t border-border/60 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <motion.div
            custom={0}
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={{ once: true, margin: "-50px" }}
            variants={colVariants}
          >
            <Logo className="mb-4" />
            <p className="text-body-muted text-sm mb-4 leading-relaxed">
              Subscribe for seasonal specials, new roasts, and cozy shop updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 relative">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-bg-card border border-border rounded-full text-sm text-heading placeholder:text-body-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-bg-primary hover:bg-accent-light transition-colors flex-shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          <motion.div
            custom={1}
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={{ once: true, margin: "-50px" }}
            variants={colVariants}
          >
            <h3 className="font-serif text-lg text-heading mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-body-muted text-sm hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={2}
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={{ once: true, margin: "-50px" }}
            variants={colVariants}
          >
            <h3 className="font-serif text-lg text-heading mb-4">Customer Care</h3>
            <ul className="space-y-2.5">
              {customerCare.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-body-muted text-sm hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={3}
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={{ once: true, margin: "-50px" }}
            variants={colVariants}
          >
            <h3 className="font-serif text-lg text-heading mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+15551234567" className="flex items-center gap-2.5 text-body-muted hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@mapleandmortar.com" className="flex items-center gap-2.5 text-body-muted hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                  hello@mapleandmortar.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-body-muted">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  42 Maple Street, Birchwood&nbsp;Hollow
                </span>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-body-muted hover:text-accent hover:border-accent/40 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-body-muted">
          <p>&copy; {new Date().getFullYear()} Maple & Mortar Coffee House. All rights reserved.</p>
          <p className="font-serif italic text-body-muted/60">Where the town slows down for a cup.</p>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-16 -right-16 w-48 h-48 opacity-[0.03] pointer-events-none animate-float-slow"
        initial={shouldAnimate ? { opacity: 0, scale: 0.5 } : undefined}
        whileInView={shouldAnimate ? { opacity: 0.03, scale: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" as const }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="120" rx="60" ry="40" fill="currentColor" />
          <ellipse cx="100" cy="100" rx="50" ry="30" fill="currentColor" />
          <ellipse cx="100" cy="80" rx="38" ry="20" fill="currentColor" />
        </svg>
      </motion.div>
    </footer>
  );
}
