"use client";

import Link from "next/link";
import { QUESTS } from "@/data/games";
import { ScreenContainer } from "@/components/ScreenContainer";
import { ChevronRight, CoinIcon, TrophyIcon } from "@/components/icons";

export default function QuestsPage() {
  return (
    <ScreenContainer title="КВЕСТЫ">
      <p className="text-center text-[11px] tracking-[0.22em] text-gold-300 -mt-3 mb-4">
        ОТ НАБЛЮДЕНИЯ К ДЕЙСТВИЮ
      </p>
      <ul className="space-y-3">
        {QUESTS.map((q) => (
          <li key={q.id}>
            <Link
              href={q.id === "speed-quiz" ? "/quests/speed" : "/quests/tests"}
              className="block card-gold px-4 py-3 group hover:border-gold-200/80 transition-colors"
            >
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-semibold tracking-[0.16em] text-cream group-hover:text-gold-200">
                  {q.title}
                </p>
                <ChevronRight className="h-4 w-4 text-gold-200" />
              </div>
              <p className="mt-1 text-[12px] leading-relaxed text-cream/85">
                {q.description}
              </p>
              <div className="mt-2 flex items-center gap-3 text-[11px] tracking-widest text-gold-200">
                <span className="inline-flex items-center gap-1">
                  <TrophyIcon className="h-3.5 w-3.5" />
                  +{q.rewardXp} XP
                </span>
                <span className="inline-flex items-center gap-1">
                  <CoinIcon className="h-3.5 w-3.5" />
                  +{q.rewardCoins}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-[10px] tracking-widest text-cream/40">
        КАЖДАЯ КАРТОЧКА ВКЛЮЧАЕТ РЕАЛЬНЫЙ БИОЛОГИЧЕСКИЙ ФАКТ
      </p>
    </ScreenContainer>
  );
}
