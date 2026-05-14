"use client";

import { ANIMALS, type Animal } from "@/data/animals";
import { AnimalHead } from "@/components/AnimalHead";
import { CoinIcon, PadlockIcon, SettingsGearIcon } from "@/components/icons";
import { ScreenContainer } from "@/components/ScreenContainer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { unlockAnimal } from "@/store/slices/gallerySlice";
import { spendCoins } from "@/store/slices/profileSlice";
import { useRouter } from "next/navigation";

export default function GalleryPage() {
  const unlocked = useAppSelector((s) => s.gallery.unlocked);
  const coins = useAppSelector((s) => s.profile.coins);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = (animal: Animal) => {
    const isUnlocked = unlocked.includes(animal.id);
    if (isUnlocked) {
      router.push(`/gallery/${animal.id}`);
      return;
    }
    if (coins >= animal.price) {
      dispatch(spendCoins(animal.price));
      dispatch(unlockAnimal(animal.id));
      router.push(`/gallery/${animal.id}`);
    }
  };

  return (
    <ScreenContainer>
      <div className="relative">
        <button
          className="absolute -top-1 right-0 text-cream/80 hover:text-gold-200"
          aria-label="Настройки"
          onClick={() => router.push("/profile/settings")}
        >
          <SettingsGearIcon className="h-6 w-6" />
        </button>
        <h1 className="text-center text-[22px] font-semibold tracking-[0.22em] text-cream mt-2 mb-2">
          ГАЛЕРЕЯ МОДЕЛЕЙ
        </h1>
        <div className="flex items-center justify-center gap-1.5 text-[11px] tracking-[0.2em] text-gold-200">
          <CoinIcon className="h-4 w-4" />
          <span className="font-semibold">{coins}</span>
          <span className="text-cream/60">очков исследования</span>
        </div>
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
        {ANIMALS.map((a) => {
          const isUnlocked = unlocked.includes(a.id);
          const canAfford = coins >= a.price;
          return (
            <li key={a.id} className="flex flex-col items-center text-center">
              <div className="relative flex h-20 w-20 items-center justify-center">
                {!isUnlocked && (
                  <PadlockIcon className="absolute -top-1 -left-1 z-10 h-4 w-4 text-cream/80" />
                )}
                <AnimalHead animal={a.id} size={86} className={isUnlocked ? "" : "opacity-90"} />
              </div>
              <p className="mt-1.5 text-[13px] font-semibold tracking-[0.18em] text-cream">
                {a.name}
              </p>
              <button
                onClick={() => handleClick(a)}
                disabled={!isUnlocked && !canAfford}
                data-locked={!isUnlocked}
                className="pill-gold mt-1.5 w-full max-w-[160px] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isUnlocked ? (
                  <>
                    ПОСМОТРЕТЬ
                    <br />
                    ГЛАЗАМИ {a.genitive}
                  </>
                ) : (
                  <>
                    ЗАБЛОКИРОВАНО
                    <br />
                    <span className="inline-flex items-center gap-1">
                      ЦЕНА: {a.price}
                      <CoinIcon className="h-3 w-3 inline" />
                    </span>
                  </>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-center text-[10px] tracking-[0.2em] text-cream/40">
        ОТКРЫВАЙТЕ НОВЫХ ЖИВОТНЫХ ЗА ОЧКИ ИССЛЕДОВАНИЙ
      </p>
    </ScreenContainer>
  );
}
