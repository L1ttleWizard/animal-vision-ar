"use client";

import Link from "next/link";
import { CHATS } from "@/data/chats";
import { AnimalHead } from "@/components/AnimalHead";
import { ScreenContainer } from "@/components/ScreenContainer";
import { CompassIcon, DeerHeadIcon } from "@/components/icons";

export default function ChatsPage() {
  return (
    <ScreenContainer title="ЧАТЫ">
      <ul className="space-y-0 -mx-1 mt-2">
        {CHATS.map((c, idx) => (
          <li key={c.id}>
            <Link
              href={`/chats/${c.id}`}
              className="flex items-center gap-4 px-1 py-3.5 group"
            >
              <div className="relative h-[64px] w-[64px] shrink-0 rounded-full border border-gold-200/55 overflow-hidden bg-[#152012] flex items-center justify-center shadow-[0_0_10px_rgba(244,214,122,0.18)]">
                {c.avatar === "compass" ? (
                  <CompassIcon className="h-12 w-12 text-gold-200" />
                ) : c.avatar === "deer" ? (
                  <DeerHeadIcon className="h-[60px] w-[60px] text-gold-200" />
                ) : (
                  <AnimalHead animal={c.avatar} size={62} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[15px] font-semibold leading-tight tracking-[0.14em] text-cream group-hover:text-gold-200">
                    {c.title}
                  </p>
                  <span className="shrink-0 pt-0.5 text-[10.5px] tracking-[0.18em] text-gold-200">
                    {c.time}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2 mt-1.5">
                  <p className="line-clamp-2 text-[12.5px] leading-snug text-cream/80">
                    {c.lastMessage}
                  </p>
                  {c.unread > 0 && (
                    <span className="shrink-0 text-[11px] tracking-widest text-gold-200">
                      ({c.unread})
                    </span>
                  )}
                </div>
              </div>
            </Link>
            {idx < CHATS.length - 1 && (
              <div className="h-px bg-gold-200/25 ml-[80px]" />
            )}
          </li>
        ))}
      </ul>
    </ScreenContainer>
  );
}
