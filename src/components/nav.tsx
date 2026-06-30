"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Locations", href: "/locations" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(5, 3, 2, 0.5)", "rgba(5, 3, 2, 0.95)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(44, 34, 27, 0)", "rgba(44, 34, 27, 0.4)"]
  );
  const navHeight = useTransform(scrollY, [0, 80], ["72px", "60px"]);

  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-xl border-b"
      style={shouldAnimate ? {
        backgroundColor: navBg,
        borderBottomColor: navBorder,
        height: navHeight,
      } : {
        backgroundColor: "rgba(5, 3, 2, 0.95)",
        borderBottomColor: "rgba(44, 34, 27, 0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        <Link href="/" className="flex-shrink-0">
          <Logo showText={false} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors ${
                  isActive ? "text-accent" : "text-body-muted hover:text-accent"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href="/menu"
            className="inline-flex items-center gap-1.5 px-5 py-2 bg-accent text-bg-primary text-sm font-medium rounded-full hover:bg-accent-light transition-all duration-200 active:scale-[0.97]"
          >
            Order Online
          </a>
        </div>

        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-body-muted hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: -12 } : undefined}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden border-t border-border/40 bg-bg-primary/95 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block transition-colors text-sm py-1 ${
                    isActive ? "text-accent" : "text-body-muted hover:text-accent"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/menu"
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-accent text-bg-primary text-sm font-medium rounded-full hover:bg-accent-light transition-all duration-200 mt-2"
              onClick={() => setOpen(false)}
            >
              Order Online
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
