"use client";

import Link from "next/link";
import { CHATS } from "@/data/chats";
import { AnimalHead } from "@/components/AnimalHead";
import { ScreenContainer } from "@/components/ScreenContainer";
import { CompassIcon } from "@/components/icons";

export default function ChatsPage() {
  return (
    <ScreenContainer title="ЧАТЫ">
      <ul className="space-y-0 -mx-1">
        {CHATS.map((c, idx) => (
          <li key={c.id}>
            <Link
              href={`/chats/${c.id}`}
              className="flex items-center gap-3 px-1 py-3 group"
            >
              <div className="relative h-12 w-12 shrink-0 rounded-full border border-gold-200/45 overflow-hidden bg-[#152012] flex items-center justify-center">
                {c.avatar === "compass" ? (
                  <CompassIcon className="h-9 w-9 text-gold-200" />
                ) : (
                  <AnimalHead animal={c.avatar} size={56} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="truncate text-[14px] font-semibold tracking-[0.12em] text-cream group-hover:text-gold-200">
                    {c.title}
                  </p>
                  <span className="shrink-0 text-[10px] tracking-widest text-gold-200">
                    {c.time}
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2 mt-0.5">
                  <p className="truncate text-[12px] text-cream/80">
                    {c.lastMessage}
                  </p>
                  {c.unread > 0 && (
                    <span className="shrink-0 text-[10px] tracking-widest text-gold-200">
                      ({c.unread})
                    </span>
                  )}
                </div>
              </div>
            </Link>
            {idx < CHATS.length - 1 && (
              <div className="h-px bg-gold-200/15 ml-[60px]" />
            )}
          </li>
        ))}
      </ul>
    </ScreenContainer>
  );
}
