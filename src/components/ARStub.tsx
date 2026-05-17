import { CompassIcon } from "./icons";
import type { AnimalId } from "@/data/animals";

type Props = {
  animal: AnimalId;
  label: string;
  marker?: string;
};

/**
 * Stylised "AR camera viewport" used in the Identify screen and animal detail
 * pages. Renders a faux meadow scene tinted to match the chosen animal's
 * vision palette.
 */
export function ARStub({ animal, label, marker = "Ориентир: 5м" }: Props) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <ARSceneSVG animal={animal} />

      {/* HUD: current animal badge */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 rounded-full border border-gold-200/40 bg-black/55 backdrop-blur-sm px-3 py-1 text-[11px] tracking-[0.22em] text-cream/90 flex items-center gap-1.5">
        Сейчас: <span className="text-gold-200 font-semibold">{label}</span>
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-200 animate-pulse" />
      </div>

      {/* HUD: compass + marker */}
      <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-2">
        <div className="rounded-full bg-black/45 border border-gold-200/35 p-1.5">
          <CompassIcon className="h-9 w-9 text-gold-200" />
        </div>
        <div className="rounded-full border border-gold-200/35 bg-black/55 px-2 py-0.5 text-[10px] tracking-widest text-cream">
          {marker}
        </div>
      </div>
    </div>
  );
}

function ARSceneSVG({ animal }: { animal: AnimalId }) {
  switch (animal) {
    case "snake":
      return <ThermalScene />;
    case "bee":
      return <UVScene />;
    case "owl":
    case "wolf":
      return <NightScene />;
    case "eagle":
      return <EagleScene />;
    case "dog":
      return <DichromatScene />;
    case "fox":
    case "bear":
    case "horse":
    case "zebra":
    case "elephant":
    case "cat":
    default:
      return <CatLowLightScene />;
  }
}

/* === Scenes (SVG illustrations representing each vision palette) === */

function MeadowBase({
  skyFrom,
  skyTo,
  grassFrom,
  grassTo,
}: {
  skyFrom: string;
  skyTo: string;
  grassFrom: string;
  grassTo: string;
}) {
  return (
    <svg
      viewBox="0 0 393 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id={`sky-${skyFrom}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={skyFrom} />
          <stop offset="100%" stopColor={skyTo} />
        </linearGradient>
        <linearGradient id={`grass-${grassFrom}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={grassFrom} />
          <stop offset="100%" stopColor={grassTo} />
        </linearGradient>
      </defs>
      <rect width="393" height="320" fill={`url(#sky-${skyFrom})`} />
      <rect width="393" height="320" y="280" fill={`url(#grass-${grassFrom})`} />
      {/* Tree silhouettes */}
      <g opacity="0.85">
        <ellipse cx="60" cy="260" rx="55" ry="60" fill="#1a230e" />
        <ellipse cx="120" cy="240" rx="60" ry="70" fill="#1a230e" />
        <ellipse cx="200" cy="250" rx="50" ry="60" fill="#1a230e" />
        <ellipse cx="280" cy="240" rx="70" ry="80" fill="#1a230e" />
        <ellipse cx="350" cy="260" rx="55" ry="65" fill="#1a230e" />
      </g>
      {/* Grass strokes */}
      <g opacity="0.5">
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={i}
            x1={i * 10}
            y1={380 + (i % 5) * 8}
            x2={i * 10 + 4}
            y2={400 + (i % 5) * 8}
            stroke="#9aa888"
            strokeWidth="1"
          />
        ))}
      </g>
    </svg>
  );
}

function CatLowLightScene() {
  return (
    <video width="full" height="full
    " autoPlay loop muted  preload="none">
    <source src="/videos/cat_video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  );
}

function ThermalScene() {
  return (
    <div className="absolute inset-0 bg-[#0b1e4a]">
      <svg
        viewBox="0 0 393 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="hot-prey" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff39c" />
            <stop offset="40%" stopColor="#ff7b3d" />
            <stop offset="80%" stopColor="#a8120c" />
            <stop offset="100%" stopColor="#260a4d" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="393" height="600" fill="#0e2c6b" />
        <ellipse cx="120" cy="180" rx="160" ry="120" fill="#1a3aa3" opacity="0.7" />
        <ellipse cx="300" cy="420" rx="150" ry="100" fill="#3b67d4" opacity="0.5" />
        {/* Hot prey */}
        <ellipse cx="240" cy="350" rx="35" ry="22" fill="url(#hot-prey)" />
        <ellipse cx="100" cy="450" rx="20" ry="14" fill="url(#hot-prey)" opacity="0.7" />
        <ellipse cx="320" cy="220" rx="14" ry="9" fill="url(#hot-prey)" opacity="0.6" />
      </svg>
    </div>
  );
}

function UVScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#36206e] to-[#0e0625]">
      <svg
        viewBox="0 0 393 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern id="hex" width="40" height="35" patternUnits="userSpaceOnUse">
            <polygon
              points="20,2 38,12 38,30 20,40 2,30 2,12"
              fill="none"
              stroke="#8C5BD9"
              strokeOpacity="0.45"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="393" height="600" fill="url(#hex)" />
        {/* UV flower */}
        <circle cx="200" cy="340" r="48" fill="#c1a1ff" opacity="0.55" />
        <circle cx="200" cy="340" r="22" fill="#fff8a8" opacity="0.95" />
        <text
          x="200"
          y="430"
          textAnchor="middle"
          fill="#FFE49C"
          fontSize="14"
          fontWeight="600"
        >
          Нектар: 2/5
        </text>
      </svg>
    </div>
  );
}

function NightScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f08] to-[#020401]">
      <MeadowBase
        skyFrom="#15291a"
        skyTo="#070d05"
        grassFrom="#10180b"
        grassTo="#040603"
      />
      {/* Moon glow */}
      <div className="absolute top-6 right-10 h-14 w-14 rounded-full bg-[#dfe9c9] opacity-80 shadow-[0_0_50px_rgba(223,233,201,0.4)]" />
      {/* Moving target */}
      <div className="absolute bottom-[34%] left-[40%] h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(255,200,80,0.9)]" />
    </div>
  );
}

function EagleScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#243512] to-[#0d1607]">
      <svg
        viewBox="0 0 393 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <rect width="393" height="600" fill="#1a2410" />
        <g opacity="0.6">
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={50 + i * 32}
              x2="393"
              y2={50 + i * 32}
              stroke="#3c4f1d"
              strokeWidth="0.8"
            />
          ))}
        </g>
        <circle cx="220" cy="380" r="6" fill="#FFE49C" />
        <text x="220" y="410" fill="#FFE49C" fontSize="12" textAnchor="middle">
          цель
        </text>
      </svg>
    </div>
  );
}

function DichromatScene() {
  return (
    <video width="full" height="full
    " autoPlay loop muted preload="none">
    <source src="/videos/dog_video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  );
}
