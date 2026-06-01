"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { CATEGORIAS } from "@/lib/categories";
import { useState } from "react";

function CategoriaCard({ cat, isLast }: { cat: (typeof CATEGORIAS)[0]; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: hovered ? "#f8f9ff" : "#ffffff",
        borderTop: hovered ? "4px solid #1a237e" : "3px solid #1a237e",
        borderRight: isLast ? "none" : "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
        borderLeft: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        transition: "background-color 200ms ease, border-top-width 200ms ease",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#1a237e", textTransform: "uppercase", margin: "0 0 6px", letterSpacing: "0.04em" }}>
        {cat.nombre}
      </p>

      <p style={{ fontSize: "0.72rem", color: "#94a3b8", margin: "0 0 16px", letterSpacing: "0.02em" }}>
        {cat.edadTexto}
      </p>

      <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "0 0 14px" }} />

      <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.55, margin: "0 0 16px", flexGrow: 1 }}>
        {cat.descripcion}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
        <Clock size={13} style={{ color: "#94a3b8", flexShrink: 0 }} aria-hidden="true" />
        <span style={{ fontSize: "0.78rem", color: "#94a3b8" }}>{cat.horario}</span>
      </div>

      <Link
        href={`/categorias/${cat.slug}`}
        style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a237e", textDecoration: "none", letterSpacing: "0.02em" }}
      >
        VER MÁS →
      </Link>
    </div>
  );
}

export function CategoriasList() {
  return (
    <>
      <style>{`
        .categorias-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        @media (max-width: 1024px) {
          .categorias-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 640px) {
          .categorias-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
      <div className="categorias-grid">
        {CATEGORIAS.map((cat, i) => (
          <CategoriaCard
            key={cat.slug}
            cat={cat}
            isLast={(i + 1) % 3 === 0 || i === CATEGORIAS.length - 1}
          />
        ))}
      </div>
    </>
  );
}
