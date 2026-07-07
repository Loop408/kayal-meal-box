interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="60" cy="60" r="56" fill="#F6EEDB" stroke="#2F6B45" strokeWidth="4" />
      <circle cx="60" cy="60" r="44" fill="#FFFDF8" stroke="#2F6B45" strokeWidth="2" strokeDasharray="6 4" />
      {/* Ship wheel */}
      <g transform="translate(60,38)">
        <circle r="14" fill="none" stroke="#2F6B45" strokeWidth="2.5" />
        {[0, 45, 90, 135].map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="-14"
            x2="0"
            y2="14"
            stroke="#2F6B45"
            strokeWidth="2"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="4" fill="#F4A261" />
      </g>
      {/* Chef hat */}
      <path
        d="M48 52c0-8 6-14 12-14s12 6 12 14v4H48v-4z"
        fill="#FFFDF8"
        stroke="#2F6B45"
        strokeWidth="2"
      />
      <rect x="46" y="56" width="28" height="6" rx="2" fill="#2F6B45" />
      {/* Small boat */}
      <path
        d="M38 78c4 6 40 6 44 0l-6 8H44l-6-8z"
        fill="#F4A261"
        stroke="#2F6B45"
        strokeWidth="1.5"
      />
      <path d="M58 62v16" stroke="#2F6B45" strokeWidth="2" />
      <path d="M58 62l10 8" stroke="#2F6B45" strokeWidth="1.5" />
      {/* Palm trees */}
      <g transform="translate(28,72)">
        <rect x="-1.5" y="0" width="3" height="14" fill="#2F6B45" />
        <ellipse cx="0" cy="-2" rx="8" ry="4" fill="#2F6B45" transform="rotate(-30)" />
        <ellipse cx="0" cy="-2" rx="8" ry="4" fill="#2F6B45" transform="rotate(30)" />
      </g>
      <g transform="translate(92,72)">
        <rect x="-1.5" y="0" width="3" height="14" fill="#2F6B45" />
        <ellipse cx="0" cy="-2" rx="8" ry="4" fill="#2F6B45" transform="rotate(-30)" />
        <ellipse cx="0" cy="-2" rx="8" ry="4" fill="#2F6B45" transform="rotate(30)" />
      </g>
      {/* Water waves */}
      <path
        d="M20 92 Q40 88 60 92 T100 92"
        fill="none"
        stroke="#2F6B45"
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  );
}
