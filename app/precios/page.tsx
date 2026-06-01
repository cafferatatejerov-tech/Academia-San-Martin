import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { FORMAS_PAGO } from "@/lib/constants";
import { PricingGrid } from "@/components/precios/PricingGrid";

export const metadata: Metadata = buildMetadata({
  title: "Precios y Mensualidades | Academia San Martín Chorrillos",
  description: "Precios transparentes por categoría en Academia San Martín. Baby Fútbol desde S/ 120/mes. Matrícula gratuita el primer mes.",
  path: "/precios",
});

const FAQ = [
  { pregunta: "¿Hay costo de matrícula?", respuesta: "No cobramos matrícula el primer mes. La inscripción es gratuita." },
  { pregunta: "¿Qué incluye la mensualidad?", respuesta: "Entrenamientos semanales (sábado y domingo), seguimiento del entrenador y participación en torneos internos." },
  { pregunta: "¿El uniforme está incluido?", respuesta: "El uniforme tiene un costo adicional. Consultar en administración." },
  { pregunta: "¿Cómo se paga?", respuesta: `Aceptamos: ${FORMAS_PAGO.join(", ")}.` },
  { pregunta: "¿Hay descuento para hermanos?", respuesta: "Sí, ofrecemos descuento por hermano adicional. Consultar en administración." },
  { pregunta: "¿Qué pasa si mi hijo no asiste un día?", respuesta: "No se descuenta la clase perdida. Consulta sobre clases de recuperación con el entrenador." },
];

export default function PreciosPage() {
  return (
    <div style={{ backgroundColor: "#f5f7fc" }}>
      <section style={{ padding: "1.5rem 1.5rem 1.5rem", backgroundColor: "#0d1b4b", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem" }}>
            Precios Transparentes
          </h1>
          <p style={{ color: "#c5cde8", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Publicamos nuestros precios porque creemos en la transparencia. Somos la única academia en Chorrillos que lo hace.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Promo */}
          <div style={{ backgroundColor: "#eef0ff", border: "1px solid #c7cdf5", borderRadius: "10px", padding: "1rem 1.5rem", textAlign: "center", marginBottom: "2rem" }}>
            <p style={{ color: "#0d1b4b", margin: 0, fontWeight: 600, fontSize: "0.95rem" }}>
              PROMO: Matrícula gratuita el primer mes —{" "}
              <Link href="/inscribete" style={{ color: "#1a237e", fontWeight: 700, textDecoration: "none" }}>Inscríbete ya →</Link>
            </p>
          </div>

          <PricingGrid />

          {/* Formas de pago */}
          <div style={{ marginTop: "3rem", backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", padding: "2rem", textAlign: "center", boxShadow: "0 2px 8px rgba(26,35,126,0.05)" }}>
            <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.2rem", fontWeight: 700, color: "#0d1b4b", textTransform: "uppercase", margin: "0 0 1rem" }}>Formas de Pago</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
              {FORMAS_PAGO.map((f) => (
                <span key={f} style={{ backgroundColor: "#eef0ff", color: "#1a237e", padding: "8px 20px", borderRadius: "6px", fontSize: "0.88rem", fontWeight: 700, border: "1px solid #c7cdf5" }}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "3rem 1.5rem 4rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#0d1b4b", textTransform: "uppercase", textAlign: "center", margin: "0 0 2.5rem" }}>
            Preguntas Frecuentes
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {FAQ.map((item) => (
              <details key={item.pregunta} style={{ backgroundColor: "#f5f7fc", border: "1px solid #e8ecf8", borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
                <summary style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#0d1b4b", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                  {item.pregunta}
                  <span style={{ color: "#1a237e", fontSize: "1.2rem", flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ color: "#4a5578", fontSize: "0.9rem", lineHeight: 1.7, margin: "1rem 0 0" }}>{item.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" };
