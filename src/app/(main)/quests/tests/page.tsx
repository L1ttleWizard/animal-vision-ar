"use client";

import { useState } from "react";
import { ScreenHeader } from "@/components/ScreenHeader";
import { TESTS } from "@/data/tests";
import { useAppDispatch } from "@/store/hooks";
import { addCoins, addXp } from "@/store/slices/profileSlice";

export default function TestsPage() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const dispatch = useAppDispatch();

  const q = TESTS[i];

  const onPick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.correct) setCorrectCount((c) => c + 1);
  };

  const onNext = () => {
    if (i < TESTS.length - 1) {
      setI(i + 1);
      setPicked(null);
    } else {
      const xp = correctCount * 25;
      const coins = correctCount * 12;
      dispatch(addXp(xp));
      dispatch(addCoins(coins));
      setDone(true);
    }
  };

  const restart = () => {
    setI(0);
    setPicked(null);
    setCorrectCount(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="absolute inset-0 flex flex-col">
        <ScreenHeader title="ТЕСТЫ" backHref="/quests" />
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <p className="text-[14px] tracking-[0.22em] text-gold-200">
            РЕЗУЛЬТАТ
          </p>
          <p className="mt-3 text-[40px] font-bold text-cream leading-none">
            {correctCount}
            <span className="text-cream/45 text-[24px]"> / {TESTS.length}</span>
          </p>
          <p className="mt-3 text-[12px] text-cream/80">
            Награда:{" "}
            <span className="text-gold-200 font-semibold">
              +{correctCount * 25} XP
            </span>
            , <span className="text-gold-200 font-semibold">+{correctCount * 12}</span> исследования
          </p>
          <button onClick={restart} className="pill-gold mt-6">
            ПРОЙТИ СНОВА
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col">
      <ScreenHeader title="ТЕСТЫ" backHref="/quests" />
      <div className="px-6 mt-2 flex items-center justify-between text-[11px] tracking-widest text-cream/80">
        <span>
          ВОПРОС {i + 1} / {TESTS.length}
        </span>
        <span className="text-gold-200">
          ВЕРНО: <span className="font-semibold">{correctCount}</span>
        </span>
      </div>
      <div className="px-5 mt-4 space-y-3 flex-1 overflow-y-auto no-scrollbar pb-32 page-fade">
        <p className="text-[15px] leading-relaxed text-cream font-medium">
          {q.q}
        </p>
        <ul className="space-y-2">
          {q.options.map((opt, idx) => {
            const isCorrect = picked !== null && idx === q.correct;
            const isWrong = picked === idx && idx !== q.correct;
            return (
              <li key={idx}>
                <button
                  onClick={() => onPick(idx)}
                  disabled={picked !== null}
                  className={`w-full text-left card-gold px-4 py-3 transition-colors ${
                    isCorrect
                      ? "border-[#7BC07E] bg-[#1a2a14]"
                      : isWrong
                      ? "border-[#C0635A] bg-[#2a1a14]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] tracking-widest text-gold-300 w-4">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-[13px] text-cream">{opt}</span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
        {picked !== null && (
          <div className="mt-2 rounded-xl border border-gold-200/35 bg-black/35 px-3 py-2 text-[12px] leading-relaxed text-cream/90">
            <span className="text-gold-200 font-semibold">ФАКТ.</span>{" "}
            {q.explain}
          </div>
        )}
      </div>
      <div className="absolute bottom-20 left-0 right-0 px-6">
        <button
          onClick={onNext}
          disabled={picked === null}
          className="w-full pill-gold disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {i < TESTS.length - 1 ? "ДАЛЕЕ" : "ЗАВЕРШИТЬ"}
        </button>
      </div>
    </div>
  );
}
