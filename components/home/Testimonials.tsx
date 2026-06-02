"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIOS } from "@/lib/constants";

function MobileCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIOS.length) % TESTIMONIOS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIOS.length);
  const t = TESTIMONIOS[idx];

  return (
    <div style={{ position: "relative" }}>
      <style>{`
        .testi-slide {
          animation: testi-in 0.18s ease;
        }
        @keyframes testi-in {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <article key={t.nombre} className="testi-slide" style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "1.75rem", border: "1px solid #e8ecf8", display: "flex", flexDirection: "column", gap: "1rem", minHeight: "200px" }}>
        <div style={{ display: "flex", gap: "3px" }} aria-label={`${t.estrellas} de 5 estrellas`}>
          {Array.from({ length: t.estrellas }).map((_, j) => <Star key={j} size={16} fill="#f59e0b" style={{ color: "#f59e0b" }} aria-hidden="true" />)}
        </div>
        <p style={{ color: "#374151", fontSize: "0.92rem", lineHeight: 1.7, margin: 0, flex: 1, fontStyle: "italic" }}>"{t.texto}"</p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #f0f2f8" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: t.avatarColor, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-raleway)", fontWeight: 700, fontSize: "1rem", color: "#ffffff", flexShrink: 0 }} aria-hidden="true">
            {t.nombre.charAt(0)}
          </div>
          <div>
            <p style={{ color: "#0d1b4b", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 2px" }}>{t.nombre}</p>
            <p style={{ color: "#8899bb", fontSize: "0.78rem", margin: 0 }}>{t.rol}</p>
          </div>
        </div>
      </article>

      {/* Controles */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem" }}>
        <button onClick={prev} aria-label="Anterior" style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#1a237e" }}>
          <ChevronLeft size={20} />
        </button>
        <div style={{ display: "flex", gap: "6px" }}>
          {TESTIMONIOS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Ir al testimonio ${i + 1}`} style={{ width: i === idx ? 18 : 6, height: 6, borderRadius: 3, backgroundColor: i === idx ? "#1a237e" : "#cbd5e1", border: "none", cursor: "pointer", transition: "all 0.2s", padding: 0 }} />
          ))}
        </div>
        <button onClick={next} aria-label="Siguiente" style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#1a237e" }}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section style={{ padding: "4rem 0", backgroundColor: "#f5f7fc" }} aria-labelledby="testimonios-heading">
      <style>{`
        .testi-desktop { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; }
        .testi-mobile { display: none; }
        @media (max-width: 640px) {
          .testi-desktop { display: none; }
          .testi-mobile { display: block; }
        }
      `}</style>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <span style={badgeStyle}>Familias</span>
          <h2 id="testimonios-heading" style={sectionTitleStyle}>Lo Que Dicen las Familias</h2>
          <p style={sectionSubStyle}>Más de 200 familias confían en nosotros.</p>
        </div>

        {/* Desktop — grid normal */}
        <div className="testi-desktop">
          {TESTIMONIOS.map((t) => (
            <article key={t.nombre} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "1.75rem", border: "1px solid #e8ecf8", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "3px" }} aria-label={`${t.estrellas} de 5 estrellas`}>
                {Array.from({ length: t.estrellas }).map((_, j) => <Star key={j} size={16} fill="#f59e0b" style={{ color: "#f59e0b" }} aria-hidden="true" />)}
              </div>
              <p style={{ color: "#374151", fontSize: "0.92rem", lineHeight: 1.7, margin: 0, flex: 1, fontStyle: "italic" }}>"{t.texto}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #f0f2f8" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: t.avatarColor, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-raleway)", fontWeight: 700, fontSize: "1rem", color: "#ffffff", flexShrink: 0 }} aria-hidden="true">
                  {t.nombre.charAt(0)}
                </div>
                <div>
                  <p style={{ color: "#0d1b4b", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 2px" }}>{t.nombre}</p>
                  <p style={{ color: "#8899bb", fontSize: "0.78rem", margin: 0 }}>{t.rol}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile — carrusel rápido */}
        <div className="testi-mobile">
          <MobileCarousel />
        </div>
      </div>
    </section>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "transparent", border: "1px solid #1a237e", color: "#1a237e", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" };
const sectionTitleStyle: React.CSSProperties = { fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.5rem", textTransform: "uppercase" };
const sectionSubStyle: React.CSSProperties = { color: "#5a6a8a", fontSize: "1rem", margin: 0 };
