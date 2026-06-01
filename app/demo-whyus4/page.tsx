import { Award, BookOpen, Users, ShieldCheck, MessageCircle, Trophy } from "lucide-react";
import { PILARES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  award: <Award size={26} aria-hidden="true" />,
  "book-open": <BookOpen size={26} aria-hidden="true" />,
  users: <Users size={26} aria-hidden="true" />,
  "shield-check": <ShieldCheck size={26} aria-hidden="true" />,
  "message-circle": <MessageCircle size={26} aria-hidden="true" />,
  trophy: <Trophy size={26} aria-hidden="true" />,
};

const STRIP = ["Academia San Martín", "✦", "Chorrillos · Lima · Perú", "✦", "Entrenadores Certificados FPF", "✦", "Desde 3 años hasta Adultos", "✦", "Sábados y Domingos", "✦", "Inscripciones Abiertas", "✦"];

export default function DemoWhyUs4() {
  return (
    <section aria-labelledby="why-us-heading" style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        .whyus-bg {
          position: absolute; inset: 0;
          background-color: #1c24b8;
          background-image:
            radial-gradient(ellipse at 15% 20%, rgba(255,255,255,0.08) 0%, transparent 45%),
            radial-gradient(ellipse at 85% 80%, rgba(0,0,0,0.25) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 50%, rgba(28,36,184,0.5) 0%, transparent 70%),
            repeating-linear-gradient(135deg, transparent 0px, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 6px),
            repeating-linear-gradient(45deg, transparent 0px, transparent 8px, rgba(0,0,0,0.04) 8px, rgba(0,0,0,0.04) 9px);
        }
        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
        }
        .demo-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 4px;
          padding: 1.75rem 1.5rem 1.75rem 1.75rem;
          transition: background 0.2s;
        }
        .demo-card:hover { background: rgba(255,255,255,0.12); }
        .demo-strip {
          display: flex;
          align-items: center;
          gap: 2rem;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding: 1rem 2rem;
          justify-content: space-between;
          overflow: hidden;
        }
        .demo-strip span {
          font-family: var(--font-raleway);
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .demo-strip { gap: 1rem; padding: 0.875rem 1rem; }
          .demo-strip span { font-size: 0.6rem; }
        }
      `}</style>

      <div className="whyus-bg" aria-hidden="true" />

      <div style={{ position: "relative", zIndex: 2, padding: "4rem 0 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 id="why-us-heading" style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem" }}>
              ¿Por Qué Elegirnos?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", margin: 0 }}>
              Más que una academia — una escuela de vida a través del fútbol.
            </p>
          </div>

          <div className="demo-grid">
            {PILARES.map((pilar) => (
              <div key={pilar.titulo} className="demo-card">
                <div style={{ width: 48, height: 48, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", marginBottom: "1rem" }}>
                  {ICONS[pilar.icono]}
                </div>
                <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.6rem", letterSpacing: "0.04em" }}>
                  {pilar.titulo}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  {pilar.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-strip" style={{ marginTop: "3rem" }}>
          {STRIP.map((item, i) => <span key={i}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}
