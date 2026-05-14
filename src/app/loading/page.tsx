"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ScreenBackground } from "@/components/ScreenBackground";
import { DeerCompassLogo } from "@/components/DeerCompassLogo";

function LoadingInner() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") ?? "/gallery";

  useEffect(() => {
    const start = Date.now();
    const TOTAL = 2200; // ms
    let raf = 0;
    const tick = () => {
      const ratio = Math.min(1, (Date.now() - start) / TOTAL);
      setProgress(Math.floor(ratio * 100));
      if (ratio < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => router.replace(next), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [next, router]);

  return (
    <div className="absolute inset-0">
      <ScreenBackground />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 page-fade">
        <DeerCompassLogo size={220} />

        <div className="mt-12 w-full max-w-[260px]">
          <div className="h-2 w-full rounded-full bg-black/40 border border-gold-200/30 overflow-hidden">
            <div
              className="h-full rounded-full shimmer-gold"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-center text-[11px] tracking-[0.3em] text-gold-300">
            ЗАГРУЗКА · {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoadingPage() {
  return (
    <Suspense fallback={null}>
      <LoadingInner />
    </Suspense>
  );
}
