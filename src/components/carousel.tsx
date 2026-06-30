"use client";

import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode[];
  itemWidth?: number;
  gap?: number;
}

export default function Carousel({
  children,
  itemWidth = 280,
  gap = 24,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const updateScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    setScrollPosition(container.scrollLeft);
    setMaxScroll(container.scrollWidth - container.clientWidth);
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const container = containerRef.current;
      if (!container) return;
      const scrollAmount = itemWidth + gap;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScroll, 300);
    },
    [itemWidth, gap, updateScroll]
  );

  return (
    <div className="relative group">
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-4 -mx-6 px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={updateScroll}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0"
            style={{ width: itemWidth }}
          >
            {child}
          </div>
        ))}
      </div>

      {scrollPosition > 10 && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full border border-accent/30 bg-bg-primary/90 flex items-center justify-center text-accent hover:bg-accent hover:text-bg-primary transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm"
          aria-label="Previous items"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {scrollPosition < maxScroll - 10 && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full border border-accent/30 bg-bg-primary/90 flex items-center justify-center text-accent hover:bg-accent hover:text-bg-primary transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm"
          aria-label="Next items"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
