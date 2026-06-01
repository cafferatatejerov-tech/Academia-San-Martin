import { MapPin } from "lucide-react";
import { HORARIOS } from "@/lib/schedule";
import { ACADEMIA } from "@/lib/constants";

export function Schedule() {
  return (
    <section className="stadium-bg" style={{ padding: "4rem 0", backgroundColor: "#ffffff" }} aria-labelledby="horarios-heading">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={badgeStyle}>Sede Chorrillos</span>
          <h2 id="horarios-heading" style={sectionTitleStyle}>Horarios de Entrenamiento</h2>
          <p style={sectionSubStyle}>Entrenamientos los sábados y domingos en nuestra sede.</p>
        </div>

        <style>{`
          .sched-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
          .sched-dias { display: table-cell; }
          @media (max-width: 768px) { .sched-grid { grid-template-columns: 1fr; } }
          @media (max-width: 600px) { .sched-dias { display: none; } }
        `}</style>

        <div className="sched-grid">
          <div style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ backgroundColor: "#1a237e", padding: "1rem 1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>Horario por Categoría</h3>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }} aria-label="Horarios por categoría">
                <thead>
                  <tr style={{ backgroundColor: "#f5f7fc" }}>
                    <th style={thStyle}>Categoría</th>
                    <th style={thStyle} className="sched-dias">Días</th>
                    <th style={thStyle}>Horario</th>
                  </tr>
                </thead>
                <tbody>
                  {HORARIOS.map((item, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #f0f2f8", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbff" }}>
                      <td style={tdStyle}><strong style={{ color: "#0d1b4b" }}>{item.categoria}</strong><br /><span style={{ fontSize: "0.75rem", color: "#8899bb" }}>{item.edad}</span></td>
                      <td style={{ ...tdStyle, color: "#5a6a8a" }} className="sched-dias">Sáb. y Dom.</td>
                      <td style={{ ...tdStyle, color: "#1a237e", fontWeight: 700 }}>{item.hora}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e8ecf8", flex: 1, minHeight: "260px" }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15608!2d-77.01967!3d-12.15910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8!2sChorrillos!5e0!3m2!1ses!2spe" width="100%" height="100%" style={{ border: "none", minHeight: "260px", display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación Academia San Martín en Chorrillos" />
            </div>
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "10px", padding: "1.25rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <MapPin size={20} style={{ color: "#1a237e", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
              <div>
                <p style={{ color: "#0d1b4b", fontWeight: 700, margin: "0 0 4px", fontSize: "0.9rem" }}>{ACADEMIA.nombre}</p>
                <p style={{ color: "#5a6a8a", fontSize: "0.88rem", margin: "0 0 8px" }}>{ACADEMIA.direccion}</p>
                <a href="https://www.google.com/maps/search/Academia+San+Martin+Chorrillos" target="_blank" rel="noopener noreferrer" style={{ color: "#1a237e", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none" }}>¿Cómo llegar? →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "#1a237e", color: "#ffffff", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" };
const sectionTitleStyle: React.CSSProperties = { fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.5rem", textTransform: "uppercase" };
const sectionSubStyle: React.CSSProperties = { color: "#5a6a8a", fontSize: "1rem", margin: 0 };
const thStyle: React.CSSProperties = { padding: "0.7rem 1rem", textAlign: "left", color: "#5a6a8a", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" };
const tdStyle: React.CSSProperties = { padding: "0.85rem 1rem", color: "#5a6a8a", fontSize: "0.85rem", verticalAlign: "top" };
