"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      setShowContent(false);
      setShowOverlay(true);
      const timer = setTimeout(() => {
        setShowOverlay(false);
        setShowContent(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="route-loader"
            className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
          >
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-accent"
            >
              <Logo showText={false} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent ? (
        <div key={pathname}>{children}</div>
      ) : (
        <div className="min-h-screen" />
      )}
    </>
  );
}
