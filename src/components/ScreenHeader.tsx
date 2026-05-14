"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, CloseIcon } from "./icons";

type Props = {
  title: string;
  backHref?: string;
  closeHref?: string;
  showBack?: boolean;
  showClose?: boolean;
};

export function ScreenHeader({
  title,
  backHref,
  closeHref,
  showBack = true,
  showClose = false,
}: Props) {
  const router = useRouter();

  return (
    <header className="relative grid grid-cols-[40px_1fr_40px] items-center px-2 pt-2">
      {showBack ? (
        backHref ? (
          <Link
            href={backHref}
            aria-label="Назад"
            className="text-cream/85 hover:text-gold-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </Link>
        ) : (
          <button
            onClick={() => router.back()}
            aria-label="Назад"
            className="text-cream/85 hover:text-gold-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )
      ) : (
        <span />
      )}
      <h1 className="text-center text-[20px] font-semibold tracking-[0.22em] text-cream">
        {title}
      </h1>
      {showClose ? (
        closeHref ? (
          <Link
            href={closeHref}
            aria-label="Закрыть"
            className="text-cream/85 hover:text-gold-200 justify-self-end"
          >
            <CloseIcon className="h-6 w-6" />
          </Link>
        ) : (
          <button
            onClick={() => router.push("/")}
            aria-label="Закрыть"
            className="text-cream/85 hover:text-gold-200 justify-self-end"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        )
      ) : (
        <span />
      )}
    </header>
  );
}
