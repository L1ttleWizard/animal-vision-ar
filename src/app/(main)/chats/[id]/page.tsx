"use client";

import { use, useEffect, useRef, useState } from "react";
import { CHATS, CHAT_THREADS, type ChatMessage } from "@/data/chats";
import { AnimalHead } from "@/components/AnimalHead";
import { ScreenHeader } from "@/components/ScreenHeader";
import { CompassIcon } from "@/components/icons";

type Params = { id: string };

export default function ChatThreadPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = use(params);
  const chat = CHATS.find((c) => c.id === id);
  const [messages, setMessages] = useState<ChatMessage[]>(
    CHAT_THREADS[id] ?? []
  );
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `m-${prev.length + 1}`,
        author: "Я",
        text,
        time: new Date().toLocaleTimeString("ru", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isSelf: true,
      },
    ]);
    setDraft("");
  };

  if (!chat) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-cream/70">
        Чат не найден.
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col">
      <ScreenHeader title={chat.title} backHref="/chats" />

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto no-scrollbar px-4 py-3 pb-24 space-y-3"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`max-w-[78%] ${
              m.isSelf ? "ml-auto" : ""
            } card-gold px-3 py-2`}
          >
            {!m.isSelf && (
              <p className="text-[10px] tracking-widest text-gold-200 mb-0.5">
                {m.author}
              </p>
            )}
            <p className="text-[13px] leading-relaxed text-cream">{m.text}</p>
            <p className="mt-1 text-[10px] text-cream/50 text-right">{m.time}</p>
          </div>
        ))}

        {messages.length === 0 && (
          <div className="text-center text-cream/60 mt-10 flex flex-col items-center gap-3">
            <CompassIcon className="h-12 w-12 text-gold-300/50" />
            <p className="text-[12px] tracking-widest">НАПИШИТЕ ПЕРВЫМ</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-20 left-0 right-0 px-3">
        <div className="flex items-center gap-2 rounded-full border border-gold-200/35 bg-black/55 px-2 py-1.5 backdrop-blur-md">
          <AnimalHead animal="fox" size={28} className="rounded-full" />
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Сообщение"
            className="flex-1 bg-transparent text-[13px] text-cream placeholder:text-cream/40 outline-none"
          />
          <button
            onClick={send}
            disabled={!draft.trim()}
            className="rounded-full bg-gold-200/20 border border-gold-200/50 px-3 py-1 text-[11px] tracking-widest text-gold-100 disabled:opacity-40"
          >
            ОТПР.
          </button>
        </div>
      </div>
    </div>
  );
}
