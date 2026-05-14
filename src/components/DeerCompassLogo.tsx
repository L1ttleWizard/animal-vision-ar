type Props = { size?: number; className?: string };

/**
 * Stylised front-facing stag inside a compass ring, drawn as continuous gold
 * hairlines. Used on the loading splash and the first onboarding slide.
 *
 * The head is mirrored about x=120 so the antlers are perfectly symmetrical.
 * `Antler` accepts the side (-1 for the viewer's left, +1 for the right)
 * and emits paths radiating outward from the crown.
 */
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
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#deer-glow)" strokeWidth="1.4">
        {/* Outer compass ring */}
        <circle cx="120" cy="120" r="104" opacity="0.85" />
        <circle cx="120" cy="120" r="92" opacity="0.45" strokeWidth="0.6" />

        {/* Cardinal points */}
        {(
          [
            ["N", 120, 36],
            ["S", 120, 218],
            ["W", 26, 126],
            ["E", 214, 126],
          ] as const
        ).map(([label, x, y]) => (
          <text
            key={label}
            x={x}
            y={y}
            textAnchor="middle"
            fontSize="13"
            fill="url(#deer-gold)"
            stroke="none"
            fontWeight="600"
            letterSpacing="2"
          >
            {label}
          </text>
        ))}

        {/* Tick marks (skip the four cardinals) */}
        {Array.from({ length: 60 }).map((_, i) => {
          if (i % 15 === 0) return null;
          const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
          const r2 = i % 5 === 0 ? 96 : 100;
          const x1 = 120 + Math.cos(a) * 104;
          const y1 = 120 + Math.sin(a) * 104;
          const x2 = 120 + Math.cos(a) * r2;
          const y2 = 120 + Math.sin(a) * r2;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth={i % 5 === 0 ? 1.2 : 0.7}
              opacity="0.55"
            />
          );
        })}

        {/* ─── Front-facing stag ─────────────────────────────────────────── */}
        <g strokeWidth="2.2">
          {/* Antlers — symmetric, drawn from the crown outward */}
          <Antler side={-1} />
          <Antler side={1} />

          {/* Skull line that joins the two antler bases */}
          <path d="M108 100 C 114 96 126 96 132 100" />

          {/* Head outline — narrow forehead, full cheeks, rounded muzzle */}
          <path d="M108 100
                   C 100 110 96 124 100 140
                   C 104 156 112 168 120 172
                   C 128 168 136 156 140 140
                   C 144 124 140 110 132 100" />

          {/* Eyes */}
          <circle cx="112" cy="130" r="2.2" fill="url(#deer-gold)" stroke="none" />
          <circle cx="128" cy="130" r="2.2" fill="url(#deer-gold)" stroke="none" />

          {/* Bridge of the muzzle */}
          <path d="M120 138 L 120 156" opacity="0.7" />

          {/* Nose */}
          <path d="M114 158 C 116 164 124 164 126 158" />

          {/* Ears */}
          <path d="M104 104 C 92 104 84 110 84 122 C 92 120 100 116 106 110" />
          <path d="M136 104 C 148 104 156 110 156 122 C 148 120 140 116 134 110" />
        </g>
      </g>
    </svg>
  );
}

/**
 * One side of a stag antler. `side = -1` mirrors to the left, `side = +1` is the right.
 * Drawn as a main beam sweeping upward and outward with three tines branching off.
 */
function Antler({ side }: { side: -1 | 1 }) {
  const x = (px: number) => 120 + side * px;
  return (
    <g>
      {/* Main beam from skull base up and out to the top */}
      <path
        d={`M${x(10)} 100
            C ${x(18)} 84 ${x(30)} 70 ${x(40)} 56
            C ${x(48)} 46 ${x(58)} 38 ${x(66)} 32`}
      />
      {/* Lower (brow) tine sweeping toward the temples */}
      <path d={`M${x(16)} 86 C ${x(28)} 78 ${x(40)} 76 ${x(50)} 80`} />
      {/* Middle tine going outward */}
      <path d={`M${x(28)} 72 C ${x(42)} 62 ${x(56)} 60 ${x(68)} 64`} />
      {/* Upper tine, almost vertical, nearer the top */}
      <path d={`M${x(40)} 56 C ${x(46)} 44 ${x(54)} 38 ${x(60)} 32`} />
      {/* Tip fork at the very end of the main beam */}
      <path d={`M${x(66)} 32 C ${x(74)} 26 ${x(80)} 22 ${x(82)} 18`} />
    </g>
  );
}
