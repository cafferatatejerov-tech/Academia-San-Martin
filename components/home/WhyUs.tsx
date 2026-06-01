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

export function WhyUs() {
  return (
    <section style={{ padding: "4rem 0", backgroundColor: "#f0f2fb" }} aria-labelledby="why-us-heading">
      <style>{`
        .whyus-scroll-wrap {
          display: contents;
        }
        .whyus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 640px) {
          .whyus-outer {
            position: relative;
          }
          .whyus-outer::after {
            content: "";
            position: absolute;
            top: 0; right: 0; bottom: 8px;
            width: 48px;
            background: linear-gradient(to right, transparent, rgba(240,242,251,0.95));
            pointer-events: none;
            z-index: 2;
          }
          .whyus-scroll-wrap {
            display: block;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            padding-bottom: 8px;
            width: 100%;
            max-width: 100%;
            scrollbar-width: none;
          }
          .whyus-scroll-wrap::-webkit-scrollbar { display: none; }
          .whyus-hint {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            margin-top: 14px;
            color: #94a3b8;
            font-size: 0.75rem;
            letter-spacing: 0.04em;
          }
          .whyus-grid {
            display: flex;
            flex-wrap: nowrap;
            width: max-content;
            gap: 12px;
          }
          .whyus-card {
            scroll-snap-align: start;
            flex: 0 0 72vw;
            min-width: 0;
          }
        }
      `}</style>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={badgeStyle}>Diferencias</span>
          <h2 id="why-us-heading" style={sectionTitleStyle}>¿Por Qué Elegirnos?</h2>
          <p style={sectionSubStyle}>Más que una academia — una escuela de vida a través del fútbol.</p>
        </div>

        <div className="whyus-outer">
        <div className="whyus-scroll-wrap">
          <div className="whyus-grid">
            {PILARES.map((pilar) => (
              <div key={pilar.titulo} className="whyus-card" style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "1.75rem 1.5rem 1.75rem 1.75rem", border: "1px solid #e8ecf8", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "4px", height: "100%", position: "absolute", left: 0, top: 0, backgroundColor: "#1a237e", borderRadius: "12px 0 0 12px" }} aria-hidden="true" />
                <div style={{ width: 48, height: 48, backgroundColor: "#eef0ff", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a237e", marginBottom: "1rem" }}>{ICONS[pilar.icono]}</div>
                <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.1rem", fontWeight: 700, color: "#1a237e", margin: "0 0 0.6rem", textTransform: "uppercase" }}>{pilar.titulo}</h3>
                <p style={{ color: "#4a5578", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{pilar.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="whyus-hint" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Desliza
        </div>
      </div>
    </section>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "#1a237e", color: "#ffffff", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" };
const sectionTitleStyle: React.CSSProperties = { fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.75rem", textTransform: "uppercase" };
const sectionSubStyle: React.CSSProperties = { color: "#5a6a8a", fontSize: "1rem", margin: 0 };
