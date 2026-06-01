"use client";

import Link from "next/link";
import { CATEGORIAS } from "@/lib/categories";

export function CategoriasList() {
  return (
    <>
      <style>{`
        .cat-row {
          display: grid;
          grid-template-columns: 1fr 140px 160px 110px 40px;
          padding: 1.4rem 2rem;
          align-items: center;
          gap: 1rem;
          border-top: 1px solid #e8ecf8;
          text-decoration: none;
          background: #ffffff;
          transition: background 0.15s;
        }
        .cat-row:nth-child(even) { background: #fafbff; }
        .cat-row:hover { background: #f0f3ff; }
        .cat-header {
          display: grid;
          grid-template-columns: 1fr 140px 160px 110px 40px;
          padding: 0.9rem 2rem;
          gap: 1rem;
          background: #0d1b4b;
        }
        @media (max-width: 640px) {
          .cat-header { grid-template-columns: 1fr 90px 80px; }
          .cat-header .hide-mobile { display: none; }
          .cat-row { grid-template-columns: 1fr 90px 80px; }
          .cat-row .hide-mobile { display: none; }
        }
      `}</style>

      <div style={{ border: "1px solid #e2e8f0", overflow: "hidden" }}>
        {/* Header */}
        <div className="cat-header">
          {["Categoría", "Edad", "Horario", "Precio/mes", ""].map((h, i) => (
            <span key={i} className={i >= 2 && i < 4 ? "hide-mobile" : ""} style={{ fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{h}</span>
          ))}
        </div>

        {/* Filas */}
        {CATEGORIAS.map((cat) => (
          <Link key={cat.slug} href={`/categorias/${cat.slug}`} className="cat-row">
            <span style={{ fontWeight: 700, color: "#0d1b4b", fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>{cat.nombre}</span>
            <span style={{ fontSize: "0.9rem", color: "#64748b" }}>{cat.edadTexto}</span>
            <span className="hide-mobile" style={{ fontSize: "0.88rem", color: "#94a3b8" }}>{cat.horario}</span>
            <span className="hide-mobile" style={{ fontWeight: 800, color: "#0d1b4b", fontSize: "1.1rem" }}>S/ {cat.precio}</span>
            <span style={{ color: "#0d1b4b", fontSize: "0.9rem", textAlign: "right" }}>→</span>
          </Link>
        ))}
      </div>
    </>
  );
}
