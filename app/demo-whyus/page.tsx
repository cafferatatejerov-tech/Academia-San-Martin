import { Award, BookOpen, Users, ShieldCheck, MessageCircle, Trophy } from "lucide-react";
import { PILARES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  award: <Award size={32} aria-hidden="true" />,
  "book-open": <BookOpen size={32} aria-hidden="true" />,
  users: <Users size={32} aria-hidden="true" />,
  "shield-check": <ShieldCheck size={32} aria-hidden="true" />,
  "message-circle": <MessageCircle size={32} aria-hidden="true" />,
  trophy: <Trophy size={32} aria-hidden="true" />,
};

const ICONS_SM: Record<string, React.ReactNode> = {
  award: <Award size={22} aria-hidden="true" />,
  "book-open": <BookOpen size={22} aria-hidden="true" />,
  users: <Users size={22} aria-hidden="true" />,
  "shield-check": <ShieldCheck size={22} aria-hidden="true" />,
  "message-circle": <MessageCircle size={22} aria-hidden="true" />,
  trophy: <Trophy size={22} aria-hidden="true" />,
};

export default function DemoWhyUs() {
  return (
    <div style={{ fontFamily: "var(--font-raleway)" }}>

      {/* ── OPCIÓN 1: Números grandes ── */}
      <section style={{ backgroundColor: "#0d1b4b", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#8899bb", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>OPCIÓN 1</p>
            <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.5rem" }}>¿Por Qué Elegirnos?</h2>
            <p style={{ color: "#8899bb", fontSize: "1rem", margin: 0 }}>Más que una academia — una escuela de vida a través del fútbol.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {PILARES.map((pilar, i) => (
              <div key={pilar.titulo} style={{ position: "relative", padding: "2rem", borderLeft: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
                <span style={{ position: "absolute", top: "-10px", left: "1rem", fontSize: "7rem", fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{ color: "#4fc3f7", marginBottom: "1rem" }}>{ICONS[pilar.icono]}</div>
                <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.6rem", letterSpacing: "0.05em" }}>{pilar.titulo}</h3>
                <p style={{ color: "#8899bb", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{pilar.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPCIÓN 2: Cards con borde blanco centrado ── */}
      <section style={{ backgroundColor: "#1a237e", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>OPCIÓN 2</p>
            <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.5rem" }}>¿Por Qué Elegirnos?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", margin: 0 }}>Más que una academia — una escuela de vida a través del fútbol.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {PILARES.map((pilar) => (
              <div key={pilar.titulo} style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "2rem", textAlign: "center", backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(4px)" }}>
                <div style={{ width: 64, height: 64, border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "#ffffff" }}>{ICONS[pilar.icono]}</div>
                <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem", letterSpacing: "0.05em" }}>{pilar.titulo}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{pilar.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPCIÓN 3: Dos columnas título + lista ── */}
      <section style={{ backgroundColor: "#0a1628", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "2rem" }}>
            <p style={{ color: "#4fc3f7", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>OPCIÓN 3</p>
            <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 1.5rem", lineHeight: 1.05 }}>¿Por Qué Elegirnos?</h2>
            <div style={{ width: 48, height: 3, backgroundColor: "#4fc3f7", marginBottom: "1.5rem" }} />
            <p style={{ color: "#8899bb", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>Más que una academia — una escuela de vida a través del fútbol.</p>
          </div>
          <div>
            {PILARES.map((pilar, i) => (
              <div key={pilar.titulo} style={{ display: "flex", gap: "1.25rem", padding: "1.5rem 0", borderBottom: i < PILARES.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none", alignItems: "flex-start" }}>
                <div style={{ color: "#4fc3f7", flexShrink: 0, marginTop: 2 }}>{ICONS_SM[pilar.icono]}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.4rem", letterSpacing: "0.04em" }}>{pilar.titulo}</h3>
                  <p style={{ color: "#8899bb", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{pilar.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
