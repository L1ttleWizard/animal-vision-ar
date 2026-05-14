"use client";

type Props = {
  on: boolean;
  onChange: (value: boolean) => void;
  label?: string;
};

export function Toggle({ on, onChange, label }: Props) {
  return (
    <button
      aria-label={label}
      role="switch"
      aria-checked={on}
      className="toggle-track"
      data-on={on}
      onClick={() => onChange(!on)}
    >
      <span className="toggle-thumb" />
    </button>
  );
}
