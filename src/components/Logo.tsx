import Link from "next/link";

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    // Matches brand/logos/msh-mark.svg, cropped to the tile.
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill="#0A57DA" />
      <g transform="translate(16 16.8) scale(0.9) translate(-16 -16)">
        <path d="M8.5 12.5h15l-1.3 12a2 2 0 0 1-2 1.8h-8.4a2 2 0 0 1-2-1.8Z" fill="#fff" />
        <path d="M12.5 12.5v-1.8a3.5 3.5 0 0 1 7 0v1.8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="m12.6 18.9 2.4 2.4 4.4-4.6" fill="none" stroke="#0A57DA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="7.5" r="5.6" fill="#FFC94A" stroke="#0A57DA" strokeWidth="1.4" />
        <path
          transform="translate(21.5 4) scale(0.29)"
          d="M5 3.5h3.2l1.6 4.2-2.1 1.3a11.5 11.5 0 0 0 7.3 7.3l1.3-2.1 4.2 1.6V19a1.8 1.8 0 0 1-1.9 1.8A16.6 16.6 0 0 1 3.2 5.4 1.8 1.8 0 0 1 5 3.5Z"
          fill="#0A57DA"
        />
      </g>
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2.5" aria-label="Mart Shopping Assist home">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`whitespace-nowrap text-lg font-extrabold tracking-tight ${inverted ? "text-white" : "text-navy"}`}>
          Mart Shopping <span className={inverted ? "text-sun" : "text-action"}>Assist</span>
        </span>
        <span className={`mt-1 hidden text-[0.68rem] sm:block font-semibold uppercase tracking-[0.12em] ${inverted ? "text-white/70" : "text-muted"}`}>
          Independent shopping assistance
        </span>
      </span>
    </Link>
  );
}
