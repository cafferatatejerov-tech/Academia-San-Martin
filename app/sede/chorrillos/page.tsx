import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { buildMetadata, SPORTS_SCHEMA } from "@/lib/seo";
import { ACADEMIA } from "@/lib/constants";
import { HORARIOS } from "@/lib/schedule";
import { InscriptionForm } from "@/components/forms/InscriptionForm";

export const metadata: Metadata = buildMetadata({
  title: "Academia de Fútbol en Chorrillos | San Martín | Horarios e Inscripciones",
  description: "Encuentra la academia de fútbol más completa en Chorrillos. Categorías para niños, juveniles, adultos y femenino. Entrenadores FPF. Inscríbete hoy.",
  path: "/sede/chorrillos",
});

export default function SedeChorrillosPage() {
  return (
    <div style={{ backgroundColor: "#f5f7fc" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPORTS_SCHEMA) }} />

      {/* Hero */}
      <section style={{ padding: "1.5rem 1.5rem 1.5rem", backgroundColor: "#0d1b4b", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem" }}>
            Sede Chorrillos
          </h1>
          <p style={{ color: "#c5cde8", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Nuestra sede principal en el corazón de Chorrillos. Entrenamientos sábados y domingos con entrenadores certificados FPF.
          </p>
        </div>
      </section>

      {/* Info + Map */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Info card */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderTop: "3px solid #1a237e", borderRadius: "8px", padding: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.1rem", fontWeight: 700, color: "#1a237e", margin: "0 0 1.25rem", textTransform: "uppercase" }}>
                Información de la Sede
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <MapPin size={18} style={{ color: "#1a237e", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <p style={{ color: "#1e293b", fontWeight: 600, fontSize: "0.88rem", margin: "0 0 2px" }}>Dirección</p>
                    <p style={{ color: "#64748b", fontSize: "0.88rem", margin: 0 }}>{ACADEMIA.direccion}</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <Clock size={18} style={{ color: "#1a237e", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <p style={{ color: "#1e293b", fontWeight: 600, fontSize: "0.88rem", margin: "0 0 2px" }}>Horario de atención</p>
                    <p style={{ color: "#64748b", fontSize: "0.88rem", margin: 0 }}>{ACADEMIA.horarioAtencion}</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <Phone size={18} style={{ color: "#1a237e", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <p style={{ color: "#1e293b", fontWeight: 600, fontSize: "0.88rem", margin: "0 0 2px" }}>WhatsApp</p>
                    <a href={`https://wa.me/${ACADEMIA.whatsapp}`} style={{ color: "#1a237e", fontSize: "0.88rem" }}>{ACADEMIA.whatsappDisplay}</a>
                  </div>
                </div>
              </div>
              <Link href="https://www.google.com/maps/search/Academia+San+Martin+Chorrillos" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "1.25rem", backgroundColor: "#1a237e", color: "#ffffff", padding: "10px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "0.88rem", minHeight: "44px" }}>
                <MapPin size={15} aria-hidden="true" /> ¿Cómo llegar?
              </Link>
            </div>

            {/* Tabla horarios */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderTop: "3px solid #1a237e", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #e2e8f0", backgroundColor: "#f8f9ff" }}>
                <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#1a237e", margin: 0, textTransform: "uppercase" }}>
                  Horarios de Entrenamiento
                </h3>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }} aria-label="Horarios por categoría">
                  <thead>
                    <tr style={{ backgroundColor: "#f5f7fc" }}>
                      <th style={thStyle}>Categoría</th>
                      <th style={thStyle}>Horario</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HORARIOS.map((h, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #f1f5f9", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbff" }}>
                        <td style={tdStyle}>
                          <strong style={{ color: "#1e293b" }}>{h.categoria}</strong>
                          <span style={{ display: "block", color: "#94a3b8", fontSize: "0.75rem" }}>{h.edad}</span>
                        </td>
                        <td style={{ ...tdStyle, color: "#1a237e", fontWeight: 700 }}>{h.hora}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div style={{ borderRadius: "8px", overflow: "hidden", minHeight: "400px", border: "1px solid #e2e8f0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15608!2d-77.01967!3d-12.15910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8!2sChorrillos!5e0!3m2!1ses!2spe"
              width="100%" height="100%"
              style={{ border: "none", display: "block", minHeight: "400px" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Academia San Martín Chorrillos"
            />
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section style={{ padding: "3rem 1.5rem 4rem", backgroundColor: "#0d1b4b" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", textAlign: "center", margin: "0 0 0.75rem" }}>
            Inscríbete en Chorrillos
          </h2>
          <p style={{ color: "#c5cde8", textAlign: "center", marginBottom: "2.5rem" }}>
            Completa el formulario y te contactaremos en menos de 24 horas.
          </p>
          <InscriptionForm />
        </div>
      </section>
    </div>
  );
}

const thStyle: React.CSSProperties = { padding: "0.7rem 1rem", textAlign: "left", color: "#64748b", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" };
const tdStyle: React.CSSProperties = { padding: "0.75rem 1rem", color: "#64748b", fontSize: "0.85rem", verticalAlign: "top" };
