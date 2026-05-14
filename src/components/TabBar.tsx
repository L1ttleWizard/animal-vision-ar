"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChatIcon,
  GameIcon,
  PawIcon,
  ProfileIcon,
  TargetIcon,
} from "./icons";

type Tab = {
  href: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement> & { className?: string }>;
  match: (path: string) => boolean;
};

const TABS: Tab[] = [
  {
    href: "/gallery",
    label: "ГАЛЕРЕЯ",
    Icon: PawIcon,
    match: (p) => p.startsWith("/gallery"),
  },
  {
    href: "/chats",
    label: "ЧАТЫ",
    Icon: ChatIcon,
    match: (p) => p.startsWith("/chats"),
  },
  {
    href: "/identify",
    label: "ОПРЕДЕЛИТЬ",
    Icon: TargetIcon,
    match: (p) => p.startsWith("/identify"),
  },
  {
    href: "/games",
    label: "ИГРЫ",
    Icon: GameIcon,
    match: (p) => p.startsWith("/games") || p.startsWith("/quests"),
  },
  {
    href: "/profile",
    label: "ПРОФИЛЬ",
    Icon: ProfileIcon,
    match: (p) => p.startsWith("/profile"),
  },
];

export function TabBar() {
  const pathname = usePathname() ?? "/";
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-1 pointer-events-none">
      <div className="pointer-events-auto rounded-2xl bg-gradient-to-b from-[#1c2614]/85 to-[#0e1408]/95 backdrop-blur-md border border-[#d4af6f]/15 px-2 py-2">
        <ul className="grid grid-cols-5 gap-0.5">
          {TABS.map((tab) => {
            const active = tab.match(pathname);
            return (
              <li key={tab.href} className="flex">
                <Link
                  href={tab.href}
                  className={`group flex flex-1 flex-col items-center gap-0.5 rounded-lg py-1.5 transition-colors ${
                    active ? "tab-active" : "text-cream/70 hover:text-gold-200"
                  }`}
                >
                  <tab.Icon className="h-5 w-5" />
                  <span
                    className={`text-[9px] font-semibold tracking-widest ${
                      active ? "" : ""
                    }`}
                  >
                    {tab.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
