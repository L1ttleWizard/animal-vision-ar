"use client";

import { useRouter } from "next/navigation";
import { ANIMALS, type AnimalId } from "@/data/animals";
import { AnimalHead } from "@/components/AnimalHead";
import { ARStub } from "@/components/ARStub";
import { ScreenHeader } from "@/components/ScreenHeader";

export function AnimalDetailClient({ id }: { id: AnimalId }) {
  const router = useRouter();
  const animal = ANIMALS.find((a) => a.id === id);

  if (!animal) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-cream/70">
        Животное не найдено.
        <button onClick={() => router.replace("/gallery")} className="ml-2 underline">
          Назад
        </button>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col">
      <ScreenHeader title={`ГЛАЗАМИ ${animal.genitive}`} backHref="/gallery" />

      <div className="relative mx-4 mt-3 flex-1 overflow-hidden rounded-2xl border border-gold-200/30">
        <ARStub
          animal={animal.id}
          label={animal.name}
          marker={animal.visionLabel.toUpperCase()}
        />
      </div>

      <div className="mx-4 mt-3 card-gold px-4 py-3">
        <div className="flex items-center gap-3">
          <AnimalHead animal={animal.id} size={48} />
          <div>
            <p className="text-[14px] font-semibold tracking-[0.15em] text-cream">
              {animal.name}
            </p>
            <p className="text-[11px] tracking-widest text-gold-300">
              {animal.visionLabel.toUpperCase()}
            </p>
          </div>
        </div>
        <p className="mt-2 text-[12px] leading-relaxed text-ink/90">
          {animal.description}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-gold-200 border-t border-gold-200/15 pt-2">
          <span className="font-semibold">ФАКТ.</span> {animal.fact}
        </p>
      </div>
    </div>
  );
}
