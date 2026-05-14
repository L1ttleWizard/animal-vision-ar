"use client";

import { useRouter } from "next/navigation";
import { AnimalHead } from "@/components/AnimalHead";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Toggle } from "@/components/Toggle";
import {
  ArIcon,
  BellIcon,
  ChevronRight,
  CloudIcon,
  GlobeIcon,
  HelpIcon,
  InfoIcon,
  LogoutIcon,
  PadlockIcon,
} from "@/components/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggle, type SettingsState } from "@/store/slices/settingsSlice";

export default function SettingsPage() {
  const router = useRouter();
  const profile = useAppSelector((s) => s.profile);
  const settings = useAppSelector((s) => s.settings);
  const dispatch = useAppDispatch();

  const t = (key: keyof SettingsState) => () => dispatch(toggle(key));

  return (
    <div className="absolute inset-0 flex flex-col">
      <ScreenHeader
        title="НАСТРОЙКИ"
        backHref="/profile"
        showClose
        closeHref="/profile"
      />

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-3 pb-24 space-y-3">
        {/* Account block */}
        <section className="card-gold px-4 py-3">
          <div className="flex items-start gap-3">
            <div className="h-14 w-14 rounded-full border border-gold-200/45 bg-[#142010] grid place-items-center overflow-hidden">
              <AnimalHead animal="fox" size={60} />
            </div>
            <div>
              <p className="text-[12px] tracking-[0.22em] text-cream/70">
                АККАУНТ И ДАННЫЕ
              </p>
              <p className="text-[13px] tracking-[0.15em] text-gold-200 font-semibold mt-1">
                ИМЯ: {profile.name.toUpperCase()}
              </p>
              <p className="text-[13px] tracking-[0.15em] text-gold-200 font-semibold">
                РАНГ: {profile.rank.toUpperCase()}
              </p>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-cream/65 border-t border-gold-200/15 pt-2">
            Редактировать данные в разделе &laquo;Личные данные&raquo;
          </p>
        </section>

        {/* Data + Cloud */}
        <section className="card-gold px-4 py-3 flex items-center gap-3">
          <CloudIcon className="h-5 w-5 text-gold-200" />
          <div className="flex-1">
            <p className="text-[13px] tracking-[0.18em] text-cream">
              ДАННЫЕ И ОБЛАКО
            </p>
            <p className="text-[11px] text-cream/70 mt-0.5">
              Синхронизация с облаком
            </p>
          </div>
          <Toggle on={settings.cloudSync} onChange={t("cloudSync")} label="Облако" />
        </section>

        {/* Notifications */}
        <section className="card-gold px-4 py-3">
          <div className="flex items-center gap-3">
            <BellIcon className="h-5 w-5 text-gold-200" />
            <div>
              <p className="text-[13px] tracking-[0.18em] text-cream">
                УВЕДОМЛЕНИЯ
              </p>
              <p className="text-[11px] text-cream/70 mt-0.5">
                Настройка уведомлений
              </p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 items-start">
            <Row label="Push-уведомления" on={settings.push} onClick={t("push")} />
            <Row
              label="Достижения"
              on={settings.achievements}
              onClick={t("achievements")}
            />
            <Row
              label="Новые наблюдения"
              on={settings.newObservations}
              onClick={t("newObservations")}
            />
          </div>
        </section>

        {/* AR + Camera */}
        <section className="card-gold px-4 py-3">
          <div className="flex items-center gap-3">
            <ArIcon className="h-5 w-5 text-gold-200" />
            <p className="text-[13px] tracking-[0.18em] text-cream">
              AR И КАМЕРА
            </p>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-[11px] tracking-widest text-cream/85">
                Виброотклик
              </span>
              <Toggle on={settings.haptics} onChange={t("haptics")} label="Виброотклик" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 items-center">
            <div className="flex items-center gap-2">
              <span className="text-[11px] tracking-widest text-cream/85 max-w-[100px] leading-tight">
                Доступ к камере
              </span>
              <Toggle on={settings.cameraAccess} onChange={t("cameraAccess")} label="Камера" />
            </div>
            <button className="rounded-full border border-gold-200/60 bg-black/30 px-3 py-1 text-[10px] tracking-widest text-gold-200 flex items-center justify-between gap-2">
              <span>Очистить кэш (1.2 ГБ)</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>

        {/* Privacy */}
        <section className="card-gold px-4 py-3">
          <div className="flex items-center gap-3">
            <PadlockIcon className="h-5 w-5 text-gold-200" />
            <p className="text-[13px] tracking-[0.18em] text-cream">
              КОНФИДЕНЦИАЛЬНОСТЬ
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] tracking-widest text-cream/85 max-w-[110px] leading-tight">
                Видимость профиля
              </span>
              <Toggle
                on={settings.profileVisibility}
                onChange={t("profileVisibility")}
                label="Видимость"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] tracking-widest text-cream/85">
                Геоданные
              </span>
              <Toggle on={settings.geo} onChange={t("geo")} label="Гео" />
            </div>
          </div>
        </section>

        {/* Language */}
        <FlatRow Icon={GlobeIcon} label="ЯЗЫК И ТЕМА" trailing={`Язык приложения: ${settings.language === "ru" ? "Русский" : "English"}`} />
        <FlatRow Icon={HelpIcon} label="ПОДДЕРЖКА" trailing="FAQ и Обратная связь" />
        <FlatRow Icon={InfoIcon} label="О ПРИЛОЖЕНИИ" trailing="Версия 2.3.1" />

        <button
          onClick={() => router.replace("/onboarding")}
          className="w-full card-gold px-4 py-3 flex items-center justify-center gap-2 text-[13px] tracking-[0.22em] text-cream hover:text-gold-200"
        >
          <LogoutIcon className="h-4 w-4 text-gold-200" />
          ВЫХОД
        </button>
      </div>
    </div>
  );
}

function Row({
  label,
  on,
  onClick,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col items-start gap-1">
      <Toggle on={on} onChange={onClick} label={label} />
      <span className="text-[10px] text-cream/85 leading-tight">{label}</span>
    </div>
  );
}

function FlatRow({
  Icon,
  label,
  trailing,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement> & { className?: string }>;
  label: string;
  trailing: string;
}) {
  return (
    <div className="card-gold flex items-center gap-3 px-4 py-3">
      <Icon className="h-5 w-5 text-gold-200" />
      <p className="text-[13px] tracking-[0.18em] text-cream">{label}</p>
      <div className="ml-auto flex items-center gap-2 text-[11px] text-gold-300">
        <span className="max-w-[140px] text-right leading-tight">
          {trailing}
        </span>
        <ChevronRight className="h-4 w-4 text-gold-200" />
      </div>
    </div>
  );
}
