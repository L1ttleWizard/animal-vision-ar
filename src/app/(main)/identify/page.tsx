"use client";

import { useMemo, useState } from "react";
import { ANIMALS, type AnimalId } from "@/data/animals";
import { AnimalHead } from "@/components/AnimalHead";
import { ARStub } from "@/components/ARStub";
import { SettingsGearIcon } from "@/components/icons";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";

export default function IdentifyPage() {
  const unlocked = useAppSelector((s) => s.gallery.unlocked);
  const wheel = useMemo(
    () =>
      ANIMALS.filter((a) => unlocked.includes(a.id)).concat(
        ANIMALS.filter((a) => !unlocked.includes(a.id))
      ),
    [unlocked]
  );
  const [activeId, setActiveId] = useState<AnimalId>(wheel[0]?.id ?? "cat");

  const active = ANIMALS.find((a) => a.id === activeId)!;
  const [zoom, setZoom] = useState(50);

  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Camera viewport — full bleed above the wheel */}
      <div className="relative flex-1">
        <ARStub animal={active.id} label={active.name} />

        {/* Top-left settings */}
        <Link
          href="/profile/settings"
          className="absolute top-3 left-3 z-20 rounded-full bg-black/45 border border-gold-200/35 p-1.5 text-cream/85 hover:text-gold-200"
          aria-label="Настройки"
        >
          <SettingsGearIcon className="h-5 w-5" />
        </Link>
      </div>

      {/* Wheel area */}
      <div className="relative shrink-0 px-3 pt-4 pb-24 bg-gradient-to-t from-[#1f2a13]/95 via-[#1f2a13]/85 to-transparent">
        <div className="overflow-x-auto no-scrollbar px-2">
          <ul className="flex items-end gap-4 justify-center min-w-max">
            {wheel.map((a) => {
              const isActive = a.id === activeId;
              const locked = !unlocked.includes(a.id);
              return (
                <li key={a.id} className="flex flex-col items-center">
                  <button
                    onClick={() => !locked && setActiveId(a.id)}
                    className={`relative grid place-items-center rounded-full transition-all ${
                      isActive
                        ? "h-[68px] w-[68px] border-2 border-gold-200 shadow-[0_0_18px_rgba(244,214,122,0.7)] bg-[#1d2614]"
                        : "h-[56px] w-[56px] border border-gold-200/35 bg-[#1d2614]/70 opacity-80"
                    } ${locked ? "opacity-40 cursor-not-allowed" : ""}`}
                  >
                    <AnimalHead animal={a.id} size={isActive ? 56 : 44} />
                  </button>
                  <span
                    className={`mt-1 text-[10px] tracking-[0.18em] ${
                      isActive ? "text-gold-200" : "text-cream/75"
                    }`}
                  >
                    {a.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Shutter row */}
        <div className="mt-3 flex items-center justify-between gap-4 px-3">
          <button
            aria-label="Галерея фото"
            className="rounded-md border border-gold-200/35 bg-black/45 p-2 text-cream/85 hover:text-gold-200"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="9" cy="11" r="2" />
              <path d="M3 17l5-4 4 3 4-5 5 4v3H3z" />
            </svg>
          </button>
          <button
            aria-label="Снимок"
            className="h-16 w-16 rounded-full border-4 border-cream/90 bg-cream/90 active:scale-95 transition-transform"
          />
          <div className="flex items-center gap-2 w-[110px]">
            <span className="text-gold-200 text-[14px]">−</span>
            <input
              type="range"
              min={0}
              max={100}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="flex-1 accent-[#F4D67A]"
            />
            <span className="text-gold-200 text-[14px]">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
