import { site } from "@/config/site";

/** Shown until `site.prelaunch` is set to false in src/config/site.ts. */
export function PrelaunchBanner() {
  if (!site.prelaunch) return null;
  return (
    <div role="note" className="bg-amber-100 px-4 py-2 text-center text-sm text-amber-950">
      <strong>Preview site.</strong>{" "}
      {site.phone.isPlaceholder
        ? `The phone number ${site.phone.display} is a placeholder and is not a working line.`
        : "Some business details are still being finalized."}
    </div>
  );
}
