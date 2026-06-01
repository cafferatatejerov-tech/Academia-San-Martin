import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { NoticiasGrid } from "@/components/noticias/NoticiasGrid";

export const metadata: Metadata = buildMetadata({
  title: "Noticias | Academia de Fútbol San Martín",
  description:
    "Blog de la Academia San Martín: consejos para padres, logros del equipo, tips de fútbol, vacaciones útiles en Chorrillos y más.",
  path: "/noticias",
});


export default function NoticiasPage() {
  return (
    <div style={{ backgroundColor: "#f5f7fc" }}>
      <section style={{ padding: "1.5rem 1.5rem 1.5rem", backgroundColor: "#0d1b4b", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem" }}>
            Noticias y Blog
          </h1>
          <p style={{ color: "#c5cde8", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Consejos para padres, logros del equipo, vacaciones útiles y todo sobre el mundo del fútbol formativo en Lima.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <NoticiasGrid />
        </div>
      </section>
    </div>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" };
