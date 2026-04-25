import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tyler Johnson - GTM Operations Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FAFCF6",
          color: "#1A2933",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          Tyler Johnson
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 42,
            color: "#4D7298",
          }}
        >
          Go-to-Market Operations Leader
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            color: "#5C7484",
            maxWidth: 900,
          }}
        >
          Systems that turn GTM strategy into measurable pipeline.
        </div>
      </div>
    ),
    size,
  );
}
