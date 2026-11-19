import { ImageResponse } from "next/og";

export const alt = "ABD Search — Specialists in Rare Disease Talent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d3b26",
          padding: "64px 72px",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 28,
            letterSpacing: 4,
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              letterSpacing: 1,
            }}
          >
            ABD
          </div>
          ABD SEARCH
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
            Specialists in Rare Disease Talent
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.72)",
              fontFamily: "sans-serif",
              maxWidth: 780,
              lineHeight: 1.4,
            }}
          >
            Focused search for rare disease & orphan drug teams across the full
            development lifecycle.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
