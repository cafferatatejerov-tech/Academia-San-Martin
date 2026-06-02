import Link from "next/link";
import { MapPin } from "lucide-react";
import { ACADEMIA } from "@/lib/constants";

export function LocationSection() {
  return (
    <section className="stadium-bg" style={{ padding: "4rem 0", backgroundColor: "#ffffff" }} aria-labelledby="ubicacion-heading">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={badgeStyle}>Sede Chorrillos</span>
          <h2 id="ubicacion-heading" style={sectionTitleStyle}>¿Dónde Estamos?</h2>
          <p style={sectionSubStyle}>Encuéntranos en Chorrillos, Lima.</p>
        </div>

        <style>{`
          .loc-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 1.5rem; align-items: stretch; }
          @media (max-width: 768px) { .loc-grid { grid-template-columns: 1fr; } }
        `}</style>

        <div className="loc-grid">
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 1px 4px rgba(26,35,126,0.06)", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <MapPin size={20} style={{ color: "#1a237e", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
              <div>
                <p style={{ fontFamily: "var(--font-raleway)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 4px", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>{ACADEMIA.nombre}</p>
                <p style={{ color: "#5a6a8a", fontSize: "0.88rem", margin: "0 0 0.75rem", lineHeight: 1.5 }}>{ACADEMIA.direccion}</p>
                <Link
                  href="https://www.google.com/maps/search/Academia+San+Martin+Chorrillos"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1a237e", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}
                >
                  ¿Cómo llegar? →
                </Link>
              </div>
            </div>

            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 1px 4px rgba(26,35,126,0.06)" }}>
              <p style={{ fontFamily: "var(--font-raleway)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 4px", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>Horario de Atención</p>
              <p style={{ color: "#5a6a8a", fontSize: "0.88rem", margin: 0 }}>{ACADEMIA.horarioAtencion}</p>
            </div>
          </div>

          {/* Mapa */}
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e8ecf8", minHeight: "320px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15608!2d-77.01967!3d-12.15910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8!2sChorrillos!5e0!3m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: "none", display: "block", minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Academia San Martín Chorrillos"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "transparent", border: "1px solid #1a237e", color: "#1a237e", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" };
const sectionTitleStyle: React.CSSProperties = { fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.5rem", textTransform: "uppercase" };
const sectionSubStyle: React.CSSProperties = { color: "#5a6a8a", fontSize: "1rem", margin: 0 };
