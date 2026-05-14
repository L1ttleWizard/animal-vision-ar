import { PhoneStatusBar } from "./PhoneStatusBar";

type Props = {
  children: React.ReactNode;
  /** When true the inner content area is full-bleed (no padding) — used for camera screens. */
  bleed?: boolean;
};

/**
 * Renders an iPhone 15-style frame around the app on desktop and switches to a
 * full-screen container on real mobile devices.
 *
 * Logical iOS dimensions: 393 x 852 (we render at 393 x 852).
 */
export function PhoneFrame({ children, bleed = false }: Props) {
  return (
    <div className="min-h-dvh w-full flex items-center justify-center px-3 py-6 md:py-10">
      <div className="relative mx-auto w-full max-w-[393px] md:max-w-[420px]">
        <div className="hidden md:block absolute -inset-3 rounded-[58px] bg-[#0b0d08] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]" />
        <div className="hidden md:block absolute -inset-2 rounded-[54px] border border-[#3a3a3a] bg-gradient-to-b from-[#2a2a2a] via-[#171717] to-[#242424]" />
        <div
          className="relative w-full md:rounded-[48px] overflow-hidden md:border md:border-[#4d4d4d] bg-bg-deep"
          style={{ aspectRatio: "393 / 852" }}
        >
          {/* Phone notch (Dynamic Island) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 z-50 h-[28px] w-[110px] rounded-full bg-black md:bg-black hidden md:block" />

          {/* Inner screen layer */}
          <div className="absolute inset-0 flex flex-col">
            <PhoneStatusBar />
            <div
              className={`flex-1 relative overflow-hidden ${
                bleed ? "" : ""
              }`}
            >
              {children}
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[5px] w-[120px] rounded-full bg-white/70 z-50" />
        </div>
      </div>
    </div>
  );
}
