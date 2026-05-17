"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ScreenHeader } from "@/components/ScreenHeader";
import { useAppDispatch } from "@/store/hooks";
import { addCoins, addXp } from "@/store/slices/profileSlice";

type Mouse = {
  id: number;
  x: number; // % from left of play area
  y: number; // % from top of play area (always within meadow band)
  height: number; // px — mouse png is portrait (≈ 0.51 aspect)
  rotation: number; // deg
  flip: boolean; // mirror horizontally
  alive: boolean;
};

const ROUND_SECONDS = 30;
const PREY_COUNT = 7;

// Mouse PNG is 338×660 (≈ 0.512 aspect). Box width is derived from height.
const MOUSE_ASPECT = 338 / 660;

// Meadow band — empirically the lower part of thermal_background.jpg
// (above this is the tree line / sky). Keep mice inside this band so they
// look like they sit on the grass.
const MEADOW_Y_MIN = 50; // % from top of play area
const MEADOW_Y_MAX = 90; // % from top of play area

function makePrey(count: number): Mouse[] {
  return Array.from({ length: count }).map((_, i) => {
    const t = Math.random(); // depth: 0 = far (small, near horizon), 1 = close (big, near bottom)
    return {
      id: i + 1,
      x: 8 + Math.random() * 84,
      y: MEADOW_Y_MIN + t * (MEADOW_Y_MAX - MEADOW_Y_MIN),
      height: 44 + t * 60, // 44..104 px — small in the distance, large up close
      rotation: -180 + Math.random() * 360, // any angle
      flip: Math.random() < 0.5,
      alive: true,
    };
  });
}

export default function SnakeHuntPage() {
  const dispatch = useAppDispatch();
  const [prey, setPrey] = useState<Mouse[]>(() => makePrey(PREY_COUNT));
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
    setPrey(makePrey(PREY_COUNT));
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
          ЦЕЛЕЙ:{" "}
          <span className="text-gold-200 font-semibold">
            {score}/{total}
          </span>
        </span>
        <span className="text-cream/85">
          ВРЕМЯ: <span className="text-gold-200 font-semibold">{time}с</span>
        </span>
      </div>

      <div className="relative mx-4 mt-2 flex-1 rounded-2xl border border-gold-200/30 overflow-hidden">
        <Image
          src="/thermal_background.jpg"
          alt="Термальное поле"
          fill
          priority
          sizes="(max-width: 480px) 100vw, 360px"
          className="object-cover object-bottom select-none pointer-events-none"
        />

        {prey.map((p) => (
          <button
            key={p.id}
            onClick={() => hit(p.id)}
            disabled={!p.alive}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.height * MOUSE_ASPECT,
              height: p.height,
              transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scaleX(${p.flip ? -1 : 1})`,
            }}
            className={`absolute transition-opacity duration-300 ${
              p.alive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Мышь"
          >
            <Image
              src="/mouse.png"
              alt=""
              fill
              sizes="60px"
              className="object-contain drop-shadow-[0_0_10px_rgba(255,123,61,0.55)]"
            />
          </button>
        ))}

        {finished && (
          <div className="absolute inset-0 bg-black/65 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-[14px] tracking-[0.22em] text-gold-200">
              {alive === 0 ? "ВСЕ ЦЕЛИ ПОЙМАНЫ" : "ВРЕМЯ ВЫШЛО"}
            </p>
            <p className="text-cream text-[14px]">
              Очки:{" "}
              <span className="font-semibold">
                {score}/{total}
              </span>
            </p>
            <p className="text-cream/85 text-[12px]">
              Награда:{" "}
              <span className="text-gold-200 font-semibold">+{reward.coins}</span>{" "}
              исследования,{" "}
              <span className="text-gold-200 font-semibold">+{reward.xp}</span> XP
            </p>
            <button onClick={restart} className="pill-gold mt-1">
              СЫГРАТЬ ЕЩЁ
            </button>
          </div>
        )}
      </div>

      <p className="px-6 pt-3 pb-24 text-[11px] text-cream/70 leading-relaxed">
        Тёплые цели подсвечены на поляне. Тапни по мыши, пока время не вышло.
      </p>
    </div>
  );
}
