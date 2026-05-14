"use client";

import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { makeStore, type AppStore, type RootState } from "./index";

const PERSIST_KEY = "animal-vision-ar:v1";

function loadInitial(): Partial<RootState> | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = window.localStorage.getItem(PERSIST_KEY);
    if (!raw) return undefined;
    return JSON.parse(raw) as Partial<RootState>;
  } catch {
    return undefined;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  // Lazy initialiser ensures we read localStorage exactly once per mount.
  const [store] = useState<AppStore>(() => makeStore(loadInitial()));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer first render until after hydration to avoid mismatches when
    // reading localStorage-backed Redux state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const unsubscribe = store.subscribe(() => {
      try {
        window.localStorage.setItem(
          PERSIST_KEY,
          JSON.stringify(store.getState())
        );
      } catch {
        // ignore
      }
    });
    return () => unsubscribe();
  }, [store]);

  return (
    <Provider store={store}>{mounted ? children : null}</Provider>
  );
}
