import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SANDBOX_CON } from "@/lib/events";

export const alt = "V-SandBox: la comunidad hacker de Quito";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo/logocompleto.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          background: "radial-gradient(circle at 15% 0%, rgba(255,77,0,0.35), transparent 45%), radial-gradient(circle at 100% 100%, rgba(139,92,246,0.3), transparent 45%), #07070a",
          color: "#f4f4f6",
        }}
      >
        <img src={logoSrc} width={390} height={130} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>La comunidad hacker</div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1.1 }}>
            de <span style={{ color: "#ff4d00", marginLeft: 22 }}>Quito.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a6a6b3" }}>
          <span>Conferencias · CTFs · Villages · Meetups</span>
          <span style={{ color: "#ffb020" }}>{SANDBOX_CON.name} · 08 NOV</span>
        </div>
      </div>
    ),
    size
  );
}
