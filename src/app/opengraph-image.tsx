import { ImageResponse } from "next/og";
import { disclosures, site } from "@/config/site";

export const alt = `${site.name} — independent shopping assistance`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#173D7A",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 800 }}>
          Mart Shopping <span style={{ color: "#2BB3B1", marginLeft: 10 }}>Help</span>
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.1, maxWidth: 950 }}>
          Shopping questions? Get help from a real person.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.8)" }}>{disclosures.short}</div>
      </div>
    ),
    size,
  );
}
