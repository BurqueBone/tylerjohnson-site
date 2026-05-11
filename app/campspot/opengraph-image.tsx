import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tyler Johnson for Campspot — Sr. Manager, Revenue Operations";
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
            fontSize: 28,
            color: "#4D7298",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          For Campspot · Sr. Manager, Revenue Operations
        </div>
        <div
          style={{
            marginTop: 24,
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
            color: "#77A6B6",
          }}
        >
          Revenue Operations Leader
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 26,
            color: "#5C7484",
            maxWidth: 1000,
          }}
        >
          First-ops-hire DNA · Two-sided marketplace operator · HubSpot-fluent
        </div>
      </div>
    ),
    size,
  );
}
