"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SPEED_TARGETS } from "@/data/tests";
import { useAppDispatch } from "@/store/hooks";
import { addCoins, addXp } from "@/store/slices/profileSlice";

const ROUND_SECONDS = 20;

type Target = {
  id: string;
  emoji: string;
  isPrey: boolean;
  x: number;
  y: number;
  tapped: boolean;
};

function spawn(): Target[] {
  return SPEED_TARGETS.map((t) => ({
    ...t,
    x: 10 + Math.random() * 80,
    y: 12 + Math.random() * 75,
    tapped: false,
  }));
}

export default function SpeedQuizPage() {
  const dispatch = useAppDispatch();
  const [targets, setTargets] = useState<Target[]>(() => spawn());
  const [time, setTime] = useState(ROUND_SECONDS);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const claimed = useRef(false);

  const totalPrey = useMemo(
    () => targets.filter((t) => t.isPrey).length,
    [targets]
  );
  const finished = time === 0;

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
      const xp = hits * 18;
      const coins = hits * 10;
      if (xp > 0) dispatch(addXp(xp));
      if (coins > 0) dispatch(addCoins(coins));
    }
  }, [finished, hits, dispatch]);

  const onTap = (id: string) => {
    if (finished) return;
    setTargets((prev) =>
      prev.map((t) => (t.id === id && !t.tapped ? { ...t, tapped: true } : t))
    );
    const t = targets.find((x) => x.id === id);
    if (!t) return;
    if (t.isPrey) setHits((s) => s + 1);
    else setMisses((s) => s + 1);
  };

  const restart = () => {
    claimed.current = false;
    setTargets(spawn());
    setTime(ROUND_SECONDS);
    setHits(0);
    setMisses(0);
  };

  return (
    <div className="absolute inset-0 flex flex-col">
      <ScreenHeader title="ИГРЫ НА СКОРОСТЬ" backHref="/quests" />

      <div className="px-5 mt-2 grid grid-cols-3 text-[11px] tracking-widest text-cream/85">
        <div>
          ВРЕМЯ: <span className="text-gold-200 font-semibold">{time}с</span>
        </div>
        <div className="text-center">
          ДОБЫЧА:{" "}
          <span className="text-gold-200 font-semibold">
            {hits}/{totalPrey}
          </span>
        </div>
        <div className="text-right">
          МИМО: <span className="text-[#C0635A] font-semibold">{misses}</span>
        </div>
      </div>

      <div className="relative mx-4 mt-2 flex-1 rounded-2xl border border-gold-200/30 overflow-hidden bg-[#0e2c6b]">
        <svg
          viewBox="0 0 393 600"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <radialGradient id="speed-cold-edge" cx="50%" cy="50%" r="80%">
              <stop offset="60%" stopColor="#0e2c6b" stopOpacity="0" />
              <stop offset="100%" stopColor="#040b25" />
            </radialGradient>
          </defs>
          <ellipse cx="120" cy="180" rx="180" ry="120" fill="#1a3aa3" opacity="0.7" />
          <ellipse cx="300" cy="420" rx="170" ry="110" fill="#3b67d4" opacity="0.55" />
          <rect width="393" height="600" fill="url(#speed-cold-edge)" />
        </svg>

        {targets.map((t) => (
          <button
            key={t.id}
            onClick={() => onTap(t.id)}
            disabled={t.tapped || finished}
            style={{
              left: `${t.x}%`,
              top: `${t.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            className={`absolute h-9 w-9 grid place-items-center rounded-full text-[20px] transition-opacity ${
              t.tapped
                ? "opacity-30"
                : t.isPrey
                ? "shadow-[0_0_18px_rgba(255,123,61,0.85)]"
                : "shadow-[0_0_10px_rgba(91,133,232,0.6)]"
            }`}
            aria-label={t.isPrey ? "Жертва" : "Не жертва"}
          >
            {t.emoji}
          </button>
        ))}

        {finished && (
          <div className="absolute inset-0 bg-black/65 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-[14px] tracking-[0.22em] text-gold-200">
              КОНЕЦ РАУНДА
            </p>
            <p className="text-cream text-[14px]">
              Точность:{" "}
              <span className="font-semibold">
                {hits}/{totalPrey}
              </span>
              , мимо: <span className="text-[#C0635A]">{misses}</span>
            </p>
            <p className="text-cream/85 text-[12px]">
              Награда:{" "}
              <span className="text-gold-200 font-semibold">+{hits * 10}</span>{" "}
              исследования,{" "}
              <span className="text-gold-200 font-semibold">+{hits * 18}</span> XP
            </p>
            <button onClick={restart} className="pill-gold mt-1">
              ЕЩЁ РАУНД
            </button>
          </div>
        )}
      </div>

      <p className="px-6 pt-3 pb-24 text-[11px] text-cream/70 leading-relaxed">
        Бей по жертвам (тёплые силуэты с оранжевым ореолом). Холодные предметы — не цель.
      </p>
    </div>
  );
}
