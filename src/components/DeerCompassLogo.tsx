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
