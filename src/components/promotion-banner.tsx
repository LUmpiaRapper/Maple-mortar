"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

export default function PromotionBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-40">
      <div className="flex items-center justify-center gap-3 px-4 py-2 text-xs md:text-sm bg-accent/10 border-b border-accent/20 text-accent-light">
        <Link href="/menu" className="hover:underline">
          <span className="font-medium">Happy Hour</span>
          <span className="text-body-muted ml-1 hidden sm:inline">
            — Enjoy $2 off all specialty drinks from 2–4 PM, weekdays.
          </span>
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 text-body-muted hover:text-accent transition-colors"
          aria-label="Dismiss promotion"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
