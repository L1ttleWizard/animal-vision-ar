import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

export function PawIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <circle cx="6" cy="9" r="2" />
      <circle cx="10" cy="5" r="2" />
      <circle cx="14" cy="5" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M12 21c-3.5 0-6-2.5-6-5.2C6 13 8 11 12 11s6 2 6 4.8C18 18.5 15.5 21 12 21z" />
    </svg>
  );
}

export function ChatIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M3 5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H8l-5 4V5z" />
    </svg>
  );
}

export function TargetIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" strokeLinecap="round" />
    </svg>
  );
}

export function GameIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <rect x="2" y="7" width="20" height="12" rx="4" />
      <circle cx="16" cy="13" r="1.5" fill="#1F2A1A" />
      <circle cx="19" cy="13" r="1.5" fill="#1F2A1A" />
      <rect x="6" y="11" width="2" height="4" fill="#1F2A1A" />
      <rect x="4" y="13" width="6" height="2" fill="#1F2A1A" />
    </svg>
  );
}

export function ProfileIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

export function LockIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      {...props}
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}

export function CoinIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      <defs>
        <radialGradient id="coin-grad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFE49C" />
          <stop offset="55%" stopColor="#F4D67A" />
          <stop offset="100%" stopColor="#B8924E" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#coin-grad)" stroke="#8C6C36" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#5A3F1A"
        fontFamily="serif"
      >
        ◈
      </text>
    </svg>
  );
}

export function SettingsGearIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function BellIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 2a6 6 0 0 0-6 6v4l-2 4h16l-2-4V8a6 6 0 0 0-6-6zm0 20a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3z" />
    </svg>
  );
}

export function CloudIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M19 18H6.5A4.5 4.5 0 1 1 7 9a6 6 0 0 1 11.5 1.5A4.5 4.5 0 0 1 19 18z" />
    </svg>
  );
}

export function PadlockIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function GlobeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}

export function HelpIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" strokeLinecap="round" />
    </svg>
  );
}

export function InfoIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v.01M11 12h1v5h1" strokeLinecap="round" />
    </svg>
  );
}

export function ArIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      {...props}
    >
      <path d="M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize="8"
        fontWeight="700"
      >
        AR
      </text>
    </svg>
  );
}

export function TrophyIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M7 4h10v3a5 5 0 0 1-10 0V4zm-3 1h2v2a3 3 0 0 1-2 0V5zm14 0h2v2a3 3 0 0 1-2 0V5zM9 13h6v3l1 4H8l1-4v-3z" />
    </svg>
  );
}

export function FriendsIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M2 20c0-3 2.7-5 6-5s6 2 6 5M14 20c0-3 2.7-5 6-5s6 2 6 5" />
    </svg>
  );
}

export function NotebookIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" stroke="#1F2A1A" strokeWidth="1.4" />
    </svg>
  );
}

export function BookmarkIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M6 3h12v18l-6-4-6 4V3z" />
    </svg>
  );
}

export function LogoutIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      {...props}
    >
      <path d="M9 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronRight({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronLeft({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <path d="M6 6l12 12M18 6l-6 6-6 6" strokeLinecap="round" />
    </svg>
  );
}

export function EditIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      {...props}
    >
      <path d="M14 4l6 6L9 21H3v-6L14 4z" strokeLinejoin="round" />
    </svg>
  );
}

export function CompassIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      <text x="32" y="14" textAnchor="middle" fill="currentColor" fontSize="6">
        N
      </text>
      <text x="32" y="56" textAnchor="middle" fill="currentColor" fontSize="6">
        S
      </text>
      <text x="9" y="35" textAnchor="middle" fill="currentColor" fontSize="6">
        W
      </text>
      <text x="55" y="35" textAnchor="middle" fill="currentColor" fontSize="6">
        E
      </text>
      <path
        d="M32 18l3 14-3 14-3-14 3-14z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}
