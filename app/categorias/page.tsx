import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CategoriasList } from "@/components/categorias/CategoriasList";

export const metadata: Metadata = buildMetadata({
  title: "Categorías | Academia de Fútbol San Martín Chorrillos",
  description: "Conoce todas las categorías de la Academia San Martín: Baby Fútbol, Fútbol Base, Juvenil, Adultos, Arqueros y Femenino. Inscripciones abiertas.",
  path: "/categorias",
});

export default function CategoriasPage() {
  return (
    <div style={{ backgroundColor: "#f5f7fc" }}>
      <section style={{ padding: "1.5rem 1.5rem 1.5rem", backgroundColor: "#0d1b4b", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem" }}>
            Nuestras Categorías
          </h1>
          <p style={{ color: "#c5cde8", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Desde los 3 años hasta adultos, con metodología certificada FPF para cada etapa.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <CategoriasList />
        </div>
      </section>
    </div>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" };
