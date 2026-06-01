"use client";

import Link from "next/link";
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
    <Link href={`/categorias/${cat.slug}`} style={{ textDecoration: "none", display: "block" }} className="cat-card-link">
      <div className="cat-card">
        <div style={{ fontSize: "2.4rem", marginBottom: "0.75rem" }} aria-hidden="true">
          {ICONOS[cat.slug] ?? "⚽"}
        </div>
        <p style={{ fontFamily: "var(--font-raleway)", fontSize: "0.95rem", fontWeight: 800, color: "#0d1b4b", textTransform: "uppercase", margin: "0 0 4px", lineHeight: 1.1 }}>
          {cat.nombre}
        </p>
        <p style={{ fontSize: "0.72rem", color: "#94a3b8", margin: "0 0 12px" }}>
          {cat.edadTexto}
        </p>
        <hr style={{ border: "none", borderTop: "1px solid #e8ecf8", margin: "0 0 12px", width: "100%" }} />
        <p style={{ fontFamily: "var(--font-raleway)", fontSize: "1.3rem", fontWeight: 700, color: "#1a237e", margin: "0 0 2px" }}>
          S/ {cat.precio}
        </p>
        <p style={{ fontSize: "0.7rem", color: "#94a3b8", margin: 0 }}>por mes</p>
      </div>
    </Link>
  );
}

export function CategoriasList() {
  return (
    <>
      <style>{`
        .cat-card {
          width: 100%;
          aspect-ratio: 1 / 1;
          border: 1px solid #e8ecf8;
          border-top: 4px solid #1a237e;
          border-radius: 8px;
          padding: 24px 16px;
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
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .cat-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
      `}</style>
      <div className="cat-grid">
        {CATEGORIAS.map((cat) => (
          <CatCard key={cat.slug} cat={cat} />
        ))}
      </div>
    </>
  );
}
