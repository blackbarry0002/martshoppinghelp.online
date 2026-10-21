"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { disclosures, site } from "@/config/site";
import { CallButton } from "./CallButton";
import { ClockIcon, XIcon } from "./icons";

const STORAGE_KEY = "msh-call-popup-seen";
const DELAY_MS = 20_000;
const SCROLL_RATIO = 0.45;
const SKIP_PATHS = ["/privacy", "/terms", "/refund-policy", "/contact"];

function alreadySeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage unavailable (private mode); the pop-up may show again next page.
  }
}

/**
 * One-time call prompt. Opens after a delay, after the visitor scrolls
 * partway down, or on desktop exit intent — whichever comes first — and never
 * again in the same session, or at all once the visitor has tapped a call CTA.
 */
export function CallPopup() {
  const pathname = usePathname();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (SKIP_PATHS.includes(pathname) || alreadySeen()) return;

    const open = () => {
      const dialog = ref.current;
      if (!dialog || dialog.open || alreadySeen()) return cleanup();
      markSeen();
      dialog.showModal();
      cleanup();
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= SCROLL_RATIO) open();
    };
    const onExit = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) open();
    };
    const onCall = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.('[data-cta="call"]')) {
        markSeen();
        cleanup();
      }
    };

    const timer = window.setTimeout(open, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onExit);
    document.addEventListener("click", onCall, true);

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onExit);
      document.removeEventListener("click", onCall, true);
    }
    return cleanup;
  }, [pathname]);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby="call-popup-title"
      aria-describedby="call-popup-desc"
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-navy-900/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative overflow-hidden rounded-t-3xl bg-navy px-6 pt-6 pb-7 text-white">
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
        >
          <XIcon className="size-5" />
          <span className="sr-only">Close</span>
        </button>
        <p className="inline-flex items-center gap-1.5 rounded-full bg-sun px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-navy-900">
          <ClockIcon className="size-4" />
          Don&apos;t wait to get it right
        </p>
        <h2 id="call-popup-title" className="mt-4 pr-8 text-2xl font-extrabold leading-tight sm:text-3xl">
          Need help choosing today? Call now.
        </h2>
        <p id="call-popup-desc" className="mt-3 leading-relaxed text-white/85">
          Skip the hours of comparing tabs and reviews. Talk it through with a real shopping assistant right now — and buy with
          confidence.
        </p>
      </div>

      <div className="px-6 pt-6 pb-6">
        <CallButton variant="accent" size="lg" showNumber label="Call Now for Shopping Help" placement="popup" className="w-full" />
        <ul className="mt-5 space-y-1.5 text-sm text-muted">
          <li>✓ Price and scope explained before you commit</li>
          <li>✓ You make the final purchase decision</li>
        </ul>
        <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-muted">
          {disclosures.paid} {site.name} is independent and not affiliated with Walmart or any other retailer.
        </p>
        <button type="button" onClick={close} className="mt-3 w-full py-2 text-sm font-semibold text-action hover:underline">
          No thanks, I&apos;ll keep browsing
        </button>
      </div>
    </dialog>
  );
}
