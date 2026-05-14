import type { AnimalId } from "@/data/animals";

type Props = {
  animal: AnimalId;
  size?: number;
  className?: string;
};

/**
 * Stylised circular animal head emblems used in the gallery / profile / chat
 * lists.  Each is a tiny illustration tuned to look at home on the dark green
 * background.
 */
export function AnimalHead({ animal, size = 80, className }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    className,
  };

  switch (animal) {
    case "cat":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="cat-fur" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#6e6a5c" />
              <stop offset="100%" stopColor="#2a281c" />
            </radialGradient>
          </defs>
          <polygon points="25,40 18,15 38,28" fill="url(#cat-fur)" />
          <polygon points="75,40 82,15 62,28" fill="url(#cat-fur)" />
          <ellipse cx="50" cy="55" rx="32" ry="30" fill="url(#cat-fur)" />
          <ellipse cx="38" cy="50" rx="5" ry="6" fill="#F4D67A" />
          <ellipse cx="62" cy="50" rx="5" ry="6" fill="#F4D67A" />
          <ellipse cx="38" cy="51" rx="1.5" ry="4" fill="#1a1808" />
          <ellipse cx="62" cy="51" rx="1.5" ry="4" fill="#1a1808" />
          <path
            d="M44 64 L50 70 L56 64"
            stroke="#1a1808"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="48,60 50,64 52,60" fill="#F0B5A0" />
          <path
            d="M30 56 L18 54 M30 60 L18 62 M70 56 L82 54 M70 60 L82 62"
            stroke="#888"
            strokeWidth="0.7"
            opacity="0.7"
          />
        </svg>
      );

    case "dog":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="dog-fur" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#9a8758" />
              <stop offset="100%" stopColor="#4e4326" />
            </radialGradient>
          </defs>
          <ellipse cx="28" cy="32" rx="13" ry="22" fill="#3a3119" transform="rotate(-25 28 32)" />
          <ellipse cx="72" cy="32" rx="13" ry="22" fill="#3a3119" transform="rotate(25 72 32)" />
          <ellipse cx="50" cy="55" rx="30" ry="28" fill="url(#dog-fur)" />
          <ellipse cx="50" cy="68" rx="14" ry="10" fill="#c8b07a" />
          <ellipse cx="40" cy="48" rx="3" ry="4" fill="#1a1408" />
          <ellipse cx="60" cy="48" rx="3" ry="4" fill="#1a1408" />
          <ellipse cx="50" cy="62" rx="4" ry="3" fill="#1a1408" />
          <path
            d="M46 72 Q50 76 54 72"
            stroke="#1a1408"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      );

    case "eagle":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="eagle-head" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#bdb5a5" />
              <stop offset="100%" stopColor="#6b6452" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="50" rx="32" ry="30" fill="url(#eagle-head)" />
          <path
            d="M48 56 Q40 60 38 70 Q44 64 50 64 Q56 64 62 70 Q60 60 52 56 Z"
            fill="#d9a73a"
          />
          <path
            d="M48 56 Q44 58 42 64 Q46 60 50 60 Q54 60 58 64 Q56 58 52 56 Z"
            fill="#f4d67a"
          />
          <ellipse cx="40" cy="44" rx="4" ry="5" fill="#1a1408" />
          <ellipse cx="60" cy="44" rx="4" ry="5" fill="#1a1408" />
          <circle cx="41" cy="43" r="1" fill="#F4D67A" />
          <circle cx="61" cy="43" r="1" fill="#F4D67A" />
          <path
            d="M30 38 Q22 42 24 50"
            stroke="#888"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );

    case "wolf":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="wolf-fur" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#9aa0a0" />
              <stop offset="100%" stopColor="#3f4444" />
            </radialGradient>
          </defs>
          <polygon points="22,40 14,12 36,28" fill="#4f5454" />
          <polygon points="78,40 86,12 64,28" fill="#4f5454" />
          <ellipse cx="50" cy="55" rx="32" ry="30" fill="url(#wolf-fur)" />
          <path d="M50 30 L40 56 L50 60 L60 56 Z" fill="#dcdcdc" />
          <ellipse cx="40" cy="50" rx="4" ry="5" fill="#F4D67A" />
          <ellipse cx="60" cy="50" rx="4" ry="5" fill="#F4D67A" />
          <ellipse cx="40" cy="51" rx="1.5" ry="4" fill="#1a1808" />
          <ellipse cx="60" cy="51" rx="1.5" ry="4" fill="#1a1808" />
          <ellipse cx="50" cy="66" rx="4" ry="3" fill="#1a1808" />
          <path
            d="M46 76 Q50 80 54 76"
            stroke="#1a1808"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      );

    case "fox":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="fox-fur" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#e87a3a" />
              <stop offset="100%" stopColor="#a8451a" />
            </radialGradient>
          </defs>
          <polygon points="22,40 14,10 38,28" fill="#bf5520" />
          <polygon points="78,40 86,10 62,28" fill="#bf5520" />
          <ellipse cx="50" cy="55" rx="32" ry="30" fill="url(#fox-fur)" />
          <path d="M30 56 L50 80 L70 56 Z" fill="#f3ecd6" />
          <ellipse cx="40" cy="50" rx="4" ry="5" fill="#1a1408" />
          <ellipse cx="60" cy="50" rx="4" ry="5" fill="#1a1408" />
          <ellipse cx="50" cy="66" rx="3" ry="2.4" fill="#1a1408" />
          <path
            d="M46 74 Q50 78 54 74"
            stroke="#1a1408"
            strokeWidth="1.4"
            fill="none"
          />
          <circle cx="34" cy="58" r="3" fill="#fff" opacity="0.6" />
          <circle cx="66" cy="58" r="3" fill="#fff" opacity="0.6" />
        </svg>
      );

    case "bear":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="bear-fur" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#7a5a39" />
              <stop offset="100%" stopColor="#352318" />
            </radialGradient>
          </defs>
          <circle cx="26" cy="34" r="11" fill="#3a2818" />
          <circle cx="74" cy="34" r="11" fill="#3a2818" />
          <circle cx="26" cy="34" r="5" fill="#9b7548" />
          <circle cx="74" cy="34" r="5" fill="#9b7548" />
          <ellipse cx="50" cy="58" rx="32" ry="30" fill="url(#bear-fur)" />
          <ellipse cx="50" cy="68" rx="14" ry="10" fill="#b58a5b" />
          <ellipse cx="40" cy="52" rx="3" ry="4" fill="#1a0e06" />
          <ellipse cx="60" cy="52" rx="3" ry="4" fill="#1a0e06" />
          <ellipse cx="50" cy="64" rx="4" ry="3" fill="#1a0e06" />
        </svg>
      );

    case "owl":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="owl-fur" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#a8966a" />
              <stop offset="100%" stopColor="#4a3d22" />
            </radialGradient>
          </defs>
          <polygon points="22,30 14,8 38,22" fill="#5a4a26" />
          <polygon points="78,30 86,8 62,22" fill="#5a4a26" />
          <ellipse cx="50" cy="55" rx="34" ry="30" fill="url(#owl-fur)" />
          <circle cx="38" cy="50" r="10" fill="#f7e9c4" />
          <circle cx="62" cy="50" r="10" fill="#f7e9c4" />
          <circle cx="38" cy="50" r="5" fill="#F4D67A" />
          <circle cx="62" cy="50" r="5" fill="#F4D67A" />
          <circle cx="38" cy="50" r="2" fill="#1a1408" />
          <circle cx="62" cy="50" r="2" fill="#1a1408" />
          <path d="M44 64 L50 72 L56 64 Z" fill="#d9a73a" />
        </svg>
      );

    case "zebra":
      return (
        <svg {...common}>
          <ellipse cx="50" cy="52" rx="32" ry="32" fill="#f1ece0" />
          <path
            d="M30 30 L36 56 M40 22 L42 62 M50 20 L48 64 M60 22 L58 62 M70 30 L64 56 M22 38 L34 44 M22 50 L34 50 M22 60 L34 56 M78 38 L66 44 M78 50 L66 50 M78 60 L66 56"
            stroke="#1a1408"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="40" cy="48" rx="2.5" ry="3" fill="#1a1408" />
          <ellipse cx="60" cy="48" rx="2.5" ry="3" fill="#1a1408" />
          <ellipse cx="50" cy="64" rx="4" ry="3" fill="#1a1408" />
        </svg>
      );

    case "elephant":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="ele-fur" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#a2a3a0" />
              <stop offset="100%" stopColor="#56564f" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="48" rx="35" ry="30" fill="url(#ele-fur)" />
          <ellipse cx="22" cy="50" rx="14" ry="22" fill="#797971" />
          <ellipse cx="78" cy="50" rx="14" ry="22" fill="#797971" />
          <path
            d="M50 60 Q44 68 46 78 Q50 82 54 78 Q56 68 50 60 Z"
            fill="#7c7c74"
          />
          <ellipse cx="40" cy="46" rx="3" ry="4" fill="#1a1408" />
          <ellipse cx="60" cy="46" rx="3" ry="4" fill="#1a1408" />
        </svg>
      );

    case "snake":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="snake-skin" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#8eb04d" />
              <stop offset="100%" stopColor="#324d18" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="55" rx="32" ry="28" fill="url(#snake-skin)" />
          <path
            d="M50 80 Q48 86 50 92 Q52 86 50 80"
            fill="#a83020"
            opacity="0.85"
          />
          <ellipse cx="40" cy="50" rx="4" ry="5" fill="#F4D67A" />
          <ellipse cx="60" cy="50" rx="4" ry="5" fill="#F4D67A" />
          <ellipse cx="40" cy="50" rx="1.2" ry="4" fill="#1a1408" />
          <ellipse cx="60" cy="50" rx="1.2" ry="4" fill="#1a1408" />
          <path
            d="M28 60 Q22 62 22 70 M72 60 Q78 62 78 70"
            stroke="#5b7028"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      );

    case "bee":
      return (
        <svg {...common}>
          <ellipse cx="50" cy="56" rx="32" ry="28" fill="#f4d04a" />
          <path
            d="M30 56 H70 M30 66 H70 M34 46 H66"
            stroke="#1a1408"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="30" cy="30" rx="14" ry="10" fill="#e5e8ff" opacity="0.7" />
          <ellipse cx="70" cy="30" rx="14" ry="10" fill="#e5e8ff" opacity="0.7" />
          <ellipse cx="40" cy="52" rx="3" ry="4" fill="#1a1408" />
          <ellipse cx="60" cy="52" rx="3" ry="4" fill="#1a1408" />
        </svg>
      );

    case "horse":
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="horse-fur" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#8a6a4a" />
              <stop offset="100%" stopColor="#3a2818" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="58" rx="26" ry="34" fill="url(#horse-fur)" />
          <polygon points="38,22 28,4 50,18" fill="#3a2818" />
          <polygon points="62,22 72,4 50,18" fill="#3a2818" />
          <ellipse cx="42" cy="58" rx="3" ry="4" fill="#1a0e06" />
          <ellipse cx="58" cy="58" rx="3" ry="4" fill="#1a0e06" />
          <path d="M44 80 Q50 86 56 80" fill="#1a0e06" />
        </svg>
      );
  }
}
