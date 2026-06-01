"use client";
import Link from "next/link";
import { CATEGORIAS } from "@/lib/categories";

export default function DemoCats() {
  return (
    <div style={{ backgroundColor: "#f5f7fc", fontFamily: "var(--font-raleway)" }}>

      {/* ── DEMO A: Tabla estilo fixture deportivo ── */}
      <section style={{ padding: "3rem 1.5rem", borderBottom: "4px solid #0d1b4b" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", margin: "0 0 0.5rem" }}>DEMO A</p>
          <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.8rem", fontWeight: 800, color: "#0d1b4b", textTransform: "uppercase", margin: "0 0 2rem", letterSpacing: "0.04em" }}>Nuestras Categorías</h2>
          <div style={{ border: "1px solid #e2e8f0" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 100px 120px", backgroundColor: "#0d1b4b", padding: "0.75rem 1.5rem", gap: "1rem" }}>
              {["Categoría", "Edad", "Horario", "Precio/mes"].map((h) => (
                <span key={h} style={{ fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{h}</span>
              ))}
            </div>
            {CATEGORIAS.map((cat, i) => (
              <Link key={cat.slug} href={`/categorias/${cat.slug}`} style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "1fr 140px 100px 120px", padding: "1rem 1.5rem", gap: "1rem", alignItems: "center", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbff", borderTop: "1px solid #e8ecf8", transition: "background 0.15s" }}>
                <span style={{ fontWeight: 700, color: "#0d1b4b", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>{cat.nombre}</span>
                <span style={{ fontSize: "0.82rem", color: "#64748b" }}>{cat.edadTexto}</span>
                <span style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Sáb · Dom</span>
                <span style={{ fontWeight: 800, color: "#0d1b4b", fontSize: "1rem" }}>S/ {cat.precio}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO B: Cards horizontales con número ── */}
      <section style={{ padding: "3rem 1.5rem", backgroundColor: "#ffffff", borderBottom: "4px solid #0d1b4b" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", margin: "0 0 0.5rem" }}>DEMO B</p>
          <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.8rem", fontWeight: 800, color: "#0d1b4b", textTransform: "uppercase", margin: "0 0 2rem", letterSpacing: "0.04em" }}>Nuestras Categorías</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {CATEGORIAS.map((cat, i) => (
              <Link key={cat.slug} href={`/categorias/${cat.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.25rem 0", borderBottom: "1px solid #e8ecf8" }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, color: "#e8ecf8", lineHeight: 1, width: "60px", flexShrink: 0, textAlign: "right" }}>{String(i + 1).padStart(2, "0")}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 800, color: "#0d1b4b", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 2px" }}>{cat.nombre}</p>
                  <p style={{ color: "#94a3b8", fontSize: "0.78rem", margin: 0 }}>{cat.edadTexto} · {cat.horario}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontWeight: 800, color: "#0d1b4b", fontSize: "1.1rem", margin: "0 0 2px" }}>S/ {cat.precio}</p>
                  <p style={{ color: "#94a3b8", fontSize: "0.7rem", margin: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>por mes</p>
                </div>
                <span style={{ color: "#0d1b4b", fontSize: "1rem", flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO C: Grid de cards deportivas oscuras ── */}
      <section style={{ padding: "3rem 1.5rem", backgroundColor: "#0d1b4b" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", margin: "0 0 0.5rem" }}>DEMO C</p>
          <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.8rem", fontWeight: 800, color: "#ffffff", textTransform: "uppercase", margin: "0 0 2rem", letterSpacing: "0.04em" }}>Nuestras Categorías</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.08)" }}>
            {CATEGORIAS.map((cat) => (
              <Link key={cat.slug} href={`/categorias/${cat.slug}`} style={{ textDecoration: "none", backgroundColor: "#0d1b4b", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "3px solid transparent", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderTopColor = "#ffffff"; (e.currentTarget as HTMLElement).style.backgroundColor = "#111e4f"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderTopColor = "transparent"; (e.currentTarget as HTMLElement).style.backgroundColor = "#0d1b4b"; }}>
                <p style={{ fontWeight: 800, color: "#ffffff", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>{cat.nombre}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>{cat.edadTexto}</p>
                <p style={{ fontWeight: 800, color: "#ffffff", fontSize: "1.4rem", margin: "0.5rem 0 0" }}>S/ {cat.precio}<span style={{ fontSize: "0.7rem", fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: "4px" }}>/mes</span></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
