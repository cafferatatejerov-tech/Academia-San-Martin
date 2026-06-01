import { Raleway, Barlow_Condensed, Bebas_Neue, Montserrat } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"], display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });

const FONTS = [
  { name: "Opción 1 — Raleway", desc: "Elegante, geométrica, sofisticada", font: raleway.style.fontFamily, weight: "700", spacing: "0.08em" },
  { name: "Opción 2 — Barlow Condensed", desc: "Deportiva, moderna, limpia", font: barlow.style.fontFamily, weight: "700", spacing: "0.06em" },
  { name: "Opción 3 — Bebas Neue", desc: "Impactante, bold, estilo Cristal", font: bebas.style.fontFamily, weight: "400", spacing: "0.1em" },
  { name: "Opción 4 — Montserrat", desc: "Premium, versátil, muy legible", font: montserrat.style.fontFamily, weight: "700", spacing: "0.06em" },
];

export default function FontDemo() {
  return (
    <div style={{ backgroundColor: "#f5f7fc", minHeight: "100vh", padding: "2rem 1.5rem" }}>
      <h1 style={{ fontFamily: "system-ui", fontSize: "1rem", color: "#64748b", marginBottom: "2rem", textAlign: "center" }}>
        Elige tu tipografía preferida → avísame el número
      </h1>

      {FONTS.map((f, i) => (
        <div key={i} style={{ backgroundColor: "#ffffff", borderRadius: "12px", marginBottom: "1.5rem", overflow: "hidden", border: "1px solid #e2e8f0" }}>
          {/* Header oscuro */}
          <div style={{ backgroundColor: "#0d1b4b", padding: "2rem 2rem 1.5rem" }}>
            <p style={{ color: "#93a8f4", fontSize: "0.72rem", letterSpacing: "0.15em", margin: "0 0 0.5rem", fontFamily: "system-ui", textTransform: "uppercase" }}>{f.name}</p>
            <h2 style={{ fontFamily: f.font, fontSize: "clamp(2rem, 8vw, 3.5rem)", fontWeight: f.weight, color: "#ffffff", textTransform: "uppercase", letterSpacing: f.spacing, margin: "0 0 0.5rem", lineHeight: 1 }}>
              Academia San Martín
            </h2>
            <p style={{ fontFamily: f.font, fontSize: "clamp(1rem, 4vw, 1.4rem)", fontWeight: f.weight, color: "#3949ab", textTransform: "uppercase", letterSpacing: f.spacing, margin: 0 }}>
              Nuestras Categorías
            </p>
          </div>

          {/* Sección blanca */}
          <div style={{ padding: "1.5rem 2rem", borderBottom: "3px solid #1a237e" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.7rem", margin: "0 0 0.4rem", fontFamily: "system-ui", textTransform: "uppercase", letterSpacing: "0.1em" }}>{f.desc}</p>
            <h3 style={{ fontFamily: f.font, fontSize: "clamp(1.4rem, 5vw, 2rem)", fontWeight: f.weight, color: "#1a237e", textTransform: "uppercase", letterSpacing: f.spacing, margin: "0 0 0.5rem" }}>
              ¿Por Qué Elegirnos?
            </h3>
            <p style={{ fontFamily: f.font, fontSize: "clamp(0.9rem, 3vw, 1.1rem)", fontWeight: "600", color: "#64748b", margin: 0, letterSpacing: "0.03em" }}>
              Baby Fútbol · Fútbol Base · Juvenil · Adultos
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
