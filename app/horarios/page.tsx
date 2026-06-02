import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { HORARIOS } from "@/lib/schedule";

export const metadata: Metadata = buildMetadata({
  title: "Horarios | Academia de Fútbol San Martín Chorrillos",
  description: "Consulta los horarios de entrenamiento por categoría en Academia San Martín Chorrillos. Sábados y domingos desde las 4:30 PM.",
  path: "/horarios",
});

const DIAS_LABEL = "Sáb y Dom";

export default function HorariosPage() {
  const grupos = HORARIOS.reduce<Record<string, typeof HORARIOS>>((acc, h) => {
    if (!acc[h.categoria]) acc[h.categoria] = [];
    acc[h.categoria].push(h);
    return acc;
  }, {});

  return (
    <div style={{ backgroundColor: "#f5f7fc" }}>
      {/* Hero */}
      <section style={{ padding: "1.5rem 1.5rem 1.5rem", backgroundColor: "#0d1b4b", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem" }}>
            Horarios de Entrenamiento
          </h1>
          <p style={{ color: "#c5cde8", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Todos los entrenamientos son <strong style={{ color: "#ffffff" }}>sábados y domingos</strong> en nuestra sede de Chorrillos.
          </p>
        </div>
      </section>

      {/* Tabla principal */}
      <section style={{ padding: "3rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {Object.entries(grupos).map(([categoria, items]) => (
            <div
              key={categoria}
              style={{
                backgroundColor: "#ffffff",
                borderTop: "3px solid #1a237e",
                border: "1px solid #e2e8f0",
                borderTopWidth: "3px",
                borderTopColor: "#1a237e",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {/* Header categoría */}
              <div style={{ padding: "16px 24px", borderBottom: "1px solid #e2e8f0", backgroundColor: "#fafbff" }}>
                <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.1rem", fontWeight: 700, color: "#1a237e", margin: 0, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {categoria}
                </h2>
              </div>

              {/* Filas de horario */}
              {items.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                    padding: "16px 24px",
                    borderBottom: i < items.length - 1 ? "1px solid #f1f5f9" : "none",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1e293b", margin: "0 0 2px" }}>{h.edad}</p>
                    <p style={{ fontSize: "0.8rem", color: "#94a3b8", margin: 0 }}>{DIAS_LABEL}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Clock size={15} style={{ color: "#1a237e" }} aria-hidden="true" />
                    <span style={{ fontSize: "1rem", fontWeight: 700, color: "#1a237e", fontFamily: "var(--font-raleway)", letterSpacing: "0.03em" }}>
                      {h.hora}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Nota */}
          <p style={{ fontSize: "0.82rem", color: "#94a3b8", textAlign: "center", margin: "0.5rem 0 0" }}>
            * Los horarios pueden estar sujetos a cambios. Confirma al inscribirte.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <Link
              href="/inscribete"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#1a237e", color: "#ffffff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}
            >
              INSCRIBIRME AHORA <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/categorias"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#1a237e", border: "1px solid #e2e8f0", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}
            >
              VER CATEGORÍAS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
