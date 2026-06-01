import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { ACADEMIA } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contacto | Academia de Fútbol San Martín Chorrillos",
  description:
    "Contáctanos por WhatsApp, email o visítanos en nuestra sede de Chorrillos. Horario de atención: Lunes a Sábado 9:00 AM – 7:00 PM.",
  path: "/contacto",
});

export default function ContactoPage() {
  const waUrl = `https://wa.me/${ACADEMIA.whatsapp}?text=${encodeURIComponent(ACADEMIA.whatsappMessage)}`;

  return (
    <div>
      <section
        style={{
          padding: "1.5rem 1.5rem 1.5rem",
          background: "linear-gradient(135deg, #0a0f1e 0%, #0f1a2e 100%)",
          textAlign: "center",
          borderBottom: "1px solid #1e2d4a",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-raleway)",
              fontSize: "clamp(2rem, 5vw, 2.75rem)",
              fontWeight: 700,
              color: "#ffffff",
              textTransform: "uppercase",
              margin: "0 0 0.75rem",
            }}
          >
            Contáctanos
          </h1>
          <p style={{ color: "#8899bb", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Estamos aquí para responder todas tus preguntas. La forma más rápida es por WhatsApp.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", backgroundColor: "#0a0f1e" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* WhatsApp highlight */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                backgroundColor: "rgba(37, 211, 102, 0.1)",
                border: "1px solid rgba(37, 211, 102, 0.3)",
                borderRadius: "12px",
                padding: "1.5rem",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  backgroundColor: "#25d366",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p style={{ color: "#25d366", fontWeight: 700, fontSize: "1rem", margin: "0 0 2px" }}>WhatsApp (más rápido)</p>
                <p style={{ color: "#8899bb", fontSize: "0.9rem", margin: 0 }}>{ACADEMIA.whatsappDisplay}</p>
              </div>
            </a>

            {[
              {
                icon: <MapPin size={22} style={{ color: "#3949ab" }} aria-hidden="true" />,
                titulo: "Dirección",
                valor: ACADEMIA.direccion,
                href: `https://www.google.com/maps/search/Academia+San+Martin+Chorrillos`,
                externo: true,
              },
              {
                icon: <Mail size={22} style={{ color: "#3949ab" }} aria-hidden="true" />,
                titulo: "Correo electrónico",
                valor: ACADEMIA.email,
                href: `mailto:${ACADEMIA.email}`,
              },
              {
                icon: <Clock size={22} style={{ color: "#3949ab" }} aria-hidden="true" />,
                titulo: "Horario de atención",
                valor: ACADEMIA.horarioAtencion,
              },
            ].map((item) => (
              <div
                key={item.titulo}
                style={{
                  backgroundColor: "#0f1a2e",
                  border: "1px solid #1e2d4a",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div style={{ marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.9rem", margin: "0 0 4px" }}>{item.titulo}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.externo ? "_blank" : undefined}
                      rel={item.externo ? "noopener noreferrer" : undefined}
                      style={{ color: "#8899bb", fontSize: "0.9rem", textDecoration: "none" }}
                    >
                      {item.valor}
                    </a>
                  ) : (
                    <p style={{ color: "#8899bb", fontSize: "0.9rem", margin: 0 }}>{item.valor}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ backgroundColor: "#0f1a2e", border: "1px solid #1e2d4a", borderRadius: "12px", padding: "1.25rem" }}>
              <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.9rem", margin: "0 0 1rem" }}>Síguenos</p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  href={`https://www.instagram.com/${ACADEMIA.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ display: "flex", alignItems: "center", gap: "8px", color: "#8899bb", textDecoration: "none", fontSize: "0.9rem" }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  @{ACADEMIA.instagram}
                </a>
              </div>
            </div>

            {/* Libro de reclamaciones */}
            <div
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.05)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                borderRadius: "12px",
                padding: "1.25rem",
              }}
            >
              <p style={{ color: "#ef4444", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 0.5rem" }}>
                Libro de Reclamaciones
              </p>
              <p style={{ color: "#8899bb", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 0.75rem" }}>
                En cumplimiento del Código de Protección y Defensa del Consumidor (Ley N° 29571), ponemos a tu disposición nuestro libro de reclamaciones.
              </p>
              <a
                href={`mailto:${ACADEMIA.email}?subject=Libro de Reclamaciones`}
                style={{ color: "#ef4444", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
              >
                Enviar reclamación →
              </a>
            </div>
          </div>

          {/* Map */}
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #1e2d4a", minHeight: "500px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15608!2d-77.01967!3d-12.15910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8!2sChorrillos!5e0!3m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: "none", display: "block", minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de contacto Academia San Martín Chorrillos"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
