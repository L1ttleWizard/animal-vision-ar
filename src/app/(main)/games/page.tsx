"use client";

import { useRouter } from "next/navigation";
import { GAMES, type GameMeta } from "@/data/games";
import { CoinIcon, PadlockIcon } from "@/components/icons";
import { ScreenContainer } from "@/components/ScreenContainer";
import { useAppSelector } from "@/store/hooks";

export default function GamesPage() {
  const router = useRouter();
  const unlocked = useAppSelector((s) => s.gallery.unlocked);

  const isUnlocked = (g: GameMeta) =>
    g.price === 0 || unlocked.includes(g.animal);

  return (
    <ScreenContainer title="ИГРЫ">
      <ul className="space-y-4">
        {GAMES.map((g) => {
          const unlockedFlag = isUnlocked(g);
          return (
            <li key={g.id} className="card-gold overflow-hidden">
              <div className="grid grid-cols-[140px_1fr] gap-3 p-3">
                <div className="relative h-[140px] rounded-lg overflow-hidden border border-gold-200/30">
                  <GameThumb id={g.id} />
                  {g.id === "bee-vision" && (
                    <div className="absolute bottom-1 left-1.5 rounded bg-black/55 px-1.5 py-0.5 text-[9px] tracking-wider text-gold-100">
                      Нектар: 2/5
                    </div>
                  )}
                  {g.id === "predator-reflex" && (
                    <div className="absolute bottom-1 right-1.5 rounded bg-black/55 px-1.5 py-0.5 text-[9px] tracking-wider text-gold-100">
                      Attack
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2 text-right">
                  <div className="flex items-center gap-1.5">
                    {!unlockedFlag && (
                      <PadlockIcon className="h-3.5 w-3.5 text-cream/85" />
                    )}
                    <p className="text-[10px] tracking-[0.22em] text-gold-200">
                      {unlockedFlag ? "РАЗБЛОКИРОВАНО" : "ЗАБЛОКИРОВАНО"}
                    </p>
                  </div>
                  {!unlockedFlag && (
                    <p className="-mt-1.5 flex items-center gap-1 text-[12px] text-gold-200">
                      <span>{g.price}</span>
                      <CoinIcon className="h-3.5 w-3.5" />
                    </p>
                  )}
                  <h2 className="mt-auto w-full text-center text-[14px] font-semibold tracking-[0.16em] text-cream">
                    {g.title}
                  </h2>
                  <button
                    onClick={() =>
                      unlockedFlag && g.id === "snake-hunt"
                        ? router.push("/games/snake-hunt")
                        : null
                    }
                    disabled={!unlockedFlag}
                    className="pill-gold w-full max-w-[170px] mx-auto disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {g.buttonLabel}
                  </button>
                </div>
              </div>
              <p className="px-3 pb-3 text-[12px] text-cream/85 leading-relaxed">
                <span className="text-gold-200 font-semibold">
                  {g.subtitle}.
                </span>{" "}
                {g.description}
              </p>
            </li>
          );
        })}
      </ul>
    </ScreenContainer>
  );
}

function GameThumb({ id }: { id: GameMeta["id"] }) {
  switch (id) {
    case "snake-hunt":
      return (
        <div className="h-full w-full bg-[#0e2c6b] relative">
          <svg viewBox="0 0 120 110" className="absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id="g1-hot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff39c" />
                <stop offset="50%" stopColor="#ff7b3d" />
                <stop offset="100%" stopColor="#a8120c" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="120" height="110" fill="#0e2c6b" />
            <ellipse cx="40" cy="35" rx="40" ry="25" fill="#1a3aa3" opacity="0.7" />
            <ellipse cx="90" cy="80" rx="40" ry="30" fill="#3b67d4" opacity="0.6" />
            <ellipse cx="55" cy="65" rx="15" ry="10" fill="url(#g1-hot)" />
            <text x="58" y="92" fontSize="9" fill="#fff" opacity="0.7">
              N
            </text>
          </svg>
        </div>
      );
    case "bee-vision":
      return (
        <div className="h-full w-full bg-gradient-to-b from-[#36206e] to-[#0e0625] relative">
          <svg viewBox="0 0 120 110" className="absolute inset-0 h-full w-full">
            <defs>
              <pattern id="thumbHex" width="20" height="18" patternUnits="userSpaceOnUse">
                <polygon
                  points="10,1 19,6 19,15 10,20 1,15 1,6"
                  fill="none"
                  stroke="#8C5BD9"
                  strokeOpacity="0.5"
                  strokeWidth="0.7"
                />
              </pattern>
            </defs>
            <rect width="120" height="110" fill="url(#thumbHex)" />
            <circle cx="60" cy="55" r="22" fill="#c1a1ff" opacity="0.65" />
            <circle cx="60" cy="55" r="10" fill="#fff8a8" />
          </svg>
        </div>
      );
    case "predator-reflex":
      return (
        <div className="h-full w-full bg-gradient-to-b from-[#0a0f08] to-[#020401] relative">
          <svg viewBox="0 0 120 110" className="absolute inset-0 h-full w-full">
            <rect width="120" height="110" fill="#0a0f08" />
            <path
              d="M0 80 Q30 75 60 78 T120 80 L120 110 L0 110z"
              fill="#1a2410"
            />
            <circle cx="95" cy="22" r="9" fill="#dfe9c9" opacity="0.85" />
            <line
              x1="20"
              y1="75"
              x2="80"
              y2="55"
              stroke="#fff"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <circle cx="80" cy="55" r="2" fill="#fff" />
            <text
              x="100"
              y="100"
              fontSize="8"
              fill="#F4D67A"
              textAnchor="end"
            >
              +
            </text>
          </svg>
        </div>
      );
  }
}
