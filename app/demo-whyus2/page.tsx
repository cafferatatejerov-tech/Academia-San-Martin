import { Award, BookOpen, Users, ShieldCheck, MessageCircle, Trophy } from "lucide-react";
import { PILARES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  award: <Award size={20} aria-hidden="true" />,
  "book-open": <BookOpen size={20} aria-hidden="true" />,
  users: <Users size={20} aria-hidden="true" />,
  "shield-check": <ShieldCheck size={20} aria-hidden="true" />,
  "message-circle": <MessageCircle size={20} aria-hidden="true" />,
  trophy: <Trophy size={20} aria-hidden="true" />,
};

export default function DemoWhyUs2() {
  return (
    <div style={{ fontFamily: "var(--font-raleway)" }}>

      {/* ── OPCIÓN A: Bento grid — bloques de distinto tamaño ── */}
      <section style={{ backgroundColor: "#0d1b4b", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ color: "#4fc3f7", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 3rem" }}>— OPCIÓN A: BENTO GRID</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: "12px" }}>

            {/* Card grande — ocupa 2 columnas */}
            <div style={{ gridColumn: "1 / 3", backgroundColor: "#111e4f", padding: "2.5rem", display: "flex", gap: "2rem", alignItems: "center" }}>
              <div style={{ flexShrink: 0, width: 56, height: 56, backgroundColor: "#1a237e", display: "flex", alignItems: "center", justifyContent: "center", color: "#4fc3f7" }}>
                <Award size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.5rem", letterSpacing: "0.04em" }}>{PILARES[0].titulo}</h3>
                <p style={{ color: "#8899bb", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{PILARES[0].descripcion}</p>
              </div>
            </div>

            {/* Card pequeño — ocupa 1 columna */}
            <div style={{ backgroundColor: "#1a237e", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ color: "#ffffff", marginBottom: "1rem" }}><Trophy size={24} /></div>
              <div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.4rem" }}>{PILARES[5].titulo}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{PILARES[5].descripcion}</p>
              </div>
            </div>

            {/* 4 cards normales */}
            {PILARES.slice(1, 5).map((pilar) => (
              <div key={pilar.titulo} style={{ backgroundColor: "#111e4f", padding: "1.75rem", borderTop: "2px solid #1a237e" }}>
                <div style={{ color: "#4fc3f7", marginBottom: "0.75rem" }}>{ICONS[pilar.icono]}</div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.4rem", letterSpacing: "0.03em" }}>{pilar.titulo}</h3>
                <p style={{ color: "#8899bb", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{pilar.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPCIÓN B: Línea vertical + alternado izq/der ── */}
      <section style={{ backgroundColor: "#060e24", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#4fc3f7", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 1rem" }}>— OPCIÓN B: TIMELINE</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: 0 }}>¿Por Qué Elegirnos?</h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Línea central */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", backgroundColor: "rgba(255,255,255,0.08)", transform: "translateX(-50%)" }} />

            {PILARES.map((pilar, i) => {
              const esIzq = i % 2 === 0;
              return (
                <div key={pilar.titulo} style={{ display: "flex", justifyContent: esIzq ? "flex-start" : "flex-end", marginBottom: "2rem", position: "relative" }}>
                  {/* Punto central */}
                  <div style={{ position: "absolute", left: "50%", top: "1.5rem", transform: "translateX(-50%)", width: 10, height: 10, backgroundColor: "#4fc3f7", borderRadius: "50%", zIndex: 2 }} />

                  <div style={{ width: "44%", backgroundColor: "#111e4f", padding: "1.5rem", borderLeft: esIzq ? "none" : "3px solid #4fc3f7", borderRight: esIzq ? "3px solid #4fc3f7" : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                      <span style={{ color: "#4fc3f7" }}>{ICONS[pilar.icono]}</span>
                      <h3 style={{ fontSize: "0.88rem", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: 0, letterSpacing: "0.04em" }}>{pilar.titulo}</h3>
                    </div>
                    <p style={{ color: "#8899bb", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{pilar.descripcion}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OPCIÓN C: Fila de stats + descripción abajo ── */}
      <section style={{ backgroundColor: "#0d1b4b", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "#4fc3f7", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>— OPCIÓN C: STATS + CARDS</p>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: 0, lineHeight: 1 }}>¿Por Qué<br/>Elegirnos?</h2>
            </div>
            <p style={{ color: "#8899bb", fontSize: "0.95rem", maxWidth: "360px", lineHeight: 1.7, margin: 0 }}>Más que una academia — una escuela de vida a través del fútbol en Chorrillos.</p>
          </div>

          {/* Stats bar */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "3rem" }}>
            {[
              { num: "500+", label: "Alumnos formados" },
              { num: "10+", label: "Años de experiencia" },
              { num: "FPF", label: "Entrenadores certificados" },
              { num: "100%", label: "Compromiso familiar" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.75rem 1rem", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <p style={{ fontFamily: "var(--font-raleway)", fontSize: "2rem", fontWeight: 800, color: "#4fc3f7", margin: "0 0 0.25rem" }}>{s.num}</p>
                <p style={{ color: "#8899bb", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Pilares en fila simple */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {PILARES.map((pilar, i) => (
              <div key={pilar.titulo} style={{ padding: "1.5rem", borderRight: i % 3 < 2 ? "1px solid rgba(255,255,255,0.08)" : "none", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#4fc3f7" }}>{ICONS[pilar.icono]}</span>
                  <h3 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: 0, letterSpacing: "0.04em" }}>{pilar.titulo}</h3>
                </div>
                <p style={{ color: "#8899bb", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{pilar.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
