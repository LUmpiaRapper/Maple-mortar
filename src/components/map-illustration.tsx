"use client";

import { useReducedMotion, motion } from "framer-motion";

interface Props {
  className?: string;
}

export default function MapIllustration({ className = "" }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Map of Birchwood Hollow showing Maple & Mortar location"
      >
        <defs>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2c221b" />
            <stop offset="50%" stopColor="#3d3026" />
            <stop offset="100%" stopColor="#2c221b" />
          </linearGradient>
          <radialGradient id="markerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cb8f3f" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#cb8f3f" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="400" height="300" rx="12" fill="#1c1510" />

        <path d="M0 80 Q100 60 200 85 T400 75" stroke="#2c221b" strokeWidth="2" fill="none" />
        <path d="M0 160 Q120 140 250 170 T400 155" stroke="#2c221b" strokeWidth="2" fill="none" />
        <path d="M0 240 Q90 220 200 245 T400 235" stroke="#2c221b" strokeWidth="2" fill="none" />

        <motion.path
          d="M200 0 L200 300"
          stroke="#3d3026"
          strokeWidth="3"
          animate={shouldAnimate ? { stroke: ["#3d3026", "#4a3a2e", "#3d3026"] } : undefined}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M80 0 L80 300"
          stroke="#2c221b"
          strokeWidth="2"
          animate={shouldAnimate ? { opacity: [0.5, 0.8, 0.5] } : undefined}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M310 0 L310 300"
          stroke="#2c221b"
          strokeWidth="2"
          animate={shouldAnimate ? { opacity: [0.5, 0.8, 0.5] } : undefined}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <rect x="60" y="40" width="30" height="20" rx="3" fill="#221a14" stroke="#2c221b" strokeWidth="1" />
        <rect x="140" y="100" width="24" height="16" rx="2" fill="#221a14" stroke="#2c221b" strokeWidth="1" />
        <rect x="60" y="200" width="28" height="18" rx="3" fill="#221a14" stroke="#2c221b" strokeWidth="1" />
        <rect x="250" y="50" width="35" height="22" rx="3" fill="#221a14" stroke="#2c221b" strokeWidth="1" />
        <rect x="320" y="170" width="25" height="15" rx="2" fill="#221a14" stroke="#2c221b" strokeWidth="1" />

        <motion.circle
          cx="200" cy="160" r="22"
          fill="url(#markerGlow)"
          animate={shouldAnimate ? { r: [22, 28, 22] } : undefined}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.g filter="url(#softGlow)" animate={shouldAnimate ? { y: [0, -2, 0] } : undefined} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <path
            d="M200 142 C185 142 186 157 200 168 C214 157 215 142 200 142Z"
            fill="#cb8f3f"
          />
          <circle cx="200" cy="154" r="4" fill="#050302" />
        </motion.g>

        <text x="200" y="196" textAnchor="middle" fill="#8f7d6a" fontSize="8" fontFamily="Inter, sans-serif">
          Maple &amp; Mortar
        </text>

        <text x="202" y="12" textAnchor="middle" fill="#8f7d6a" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="2">
          BIRCHWOOD HOLLOW
        </text>

        <text x="90" y="12" textAnchor="middle" fill="#5a4c3e" fontSize="7" fontFamily="Inter, sans-serif">
          Elm St
        </text>
        <text x="310" y="295" textAnchor="middle" fill="#5a4c3e" fontSize="7" fontFamily="Inter, sans-serif">
          Oak Ave
        </text>
        <text x="35" y="165" textAnchor="middle" fill="#5a4c3e" fontSize="7" fontFamily="Inter, sans-serif" transform="rotate(-90, 35, 165)">
          River Rd
        </text>
        <text x="375" y="165" textAnchor="middle" fill="#5a4c3e" fontSize="7" fontFamily="Inter, sans-serif" transform="rotate(90, 375, 165)">
          Pine St
        </text>

        <text x="200" y="290" textAnchor="middle" fill="#5a4c3e" fontSize="7" fontFamily="Inter, sans-serif">
          42 Maple Street
        </text>
      </svg>
    </div>
  );
}
