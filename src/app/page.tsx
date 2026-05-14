"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

export default function HomeGate() {
  const router = useRouter();
  const onboardingDone = useAppSelector((s) => s.onboarding.completed);

  useEffect(() => {
    if (!onboardingDone) {
      router.replace("/onboarding");
    } else {
      router.replace("/loading?next=%2Fgallery");
    }
  }, [onboardingDone, router]);

  return null;
}
