"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { CATEGORIAS } from "@/lib/categories";
import { useState } from "react";

const FEATURED_SLUGS = ["baby-futbol", "futbol-base", "juvenil"];
const featured = FEATURED_SLUGS.map((s) => CATEGORIAS.find((c) => c.slug === s)!);

function BigCategoryCard({ cat }: { cat: (typeof CATEGORIAS)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <div
        style={{
          flex: 1,
          maxWidth: "380px",
          aspectRatio: "1 / 1",
          backgroundColor: hovered ? "#f8f9ff" : "#ffffff",
          borderTop: "4px solid #1a237e",
          borderRight: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
          borderLeft: "1px solid #e2e8f0",
          borderRadius: "0px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          boxShadow: hovered ? "0 8px 24px rgba(26,35,126,0.12)" : "0 2px 8px rgba(26,35,126,0.06)",
          transition: "background-color 200ms ease, box-shadow 200ms ease",
          boxSizing: "border-box",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Badge edad */}
        <span style={{
          display: "inline-block",
          color: "#64748b",
          fontSize: "0.75rem",
          fontWeight: 600,
          marginBottom: "8px",
        }}>
          {cat.edadTexto}
        </span>

        {/* Nombre */}
        <h3 style={{
          fontFamily: "var(--font-raleway)",
          fontSize: "28px",
          fontWeight: 800,
          color: "#1a237e",
          textTransform: "uppercase",
          margin: "0 0 14px",
          lineHeight: 1.1,
        }}>
          {cat.nombre}
        </h3>

        {/* Separador */}
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "0 0 18px" }} />

        {/* Descripción */}
        <p style={{
          fontSize: "16px",
          color: "#64748b",
          lineHeight: 1.6,
          margin: "0 0 20px",
          flexGrow: 1,
        }}>
          {cat.descripcion}
        </p>

        {/* Horario */}
        <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "28px" }}>
          <Clock size={14} style={{ color: "#94a3b8", flexShrink: 0 }} aria-hidden="true" />
          <span style={{ fontSize: "0.82rem", color: "#94a3b8" }}>{cat.horario}</span>
        </div>

        {/* CTA */}
        <Link
          href={`/categorias/${cat.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#1a237e",
            fontWeight: 700,
            fontSize: "0.9rem",
            fontFamily: "var(--font-raleway)",
            letterSpacing: "0.05em",
            textDecoration: "none",
            alignSelf: "flex-start",
          }}
        >
          VER MÁS <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function CategoriesPreview() {
  return (
    <section
      style={{ position: "relative", overflow: "hidden", padding: "5rem 0", backgroundColor: "#ffffff" }}
      aria-labelledby="categorias-heading"
    >
      <div
        style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/bg-crowd.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)", opacity: 0.06 }}
        aria-hidden="true"
      />
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={badgeStyle}>Programas</span>
          <h2 id="categorias-heading" style={sectionTitleStyle}>Nuestras Categorías</h2>
          <p style={sectionSubStyle}>Desde los 3 años hasta adultos, con metodología certificada FPF.</p>
        </div>

        <style>{`
          .cat-big-grid {
            display: flex;
            gap: 20px;
            justify-content: center;
          }
          @media (max-width: 640px) {
            .cat-scroll-outer {
              position: relative;
            }
            .cat-scroll-outer::after {
              content: "";
              position: absolute;
              top: 0; right: 0; bottom: 8px;
              width: 48px;
              background: linear-gradient(to right, transparent, rgba(255,255,255,0.92));
              pointer-events: none;
              z-index: 2;
            }
            .cat-big-scroll-wrap {
              overflow-x: auto;
              overflow-y: hidden;
              -webkit-overflow-scrolling: touch;
              scroll-snap-type: x mandatory;
              padding-bottom: 8px;
              width: 100%;
              max-width: 100%;
              scrollbar-width: none;
            }
            .cat-big-scroll-wrap::-webkit-scrollbar { display: none; }
            .cat-big-grid {
              flex-wrap: nowrap;
              width: max-content;
              gap: 12px;
            }
            .cat-big-grid > div {
              scroll-snap-align: start;
              flex: 0 0 80vw !important;
              min-width: 0 !important;
            }
            .cat-big-grid > div > div {
              border-left: 1px solid #e2e8f0 !important;
              min-height: 240px !important;
            }
            .cat-swipe-hint {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              margin-top: 14px;
              color: #94a3b8;
              font-size: 0.75rem;
              letter-spacing: 0.04em;
            }
            .cat-dots {
              display: flex;
              justify-content: center;
              gap: 6px;
              margin-top: 10px;
            }
            .cat-dot {
              width: 6px; height: 6px;
              border-radius: 50%;
              background: #cbd5e1;
            }
            .cat-dot:first-child { background: #1a237e; width: 18px; border-radius: 3px; }
          }
          @media (min-width: 641px) {
            .cat-scroll-outer::after { display: none; }
            .cat-swipe-hint { display: none; }
            .cat-dots { display: none; }
          }
        `}</style>

        <div className="cat-scroll-outer">
          <div className="cat-big-scroll-wrap">
            <div className="cat-big-grid">
              {featured.map((cat) => (
                <BigCategoryCard key={cat.slug} cat={cat} />
              ))}
            </div>
          </div>
        </div>

        <div className="cat-swipe-hint" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Desliza
        </div>
        <div className="cat-dots" aria-hidden="true">
          {featured.map((_, i) => <div key={i} className="cat-dot" />)}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/categorias" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#1a237e", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
            VER TODAS LAS CATEGORÍAS <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "#1a237e", color: "#ffffff", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" };
const sectionTitleStyle: React.CSSProperties = { fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.75rem", textTransform: "uppercase" };
const sectionSubStyle: React.CSSProperties = { color: "#5a6a8a", fontSize: "1rem", margin: 0 };
