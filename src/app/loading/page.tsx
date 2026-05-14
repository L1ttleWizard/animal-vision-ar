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
    <div className="absolute inset-0 overflow-hidden">
      <ScreenBackground />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(95%_70%_at_50%_22%,rgba(64,82,38,0.22)_0%,rgba(19,29,10,0)_68%)]" />
        <div className="absolute left-[-8%] right-[38%] top-[7%] bottom-[27%] rounded-[45%] border border-gold-200/8 opacity-40" />
        <div className="absolute left-[10%] right-[-14%] top-[2%] bottom-[12%] rounded-[48%] border border-gold-200/7 opacity-30" />
        <div className="absolute left-[-14%] right-[58%] top-[68%] bottom-[-18%] rounded-[50%] border border-gold-200/8 opacity-40" />
        <div className="absolute left-[68%] top-[73%] h-1.5 w-1.5 rounded-full bg-gold-100 shadow-[0_0_12px_rgba(255,241,184,0.95)]" />
        <div className="absolute left-[74%] top-[78%] h-2 w-2 rounded-full bg-gold-200 shadow-[0_0_18px_rgba(244,214,122,0.95)]" />
        <div className="absolute left-[80%] top-[76%] h-2.5 w-2.5 rounded-full bg-gold-100 shadow-[0_0_18px_rgba(255,241,184,0.95)]" />
        <div className="absolute left-[84%] top-[80%] h-1 w-1 rounded-full bg-gold-100 shadow-[0_0_8px_rgba(255,241,184,0.95)]" />
        <div className="absolute left-[77%] top-[81.5%] h-8 w-16 rotate-[18deg] rounded-full border-t border-gold-200/20 opacity-50" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 page-fade">
        <div className="-mt-14 flex flex-col items-center">
          <DeerCompassLogo
            size={206}
            className="drop-shadow-[0_0_18px_rgba(244,214,122,0.45)]"
          />

          <div className="mt-14 w-[282px] max-w-full">
            <div className="rounded-full border border-gold-100/60 bg-black/28 p-[3px] shadow-[0_0_16px_rgba(244,214,122,0.18)]">
              <div className="h-[12px] rounded-full border border-gold-200/45 bg-[#141b0f]/85 p-[1.5px]">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#c8a34b_0%,#f7e8a6_48%,#e3be64_100%)] shadow-[0_0_16px_rgba(244,214,122,0.65)] transition-[width] duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="pt-4 text-center text-[10px] font-medium tracking-[0.36em] text-gold-300/95">
              ЗАГРУЗКА · {progress}%
            </div>
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
