import { Award, BookOpen, Users, ShieldCheck, MessageCircle, Trophy } from "lucide-react";
import { PILARES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  award: <Award size={22} aria-hidden="true" />,
  "book-open": <BookOpen size={22} aria-hidden="true" />,
  users: <Users size={22} aria-hidden="true" />,
  "shield-check": <ShieldCheck size={22} aria-hidden="true" />,
  "message-circle": <MessageCircle size={22} aria-hidden="true" />,
  trophy: <Trophy size={22} aria-hidden="true" />,
};

const STRIP = ["Academia San Martín", "✦", "Chorrillos · Lima · Perú", "✦", "Entrenadores Certificados FPF", "✦", "Desde 3 años hasta Adultos", "✦", "Sábados y Domingos", "✦", "Inscripciones Abiertas", "✦"];

export default function DemoWhyUs5() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        .wu5-bg {
          position: absolute; inset: 0;
          background-image: url('/whyus-bg.png');
          background-size: cover;
          background-position: center;
        }
        .wu5-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%);
        }
        .wu5-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }
        .wu5-card {
          background: rgba(10, 15, 50, 0.35);
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: background 0.25s;
          backdrop-filter: blur(2px);
        }
        .wu5-card:hover {
          background: rgba(255,255,255,0.07);
        }
        .wu5-icon {
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.85);
        }
        .wu5-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 0.9rem 2rem;
          overflow: hidden;
        }
        .wu5-strip span {
          font-family: var(--font-raleway);
          font-size: 0.68rem;
          font-weight: 700;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        @media (max-width: 1024px) { .wu5-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) {
          .wu5-grid { grid-template-columns: 1fr; }
          .wu5-strip { gap: 0.75rem; padding: 0.75rem 1rem; }
          .wu5-strip span { font-size: 0.6rem; }
        }
      `}</style>

      <div className="wu5-bg" aria-hidden="true" />
      <div className="wu5-vignette" aria-hidden="true" />

      <div style={{ position: "relative", zIndex: 2, padding: "5rem 0 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* Encabezado */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ width: 40, height: 2, backgroundColor: "rgba(255,255,255,0.4)", marginBottom: "1rem" }} />
            <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.6rem", letterSpacing: "0.04em" }}>
              ¿Por Qué Elegirnos?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", margin: 0, fontFamily: "var(--font-raleway)" }}>
              Más que una academia — una escuela de vida.
            </p>
          </div>

          {/* Cards minimalistas */}
          <div className="wu5-grid">
            {PILARES.map((pilar) => (
              <div key={pilar.titulo} className="wu5-card">
                <div className="wu5-icon">{ICONS[pilar.icono]}</div>
                <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "0.85rem", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: 0, letterSpacing: "0.08em" }}>
                  {pilar.titulo}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", lineHeight: 1.7, margin: 0 }}>
                  {pilar.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strip */}
        <div className="wu5-strip" style={{ marginTop: "3.5rem" }}>
          {STRIP.map((item, i) => <span key={i}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}
