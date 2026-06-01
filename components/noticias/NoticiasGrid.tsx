"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const CATEGORIAS_BLOG = ["Todos", "Torneos", "Logros", "Vacaciones Útiles", "Tips de Fútbol"] as const;
type CategoriaBlog = (typeof CATEGORIAS_BLOG)[number];

const ARTICULOS = [
  {
    slug: "edad-empezar-academia-futbol",
    titulo: "¿A qué edad pueden empezar los niños en una academia de fútbol?",
    resumen: "Muchos padres se preguntan cuándo es el momento ideal para que sus hijos comiencen en una academia. Te explicamos todo sobre el desarrollo infantil y el fútbol.",
    fecha: "15 Enero 2026",
    categoria: "Tips de Fútbol",
    imagen: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "vacaciones-utiles-2026-futbol-chorrillos",
    titulo: "Vacaciones útiles 2026: fútbol para niños en Chorrillos",
    resumen: "Este verano 2026 tu hijo puede aprender fútbol con los mejores coaches de Chorrillos. Inscripciones abiertas para todas las categorías.",
    fecha: "10 Enero 2026",
    categoria: "Vacaciones Útiles",
    imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "como-elegir-academia-futbol-lima",
    titulo: "Cómo elegir la mejor academia de fútbol para tu hijo en Lima",
    resumen: "Guía completa para padres: qué preguntar, qué observar y qué señales revelan si una academia es realmente profesional.",
    fecha: "5 Enero 2026",
    categoria: "Tips de Fútbol",
    imagen: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "beneficios-futbol-desarrollo-ninos",
    titulo: "Beneficios del fútbol en el desarrollo de los niños",
    resumen: "El fútbol va más allá del deporte. Descubre cómo la práctica regular mejora la disciplina, la concentración y las habilidades sociales de los más pequeños.",
    fecha: "28 Diciembre 2025",
    categoria: "Tips de Fútbol",
    imagen: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "metodologia-entrenamiento-san-martin",
    titulo: "Academia San Martín: nuestra metodología de entrenamiento por edades",
    resumen: "Conócenos por dentro: cómo estructuramos el entrenamiento según la edad del jugador y por qué nuestro enfoque marca la diferencia.",
    fecha: "20 Diciembre 2025",
    categoria: "Tips de Fútbol",
    imagen: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?auto=format&fit=crop&w=800&q=80",
  },
];

export function NoticiasGrid() {
  const [activeFilter, setActiveFilter] = useState<CategoriaBlog>("Todos");

  const filtered = activeFilter === "Todos"
    ? ARTICULOS
    : ARTICULOS.filter((a) => a.categoria === activeFilter);

  return (
    <div>
      {/* Filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
        {CATEGORIAS_BLOG.map((cat) => {
          const isActive = cat === activeFilter;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                backgroundColor: isActive ? "#1a237e" : "#ffffff",
                border: `1px solid ${isActive ? "#1a237e" : "#e2e8f0"}`,
                color: isActive ? "#ffffff" : "#64748b",
                padding: "7px 18px",
                borderRadius: "100px",
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                minHeight: "36px",
                transition: "border-color 0.15s, color 0.15s, background-color 0.15s",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {filtered.map((art) => (
          <article key={art.slug}>
            <Link
              href={`/noticias/${art.slug}`}
              style={{
                display: "block",
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderTop: "3px solid #1a237e",
                borderRadius: "8px",
                overflow: "hidden",
                textDecoration: "none",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,35,126,0.1)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  height: "200px",
                  backgroundImage: `url(${art.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label={art.titulo}
              />
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ backgroundColor: "#eef2ff", color: "#1a237e", padding: "2px 10px", borderRadius: "4px", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    {art.categoria}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#94a3b8", fontSize: "0.78rem" }}>
                    <Calendar size={12} aria-hidden="true" />
                    {art.fecha}
                  </span>
                </div>
                <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.1rem", fontWeight: 700, color: "#1e293b", margin: "0 0 0.6rem", lineHeight: 1.3, textTransform: "uppercase" }}>
                  {art.titulo}
                </h2>
                <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 1rem" }}>
                  {art.resumen}
                </p>
                <span style={{ color: "#1a237e", fontSize: "0.82rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                  Leer artículo <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: "#94a3b8", textAlign: "center", padding: "3rem 0" }}>
          No hay artículos en esta categoría todavía.
        </p>
      )}
    </div>
  );
}
