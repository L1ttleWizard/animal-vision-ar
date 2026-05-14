"use client";

import { JOURNAL } from "@/data/games";
import { AnimalHead } from "@/components/AnimalHead";
import { ScreenContainer } from "@/components/ScreenContainer";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function JournalPage() {
  return (
    <div className="absolute inset-0">
      <ScreenHeader title="ДНЕВНИК НАТУРАЛИСТА" backHref="/profile" />
      <div className="h-[calc(100%-44px)]">
        <ScreenContainer>
          <ul className="space-y-3">
            {JOURNAL.map((entry) => (
              <li key={entry.id} className="card-gold p-3">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 shrink-0 rounded-full border border-gold-200/40 bg-[#142010] grid place-items-center overflow-hidden">
                    <AnimalHead animal={entry.animal} size={60} />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-widest text-gold-200">
                      {entry.date}
                    </p>
                    <p className="text-[14px] font-semibold tracking-[0.15em] text-cream">
                      {entry.title}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-ink/90">
                  {entry.body}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-center text-[10px] tracking-widest text-cream/40">
            КОЛЛЕКЦИОННЫЕ КАРТОЧКИ ОТКРЫВАЮТСЯ ПОСЛЕ КВЕСТОВ
          </p>
        </ScreenContainer>
      </div>
    </div>
  );
}
