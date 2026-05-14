/**
 * Repeated decorative layer used inside every "internal" screen. Provides the
 * deep green gradient with subtle paw-prints/feathers and golden sparkles.
 */
export function ScreenBackground() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#26341a_0%,#162009_55%,#0a1006_100%)]" />
      <div className="absolute inset-0 opacity-60 paw-bg" />
      <div className="absolute inset-0 opacity-90 sparkles-bg animate-sparkle" />
      <div className="absolute inset-0 vignette" />
      {/* Subtle paw print SVG cluster */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        viewBox="0 0 393 852"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <g id="paw-print">
            <ellipse cx="0" cy="6" rx="6" ry="4.5" fill="#F4D67A" />
            <ellipse cx="-7" cy="-3" rx="2.5" ry="3.5" fill="#F4D67A" />
            <ellipse cx="-2.5" cy="-6.5" rx="2.5" ry="3.5" fill="#F4D67A" />
            <ellipse cx="2.5" cy="-6.5" rx="2.5" ry="3.5" fill="#F4D67A" />
            <ellipse cx="7" cy="-3" rx="2.5" ry="3.5" fill="#F4D67A" />
          </g>
          <g id="bird-tracks">
            <path d="M0 0 L-3 6 M0 0 L0 7 M0 0 L3 6" stroke="#F4D67A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          </g>
        </defs>
        <g>
          <use href="#paw-print" transform="translate(40,80) rotate(-20)" />
          <use href="#paw-print" transform="translate(70,140) rotate(-10)" />
          <use href="#bird-tracks" transform="translate(310,160) scale(1.6)" />
          <use href="#bird-tracks" transform="translate(330,200) scale(1.4)" />
          <use href="#paw-print" transform="translate(300,440) rotate(20) scale(1.2)" />
          <use href="#paw-print" transform="translate(350,500) rotate(40) scale(1.0)" />
          <use href="#paw-print" transform="translate(60,680) rotate(-30) scale(1.3)" />
          <use href="#bird-tracks" transform="translate(40,760) scale(1.8)" />
          <use href="#bird-tracks" transform="translate(80,780) scale(1.4)" />
        </g>
      </svg>
    </div>
  );
}
