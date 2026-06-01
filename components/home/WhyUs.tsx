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

export function WhyUs() {
  return (
    <section aria-labelledby="why-us-heading" style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        .wu-bg {
          position: absolute; inset: 0;
          background-image: url('/whyus-bg.png');
          background-size: cover;
          background-position: center;
        }
        .wu-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%);
        }
        .wu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }
        .wu-card {
          background: rgba(10,15,50,0.35);
          padding: 2.75rem 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: background 0.25s;
          backdrop-filter: blur(2px);
          border: 1px solid rgba(255,255,255,0.18);
          outline: 1px solid rgba(255,255,255,0.06);
          outline-offset: -6px;
        }
        .wu-card:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.35); }
        .wu-icon {
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.85);
          flex-shrink: 0;
        }
        .wu-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 0.9rem 2rem;
          overflow: hidden;
        }
        .wu-strip span {
          font-family: var(--font-raleway);
          font-size: 0.68rem;
          font-weight: 700;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .wu-hint { display: none; }

        @media (max-width: 1024px) {
          .wu-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .wu-grid {
            display: flex;
            flex-wrap: nowrap;
            width: max-content;
            gap: 1px;
            background: rgba(255,255,255,0.06);
          }
          .wu-card {
            flex: 0 0 78vw;
            scroll-snap-align: start;
          }
          .wu-scroll {
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }
          .wu-scroll::-webkit-scrollbar { display: none; }
          .wu-hint {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            margin-top: 12px;
            color: rgba(255,255,255,0.3);
            font-size: 0.72rem;
            letter-spacing: 0.04em;
            font-family: var(--font-raleway);
          }
          .wu-strip { gap: 0.75rem; padding: 0.75rem 1rem; }
          .wu-strip span { font-size: 0.6rem; }
        }
      `}</style>

      <div className="wu-bg" aria-hidden="true" />
      <div className="wu-vignette" aria-hidden="true" />

      <div style={{ position: "relative", zIndex: 2, padding: "5rem 0 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

          <div style={{ marginBottom: "3rem" }}>
            <div style={{ width: 40, height: 2, backgroundColor: "rgba(255,255,255,0.4)", marginBottom: "1rem" }} />
            <h2 id="why-us-heading" style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.6rem", letterSpacing: "0.04em" }}>
              ¿Por Qué Elegirnos?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", margin: 0 }}>
              Más que una academia — una escuela de vida.
            </p>
          </div>

          <div className="wu-scroll">
            <div className="wu-grid">
              {PILARES.map((pilar) => (
                <div key={pilar.titulo} className="wu-card">
                  <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: 0, letterSpacing: "0.08em" }}>
                    {pilar.titulo}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                    {pilar.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="wu-hint" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Desliza
          </div>
        </div>

        <div className="wu-strip" style={{ marginTop: "3.5rem" }}>
          {STRIP.map((item, i) => <span key={i}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}
