"use client";

import { ANIMALS, type Animal } from "@/data/animals";
import { AnimalHead } from "@/components/AnimalHead";
import { CoinIcon, PadlockIcon } from "@/components/icons";
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
    <ScreenContainer className="pt-2">
      <h1 className="mt-1 text-center text-[22px] font-semibold tracking-[0.22em] text-cream">
        ГАЛЕРЕЯ МОДЕЛЕЙ
      </h1>

      <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-6">
        {ANIMALS.map((a) => {
          const isUnlocked = unlocked.includes(a.id);
          const canAfford = coins >= a.price;
          return (
            <li key={a.id} className="flex flex-col items-center text-center">
              <div className="relative flex h-[88px] w-[120px] items-end justify-center">
                {!isUnlocked && (
                  <PadlockIcon className="absolute -top-1 left-3 z-10 h-[16px] w-[16px] text-cream/85" />
                )}
                <AnimalHead
                  animal={a.id}
                  size={88}
                  className={isUnlocked ? "" : "opacity-95"}
                />
              </div>
              <p className="mt-1 text-[14px] font-bold tracking-[0.22em] text-gold-100">
                {a.name}
              </p>
              <button
                onClick={() => handleClick(a)}
                disabled={!isUnlocked && !canAfford}
                data-locked={!isUnlocked}
                className="pill-gold mt-2 w-[148px] max-w-full px-3 py-[7px] text-[10.5px] tracking-[0.06em] disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <CoinIcon className="h-[12px] w-[12px] inline" />
                    </span>
                  </>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </ScreenContainer>
  );
}
