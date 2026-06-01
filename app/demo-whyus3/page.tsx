import { Award, BookOpen, Users, ShieldCheck, MessageCircle, Trophy } from "lucide-react";
import { PILARES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  award: <Award size={24} aria-hidden="true" />,
  "book-open": <BookOpen size={24} aria-hidden="true" />,
  users: <Users size={24} aria-hidden="true" />,
  "shield-check": <ShieldCheck size={24} aria-hidden="true" />,
  "message-circle": <MessageCircle size={24} aria-hidden="true" />,
  trophy: <Trophy size={24} aria-hidden="true" />,
};

export default function DemoWhyUs3() {
  return (
    <div style={{ fontFamily: "var(--font-raleway)" }}>
      <style>{`
        .stadium-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/bg-crowd.jpg');
          background-size: cover;
          background-position: center;
          filter: grayscale(100%);
          opacity: 0.18;
        }
        .stadium-overlay {
          display: none;
        }
        .pilar-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(6px);
          padding: 2rem 1.75rem;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .pilar-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(79,195,247,0.5);
          transform: translateY(-4px);
        }
        .pilar-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }
        .pilar-grid-item {
          background: rgba(10,18,60,0.6);
          backdrop-filter: blur(4px);
          padding: 2rem 1.5rem;
          transition: background 0.2s;
        }
        .pilar-grid-item:hover {
          background: rgba(26,35,126,0.7);
        }
        @media (max-width: 768px) {
          .pilar-grid { grid-template-columns: repeat(2, 1fr); }
          .split-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .pilar-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── DEMO 1: Cards glassmorphism flotando sobre estadio ── */}
      <section style={{ position: "relative", padding: "6rem 1.5rem", overflow: "hidden", minHeight: "600px", backgroundColor: "#0d1b4b" }}>
        <div className="stadium-bg" />
        <div className="stadium-overlay" />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#4fc3f7", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>DEMO 1 — GLASSMORPHISM</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem" }}>¿Por Qué Elegirnos?</h2>
            <div style={{ width: 60, height: 3, backgroundColor: "#4fc3f7", margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {PILARES.map((pilar) => (
              <div key={pilar.titulo} className="pilar-card">
                <div style={{ width: 48, height: 48, border: "1px solid rgba(79,195,247,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4fc3f7", marginBottom: "1.25rem" }}>
                  {ICONS[pilar.icono]}
                </div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.6rem", letterSpacing: "0.04em" }}>{pilar.titulo}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{pilar.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO 2: Split — texto izq + grid derecha ── */}
      <section style={{ position: "relative", padding: "6rem 1.5rem", overflow: "hidden", minHeight: "600px" }}>
        <div className="stadium-bg" style={{ backgroundPosition: "center 60%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,14,36,0.98) 30%, rgba(6,14,36,0.75) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "340px 1fr", gap: "5rem", alignItems: "center" }} className="split-grid">
          <div>
            <p style={{ color: "#4fc3f7", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 1rem" }}>DEMO 2 — SPLIT</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: "0 0 1.5rem", lineHeight: 1 }}>¿Por Qué Elegirnos?</h2>
            <div style={{ width: 50, height: 3, backgroundColor: "#4fc3f7", marginBottom: "1.5rem" }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
              Más que una academia — una escuela de vida a través del fútbol en Chorrillos.
            </p>
          </div>
          <div className="pilar-grid">
            {PILARES.map((pilar) => (
              <div key={pilar.titulo} className="pilar-grid-item">
                <div style={{ color: "#4fc3f7", marginBottom: "0.75rem" }}>{ICONS[pilar.icono]}</div>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.4rem", letterSpacing: "0.04em" }}>{pilar.titulo}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>{pilar.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO 3: Línea central con números y estadio ── */}
      <section style={{ position: "relative", padding: "6rem 1.5rem", overflow: "hidden", minHeight: "600px" }}>
        <div className="stadium-bg" style={{ backgroundPosition: "center 20%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(6,14,36,0.9)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "#4fc3f7", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>DEMO 3 — NÚMEROS</p>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: 0, lineHeight: 1 }}>¿Por Qué<br/>Elegirnos?</h2>
            </div>
            <div style={{ display: "flex", gap: "3rem" }}>
              {[{ n: "500+", l: "Alumnos" }, { n: "10+", l: "Años" }, { n: "FPF", l: "Certificados" }].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "2rem", fontWeight: 800, color: "#4fc3f7", margin: "0 0 0.2rem" }}>{s.n}</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {PILARES.map((pilar, i) => (
              <div key={pilar.titulo} style={{ display: "flex", gap: "2rem", alignItems: "flex-start", padding: "1.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: "3.5rem", fontWeight: 900, color: "rgba(79,195,247,0.15)", lineHeight: 1, flexShrink: 0, width: "80px", textAlign: "right" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{ color: "#4fc3f7", flexShrink: 0, marginTop: "0.4rem" }}>{ICONS[pilar.icono]}</div>
                <div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.4rem", letterSpacing: "0.04em" }}>{pilar.titulo}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{pilar.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
