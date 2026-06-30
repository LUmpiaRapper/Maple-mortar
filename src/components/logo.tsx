interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent flex-shrink-0"
        aria-hidden="true"
      >
        <circle cx="26" cy="26" r="24" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 32 C16 44 20 46 26 46 C32 46 36 44 36 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 32 L38 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26 10 L28 14 L33 13 L30 16 L35 19 L29 19 L29 23 L26 20 L23 23 L23 19 L17 19 L22 16 L19 13 L24 14 Z"
          fill="currentColor"
        />
      </svg>
      {showText && (
        <div>
          <div className="font-serif text-xl text-heading leading-none tracking-tight">
            Maple &amp; Mortar
          </div>
          <div className="text-[10px] text-body-muted tracking-[0.2em] uppercase mt-1">
            Coffee House
          </div>
        </div>
      )}
    </div>
  );
}
