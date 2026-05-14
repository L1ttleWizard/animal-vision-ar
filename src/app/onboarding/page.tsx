"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenBackground } from "@/components/ScreenBackground";
import { DeerCompassLogo } from "@/components/DeerCompassLogo";
import { useAppDispatch } from "@/store/hooks";
import { complete } from "@/store/slices/onboardingSlice";
import { ChevronRight, PawIcon, TargetIcon, GameIcon } from "@/components/icons";

const SLIDES = [
  {
    title: "МИР ГЛАЗАМИ ЖИВОТНОГО",
    body: "AR-приложение, которое переносит вас в захватывающий мир природы. Взгляните на привычную реальность через призму восприятия животных.",
    Icon: () => <DeerCompassLogo size={170} />,
  },
  {
    title: "ОПРЕДЕЛЯЙТЕ И НАБЛЮДАЙТЕ",
    body: "Наведите камеру на пространство — приложение покажет, как видит мир кошка, орёл, змея или пчела. Каждое зрение — отдельная история.",
    Icon: () => <TargetIcon className="h-24 w-24 text-gold-200 glow-gold" />,
  },
  {
    title: "ВЫПОЛНЯЙТЕ КВЕСТЫ",
    body: "Игры на скорость, тесты и охота на тепловой след. За успехи — коллекционные карточки и доступ к редким видам.",
    Icon: () => <GameIcon className="h-24 w-24 text-gold-200 glow-gold" />,
  },
  {
    title: "СОБИРАЙТЕ КОЛЛЕКЦИЮ",
    body: "Открывайте новых животных за «очки исследований» и записывайте находки в Дневник натуралиста.",
    Icon: () => <PawIcon className="h-24 w-24 text-gold-200 glow-gold" />,
  },
];

export default function OnboardingPage() {
  const [i, setI] = useState(0);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const slide = SLIDES[i];
  const last = i === SLIDES.length - 1;

  const next = () => {
    if (last) {
      dispatch(complete());
      router.replace("/loading?next=%2Fgallery");
    } else {
      setI((x) => x + 1);
    }
  };

  const skip = () => {
    dispatch(complete());
    router.replace("/loading?next=%2Fgallery");
  };

  return (
    <div className="absolute inset-0">
      <ScreenBackground />
      <div className="relative z-10 flex h-full flex-col px-7 pt-6 pb-28 page-fade">
        <div className="flex items-center justify-between">
          <span className="text-[11px] tracking-[0.3em] text-gold-300">
            ШАГ {i + 1} / {SLIDES.length}
          </span>
          {!last && (
            <button
              onClick={skip}
              className="text-[11px] tracking-[0.3em] text-cream/70 hover:text-gold-200"
            >
              ПРОПУСТИТЬ
            </button>
          )}
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-center gap-7">
          <div className="flex h-[200px] items-center justify-center">
            <slide.Icon />
          </div>
          <h1 className="text-[22px] font-semibold tracking-[0.18em] glow-gold leading-tight">
            {slide.title}
          </h1>
          <p className="max-w-[300px] text-[13px] leading-relaxed text-ink/90">
            {slide.body}
          </p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i
                    ? "w-8 bg-gold-200 shadow-[0_0_8px_rgba(244,214,122,0.6)]"
                    : "w-1.5 bg-gold-200/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="group flex items-center justify-center gap-3 rounded-full border border-gold-200/60 bg-gradient-to-b from-[#8C6C36]/60 to-[#52401e]/70 px-8 py-3 text-[12px] font-semibold tracking-[0.25em] text-gold-100 hover:shadow-[0_0_18px_rgba(244,214,122,0.5)] transition-all"
          >
            {last ? "ВОЙТИ В МИР" : "ДАЛЬШЕ"}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
