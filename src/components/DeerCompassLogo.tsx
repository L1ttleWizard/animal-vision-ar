import Image from "next/image";

type Props = { size?: number; className?: string };

/**
 * Stylised front-facing stag inside a compass ring, drawn as continuous gold
 * hairlines. Used on the loading splash and the first onboarding slide.
 *
 * The head is mirrored about x=120 so the antlers are perfectly symmetrical.
 * `Antler` accepts the side (-1 for the viewer's left, +1 for the right)
 * and emits paths radiating outward from the crown.
 */
export function DeerCompassLogo({ size = 220, className }: Props) {
  return (
    <Image
      src="/deer_logo.png"
      alt=""
      height={size}
      width={size}
      className={className}
    />
  );
}

/**
 * One side of a stag antler. `side = -1` mirrors to the left, `side = +1` is the right.
 * Drawn as a main beam sweeping upward and outward with three tines branching off.
 */
function Antler({ side }: { side: -1 | 1 }) {
  const x = (px: number) => 120 + side * px;
  return (
    <g>
      {/* Main beam from skull base up and out to the top */}
      <path
        d={`M${x(10)} 100
            C ${x(18)} 84 ${x(30)} 70 ${x(40)} 56
            C ${x(48)} 46 ${x(58)} 38 ${x(66)} 32`}
      />
      {/* Lower (brow) tine sweeping toward the temples */}
      <path d={`M${x(16)} 86 C ${x(28)} 78 ${x(40)} 76 ${x(50)} 80`} />
      {/* Middle tine going outward */}
      <path d={`M${x(28)} 72 C ${x(42)} 62 ${x(56)} 60 ${x(68)} 64`} />
      {/* Upper tine, almost vertical, nearer the top */}
      <path d={`M${x(40)} 56 C ${x(46)} 44 ${x(54)} 38 ${x(60)} 32`} />
      {/* Tip fork at the very end of the main beam */}
      <path d={`M${x(66)} 32 C ${x(74)} 26 ${x(80)} 22 ${x(82)} 18`} />
    </g>
  );
}
