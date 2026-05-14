type Props = { size?: number; className?: string };

export function DeerCompassLogo({ size = 220, className }: Props) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="url(#deer-gold)"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="deer-gold" x1="0" y1="0" x2="240" y2="240">
          <stop offset="0%" stopColor="#FFF1B8" />
          <stop offset="55%" stopColor="#F4D67A" />
          <stop offset="100%" stopColor="#B8924E" />
        </linearGradient>
        <filter id="deer-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#deer-glow)" strokeWidth="1.6">
        {/* Outer compass ring */}
        <circle cx="120" cy="120" r="100" opacity="0.85" />
        <circle cx="120" cy="120" r="86" opacity="0.55" strokeWidth="0.6" />
        <circle cx="120" cy="120" r="70" opacity="0.35" strokeWidth="0.6" />

        {/* Cardinal points */}
        <text
          x="120"
          y="32"
          textAnchor="middle"
          fontSize="14"
          fill="url(#deer-gold)"
          stroke="none"
          fontWeight="600"
        >
          N
        </text>
        <text
          x="120"
          y="218"
          textAnchor="middle"
          fontSize="14"
          fill="url(#deer-gold)"
          stroke="none"
          fontWeight="600"
        >
          S
        </text>
        <text
          x="22"
          y="126"
          textAnchor="middle"
          fontSize="14"
          fill="url(#deer-gold)"
          stroke="none"
          fontWeight="600"
        >
          W
        </text>
        <text
          x="218"
          y="126"
          textAnchor="middle"
          fontSize="14"
          fill="url(#deer-gold)"
          stroke="none"
          fontWeight="600"
        >
          E
        </text>

        {/* Tick marks */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const x1 = 120 + Math.cos(a) * 92;
          const y1 = 120 + Math.sin(a) * 92;
          const x2 = 120 + Math.cos(a) * 100;
          const y2 = 120 + Math.sin(a) * 100;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth="1"
              opacity="0.6"
            />
          );
        })}

        {/* Deer head (single-stroke style) */}
        <g strokeWidth="2.2" transform="translate(0,4)">
          {/* Antlers left */}
          <path d="M86 70 C80 56 76 48 70 38 M76 60 C68 56 60 56 54 60 M74 48 C66 46 60 46 56 52" />
          <path d="M86 70 C82 60 80 54 76 46" />
          {/* Antlers right */}
          <path d="M154 70 C160 56 164 48 170 38 M164 60 C172 56 180 56 186 60 M166 48 C174 46 180 46 184 52" />
          <path d="M154 70 C158 60 160 54 164 46" />

          {/* Head */}
          <path d="M86 70 C86 90 92 110 102 120 C108 126 116 130 120 134 C124 130 132 126 138 120 C148 110 154 90 154 70" />
          {/* Snout */}
          <path d="M108 132 C110 140 116 148 120 152 C124 148 130 140 132 132" />
          {/* Eye accents */}
          <circle cx="106" cy="98" r="2" fill="url(#deer-gold)" stroke="none" />
          <circle cx="134" cy="98" r="2" fill="url(#deer-gold)" stroke="none" />
        </g>
      </g>
    </svg>
  );
}
