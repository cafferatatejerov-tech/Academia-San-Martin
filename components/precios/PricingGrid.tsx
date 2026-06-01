"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { CATEGORIAS } from "@/lib/categories";

const FEATURES: Record<string, string[]> = {
  "baby-futbol": [
    "Sesiones lúdicas sáb y dom",
    "Coach especialista primera infancia",
    "Grupos máx. 10 niños",
    "Material deportivo incluido",
    "Comunicación semanal con padres",
  ],
  "futbol-base": [
    "Entrenamientos técnicos sáb y dom",
    "Entrenador certificado FPF",
    "Participación en torneos distritales",
    "Grupos máx. 15 alumnos",
    "Seguimiento de progreso mensual",
    "Certificado anual de participación",
  ],
  "pre-juvenil": [
    "Técnica y táctica avanzada",
    "Preparación física específica",
    "Torneos distritales Sub-13/14",
    "Entrenador certificado FPF",
    "Análisis de rendimiento",
  ],
  "juvenil": [
    "Entrenamiento de alto rendimiento",
    "Análisis táctico y video",
    "Torneos juveniles de Lima",
    "Preparación física intensiva",
    "Entrenador certificado FPF",
    "Proyección hacia fútbol amateur",
  ],
  "adultos": [
    "Técnica individual y colectiva",
    "Preparación física adaptada",
    "Torneos amateur Lima",
    "Grupos reducidos máx. 15",
    "Entrenador certificado FPF",
  ],
  "arqueros": [
    "Coach exclusivo de porteros",
    "Técnica de manos y posicionamiento",
    "Salidas, saques y juego con pie",
    "Para todas las categorías de edad",
    "Entrenador especializado FPF",
  ],
  "femenino": [
    "Entrenamiento técnico y táctico",
    "Ambiente inclusivo y respetuoso",
    "Torneos femeninos de Lima",
    "Grupos máx. 15 jugadoras",
    "Entrenador certificado FPF",
  ],
};

const POPULAR = "futbol-base";

const PAGOS = [
  { label: "Yape", color: "#6b21a8" },
  { label: "Plin", color: "#0ea5e9" },
  { label: "Efectivo", color: "#16a34a" },
  { label: "Transferencia", color: "#1a237e" },
];

export function PricingGrid() {
  return (
    <div>
      {/* Badges de pago */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem", alignItems: "center" }}>
        <span style={{ color: "#5a6a8a", fontSize: "0.85rem", fontWeight: 600, marginRight: "0.25rem" }}>Pagamos con:</span>
        {PAGOS.map((p) => (
          <span key={p.label} style={{ backgroundColor: p.color, color: "#ffffff", padding: "4px 14px", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 700 }}>
            {p.label}
          </span>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1.5rem" }}>
        {CATEGORIAS.map((cat) => {
          const isPopular = cat.slug === POPULAR;
          return (
            <article
              key={cat.slug}
              style={{
                backgroundColor: "#ffffff",
                border: `2px solid ${isPopular ? "#1a237e" : "#e8ecf8"}`,
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: isPopular ? "0 8px 32px rgba(26,35,126,0.15)" : "0 2px 8px rgba(26,35,126,0.05)",
                display: "flex", flexDirection: "column",
                position: "relative",
                transform: isPopular ? "scale(1.02)" : "scale(1)",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(26,35,126,0.14)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = isPopular ? "0 8px 32px rgba(26,35,126,0.15)" : "0 2px 8px rgba(26,35,126,0.05)")}
            >
              {/* Badge popular */}
              {isPopular && (
                <div style={{ backgroundColor: "#1a237e", padding: "6px", textAlign: "center" }}>
                  <span style={{ color: "#ffffff", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                    ⭐ MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Badge matrícula */}
              <div style={{ backgroundColor: isPopular ? "#eef0ff" : "#f5f7fc", padding: "0.6rem 1.4rem", borderBottom: "1px solid #e8ecf8" }}>
                <span style={{ color: "#16a34a", fontSize: "0.75rem", fontWeight: 700 }}>✓ Matrícula gratis el primer mes</span>
              </div>

              <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.15rem", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.2rem", textTransform: "uppercase" }}>
                  {cat.nombre}
                </h2>
                <p style={{ color: "#8899bb", fontSize: "0.82rem", margin: "0 0 1.25rem" }}>{cat.edadTexto}</p>

                <div style={{ marginBottom: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--font-raleway)", fontSize: "2.4rem", fontWeight: 700, color: "#1a237e" }}>S/ {cat.precio}</span>
                  <span style={{ color: "#8899bb", fontSize: "0.82rem" }}>/mes</span>
                </div>

                <ul style={{ listStyle: "none", margin: "0 0 1.5rem", padding: 0, flex: 1, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {(FEATURES[cat.slug] ?? []).map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#4a5578", fontSize: "0.83rem" }}>
                      <Check size={14} style={{ color: "#1a237e", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/inscribete"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: isPopular ? "#1a237e" : "#eef0ff", color: isPopular ? "#ffffff" : "#1a237e", padding: "12px", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", minHeight: "48px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em", transition: "background-color 0.15s, color 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1a237e"; e.currentTarget.style.color = "#ffffff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = isPopular ? "#1a237e" : "#eef0ff"; e.currentTarget.style.color = isPopular ? "#ffffff" : "#1a237e"; }}
                >
                  INSCRIBIRME
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
