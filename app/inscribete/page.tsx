import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ACADEMIA } from "@/lib/constants";
import { InscriptionForm } from "@/components/forms/InscriptionForm";

export const metadata: Metadata = buildMetadata({
  title: "Inscríbete | Academia de Fútbol San Martín Chorrillos",
  description: "Formulario de inscripción online. Categorías desde 3 años hasta adultos. Respuesta en menos de 24 horas.",
  path: "/inscribete",
});

export default function InscribetePage() {
  const waUrl = `https://wa.me/${ACADEMIA.whatsapp}?text=${encodeURIComponent(ACADEMIA.whatsappMessage)}`;

  return (
    <div style={{ backgroundColor: "#f5f7fc" }}>
      <section style={{ padding: "1.5rem 1.5rem 1.5rem", backgroundColor: "#0d1b4b", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem" }}>
            Inscríbete Ahora
          </h1>
          <p style={{ color: "#c5cde8", fontSize: "0.95rem", lineHeight: 1.7, margin: "0 0 0.6rem" }}>
            Completa el formulario y te contactaremos en menos de 24 horas.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#25d366", fontWeight: 700, fontSize: "0.9rem" }}>
            ¿Prefieres WhatsApp? Escríbenos directo →
          </a>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start" }}>
          <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "2rem", boxShadow: "0 2px 12px rgba(26,35,126,0.07)", border: "1px solid #e8ecf8" }}>
            <InscriptionForm />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(26,35,126,0.05)" }}>
              <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.05rem", fontWeight: 700, color: "#0d1b4b", margin: "0 0 1rem", textTransform: "uppercase" }}>¿Qué sigue?</h2>
              {[
                { num: "1", text: "Recibes un WhatsApp de confirmación." },
                { num: "2", text: "Te informamos la categoría según la edad." },
                { num: "3", text: "Traes los documentos el primer día." },
                { num: "4", text: "¡Tu hijo empieza a entrenar!" },
              ].map((s) => (
                <div key={s.num} style={{ display: "flex", gap: "12px", marginBottom: "0.9rem", alignItems: "flex-start" }}>
                  <div style={{ width: 26, height: 26, backgroundColor: "#1a237e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-raleway)", fontWeight: 700, fontSize: "0.8rem", color: "#ffffff", flexShrink: 0 }}>{s.num}</div>
                  <p style={{ color: "#4a5578", fontSize: "0.88rem", lineHeight: 1.5, margin: 0 }}>{s.text}</p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(26,35,126,0.05)" }}>
              <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.05rem", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.75rem", textTransform: "uppercase" }}>Documentos para el primer día</h2>
              <ul style={{ margin: 0, padding: "0 0 0 1.1rem", color: "#4a5578", fontSize: "0.88rem", lineHeight: 2 }}>
                <li>Copia DNI del menor y apoderado</li>
                <li>Partida de nacimiento</li>
                <li>2 fotos carnet</li>
                <li>Constancia médica o seguro de salud</li>
              </ul>
            </div>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#25d366", color: "#ffffff", padding: "14px", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", minHeight: "52px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
              CONSULTAR POR WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
