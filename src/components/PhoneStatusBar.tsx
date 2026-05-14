"use client";

import { useEffect, useState } from "react";

export function PhoneStatusBar() {
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = d.getHours();
      const mm = d.getMinutes().toString().padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative z-40 flex h-[44px] items-center justify-between px-6 pt-1 text-cream text-[15px] font-semibold tracking-tight">
      <span suppressHydrationWarning>{time}</span>
      <span aria-hidden className="absolute left-1/2 -translate-x-1/2 top-1.5 hidden md:block h-[24px] w-[100px] rounded-full bg-black" />
      <div className="flex items-center gap-1.5">
        {/* Signal */}
        <svg viewBox="0 0 18 12" className="w-4 h-3 fill-current">
          <rect x="0" y="9" width="3" height="3" rx="0.5" />
          <rect x="5" y="6" width="3" height="6" rx="0.5" />
          <rect x="10" y="3" width="3" height="9" rx="0.5" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" />
        </svg>
        {/* Wifi */}
        <svg viewBox="0 0 16 12" className="w-4 h-3 fill-current">
          <path d="M8 12l2-2.5a3 3 0 0 0-4 0L8 12z" />
          <path d="M8 7a6 6 0 0 1 4.2 1.7l1.4-1.4a8 8 0 0 0-11.2 0l1.4 1.4A6 6 0 0 1 8 7z" />
          <path d="M8 2a11 11 0 0 1 7.8 3.2l-1.4 1.4a9 9 0 0 0-12.8 0L0.2 5.2A11 11 0 0 1 8 2z" />
        </svg>
        {/* Battery */}
        <div className="ml-1 flex items-center">
          <div className="relative h-[12px] w-[24px] rounded-[3px] border border-current">
            <div className="absolute inset-[1.5px] rounded-[1px] bg-current" />
          </div>
          <div className="ml-px h-[5px] w-[1.5px] rounded-r bg-current" />
        </div>
      </div>
    </div>
  );
}
