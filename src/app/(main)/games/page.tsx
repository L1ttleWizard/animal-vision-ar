"use client";

import { useRouter } from "next/navigation";
import { GAMES, type GameMeta } from "@/data/games";
import { CoinIcon, PadlockIcon } from "@/components/icons";
import { ScreenContainer } from "@/components/ScreenContainer";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

export default function GamesPage() {
  const router = useRouter();
  const unlocked = useAppSelector((s) => s.gallery.unlocked);

  const isUnlocked = (g: GameMeta) =>
    g.price === 0 || unlocked.includes(g.animal);

  return (
    <ScreenContainer title="ИГРЫ">
      <ul className="space-y-4">
        {GAMES.map((g) => {
          const unlockedFlag = isUnlocked(g);
          return (
            <li key={g.id} className="card-gold overflow-hidden">
              <div className="grid grid-cols-[140px_1fr] gap-3 p-3">
                <div className="relative h-[140px] rounded-lg overflow-hidden border border-gold-200/30">
                  <GameThumb id={g.id} />
                  {g.id === "bee-vision" && (
                    <div className="absolute bottom-1 left-1.5 rounded bg-black/55 px-1.5 py-0.5 text-[9px] tracking-wider text-gold-100">
                      Нектар: 2/5
                    </div>
                  )}
                  {g.id === "predator-reflex" && (
                    <div className="absolute bottom-1 right-1.5 rounded bg-black/55 px-1.5 py-0.5 text-[9px] tracking-wider text-gold-100">
                      Attack
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2 text-right">
                  <div className="flex items-center gap-1.5">
                    {!unlockedFlag && (
                      <PadlockIcon className="h-3.5 w-3.5 text-cream/85" />
                    )}
                    <p className="text-[10px] tracking-[0.22em] text-gold-200">
                      {unlockedFlag ? "РАЗБЛОКИРОВАНО" : "ЗАБЛОКИРОВАНО"}
                    </p>
                  </div>
                  {!unlockedFlag && (
                    <p className="-mt-1.5 flex items-center gap-1 text-[12px] text-gold-200">
                      <span>{g.price}</span>
                      <CoinIcon className="h-3.5 w-3.5" />
                    </p>
                  )}
                  <h2 className="mt-auto w-full text-center text-[14px] font-semibold tracking-[0.16em] text-cream">
                    {g.title}
                  </h2>
                  <button
                    onClick={() =>
                      unlockedFlag && g.id === "snake-hunt"
                        ? router.push("/games/snake-hunt")
                        : null
                    }
                    disabled={!unlockedFlag}
                    className="pill-gold w-full max-w-[170px] mx-auto disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {g.buttonLabel}
                  </button>
                </div>
              </div>
              <p className="px-3 pb-3 text-[12px] text-cream/85 leading-relaxed">
                <span className="text-gold-200 font-semibold">
                  {g.subtitle}.
                </span>{" "}
                {g.description}
              </p>
            </li>
          );
        })}
      </ul>
    </ScreenContainer>
  );
}

function GameThumb({ id }: { id: GameMeta["id"] }) {
  switch (id) {
    case "snake-hunt":
      return (
        <div className="h-full w-full bg-[#0e2c6b] relative">
          <Image src={'/snake_hunt.png'} width={120} height={110} alt={'snake_hunt'}className="absolute inset-0 h-full w-full"></Image>
        </div>
      );
    case "bee-vision":
      return (
        <div className="h-full w-full bg-linear-to-b from-[#36206e] to-[#0e0625] relative">
          <Image src={'/bee_vision.png'} width={120} height={110} alt="bee_vision" className="absolute inset-0 h-full w-full"></Image>
        </div>
      );
    case "predator-reflex":
      return (
        <div className="h-full w-full bg-linear-to-b from-[#0a0f08] to-[#020401] relative">
          <Image src={'/predator_reflex.png'} width={120} height={110} alt="predator_reflex" className="absolute inset-0 h-full w-full"></Image>
          
        </div>
      );
  }
}
  