"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { ScreenContainer } from "@/components/ScreenContainer";
import { AnimalHead } from "@/components/AnimalHead";
import {
  BookmarkIcon,
  ChevronRight,
  EditIcon,
  FriendsIcon,
  GameIcon,
  HelpIcon,
  LogoutIcon,
  NotebookIcon,
  SettingsGearIcon,
  TargetIcon,
  TrophyIcon,
} from "@/components/icons";

type Row = {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement> & { className?: string }>;
  trailing?: React.ReactNode;
  href?: string;
};

export default function ProfilePage() {
  const profile = useAppSelector((s) => s.profile);
  const router = useRouter();

  const xpPct = Math.round((profile.xp / profile.xpToNext) * 100);

  const rows: Row[] = [
    {
      label: "ДОСТИЖЕНИЯ",
      Icon: TrophyIcon,
      trailing: (
        <span>
          {profile.achievementsDone}/{profile.achievementsTotal}
        </span>
      ),
    },
    { label: "КВЕСТЫ", Icon: TargetIcon, href: "/quests" },
    { label: "ДРУЗЬЯ", Icon: FriendsIcon, trailing: <span>{profile.friends}</span> },
    {
      label: "МОИ НАБЛЮДЕНИЯ",
      Icon: NotebookIcon,
      trailing: <span>{profile.observations}</span>,
      href: "/profile/journal",
    },
    {
      label: "ИЗБРАННОЕ",
      Icon: BookmarkIcon,
      trailing: <span>{profile.favorites}</span>,
    },
    { label: "ИГРЫ", Icon: GameIcon, href: "/games" },
    { label: "НАСТРОЙКИ", Icon: SettingsGearIcon, href: "/profile/settings" },
    { label: "ПОДДЕРЖКА", Icon: HelpIcon },
    { label: "ВЫХОД", Icon: LogoutIcon },
  ];

  return (
    <ScreenContainer title="ПРОФИЛЬ">
      {/* Avatar + name */}
      <div className="flex flex-col items-center gap-1">
        <div className="relative">
          <div className="h-[112px] w-[112px] rounded-full border border-gold-200/50 bg-[#142010] grid place-items-center overflow-hidden">
            <AnimalHead animal="fox" size={104} />
          </div>
          <button className="absolute -right-0.5 bottom-1 grid h-7 w-7 place-items-center rounded-full border border-gold-200/55 bg-[#1d2614] text-gold-200">
            <EditIcon className="h-3.5 w-3.5" />
          </button>
        </div>
        <p className="mt-1 text-[20px] font-semibold tracking-wide text-cream">
          {profile.name}
        </p>
        <p className="text-[12px] tracking-widest text-gold-300">
          {profile.caption}
        </p>
      </div>

      {/* Level */}
      <div className="mt-4 card-gold px-4 py-3">
        <div className="flex items-center justify-between text-[11px] tracking-[0.22em] text-cream/85">
          <div className="text-center">
            <p className="text-cream/70">УРОВЕНЬ</p>
            <p className="mt-1 text-[20px] font-bold text-cream leading-none">
              {profile.level}
            </p>
          </div>
          <div className="flex-1 px-4">
            <div className="h-2 w-full rounded-full bg-black/40 border border-gold-200/30 overflow-hidden">
              <div
                className="h-full shimmer-gold"
                style={{ width: `${xpPct}%` }}
              />
            </div>
            <p className="mt-1.5 text-center text-[11px] text-cream/80">
              {profile.xp} / {profile.xpToNext} XP
            </p>
          </div>
          <div className="text-center">
            <p className="text-cream/70">РАНГ</p>
            <p className="mt-1 text-[14px] font-semibold text-gold-200 leading-none">
              {profile.rank}
            </p>
          </div>
        </div>
      </div>

      {/* Rows */}
      <ul className="mt-4 space-y-3">
        {rows.map((row) => {
          const Inner = (
            <div className="flex items-center justify-between card-gold px-4 py-3 group hover:border-gold-200/80 transition-colors">
              <div className="flex items-center gap-3">
                <row.Icon className="h-5 w-5 text-gold-200" />
                <span className="text-[13px] tracking-[0.18em] text-cream group-hover:text-gold-200">
                  {row.label}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-gold-200 font-semibold tracking-widest">
                {row.trailing}
                <ChevronRight className="h-4 w-4 text-gold-200" />
              </div>
            </div>
          );

          if (row.href) {
            return (
              <li key={row.label}>
                <Link href={row.href}>{Inner}</Link>
              </li>
            );
          }
          return (
            <li
              key={row.label}
              onClick={() =>
                row.label === "ВЫХОД" ? router.replace("/onboarding") : undefined
              }
              className={row.label === "ВЫХОД" ? "cursor-pointer" : ""}
            >
              {Inner}
            </li>
          );
        })}
      </ul>
    </ScreenContainer>
  );
}
