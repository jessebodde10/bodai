import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Bodai, naar homepage"
      className={`inline-flex items-baseline font-extrabold tracking-tight text-fg text-[1.55rem] leading-none select-none ${className}`}
    >
      boda
      <span className="relative inline-block">
        {/* i zonder punt, met limegroen blokje als dot */}
        <span aria-hidden className="relative inline-block">
          ı
          <span className="absolute -top-[0.42em] left-1/2 h-[0.24em] w-[0.24em] -translate-x-1/2 rounded-[2px] bg-accent-fill" />
        </span>
        <span className="sr-only">i</span>
      </span>
    </Link>
  );
}
