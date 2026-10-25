// The four-petal mark. Petals use currentColor; the centre is always orange.

export const PETAL = "M47 14H30.5A16.5 16.5 0 0 0 14 30.5V47H30.5A16.5 16.5 0 0 0 47 30.5Z";

export function Petals({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden fill="currentColor">
      {[0, 90, 180, 270].map((r) => (
        <path key={r} d={PETAL} transform={r ? `rotate(${r} 50 50)` : undefined} />
      ))}
    </svg>
  );
}

export function Centre({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx="50" cy="50" r="7.5" fill="var(--accent)" />
    </svg>
  );
}

export default function Logo({ className = "size-9" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Petals className="absolute inset-0 size-full" />
      <Centre className="absolute inset-0 size-full" />
    </span>
  );
}
