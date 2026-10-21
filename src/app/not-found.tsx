import Link from "next/link";
import { CallButton } from "@/components/CallButton";

export default function NotFound() {
  return (
    <section className="container-page py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal">Page not found</p>
      <h1 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">We couldn&apos;t find that page.</h1>
      <p className="mt-4 text-lg text-muted">Head back home, or call and talk to a shopping assistant.</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/" className="inline-flex min-h-11 items-center rounded-full border-2 border-action px-5 font-bold text-action hover:bg-action-50">
          Go to homepage
        </Link>
        <CallButton placement="404" />
      </div>
    </section>
  );
}
