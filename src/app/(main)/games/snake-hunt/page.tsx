"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ScreenHeader } from "@/components/ScreenHeader";
import { useAppDispatch } from "@/store/hooks";
import { addCoins, addXp } from "@/store/slices/profileSlice";

type Prey = { id: number; x: number; y: number; alive: boolean; size: number };

const ROUND_SECONDS = 30;

function makePrey(count: number): Prey[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    x: 10 + Math.random() * 80,
    y: 15 + Math.random() * 70,
    alive: true,
    size: 22 + Math.random() * 18,
  }));
}

export default function SnakeHuntPage() {
  const dispatch = useAppDispatch();
  const [prey, setPrey] = useState<Prey[]>(() => makePrey(7));
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(ROUND_SECONDS);
  const claimed = useRef(false);

  const total = prey.length;
  const alive = prey.filter((p) => p.alive).length;
  const finished = time === 0 || alive === 0;

  useEffect(() => {
    if (finished) return;
    const i = setInterval(() => {
      setTime((t) => (t <= 1 ? 0 : t - 1));
    }, 1000);
    return () => clearInterval(i);
  }, [finished]);

  useEffect(() => {
    if (finished && !claimed.current) {
      claimed.current = true;
      const earnedCoins = score * 8;
      const earnedXp = score * 12;
      if (earnedCoins > 0) dispatch(addCoins(earnedCoins));
      if (earnedXp > 0) dispatch(addXp(earnedXp));
    }
  }, [finished, score, dispatch]);

  const hit = (id: number) => {
    if (finished) return;
    setPrey((prev) =>
      prev.map((p) => (p.id === id && p.alive ? { ...p, alive: false } : p))
    );
    setScore((s) => s + 1);
  };

  const restart = () => {
    claimed.current = false;
    setPrey(makePrey(7));
    setScore(0);
    setTime(ROUND_SECONDS);
  };

  const reward = useMemo(
    () => ({ coins: score * 8, xp: score * 12 }),
    [score]
  );

  return (
    <div className="absolute inset-0 flex flex-col">
      <ScreenHeader title="ОХОТА ЗМЕИ" backHref="/games" />

      <div className="px-4 mt-2 flex items-center justify-between text-[11px] tracking-widest">
        <span className="text-cream/85">
          ЦЕЛЕЙ: <span className="text-gold-200 font-semibold">{score}/{total}</span>
        </span>
        <span className="text-cream/85">
          ВРЕМЯ: <span className="text-gold-200 font-semibold">{time}с</span>
        </span>
      </div>

      <div className="relative mx-4 mt-2 flex-1 rounded-2xl border border-gold-200/30 overflow-hidden">
        <ThermalField />
        {prey.map((p) => (
          <button
            key={p.id}
            onClick={() => hit(p.id)}
            disabled={!p.alive}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size * 0.7,
              transform: "translate(-50%, -50%)",
            }}
            className={`absolute rounded-full transition-opacity duration-300 ${
              p.alive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Цель"
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #fff39c 0%, #ff7b3d 50%, rgba(168,18,12,0) 80%)",
                boxShadow: "0 0 14px rgba(255,123,61,0.7)",
              }}
            />
          </button>
        ))}

        {finished && (
          <div className="absolute inset-0 bg-black/65 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-[14px] tracking-[0.22em] text-gold-200">
              {alive === 0 ? "ВСЕ ЦЕЛИ ПОЙМАНЫ" : "ВРЕМЯ ВЫШЛО"}
            </p>
            <p className="text-cream text-[14px]">
              Очки: <span className="font-semibold">{score}/{total}</span>
            </p>
            <p className="text-cream/85 text-[12px]">
              Награда: <span className="text-gold-200 font-semibold">+{reward.coins}</span>{" "}
              исследования, <span className="text-gold-200 font-semibold">+{reward.xp}</span> XP
            </p>
            <button onClick={restart} className="pill-gold mt-1">
              СЫГРАТЬ ЕЩЁ
            </button>
          </div>
        )}
      </div>

      <p className="px-6 pt-3 pb-24 text-[11px] text-cream/70 leading-relaxed">
        Тёплые цели подсвечены оранжевым. Тапни по добыче, пока время не вышло.
      </p>
    </div>
  );
}

function ThermalField() {
  return (
    <svg
      viewBox="0 0 393 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <radialGradient id="cold-edge" cx="50%" cy="50%" r="80%">
          <stop offset="60%" stopColor="#0e2c6b" stopOpacity="0" />
          <stop offset="100%" stopColor="#040b25" />
        </radialGradient>
      </defs>
      <rect width="393" height="600" fill="#0e2c6b" />
      <ellipse cx="120" cy="180" rx="180" ry="120" fill="#1a3aa3" opacity="0.7" />
      <ellipse cx="300" cy="420" rx="170" ry="110" fill="#3b67d4" opacity="0.55" />
      <ellipse cx="200" cy="540" rx="220" ry="60" fill="#5a85e8" opacity="0.35" />
      <rect width="393" height="600" fill="url(#cold-edge)" />
    </svg>
  );
}
