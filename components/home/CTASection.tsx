"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { ACADEMIA } from "@/lib/constants";
import { CATEGORIAS } from "@/lib/categories";

export function CTASection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const waUrl = `https://wa.me/${ACADEMIA.whatsapp}?text=${encodeURIComponent(ACADEMIA.whatsappMessage)}`;

  return (
    <section
      style={{ padding: "5rem 0", backgroundColor: "#0d1b4b" }}
      aria-labelledby="cta-heading"
    >

      <style>{`
        .cta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 640px) {
          .cta-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="cta-grid">
          <div>
            <div style={{ width: "50px", height: "4px", backgroundColor: "#ffffff", marginBottom: "1.5rem", borderRadius: "2px" }} aria-hidden="true" />
            <h2 id="cta-heading" style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 1rem", textTransform: "uppercase", lineHeight: 1.05 }}>
              ¿Listo para Empezar?
            </h2>
            <p style={{ color: "#c5cde8", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 2rem" }}>
              Inscribe a tu hijo hoy y dale la mejor formación futbolística de Chorrillos. Cupos limitados.
            </p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "#25d366", color: "#ffffff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", minHeight: "52px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
              <MessageCircle size={20} aria-hidden="true" />
              CONSULTAR POR WHATSAPP
            </a>
          </div>

          <div>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "2rem", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
              <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.3rem", fontWeight: 700, color: "#0d1b4b", margin: "0 0 1.5rem", textTransform: "uppercase" }}>Inscripción Rápida</h3>

              {sent ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }} role="alert" aria-live="polite">
                  <div style={{ width: 52, height: 52, backgroundColor: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <p style={{ color: "#16a34a", fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem", fontFamily: "var(--font-raleway)" }}>¡Solicitud enviada!</p>
                  <p style={{ color: "#5a6a8a", fontSize: "0.88rem", margin: 0 }}>Te contactaremos en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Field label="Nombre del jugador" id="cta-nombre" required>
                    <input id="cta-nombre" type="text" required placeholder="Ej: Sebastián García" style={inputStyle} autoComplete="off" />
                  </Field>
                  <Field label="Edad del jugador" id="cta-edad" required>
                    <input id="cta-edad" type="number" required min={3} max={60} placeholder="Ej: 8" style={inputStyle} />
                  </Field>
                  <Field label="Categoría de interés" id="cta-categoria" required>
                    <select id="cta-categoria" required style={inputStyle}>
                      <option value="">Seleccionar...</option>
                      {CATEGORIAS.map((c) => <option key={c.slug} value={c.slug}>{c.nombre} ({c.edadTexto})</option>)}
                    </select>
                  </Field>
                  <Field label="WhatsApp del apoderado" id="cta-telefono" required>
                    <input id="cta-telefono" type="tel" required placeholder="+51 999 999 999" style={inputStyle} autoComplete="tel" inputMode="tel" />
                  </Field>
                  <button type="submit" disabled={loading} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: loading ? "#6b7280" : "#1a237e", color: "#ffffff", padding: "14px", borderRadius: "8px", border: "none", fontWeight: 700, fontSize: "1rem", cursor: loading ? "not-allowed" : "pointer", minHeight: "52px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em", transition: "background-color 0.15s" }}>
                    {loading ? "Enviando..." : <><Send size={18} aria-hidden="true" /> QUIERO INSCRIBIRME</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label htmlFor={id} style={{ color: "#374151", fontSize: "0.83rem", fontWeight: 600 }}>
        {label}{required && <span style={{ color: "#dc2626", marginLeft: "3px" }} aria-label="obligatorio">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", backgroundColor: "#f5f7fc", border: "1px solid #e2e6f0",
  borderRadius: "6px", padding: "10px 14px", color: "#0d1b4b",
  fontSize: "0.93rem", outline: "none", minHeight: "44px", boxSizing: "border-box",
};
