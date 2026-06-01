"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIAS } from "@/lib/categories";

const ICONOS: Record<string, string> = {
  "baby-futbol":  "⚽",
  "futbol-base":  "🎯",
  "pre-juvenil":  "📈",
  "juvenil":      "⚡",
  "adultos":      "🏃",
  "arqueros":     "🧤",
  "femenino":     "⭐",
};

function CatCard({ cat }: { cat: (typeof CATEGORIAS)[0] }) {
  return (
    <Link
      href={`/categorias/${cat.slug}`}
      style={{ textDecoration: "none", display: "block", flexShrink: 0 }}
      className="cat-card-link"
    >
      <div className="cat-card">
        <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }} aria-hidden="true">
          {ICONOS[cat.slug] ?? "⚽"}
        </div>
        <p style={{ fontFamily: "var(--font-raleway)", fontSize: "0.95rem", fontWeight: 800, color: "#0d1b4b", textTransform: "uppercase", margin: "0 0 4px", lineHeight: 1.1 }}>
          {cat.nombre}
        </p>
        <p style={{ fontSize: "0.72rem", color: "#94a3b8", margin: "0 0 12px" }}>
          {cat.edadTexto}
        </p>
        <hr style={{ border: "none", borderTop: "1px solid #e8ecf8", margin: "0 0 12px" }} />
        <p style={{ fontFamily: "var(--font-raleway)", fontSize: "1.3rem", fontWeight: 700, color: "#1a237e", margin: "0 0 4px" }}>
          S/ {cat.precio}
        </p>
        <p style={{ fontSize: "0.7rem", color: "#94a3b8", margin: 0 }}>por mes</p>
      </div>
    </Link>
  );
}

export function CategoriesPreview() {
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }} aria-labelledby="categorias-heading">
      <style>{`
        .cat-card {
          width: 180px;
          height: 180px;
          border-top: 4px solid #1a237e;
          border: 1px solid #e8ecf8;
          border-top: 4px solid #1a237e;
          border-radius: 8px;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: #ffffff;
          box-sizing: border-box;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .cat-card-link:hover .cat-card {
          box-shadow: 0 6px 20px rgba(26,35,126,0.12);
          transform: translateY(-3px);
        }
        .cat-scroll-row {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 8px 1.5rem 16px;
        }
        .cat-scroll-row::-webkit-scrollbar { display: none; }
        .cat-scroll-row > * { scroll-snap-align: start; }
        .cat-swipe-hint {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #94a3b8;
          font-size: 0.75rem;
          margin-top: 8px;
        }
        @media (max-width: 640px) {
          .cat-card { width: 150px; height: 160px; }
          .cat-swipe-hint { display: flex; }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "0 1.5rem" }}>
          <h2 id="categorias-heading" style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.8rem, 5vw, 2.5rem)", fontWeight: 700, color: "#0d1b4b", textTransform: "uppercase", margin: "0 0 0.5rem" }}>
            Nuestras Categorías
          </h2>
          <p style={{ color: "#5a6a8a", fontSize: "0.95rem", margin: 0 }}>
            Desde los 3 años hasta adultos — metodología certificada FPF.
          </p>
        </div>

        <div className="cat-scroll-row">
          {CATEGORIAS.map((cat) => (
            <CatCard key={cat.slug} cat={cat} />
          ))}
        </div>

        <div className="cat-swipe-hint" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Desliza
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem", padding: "0 1.5rem" }}>
          <Link href="/categorias" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#1a237e", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
            VER TODAS LAS CATEGORÍAS <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
